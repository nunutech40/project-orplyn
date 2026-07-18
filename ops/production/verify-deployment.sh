#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${1:-}"
EXPECT_INDEXING="${2:-false}"

if [[ -z "$BASE_URL" || "$BASE_URL" != https://* ]]; then
  printf 'Usage: %s https://hostname [true|false]\n' "$0" >&2
  exit 1
fi

routes=(
  /
  /layanan/sablon-dtf-satuan
  /layanan/kaos-event-komunitas
  /layanan/kaos-polos
  /portfolio
  /kontak
  /kebijakan-privasi
  /robots.txt
  /sitemap.xml
)

for route in "${routes[@]}"; do
  status="$(curl --silent --show-error --location --output /dev/null --write-out '%{http_code}' "$BASE_URL$route")"
  if [[ "$status" != "200" ]]; then
    printf '%s returned HTTP %s\n' "$route" "$status" >&2
    exit 1
  fi
done

homepage="$(curl --silent --show-error "$BASE_URL/")"
robots="$(curl --silent --show-error "$BASE_URL/robots.txt")"

if [[ "$homepage" != *"rel=\"canonical\" href=\"$BASE_URL/\""* ]]; then
  printf 'Canonical URL does not match %s\n' "$BASE_URL" >&2
  exit 1
fi

if [[ "$EXPECT_INDEXING" == "true" ]]; then
  if [[ "$homepage" == *"noindex"* || "$robots" == *"Disallow: /"* ]]; then
    printf 'Production is unexpectedly blocked from indexing.\n' >&2
    exit 1
  fi
else
  if [[ "$homepage" != *"noindex"* || "$robots" != *"Disallow: /"* ]]; then
    printf 'Staging is not fully protected from indexing.\n' >&2
    exit 1
  fi
fi

printf 'Verified %s with indexing=%s\n' "$BASE_URL" "$EXPECT_INDEXING"
