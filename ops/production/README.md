# Orplyn Portable Production Deployment

Deployment ini sengaja terpisah dari source, Compose, database, dan lifecycle Kohnu. Artifact utamanya adalah image Docker versioned untuk `linux/amd64`.

## Host Layout

```text
/opt/orplyn/
  .env.production
  compose.production.yml
  deploy.sh
  install-caddy-route.sh
  rollback.sh
  verify-deployment.sh
  releases/
```

Current shared VPS:

- SSH: `searchyourjob@103.59.94.121`
- edge network: `kohnu-production_edge`
- staging hostname: `orplyn.103-59-94-121.nip.io`
- Caddy config: `/opt/kohnu/deploy/production/Caddyfile`

Final-domain preparation files:

- `final-domain.env.example` builds `https://orplyn.id` with indexing disabled.
- `Caddyfile.orplyn.final-prelaunch` serves apex plus the `www` redirect with a proxy-level `noindex` backstop.

Orplyn only joins the proxy-facing edge network. It must never join `kohnu-production_internal`, `kohnu-production_outbound`, or either Postgres network.

## Build A Release

Create a local environment file from `.env.example`, then run:

```bash
./ops/production/build-release.sh ops/production/.env.production
```

The command builds a `linux/amd64` image, exports a compressed release archive, and writes its SHA-256 checksum under `ops/production/releases/`.

Build-time safeguards reject:

- non-HTTPS canonical origins;
- the placeholder WhatsApp number;
- indexing on `localhost` or a `nip.io` staging hostname.

## Bootstrap A Host

1. Create `/opt/orplyn` owned by the deployment user.
2. Copy the production Compose, scripts, `.env.production`, and release archive.
3. Ensure the reverse proxy and Orplyn share an external edge network.
4. Add the Orplyn hostname to Caddy or Nginx.
5. Deploy the versioned image.

```bash
cd /opt/orplyn
./deploy.sh releases/orplyn-RELEASE-linux-amd64.tar.gz orplyn-web:RELEASE
```

The deploy script validates the artifact checksum and proxy network, saves the previous environment, loads the image, starts only the Orplyn project, waits for health, and restores the previous image configuration if health fails.

## Caddy Integration

Install the staging block with validation and automatic config restore:

```bash
./install-caddy-route.sh
```

Install the final-domain prelaunch route:

```bash
./install-caddy-route.sh \
  /opt/kohnu/deploy/production/Caddyfile \
  /opt/orplyn/Caddyfile.orplyn.final-prelaunch \
  kohnu-production-caddy-1
```

For a different host, pass the Caddyfile, snippet, and Caddy container explicitly. Manual validation and reload use:

```bash
docker exec kohnu-production-caddy-1 caddy validate --config /etc/caddy/Caddyfile
docker exec kohnu-production-caddy-1 caddy reload --config /etc/caddy/Caddyfile
```

Reloading Caddy does not restart Kohnu API, web, or Postgres.

## Verification

Staging:

```bash
./verify-deployment.sh https://orplyn.103-59-94-121.nip.io false
```

Final production:

```bash
./verify-deployment.sh https://example.com true
```

## Rollback

```bash
./rollback.sh
```

Rollback uses the newest saved environment backup and refuses to continue when the previous image is no longer available locally.

## Resource And Security Defaults

- no public host port;
- reverse-proxy network only;
- proxy allows only GET and HEAD for the client-side WhatsApp funnel;
- read-only root filesystem;
- non-root runtime user;
- all Linux capabilities dropped;
- `no-new-privileges`;
- 256 MiB memory limit;
- 0.5 CPU limit;
- 100 PID limit;
- bounded Docker logs;
- healthcheck and automatic restart.

## Moving To Another VPS Or Hosting Provider

See `MIGRATION-SEO.md`. When the final domain and paths stay unchanged, the application image and URL structure do not change. Prepare the new origin, test it, then update only DNS.
