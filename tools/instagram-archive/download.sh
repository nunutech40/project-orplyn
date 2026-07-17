#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
IMAGE="ghcr.io/mikf/gallery-dl:v1.32.1"
PROFILE_URL="https://www.instagram.com/orplyn.id/"
RUNTIME="${INSTAGRAM_ARCHIVE_RUNTIME:-docker}"
PYTHON_BIN="${INSTAGRAM_ARCHIVE_PYTHON:-python3}"
RECENT=""
SINCE=""
COOKIE_FILE="${INSTAGRAM_COOKIE_FILE:-}"
DRY_RUN=0

usage() {
  printf '%s\n' \
    "Usage: $0 [--recent N] [--since YYYY-MM-DD] [--cookies FILE] [--dry-run] [--runtime docker|native] [--url URL]" \
    "" \
    "Examples:" \
    "  $0 --recent 12" \
    "  $0 --since 2026-01-01" \
    "  $0 --cookies tools/instagram-archive/secrets/instagram-cookies.txt" \
    "  $0"
}

while (($#)); do
  case "$1" in
    --recent)
      RECENT="${2:-}"
      shift 2
      ;;
    --since)
      SINCE="${2:-}"
      shift 2
      ;;
    --cookies)
      COOKIE_FILE="${2:-}"
      shift 2
      ;;
    --url)
      PROFILE_URL="${2:-}"
      shift 2
      ;;
    --runtime)
      RUNTIME="${2:-}"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      printf 'Unknown option: %s\n\n' "$1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [[ ! "$PROFILE_URL" =~ ^https://(www\.)?instagram\.com/[^/]+/?([?#].*)?$ ]]; then
  printf 'Only an Instagram profile URL is accepted: %s\n' "$PROFILE_URL" >&2
  exit 2
fi
if [[ "$RUNTIME" != "docker" && "$RUNTIME" != "native" ]]; then
  printf '%s\n' '--runtime must be docker or native' >&2
  exit 2
fi
if [[ "$RUNTIME" == "native" ]] && ! command -v gallery-dl >/dev/null 2>&1; then
  printf '%s\n' 'gallery-dl is required for --runtime native' >&2
  exit 2
fi
if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  printf 'Python executable not found: %s\n' "$PYTHON_BIN" >&2
  exit 2
fi
if [[ -n "$RECENT" && ! "$RECENT" =~ ^[1-9][0-9]*$ ]]; then
  printf '%s\n' '--recent must be a positive integer' >&2
  exit 2
