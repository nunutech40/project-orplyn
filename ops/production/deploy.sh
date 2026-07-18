#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${ORPLYN_ENV_FILE:-$SCRIPT_DIR/.env.production}"
COMPOSE_FILE="${ORPLYN_COMPOSE_FILE:-$SCRIPT_DIR/compose.production.yml}"
ARCHIVE="${1:-}"
IMAGE_REF="${2:-}"

if [[ -z "$ARCHIVE" || -z "$IMAGE_REF" ]]; then
  printf 'Usage: %s RELEASE_ARCHIVE IMAGE_REF\n' "$0" >&2
  exit 1
fi

if [[ ! -f "$ARCHIVE" ]]; then
  printf 'Release archive not found: %s\n' "$ARCHIVE" >&2
  exit 1
fi

if [[ ! -f "$ARCHIVE.sha256" ]]; then
  printf 'Release checksum file not found: %s.sha256\n' "$ARCHIVE" >&2
  exit 1
fi

expected_checksum="$(awk 'NR==1 {print $1}' "$ARCHIVE.sha256")"
if command -v sha256sum >/dev/null 2>&1; then
  actual_checksum="$(sha256sum "$ARCHIVE" | awk '{print $1}')"
else
  actual_checksum="$(shasum -a 256 "$ARCHIVE" | awk '{print $1}')"
fi
if [[ -z "$expected_checksum" || "$expected_checksum" != "$actual_checksum" ]]; then
  printf 'Release checksum mismatch: %s\n' "$ARCHIVE" >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" || ! -f "$COMPOSE_FILE" ]]; then
  printf 'Missing %s or %s\n' "$ENV_FILE" "$COMPOSE_FILE" >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

if [[ -z "${ORPLYN_EDGE_NETWORK:-}" ]]; then
  printf 'ORPLYN_EDGE_NETWORK is required.\n' >&2
  exit 1
fi

if ! docker network inspect "$ORPLYN_EDGE_NETWORK" >/dev/null 2>&1; then
  printf 'Proxy network does not exist: %s\n' "$ORPLYN_EDGE_NETWORK" >&2
  exit 1
fi

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup="$ENV_FILE.bak.$timestamp"
cp "$ENV_FILE" "$backup"

previous_image="${ORPLYN_IMAGE:-}"
docker image load --input "$ARCHIVE" >/dev/null
docker image inspect "$IMAGE_REF" >/dev/null

if grep -q '^ORPLYN_IMAGE=' "$ENV_FILE"; then
  sed -i.bak "s|^ORPLYN_IMAGE=.*|ORPLYN_IMAGE=$IMAGE_REF|" "$ENV_FILE"
else
  printf '\nORPLYN_IMAGE=%s\n' "$IMAGE_REF" >> "$ENV_FILE"
fi

release="${IMAGE_REF##*:}"
if grep -q '^ORPLYN_RELEASE=' "$ENV_FILE"; then
  sed -i.bak "s|^ORPLYN_RELEASE=.*|ORPLYN_RELEASE=$release|" "$ENV_FILE"
else
  printf 'ORPLYN_RELEASE=%s\n' "$release" >> "$ENV_FILE"
fi
rm -f "$ENV_FILE.bak"

# Values sourced before the file update take precedence over --env-file.
export ORPLYN_IMAGE="$IMAGE_REF"
export ORPLYN_RELEASE="$release"

docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" config --quiet
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d --remove-orphans

container_id="$(docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" ps -q orplyn-web)"

if [[ -n "$container_id" ]]; then
  for _ in $(seq 1 18); do
    health="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$container_id" 2>/dev/null || printf 'missing')"
    if [[ "$health" == "healthy" ]]; then
      printf 'Deployed %s successfully.\n' "$IMAGE_REF"
      exit 0
    fi
    if [[ "$health" == "unhealthy" || "$health" == "exited" || "$health" == "missing" ]]; then
      break
    fi
    sleep 5
  done
fi

printf 'Deployment did not become healthy. Restoring previous configuration.\n' >&2
cp "$backup" "$ENV_FILE"

if [[ -n "$previous_image" ]] && docker image inspect "$previous_image" >/dev/null 2>&1; then
  export ORPLYN_IMAGE="$previous_image"
  export ORPLYN_RELEASE="${previous_image##*:}"
  docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d --remove-orphans
else
  docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" down --remove-orphans
fi

docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" logs --tail=80 --no-color >&2
exit 1
