#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
ENV_FILE="${1:-$SCRIPT_DIR/.env.production}"
RELEASE="${2:-$(date -u +%Y%m%dT%H%M%SZ)-$(git -C "$REPO_ROOT" rev-parse --short HEAD)}"
OUTPUT_DIR="$SCRIPT_DIR/releases"

if [[ ! -f "$ENV_FILE" ]]; then
  printf 'Environment file not found: %s\n' "$ENV_FILE" >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

required=(
  NEXT_PUBLIC_SITE_URL
  NEXT_PUBLIC_ALLOW_INDEXING
  NEXT_PUBLIC_WHATSAPP_NUMBER
)

for key in "${required[@]}"; do
  if [[ -z "${!key:-}" ]]; then
    printf 'Required variable is empty: %s\n' "$key" >&2
    exit 1
  fi
done

if [[ "$NEXT_PUBLIC_SITE_URL" != https://* ]]; then
  printf 'NEXT_PUBLIC_SITE_URL must use HTTPS: %s\n' "$NEXT_PUBLIC_SITE_URL" >&2
  exit 1
fi

if [[ "$NEXT_PUBLIC_WHATSAPP_NUMBER" == "6280000000000" ]]; then
  printf 'Refusing to build with the WhatsApp placeholder.\n' >&2
  exit 1
fi

if [[ "$NEXT_PUBLIC_ALLOW_INDEXING" != "true" && "$NEXT_PUBLIC_ALLOW_INDEXING" != "false" ]]; then
  printf 'NEXT_PUBLIC_ALLOW_INDEXING must be true or false.\n' >&2
  exit 1
fi

if [[ ! "$NEXT_PUBLIC_WHATSAPP_NUMBER" =~ ^[0-9]{10,15}$ ]]; then
  printf 'NEXT_PUBLIC_WHATSAPP_NUMBER must contain 10-15 digits.\n' >&2
  exit 1
fi

if [[ "$NEXT_PUBLIC_ALLOW_INDEXING" == "true" ]] &&
  [[ "$NEXT_PUBLIC_SITE_URL" == *"nip.io"* || "$NEXT_PUBLIC_SITE_URL" == *"localhost"* ]]; then
  printf 'Refusing to index a staging or localhost hostname.\n' >&2
  exit 1
fi

IMAGE_REPOSITORY="${ORPLYN_IMAGE_REPOSITORY:-orplyn-web}"
IMAGE_REF="$IMAGE_REPOSITORY:$RELEASE"
ARCHIVE="$OUTPUT_DIR/orplyn-$RELEASE-linux-amd64.tar.gz"

mkdir -p "$OUTPUT_DIR"

docker buildx build \
  --platform linux/amd64 \
  --load \
  --build-arg "ORPLYN_RELEASE=$RELEASE" \
  --build-arg "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL" \
  --build-arg "NEXT_PUBLIC_ALLOW_INDEXING=$NEXT_PUBLIC_ALLOW_INDEXING" \
  --build-arg "NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER" \
  --build-arg "NEXT_PUBLIC_GOOGLE_TAG_ID=${NEXT_PUBLIC_GOOGLE_TAG_ID:-}" \
  --build-arg "NEXT_PUBLIC_GOOGLE_ADS_ID=${NEXT_PUBLIC_GOOGLE_ADS_ID:-}" \
  --build-arg "NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL=${NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL:-}" \
  --build-arg "GOOGLE_SITE_VERIFICATION=${GOOGLE_SITE_VERIFICATION:-}" \
  --tag "$IMAGE_REF" \
  "$REPO_ROOT/website"

docker image save "$IMAGE_REF" | gzip -9 > "$ARCHIVE"

if command -v sha256sum >/dev/null 2>&1; then
  checksum="$(sha256sum "$ARCHIVE" | awk '{print $1}')"
else
  checksum="$(shasum -a 256 "$ARCHIVE" | awk '{print $1}')"
fi
printf '%s  %s\n' "$checksum" "$(basename "$ARCHIVE")" > "$ARCHIVE.sha256"

printf 'ORPLYN_RELEASE=%s\n' "$RELEASE" > "$OUTPUT_DIR/latest-release.env"
printf 'ORPLYN_IMAGE=%s\n' "$IMAGE_REF" >> "$OUTPUT_DIR/latest-release.env"
printf 'ORPLYN_ARCHIVE=%s\n' "$ARCHIVE" >> "$OUTPUT_DIR/latest-release.env"

printf 'Built %s\nArchive: %s\n' "$IMAGE_REF" "$ARCHIVE"