fi
if [[ -n "$SINCE" && ! "$SINCE" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
  printf '%s\n' '--since must use YYYY-MM-DD' >&2
  exit 2
fi

PROFILE_PATH="${PROFILE_URL%%\?*}"
PROFILE_PATH="${PROFILE_PATH%%\#*}"
PROFILE_PATH="${PROFILE_PATH%/}"
HANDLE="${PROFILE_PATH##*/}"
SAFE_HANDLE="${HANDLE//[^A-Za-z0-9._-]/_}"

DOWNLOAD_ROOT="${PROJECT_ROOT}/assets/raw/instagram"
MEDIA_ROOT="${DOWNLOAD_ROOT}/${SAFE_HANDLE}"
STATE_DIR="${SCRIPT_DIR}/state"
CATALOG_DIR="${PROJECT_ROOT}/marketing/05-content/instagram"
DELIVERABLE_DIR="${PROJECT_ROOT}/deliverables/content"

mkdir -p "$DOWNLOAD_ROOT" "$STATE_DIR" "$CATALOG_DIR" "$DELIVERABLE_DIR"
: > "${STATE_DIR}/errors.txt"

DOCKER_ARGS=()
if [[ "$RUNTIME" == "docker" ]]; then
  DOCKER_ARGS=(
    run --rm
    --user "$(id -u):$(id -g)"
    --volume "${DOWNLOAD_ROOT}:/downloads"
    --volume "${STATE_DIR}:/state"
    --volume "${SCRIPT_DIR}/gallery-dl.conf:/config/gallery-dl.conf:ro"
  )
  CONFIG_PATH="/config/gallery-dl.conf"
  CACHE_PATH="/state/cache.sqlite3"
  ARCHIVE_PATH="/state/download-archive.sqlite3"
  LOG_PATH="/state/last-run.log"
  ERROR_PATH="/state/errors.txt"
else
  CONFIG_PATH="${SCRIPT_DIR}/gallery-dl.conf"
  CACHE_PATH="${STATE_DIR}/cache.sqlite3"
  ARCHIVE_PATH="${STATE_DIR}/download-archive.sqlite3"
  LOG_PATH="${STATE_DIR}/last-run.log"
  ERROR_PATH="${STATE_DIR}/errors.txt"
fi
GALLERY_ARGS=(
  --config-json "$CONFIG_PATH"
  --cache-file "$CACHE_PATH"
  --download-archive "$ARCHIVE_PATH"
  --write-log "$LOG_PATH"
  --write-metadata
  --no-colors
  --no-input
  --abort 12
)

if [[ -n "$COOKIE_FILE" ]]; then
  if [[ "$COOKIE_FILE" != /* ]]; then
    COOKIE_FILE="${PROJECT_ROOT}/${COOKIE_FILE}"
  fi
  if [[ ! -f "$COOKIE_FILE" ]]; then
    printf 'Cookie file not found: %s\n' "$COOKIE_FILE" >&2
    exit 2
  fi
  if [[ "$RUNTIME" == "docker" ]]; then
    DOCKER_ARGS+=(--volume "${COOKIE_FILE}:/secrets/instagram-cookies.txt:ro")
    GALLERY_ARGS+=(--cookies /secrets/instagram-cookies.txt)
  else
    GALLERY_ARGS+=(--cookies "$COOKIE_FILE")
  fi
fi
if [[ -n "$RECENT" ]]; then
  GALLERY_ARGS+=(--post-range "1-${RECENT}")
fi
if [[ -n "$SINCE" ]]; then
  GALLERY_ARGS+=(--date-after "$SINCE")
fi
if ((DRY_RUN)); then
  GALLERY_ARGS+=(--simulate --verbose)
else
  GALLERY_ARGS+=(--error-file "$ERROR_PATH")
fi
if [[ "$RUNTIME" == "native" ]]; then
  GALLERY_ARGS+=(
    -o "extractor.base-directory=${DOWNLOAD_ROOT}"
    -o "extractor.archive=${ARCHIVE_PATH}"
  )
fi

printf 'Instagram archive: @%s\n' "$HANDLE"
printf 'Destination: %s\n' "$MEDIA_ROOT"
printf 'Runtime: %s\n' "$RUNTIME"

set +e
if [[ "$RUNTIME" == "docker" ]]; then
  docker "${DOCKER_ARGS[@]}" "$IMAGE" "${GALLERY_ARGS[@]}" "$PROFILE_URL"
else
  gallery-dl "${GALLERY_ARGS[@]}" "$PROFILE_URL"
fi
DOWNLOAD_STATUS=$?
set -e

# gallery-dl uses status 4 for a clean simulation with no files written. Keep it
# as an error when an extractor actually logged a failure.
if ((DRY_RUN == 1 && DOWNLOAD_STATUS == 4)) && ! grep -q '\]\[error\]' "${STATE_DIR}/last-run.log"; then
  DOWNLOAD_STATUS=0
fi

# Instagram sometimes blocks its anonymous feed endpoint while the public
# profile snapshot remains available. Use that snapshot for the latest batch.
if ((DOWNLOAD_STATUS != 0)) && [[ -z "$COOKIE_FILE" ]] && \
  grep -Eq '401 Unauthorized|login required|NotFoundError|Requested user could not be found' \
    "${STATE_DIR}/last-run.log"; then
  printf '\nFeed endpoint blocked; trying the public-profile snapshot fallback.\n'
  if [[ "$RUNTIME" == "docker" ]]; then
    FALLBACK_ARGS=(
      run --rm
      --user "$(id -u):$(id -g)"
      --volume "${DOWNLOAD_ROOT}:/downloads"
      --volume "${STATE_DIR}:/state"
      --volume "${SCRIPT_DIR}/download_public_snapshot.py:/tool/download_public_snapshot.py:ro"
      --entrypoint python
      "$IMAGE"
      /tool/download_public_snapshot.py
      --profile-url "$PROFILE_URL"
      --download-root /downloads
      --state-dir /state
      --limit "${RECENT:-12}"
    )
  else
    FALLBACK_ARGS=(
      "$PYTHON_BIN"
      "${SCRIPT_DIR}/download_public_snapshot.py"
      --profile-url "$PROFILE_URL"
      --download-root "$DOWNLOAD_ROOT"
      --state-dir "$STATE_DIR"
      --limit "${RECENT:-12}"
    )
  fi
  if [[ -n "$SINCE" ]]; then
    FALLBACK_ARGS+=(--since "$SINCE")
  fi
  if ((DRY_RUN)); then
    FALLBACK_ARGS+=(--dry-run)
  fi

  set +e
  if [[ "$RUNTIME" == "docker" ]]; then
    docker "${FALLBACK_ARGS[@]}"
  else
    "${FALLBACK_ARGS[@]}"
  fi
  FALLBACK_STATUS=$?
  set -e
  if ((FALLBACK_STATUS == 0)); then
    DOWNLOAD_STATUS=0
    : > "${STATE_DIR}/errors.txt"
  fi
fi

if ((DRY_RUN == 0)); then
  "$PYTHON_BIN" "${SCRIPT_DIR}/build_catalog.py" \
    --media-root "$MEDIA_ROOT" \
    --catalog-csv "${CATALOG_DIR}/${SAFE_HANDLE}-catalog.csv" \
    --catalog-json "${CATALOG_DIR}/${SAFE_HANDLE}-catalog.json" \
    --review-csv "${CATALOG_DIR}/${SAFE_HANDLE}-content-selection.csv" \
    --initial-curation-json "${CATALOG_DIR}/${SAFE_HANDLE}-initial-curation.json" \
    --source-url "$PROFILE_URL"
  "$PYTHON_BIN" "${SCRIPT_DIR}/build_review_gallery.py" \
    --review-csv "${CATALOG_DIR}/${SAFE_HANDLE}-content-selection.csv" \
    --output "${DELIVERABLE_DIR}/Orplyn - Kurasi Aset Instagram.html" \
    --asset-prefix "../../assets/raw/instagram/${SAFE_HANDLE}"
fi

if ((DOWNLOAD_STATUS != 0)); then
  printf '\nInstagram returned an error. Existing downloads and catalog were kept.\n' >&2
  printf 'If the profile is visible in your browser, retry with an exported cookies.txt file.\n' >&2
  exit "$DOWNLOAD_STATUS"
fi
