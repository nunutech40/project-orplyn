# Hosting Migration Without Losing SEO Signals

## Core Contract

Moving hosting must not change what users or crawlers see:

- keep the same final HTTPS domain;
- keep every path and query behavior unchanged;
- keep canonical URLs, metadata, schema, sitemap, and robots behavior unchanged;
- keep the same Google tag and Search Console verification;
- keep WhatsApp attribution parameters and landing pages working;
- keep the old origin online until DNS traffic has drained.

If those invariants hold, moving from the shared VPS to a dedicated VPS or container host is an infrastructure move without user-visible URL changes. No URL redirects or Search Console Change of Address are needed.

Google's current hosting-change guidance:

- `https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes`

## Before Cutover

1. Build or copy the exact production image for `linux/amd64`.
2. Copy `compose.production.yml`, `.env.production`, and the release scripts to the new host.
3. Use the same `NEXT_PUBLIC_SITE_URL`, indexing setting, Google IDs, and WhatsApp number.
4. Start the new origin behind HTTPS without changing public DNS yet.
5. Test every route, image, form, canonical, schema, sitemap, and robots response.
6. Verify the new origin with a temporary hostname kept `noindex`, or test the final hostname using a local DNS override such as `curl --resolve`.
7. Lower the final domain's DNS TTL to a few hours several days before cutover.
8. Preserve Search Console verification and analytics configuration.

## Cutover

1. Change only the final domain's DNS A/AAAA record to the new origin.
2. Do not redesign the site, rename paths, change titles, or change the domain during the same operation.
3. Keep both origins online while DNS propagates.
4. Monitor HTTP status, latency, logs, Search Console indexing, and lead events on both hosts.
5. Confirm Googlebot is not blocked by firewall or rate limiting.

## After Cutover

1. Run `verify-deployment.sh` against the final domain with indexing expected.
2. Confirm canonical and sitemap URLs still use the same final domain.
3. Confirm `robots.txt` allows crawling and pages do not contain `noindex`.
4. Send a real WhatsApp test lead and confirm its source, campaign, and Lead ID.
5. Keep the old origin available until its access logs show no meaningful traffic.
6. Retain the previous image and configuration for rollback.

## Rollback

If the new origin has errors, point DNS back to the old origin while it is still warm. The domain and URLs remain unchanged, so rollback does not require redirects.

## If The Domain Also Changes

A domain change is a different migration. Create a one-to-one permanent redirect from every old URL to the matching new URL, update canonicals/internal links/sitemaps, verify both properties, and use Search Console Change of Address. Keep permanent redirects for at least one year and preferably indefinitely.

Google's URL-change guidance:

- `https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes`
