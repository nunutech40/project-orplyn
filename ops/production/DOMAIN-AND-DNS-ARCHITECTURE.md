# Orplyn Domain And DNS Architecture

Last updated: 18 Juli 2026

Dokumen ini adalah sumber teknis utama untuk hubungan domain, Cloudflare, VPS, reverse proxy, dan container website Orplyn. Gunakan dokumen ini sebelum mengubah DNS, SSL, domain, atau lokasi hosting.

## Current Snapshot

| Item | Value | Role / status |
| --- | --- | --- |
| Final domain | `orplyn.id` | Identitas URL dan canonical permanen |
| Registrar | DomaiNesia | Tempat domain dibeli dan nameserver diatur |
| Cloudflare plan | Free | Authoritative DNS, reverse proxy, edge TLS, CDN, dan protection |
| Cloudflare nameserver 1 | `cleo.ns.cloudflare.com` | Sudah disimpan di DomaiNesia |
| Cloudflare nameserver 2 | `stella.ns.cloudflare.com` | Sudah disimpan di DomaiNesia |
| Delegation status | Pending propagation | Cloudflare belum menandai zone Active saat snapshot dibuat |
| Apex DNS record | `A @ -> 103.59.94.121` | Proxied / orange cloud |
| WWW DNS record | `CNAME www -> orplyn.id` | Proxied / orange cloud |
| Origin public IP | `103.59.94.121` | Shared VPS yang menjalankan Caddy dan Orplyn |
| Origin host path | `/opt/orplyn` | Compose, env, scripts, dan release Orplyn |
| Docker project | `orplyn-production` | Terpisah dari project Kohnu |
| App service | `orplyn-web:3000` | Hanya dapat diakses dari Docker edge network |
| Reverse proxy | Caddy milik shared VPS | Menerima host `orplyn.id` dan meneruskan ke Orplyn |
| Canonical URL | `https://orplyn.id` | Build final-domain sudah terpasang |
| Indexing status | Disabled | Prelaunch `noindex` di aplikasi dan Caddy |

Propagation evidence at 18 Juli 2026 15:51 WIB:

- DomaiNesia displayed `Changes Saved Successfully` for the Cloudflare nameserver pair.
- Cloudflare dashboard status was `Waiting for your registrar to propagate your new nameservers`.
- The `.id` registry authority still returned `nsx1.domainesia.com` and `nsx2.domainesia.com`.
- `cleo.ns.cloudflare.com` already answered `A orplyn.id -> 103.59.94.121`.
- `stella.ns.cloudflare.com` already answered `CNAME www.orplyn.id -> orplyn.id`.

This is a normal pending-delegation state: the Cloudflare zone is configured, while the registry update is still propagating.

## Istilah Sederhana

### Registrar

Registrar adalah tempat kepemilikan domain dikelola. Untuk Orplyn, registrarnya adalah DomaiNesia. Pembayaran/perpanjangan domain dan penggantian nameserver dilakukan di DomaiNesia.

DomaiNesia bukan host website Orplyn.

### Nameserver

Nameserver menentukan pihak yang berwenang menjawab pertanyaan DNS untuk domain. DomaiNesia mendelegasikan DNS `orplyn.id` ke:

- `cleo.ns.cloudflare.com`
- `stella.ns.cloudflare.com`

Setelah propagasi selesai, record DNS dikelola di Cloudflare, bukan di DNS Zone Manager DomaiNesia.

### Apex

`Apex`, `root domain`, dan `naked domain` dalam project ini berarti hal yang sama: domain tanpa subdomain.

- Apex: `orplyn.id`
- Bukan apex: `www.orplyn.id`
- Simbol apex di form DNS Cloudflare: `@`

Jadi record `A @ -> 103.59.94.121` berarti `orplyn.id` diarahkan ke origin VPS.

### Origin

Origin adalah server asli yang menjalankan website. Origin Orplyn saat ini adalah VPS `103.59.94.121`. Cloudflare bukan origin dan tidak menyimpan runtime utama aplikasi.

### Proxied / Orange Cloud

Saat record berstatus Proxied, request pengunjung melewati Cloudflare sebelum menuju VPS. DNS publik biasanya menampilkan IP Cloudflare, sementara Cloudflare menyimpan target origin `103.59.94.121` di dashboard.

Proxy Cloudflare bukan pengganti firewall atau hardening origin. IP VPS masih dapat diketahui dari hostname staging dan histori infrastruktur.

## Request Architecture

```text
Domain ownership and delegation

DomaiNesia registrar
  -> delegates orplyn.id to cleo/stella Cloudflare nameservers
  -> Cloudflare becomes authoritative DNS

Visitor request

Browser
  -> https://orplyn.id
  -> Cloudflare DNS + edge proxy + edge TLS
  -> origin 103.59.94.121 ports 80/443
  -> Caddy reverse proxy
  -> Docker network kohnu-production_edge
  -> orplyn-production-orplyn-web-1:3000
  -> vinext / React website
  -> WhatsApp brief CTA
```

Kohnu dan Orplyn berbagi Caddy serta edge network, tetapi source, Compose project, image, filesystem, lifecycle, dan resource limit tetap terpisah.

## Hostname Behavior

| Request | Expected behavior |
| --- | --- |
| `https://orplyn.id/...` | Dilayani oleh Orplyn |
| `https://www.orplyn.id/...` | Permanent redirect ke URL apex dengan path yang sama |
| `https://orplyn.103-59-94-121.nip.io/...` | Staging/diagnostic, tetap `noindex` |
| Direct port `103.59.94.121:3000` | Tidak tersedia dari internet |

