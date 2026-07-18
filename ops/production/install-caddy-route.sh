#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CADDYFILE="${1:-/opt/kohnu/deploy/production/Caddyfile}"
SNIPPET="${2:-$SCRIPT_DIR/Caddyfile.orplyn.example}"
CADDY_CONTAINER="${3:-kohnu-production-caddy-1}"

if [[ ! -f "$SNIPPET" ]]; then
  printf 'Caddy snippet not found: %s\n' "$SNIPPET" >&2
  exit 1
fi

hostname="$(awk '$0 !~ /^[[:space:]]*#/ && $2 == "{" {print $1; exit}' "$SNIPPET")"
if [[ -z "$hostname" ]]; then
  printf 'No hostname block found in %s\n' "$SNIPPET" >&2
  exit 1
fi

backup=""
if sudo grep -Fq "$hostname {" "$CADDYFILE"; then
  printf 'Caddy route already exists for %s\n' "$hostname"

  if ! sudo grep -Fq '@nonReadMethod method POST PUT PATCH DELETE CONNECT TRACE OPTIONS' "$CADDYFILE"; then
    backup="$CADDYFILE.bak.$(date -u +%Y%m%dT%H%M%SZ)"
    temp_file="$(mktemp)"
    sudo cp "$CADDYFILE" "$backup"
    sudo awk '
      /^[[:space:]]*reverse_proxy orplyn-web:3000$/ {
        print "    @nonReadMethod method POST PUT PATCH DELETE CONNECT TRACE OPTIONS"
        print "    respond @nonReadMethod 405"
        print ""
      }
      { print }
    ' "$CADDYFILE" > "$temp_file"
    sudo cp "$temp_file" "$CADDYFILE"
    rm -f "$temp_file"

    if ! sudo grep -Fq '@nonReadMethod method POST PUT PATCH DELETE CONNECT TRACE OPTIONS' "$CADDYFILE"; then
      sudo cp "$backup" "$CADDYFILE"
      printf 'Existing Orplyn route could not be hardened; previous config restored.\n' >&2
      exit 1
    fi
  fi
else
  backup="$CADDYFILE.bak.$(date -u +%Y%m%dT%H%M%SZ)"
  sudo cp "$CADDYFILE" "$backup"
  printf '\n' | sudo tee -a "$CADDYFILE" >/dev/null
  sudo tee -a "$CADDYFILE" < "$SNIPPET" >/dev/null
fi

if ! docker exec "$CADDY_CONTAINER" caddy validate --config /etc/caddy/Caddyfile; then
  if [[ -n "$backup" ]]; then
    sudo cp "$backup" "$CADDYFILE"
  fi
  printf 'Caddy validation failed; previous config restored.\n' >&2
  exit 1
fi

if ! docker exec "$CADDY_CONTAINER" caddy reload --config /etc/caddy/Caddyfile; then
  if [[ -n "$backup" ]]; then
    sudo cp "$backup" "$CADDYFILE"
    docker exec "$CADDY_CONTAINER" caddy reload --config /etc/caddy/Caddyfile
  fi
  printf 'Caddy reload failed; previous config restored.\n' >&2
  exit 1
fi

printf 'Caddy route active for %s\n' "$hostname"
