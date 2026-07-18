#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${ORPLYN_ENV_FILE:-$SCRIPT_DIR/.env.production}"
COMPOSE_FILE="${ORPLYN_COMPOSE_FILE:-$SCRIPT_DIR/compose.production.yml}"
BACKUP="${1:-}"

if [[ -z "$BACKUP" ]]; then
  BACKUP="$(ls -1t "$ENV_FILE".bak.* 2>/dev/null | head -n 1 || true)"
fi

if [[ -z "$BACKUP" || ! -f "$BACKUP" ]]; then
  printf 'No environment backup found.\n' >&2
  exit 1
fi

image_ref="$(awk -F= '$1=="ORPLYN_IMAGE" {print substr($0, index($0, "=") + 1)}' "$BACKUP")"
if [[ -z "$image_ref" ]] || ! docker image inspect "$image_ref" >/dev/null 2>&1; then
  printf 'Rollback image is unavailable: %s\n' "$image_ref" >&2
  exit 1
fi

cp "$ENV_FILE" "$ENV_FILE.before-rollback.$(date -u +%Y%m%dT%H%M%SZ)"
cp "$BACKUP" "$ENV_FILE"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d --remove-orphans
printf 'Rolled back to %s\n' "$image_ref"