`orplyn.id` dipilih sebagai satu-satunya canonical. Jangan menjalankan apex dan `www` sebagai dua versi website yang sama-sama indexable.

## DNS Records

Record web yang wajib dipertahankan di Cloudflare:

| Type | Name | Target / content | Proxy | TTL |
| --- | --- | --- | --- | --- |
| `A` | `@` | `103.59.94.121` | Proxied | Auto |
| `CNAME` | `www` | `orplyn.id` | Proxied | Auto |

Jangan membuat record `AAAA` sebelum origin benar-benar mempunyai IPv6 publik yang terkonfigurasi. Record email seperti MX, SPF, DKIM, dan DMARC hanya ditambahkan ketika Orplyn memakai email berbasis domain.

## TLS Architecture

TLS mempunyai dua koneksi terpisah:

```text
Browser -- HTTPS / Cloudflare edge certificate --> Cloudflare
Cloudflare -- HTTPS / valid origin certificate --> Caddy VPS
```

Target encryption mode Cloudflare adalah `Full (strict)`. Jangan memakai `Flexible`, karena koneksi Cloudflare ke origin menjadi HTTP dan dapat menyebabkan redirect loop serta menurunkan keamanan.

Caddy mengelola sertifikat origin untuk `orplyn.id` dan `www.orplyn.id`. Aktifkan Full (strict) hanya setelah sertifikat origin terbit dan koneksi langsung ke origin sudah diverifikasi.

## Current SEO Safety

Final-domain image sudah memakai:

- `NEXT_PUBLIC_SITE_URL=https://orplyn.id`;
- canonical `https://orplyn.id`;
- nomor WhatsApp nyata;
- `NEXT_PUBLIC_ALLOW_INDEXING=false`;
- page-level `noindex`;
- `robots.txt` dengan `Disallow: /`;
- Caddy `X-Robots-Tag: noindex, nofollow`.

Cloudflare activation tidak otomatis berarti website boleh di-index. Indexing baru dibuka setelah tracking, Search Console, mobile/desktop QA, CTA WhatsApp, lead log, dan admin flow lulus.

Saat launch publik:

1. Rebuild image dengan `NEXT_PUBLIC_ALLOW_INDEXING=true`.
2. Hapus `X-Robots-Tag` dari Caddy final-domain route.
3. Pastikan `robots.txt` mengizinkan crawl.
4. Verifikasi canonical, sitemap, schema, dan HTTPS.
5. Submit sitemap di Search Console.

## Origin Isolation And Security

- Orplyn tidak membuka host port sendiri.
- Hanya Caddy yang menerima traffic publik pada port 80/443.
- Container hanya bergabung ke proxy-facing edge network.
- Container berjalan sebagai user non-root dengan filesystem read-only.
- Semua Linux capability dibuang dan `no-new-privileges` aktif.
- Memory limit 256 MiB, CPU limit 0.5, PID limit 100.
- Funnel tidak mempunyai server-side form endpoint; Caddy hanya mengizinkan GET/HEAD.
- Docker logs dibatasi ukurannya.

## Moving To Another VPS Without Changing SEO

Cloudflare dan domain tetap dipertahankan. Yang berubah hanya target origin di record apex.

```text
Before: A @ -> 103.59.94.121
After:  A @ -> NEW_VPS_IP
```

Migration order:

1. Copy versioned Docker image, Compose, env, dan scripts ke VPS baru.
2. Jalankan Orplyn di belakang reverse proxy baru.
3. Gunakan canonical, path, metadata, schema, Google IDs, dan WhatsApp config yang sama.
4. Uji origin baru dengan hostname sementara `noindex` atau local DNS override.
5. Pastikan HTTPS origin valid.
6. Ubah hanya record `A @` di Cloudflare ke IP baru.
7. Biarkan `CNAME www -> orplyn.id` tetap sama.
8. Jalankan verification dan pantau traffic/log kedua origin.
9. Matikan VPS lama hanya setelah traffic berpindah.

Karena domain dan URL tidak berubah, perpindahan hosting tidak memerlukan Search Console Change of Address atau redirect antar-domain. Rollback cukup mengembalikan record A ke IP lama selama origin lama masih tersedia.

## Operations Checklist

Cloudflare after activation:

- zone status `Active`;
- apex and www records `Proxied`;
- SSL/TLS mode `Full (strict)` setelah origin certificate valid;
- Universal SSL certificate active;
- DNSSEC diaktifkan hanya setelah zone stabil dan DS record dipasang sesuai instruksi Cloudflare;
- jangan gunakan `Cache Everything` untuk HTML tanpa pengujian form, attribution, dan revalidation.

Verification commands:

```bash
dig +short NS orplyn.id
curl -I https://orplyn.id
curl -I https://www.orplyn.id
./ops/production/verify-deployment.sh https://orplyn.id false
ssh searchyourjob@103.59.94.121
cd /opt/orplyn
docker compose --env-file .env.production -f compose.production.yml ps
```

Saat record Proxied, hasil `dig A orplyn.id` menampilkan IP edge Cloudflare, bukan origin IP. Origin tetap dicatat di tabel Current Snapshot dan Cloudflare DNS dashboard.

## Change Discipline

Setiap perubahan domain atau hosting harus memperbarui dokumen ini dan `PROJECT-HANDOFF.md`. Jangan mengubah domain, canonical, redirect, DNS, dan struktur path bersamaan dengan redesign besar karena akan menyulitkan diagnosis SEO dan rollback.
