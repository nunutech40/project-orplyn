# Orplyn Project Handoff

Last updated: 22 Juli 2026

Dokumen ini adalah single source of truth untuk melanjutkan project Orplyn dari chat, model, atau agent lain. Baca dokumen ini sebelum mengusulkan strategi baru atau mengubah website.

## 1. Executive Summary

Orplyn adalah apparel and print studio di Ciputat, Tangerang Selatan. Project ini dibuat untuk membantu bisnis mendapatkan sales, atau minimal menghasilkan lead berkualitas yang masuk ke WhatsApp sales.

Website bukan tujuan akhir. Website adalah bagian tengah funnel:

`Google / Maps / Instagram / AI search / Ads -> landing page -> proof -> brief -> WhatsApp -> qualification -> quotation -> sale`

Funnel web memiliki dua jalur order, tetapi acquisition aktif hanya berfokus pada event/komunitas. Domain utama menjelaskan kemampuan Orplyn yang lebih lengkap; LP Ads tetap event-only. Nomor WhatsApp nyata, MOQ, lead time normal, NAP, Lead ID, attribution, Google Ads tag, dan conversion lead-start sudah masuk ke website. Final domain, Cloudflare DNS, edge HTTPS, dan origin HTTPS sudah aktif; website tetap sengaja `noindex`. Karakter verbal sementara adalah tegas, keren, dapat dipercaya, dan membersamai, tanpa membuka izin untuk klaim deadline-risk atau outcome lain.

### Current status board

| Workstream | Status | Next gate |
| --- | --- | --- |
| Business identity and location | Verified | Keep NAP consistent |
| Commercial facts and offer | Main domain shows confirmed service breadth; event/manual remains featured acquisition offer; DTF/kaos polos and other services are supporting inbound capabilities | Owner approval for public event price anchor, capacity, and commercial outcome claims |
| Product differentiation | Owner evolution recorded as D-012: H-009 acquisition and H-008 retention are separated | Five event orders for E-12; repeat opportunities for E-11; no public claim before gate |
| Raw asset archive | Drive complete; latest Instagram batch complete | Confirm rights and archive 17 older IG posts if useful |
| Web funnel source | Release `orplyn-web:20260722T050533Z-8eae04a` is live; event Ads LP is direct-to-WhatsApp, proof-backed, and noindex; homepage/portfolio carry the approved provisional brand direction | Responsive manual QA and end-to-end lead test |
| Docker/OrbStack runtime | Local runtime healthy | Keep local checks passing |
| Shared VPS staging | Healthy; final-domain routes, edge TLS, and origin TLS active | Confirm Cloudflare Full (strict) mode |
| Technical SEO foundation | Prepared; final domain intentionally noindex | Indexing decision and Search Console |
| Google Business Profile | Access exists via `orplyn.id@gmail.com`; audit pending | Complete P0 rows and verify ownership/PIC |
| AI discovery foundation | Prepared | Public sources, reviews, and citations |
| Analytics and Ads conversion | Google Ads tag `AW-374076115` and WhatsApp lead-start conversion are live; Lead ID and attribution are implemented | Operate lead log and return qualified/converted outcomes; verify end-to-end data |
| Organic content system | Curated catalog, latest owner assets, contextual proof, publication contract, and provisional brand voice are available | Add stronger event/manual proof when available; keep rights/context explicit |
| External market intelligence | Competitor refresh and owner evolution response complete | Validate H-009/E-12 for acquisition and H-008/E-11 for retention separately |
| Owner research pack | Tahap 1, Tahap 2, and first customer survey filled | Resolve remaining unknowns and owner approval |
| Launch readiness checklist | Word checklist prepared | Assign PIC and complete evidence columns |
| Hermes marketing operations | Installed and smoke-tested | Add cookie secret only if full Instagram history is needed |
| Google Ads | Intentionally off; event-only campaign draft, setup runbook, final URL, negative seeds, and conversion env contract prepared | Account IDs, Tag Assistant verification, lead log operation, admin/economics gates, then one paused Search pilot |

## 2. Business Objective And Success Metrics

### North-star objective

Menghasilkan revenue dari customer baru yang datang melalui channel digital.

### Primary operational conversion

Qualified WhatsApp lead, yaitu calon customer yang setidaknya memiliki kebutuhan produk, jumlah, deadline, dan intent untuk meminta estimasi.

### Funnel metrics

Pantau urutan berikut, bukan hanya traffic:

1. Landing page sessions.
2. Valid brief submissions.
3. WhatsApp conversations started.
4. Qualified leads.
5. Quotations sent.
6. Orders won.
7. Revenue and gross profit.

Metric turunan:

- Landing-to-lead rate = valid leads / landing sessions.
- Qualification rate = qualified leads / WhatsApp conversations.
- Quote rate = quotations / qualified leads.
- Sale rate = orders won / quotations.
- Cost per qualified lead = ad spend / qualified leads.
- Customer acquisition cost = ad spend / orders won.
- ROAS = attributed revenue / ad spend.

Google Ads jangan dioptimalkan hanya untuk clicks atau page views.

## 3. Known Business Facts

- Brand publik: `ORPLYN KAOS POLOS DAN SABLON CUSTOM`.
- Deskripsi Instagram: `ORPLYN | Apparel & Print Studio`.
- Lokasi: Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419.
- Google Maps: `https://maps.app.goo.gl/CF2yTrHvkHe8d6cRA`.
- Instagram: `https://www.instagram.com/orplyn.id/`.
- Model penjualan: Orplyn melayani pesanan satuan dan grosir. Kaos polos dan DTF bisa 1 pcs; manual/plastisol, special ink, fullprint, totebag/merch, bordir/seragam, dan jersey punya MOQ berbeda.
- WhatsApp sales: `082317579311` / `6282317579311`, PIC Aulia.
- Admin aktif Senin-Sabtu 08:00-19:00; workshop/toko 08:00-17:00.
- Domain final: `orplyn.id`, dibeli 18 Juli 2026 melalui DomaiNesia. Registry `.id` dan resolver publik sudah mendelegasikan domain ke `cleo.ns.cloudflare.com` dan `stella.ns.cloudflare.com`. DNS aktif: proxied `A @ -> 103.59.94.121` dan `CNAME www -> orplyn.id`. Cloudflare Universal SSL dan origin TLS valid; public apex mengembalikan `200`, sedangkan `www` redirect permanen ke apex. Email bisnis dan akun utama: `orplyn.id@gmail.com`.
- Area layanan: seluruh Indonesia; customer boleh datang/pickup, janji disarankan tetapi tidak wajib.
- Pembayaran: transfer bank dan marketplace; DP 50%, pelunasan setelah produksi selesai dan sebelum barang dikirim.
- Data minimum untuk hitung harga: jenis produk, jumlah pesanan, ukuran, bahan, jenis sablon, dan desain.
- Arahan langsung owner pada 20 Juli 2026: sablon manual harus ditonjolkan dalam kata-kata offer untuk fokus event/komunitas. Arahan ini mengubah sudut copy, bukan menjadi bukti bahwa manual lebih unggul, lebih awet, lebih cepat, atau bergaransi.
- Segmen paling kuat dari input owner/admin: event/komunitas, vendor, sekolah/kampus, dan kantor/perusahaan.
- Target awal: 30-50 qualified lead/bulan, 10-20 customer baru/bulan, budget iklan percobaan Rp100 ribu-Rp700 ribu/bulan.
- Layanan yang terlihat dari sumber dan asset: kaos polos, sablon custom, DTF, sablon manual, plastisol, discharge, rubber, puff, high density, foil, glitter, bludru, fullprint, bordir, jersey, totebag, dan apparel lain.
- Asset mentah: 156 file, sekitar 606 MB, dalam 20 kategori di `assets/raw/google-drive/`.
- Arsip Instagram terbaru: 12 dari 29 post publik, 28 media file, sekitar 89 MB di `assets/raw/instagram/orplyn.id/`. Kurasi awal: 8 selected, 2 reserve, 2 hold; izin publikasi seluruhnya masih pending.
- Runtime Hermes memiliki skill `orplyn-marketing-ops` untuk update arsip publik, membaca status kurasi dan launch checklist, serta menyinkronkan snapshot project ke vault MyBusiness.
- Logo transparan tersedia dalam versi putih dan hitam di `assets/raw/google-drive/logo/`.

Data di atas boleh dipakai untuk strategi dan konfigurasi internal. Harga mulai, garansi/QC, kapasitas, testimoni, logo customer, dan case study tetap butuh approval eksplisit sebelum menjadi klaim publik karena checkbox persetujuan owner belum ditandai di formulir.

### External market evidence (observed, not owner facts)

- SERP snapshot 16 Juli 2026 tidak menemukan website first-party Orplyn pada four branded-query checks dan sample local-intent queries. Ini bukan market share atau Maps-rank measurement.
- Local competitors commonly lead with visible pricing, express service, tracking, reject guarantee, corporate proof, and single-to-mass production.
- Dinas Koperasi dan UMKM Tangerang Selatan's public EDC portal displayed 79.319 registered UMKM and 1.002 cooperatives. The count is dynamic and not all records are qualified prospects.
- External market analysis and sources: `marketing/07-market-research/market-landscape-2026-07-16.md`.
- Prioritized tests and stop rules: `marketing/07-market-research/growth-experiment-backlog.md`.

## 4. Unknowns And Launch Blockers

### P0, wajib sebelum traffic acquisition

Instruksi user 19 Juli 2026 menunda pekerjaan setup eksternal. Item di bawah tetap merupakan launch gate, tetapi bukan urutan kerja aktif sampai user mengaktifkannya kembali.

- Konfirmasi mode Cloudflare `Full (strict)` di dashboard. Nameserver, DNS apex/www, canonical final, Universal SSL, public edge HTTPS, dan HTTPS origin sudah selesai.
- WhatsApp nyata sudah dipasang; uji end-to-end sampai lead log masih wajib.
- Target maksimal first response dan SOP admin disepakati.
- Format quotation final dipilih: chat WhatsApp, PDF, spreadsheet, atau kombinasi.
- Search Console, Google tag/Analytics, dan Ads conversion disiapkan dengan ID nyata.
- Google Business Profile diaudit dan akses/PIC diverifikasi.
- Approval owner untuk klaim publik: harga mulai, MOQ, lead time, QC/garansi, review/testimoni, dan material visual.

### P1, wajib sebelum Ads dibesarkan

- Tier harga grosir detail.
- Produk/segmen dengan kapasitas paling aman.
- Paket/range harga untuk event, komunitas, DTF satuan, dan grosir.
- Omzet, order rata-rata, AOV, margin, dan CAC sehat.
- Bukti sosial yang sudah mendapat izin: review, testimoni, logo customer, repeat order.
- Baseline close rate dan average order value bila tersedia.

### P2, memperkuat optimasi

- Foto tim atau workshop yang boleh dipublikasikan.
- Before-after dari artwork ke hasil produksi.
- Kasus produksi dengan jumlah, tantangan, dan hasil.
- Daftar pertanyaan customer yang paling sering muncul.
- Data repeat customer dan musim permintaan.

Form owner/customer yang sudah terisi ada di `deliverables/owner-research/`. File `.md` di `marketing/00-brief/` adalah sumber kerja internal, bukan format yang diberikan kepada owner.

## 5. Positioning And Target Hypothesis

### Working positioning

Orplyn adalah jasa sablon kaos custom di Ciputat dengan fokus akuisisi pada kebutuhan event dan komunitas. Calon pembeli menyampaikan jumlah, desain, tanggal pakai, dan lokasi agar admin dapat mengecek pilihan produksi, MOQ, serta estimasi secara faktual.

Model satuan/test print dan produksi/batch tetap menjadi dua jalur intent, bukan dua brand terpisah. Event/community memimpin homepage, funnel, proof, content, dan campaign aktif. DTF/custom satuan serta kaos polos satuan/grosir tetap tersedia sebagai entry/inbound offer; bordir, jersey, clothing brand, special ink, fullprint, dan merchandise tetap capability sekunder.

### Why this positioning

- Lokasi jelas dan punya nilai untuk pencarian lokal.
- Asset menunjukkan variasi teknik produksi yang nyata.
- Calon pembeli biasanya mulai dari kebutuhan, jumlah, desain, dan deadline, bukan nama mesin atau proses teknis saja.
- Konsultasi teknik bisa menjadi pembeda ketika desain atau bahan belum final.

### Differentiation thesis, not yet a public claim

Live competitor research on 19 Juli 2026 confirmed that price, quality, speed, consultation, one-piece-to-batch range, workshop location, and technique breadth are category parity. The owner's evolution lens then narrowed the strategy: first-order acquisition concentrates on event/community and tests whether Orplyn can take on more of the buyer's deadline risk; `spec-first, repeat-ready production` is retained as a repeat-order mechanism, not the acquisition headline.

The rank-1 owner source is `marketing/07-market-research/owner-feedback-evolution-lens-2026-07-19.md`; the operational mapping is `owner-feedback-response-plan-2026-07-19.md`. Do not rewrite public channels around either direction yet. Validate H-009 with E-12 on five event orders before any deadline/H-1 claim, and validate H-008 with E-11 on actual repeat opportunities before any repeat-ease claim.

AI status contract: the research and owner-feedback response are complete, but differentiation validation is pending. H-009/E-12 and H-008/E-11 are hypotheses/experiments, not confirmed customer facts, current public capabilities, or permission to change website, GBP, WhatsApp, quotation, content, or Ads. D-012 is the active role split; the strategy document's front matter, `AI Reading Contract`, and Public-Claim Gate remain authoritative.

### Initial buyer segments

Urutan ini diperbarui dari form owner/admin dan satu survey customer awal. Tetap validasi dengan data lead/order 90 hari sebelum budget iklan dibesarkan:

1. Event dan komunitas: sering order, repeat, nilai tipikal Rp10 juta-Rp30 juta.
2. Vendor/reseller: repeat dan relevan untuk kaos custom serta sablon manual.
3. Sekolah/kampus dan kantor/perusahaan: potensi omzet/margin, cocok untuk seragam/event.
4. Pembeli satuan lokal: bisa menjadi entry offer, tetapi sering sensitif harga dan belum punya spesifikasi/desain jelas.
5. Clothing brand, tim olahraga, dan merchandise: layak diuji sebagai channel/offer spesifik.

This ranking describes known opportunity, not parallel campaign scope. Under D-012, active acquisition remains concentrated on event/community; other segments are deferred or served inbound until the event baseline is measured.

External market snapshot untuk outbound UMKM/corporate lokal dan partner channel tetap disimpan sebagai peluang tahap berikutnya. Signal ini belum membuktikan profitability atau urutan segment dan tidak mengubah konsentrasi event/community saat ini.

Jangan mengunci budget Ads besar berdasarkan urutan ini sebelum divalidasi dengan data lead, quote, order, margin, dan kapasitas.

## 6. Funnel Architecture

### Acquisition

- Google organic search untuk keyword lokal dan service intent.
- Google Business Profile dan Google Maps.
- Instagram organic content dan profile link.
- AI search/chat discovery melalui entity consistency, halaman yang indexable, schema, dan sumber publik yang kredibel.
- Google Search Ads setelah launch gate selesai.

### Consideration

Landing page harus membantu visitor menjawab:

- Orplyn bisa membuat apa?
- Apakah bisa satuan atau perlu batch?
- Berapa MOQ dan estimasi waktu normalnya?
- Apakah hasil produksinya nyata?
- Teknik apa yang mungkin cocok?
- Apakah lokasinya relevan?
- Bagaimana cara meminta estimasi?

### Conversion

Visitor mengisi brief singkat berisi:

- jalur satuan/test print atau produksi/batch;
- nama;
- kebutuhan/penggunaan;
- produk;
- perkiraan jumlah;
- target selesai;
- status desain;
- bahan/produk;
- lokasi kirim atau pickup.

Brief diberi Lead ID, source/campaign/click identifier, lalu dibentuk menjadi pesan WhatsApp agar admin tidak memulai percakapan dari nol.

### Sales follow-through

Admin melengkapi:

- ukuran dan varian;
- bahan;
- area cetak atau bordir;
- file desain;
- lokasi kirim atau pickup;
- budget bila relevan;
- keputusan dan next action.

SOP awal tersedia di `marketing/06-whatsapp-sales/wa-sales-flow.md`.

## 7. Website Current State

### Runtime

- Source: `website/`.
- Stack: vinext, React 19, TypeScript, Vite, Lucide.
- Local runtime: Docker/OrbStack, container `orplyn-web`, URL `http://localhost:3010`.
- Shared VPS staging: `https://orplyn.103-59-94-121.nip.io`.
- VPS path: `/opt/orplyn`; container `orplyn-production-orplyn-web-1`.
- Deployed release: `20260719T082000Z-3890f1b`, built with canonical `https://orplyn.id` and indexing disabled.
- Reverse proxy: existing Caddy, connected only through `kohnu-production_edge`; Orplyn exposes no host port.
- Runtime guardrails: Caddy allows only GET/HEAD, non-root user, read-only filesystem, all capabilities dropped, 256 MiB memory, 0.5 CPU, 100 PID, bounded logs, healthcheck, and automatic restart.
- Staging is protected by application `noindex`, blocked `robots.txt`, and Caddy `X-Robots-Tag`.

### Routes

- `/` - main lead funnel dan local intent page.
- `/layanan/sablon-dtf-satuan` - DTF dan kaos custom mulai 1 pcs.
- `/layanan/kaos-event-komunitas` - kebutuhan kelompok dan event.
- `/lp/kaos-event-komunitas` - campaign landing lokal untuk future Google Ads; navigasi minim, satu CTA primer, dan selalu `noindex` agar tidak bersaing dengan halaman SEO.
- `/layanan/produksi-clothing-brand` - clothing brand dan special print.
- `/layanan/bordir-seragam` - bordir dan seragam.
- `/layanan/jersey-custom` - jersey tim dan komunitas.
- `/layanan/totebag-merchandise` - merchandise dan goodiebag.
- `/layanan/kaos-polos` - kaos polos dan basis produksi.
- `/portfolio` - bukti hasil produksi.
- `/kontak` - Maps, Instagram, dan brief form.
- `/kebijakan-privasi` - penggunaan data brief dan attribution.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` - crawler discovery.

### Conversion behavior

- Kandidat lokal memakai `website/app/components/WhatsAppQuickStart.tsx` sebagai jalur utama. CTA event/batch dan satuan langsung membuka WhatsApp Aulia dengan template yang dapat diedit.
- `/lp/kaos-event-komunitas` hanya memakai template event/batch dan label aksi `Minta estimasi`; full navigation, jalur satuan, related services, dan form panjang tidak dirender pada route tersebut.
- Quick-start membuat Lead ID, mempertahankan UTM/landing page/GCLID/GBRAID/WBRAID, dan memicu event teknis `whatsapp_quick_start` serta `whatsapp_open`. Klik tidak dianggap qualified lead.
- Form lengkap di `website/app/components/QuoteBuilder.tsx` tetap tersedia sebagai opsi sekunder pada `/kontak#quote`; form tidak lagi menghalangi CTA utama homepage atau service pages.
- Nomor placeholder bawaan: `6280000000000`.
- Nomor owner/admin yang dipakai pada build lokal: `6282317579311`.
- Jika placeholder masih aktif, form menampilkan status dan tidak membuka nomor palsu.
- Form membatasi produk/jumlah berdasarkan jalur dan MOQ owner.
- Form membuat Lead ID dan membaca UTM, landing page, `gclid`, `gbraid`, serta `wbraid`.
- Event teknis: `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`.
- Event Google Ads opsional adalah secondary `lead started`, bukan qualified lead.

### SEO and AI discovery already implemented

- Indonesian titles and meta descriptions.
- Canonical URL through environment configuration.
- Open Graph and X card metadata.
- Branded social card at `website/public/og.png`.
- `LocalBusiness`, `FAQPage`, and `Service` structured data.
- Local address, area served, Maps, and Instagram links.
- Service pages with indexable copy.
- Sitemap and robots.
- `llms.txt` as a machine-readable business summary.
- Staging/local `noindex` melalui `NEXT_PUBLIC_ALLOW_INDEXING=false`.

Important: `llms.txt` tidak menjamin sebuah AI akan merekomendasikan Orplyn. Public indexing, consistent NAP, reviews, citations, and useful content tetap lebih penting.

### Quality status

Latest local verification on 19 Juli 2026 after D-013:

- Atas arahan owner, local-only conversion candidate mengubah homepage, header, mobile sticky CTA, service pages, portfolio, footer, dan privacy CTA menjadi direct-to-WhatsApp. Hero lokal sekarang menjual kemudahan faktual: buyer tidak perlu memilih teknik sendiri, sementara event/community tetap jalur acquisition utama dan satuan tetap sekunder.
- Kandidat ini belum dipush atau dideploy. Public release `20260719T082000Z-3890f1b` tetap tidak berubah.
- Documentation audit consolidated active direction in `marketing/README.md`; old SERP/audit/research recommendations are explicitly historical when they conflict with D-012.
- Homepage, event landing, header navigation, metadata, schema, `llms.txt`, and WhatsApp intake are factual event-first; DTF/kaos polos remain secondary routes.
- Commercial-proof data model and reusable section are implemented on homepage, service pages, and portfolio. With zero publishable records, no proof placeholder renders publicly.
- The form puts use case and use date before production details, preselects event/community on relevant pages, includes `days_to_target` in technical event data, and keeps exact date in the WhatsApp message.
- Hero delivery uses the real Orplyn production image as a 1600px WebP (about 207 KB, down from the 442 KB JPEG source).
- `npm run lint`: zero errors, 13 existing/pattern image-element warnings.
- `npm run build`: passed.
- `node --test tests/rendered-html.test.mjs`: 7/7 passed, termasuk direct WhatsApp templates dan optional full-brief contact path.
- Local Docker rebuild passed; `orplyn-web` is healthy at `http://localhost:3010`. Homepage and event landing returned HTTP 200; canonical/noindex and proof gating remain intact.
- Release `orplyn-web:20260719T082000Z-3890f1b` deployed successfully to `/opt/orplyn`. All deployment routes returned HTTP 200, canonical matched `https://orplyn.id/`, intentional noindex remained active, and live HTML contained the event-first H1, selected event use case, date field, WebP hero, and no empty commercial-proof section.
- Public WebP returned 200 as `image/webp`, 212,134 bytes, and `CF-Cache-Status: HIT`. Orplyn, Kohnu API/web/Postgres, personal-brand containers, and 9Router remained up; `kohnu.com`, redirected `app.kohnu.com`, and the 9Router dashboard resolved to HTTP 200.
- In-app browser runtime was unavailable for this session, so responsive screenshot QA remains a manual gate and is not claimed complete.

Earlier verification history on 19 Juli 2026:

- `npm run lint`: zero errors, 9 image optimization warnings only.
- `npm run build`: passed.
- `node --test tests/rendered-html.test.mjs`: 6 tests passed.
- Docker image build: passed.
- Container health: healthy.
- Homepage, DTF landing, privacy, sitemap, robots, and `llms.txt`: HTTP 200.
- Runtime checks confirmed literal H1, real WhatsApp display, two order lanes, three primary offers, privacy link, and staging `noindex`.
- Portable `linux/amd64` release passed a local hardened-container test and checksum verification.
- Public staging verification passed all core routes, exact canonical URL, HTTPS, `robots.txt`, page-level `noindex`, and proxy-level `X-Robots-Tag`.
- Post-deploy checks: Orplyn healthy at about 58 MiB idle memory, no host port, about 905 MiB host memory available, and 23 GiB disk available.
- Kohnu API/web/Postgres remained healthy; `kohnu.com`, `app.kohnu.com`, and the 9Router dashboard still returned HTTP 200 after Caddy reload.
- Public scanners attempted fake Next server-action POSTs immediately after staging launch. The app has no server-side form endpoint, so Caddy now rejects all non-GET/HEAD methods with HTTP 405 before they reach Node.
- Final-domain prelaunch image passed canonical, WhatsApp, robots, and noindex checks. Caddy routes for `orplyn.id` plus permanent `www` redirect validated successfully before nameserver activation; Kohnu remained HTTP 200.
- Automated Playwright screenshots passed at `375x667`, `390x844`, and `1440x900`: hero copy and CTAs fit, the short-screen location no longer sits behind the fixed WhatsApp CTA, and the next section remains visible.
- Public release `orplyn-web:20260718T163017Z-d510d86` passed all route, canonical, HTTPS, robots, and intentional-noindex checks. Live HTML contains the revised H1, supporting copy, and CTA; the VPS container is healthy.
- Copy V2 introduces Orplyn in the dominant H1, makes event/community the first primary offer, keeps single-unit ordering visible, standardizes the primary CTA as `Minta estimasi`, and replaces internal `brief/jalur` language with customer-facing wording.
- Homepage repetition was reduced by removing the funnel-lanes and buyer-path blocks, moving production proof directly after the primary offers, and shortening ordering from five to four steps. Price ranges, reviews, and case studies remain gated by owner approval in M-06/M-07.
- Final visual QA passed at `375x667`, `390x844`, full-page mobile, and `1440x900`, plus the event landing hero and its form. The sticky mobile CTA is absent while the hero is visible and appears after the hero exits the viewport.
- Public release `orplyn-web:20260719T010341Z-a9d3528` passed all route, canonical, HTTPS, robots, and intentional-noindex checks. Live HTML contains the new brand H1, event-first offer order, and final form CTA; the VPS container is healthy.
- User-reported quote-form friction was reproduced from the deterministic `disabled` chain. Product and quantity selects now render without `disabled`, homepage/contact default to batch, and MOQ filtering still applies after product selection. Release `orplyn-web:20260719T013245Z-774f8fe` passed lint, build, six smoke tests, public deployment verification, and live HTML checks; the VPS container is healthy.

## 8. Environment Configuration

Template: `website/.env.example`.

Required:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ALLOW_INDEXING`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

Optional until tracking setup:

- `NEXT_PUBLIC_GOOGLE_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL`
- `GOOGLE_SITE_VERIFICATION`

`NEXT_PUBLIC_*` values are bundled at build time. Rebuild the Docker image after changing them.

Portable production files are in `ops/production/`. The versioned image archive, Compose contract, Caddy route installer, health-gated deploy, rollback, verification, and no-URL-change SEO migration runbook are independent of Kohnu source and Compose.

## 9. Technical Runbook

Start or rebuild:

```bash
cd website
docker compose up --build -d
```

Check status and logs:

```bash
cd website
docker compose ps
docker compose logs --tail=80 --no-color
```

Stop:

```bash
cd website
docker compose down
```

Local development:

```bash
cd website
npm install
npm run dev
```

Verification:

```bash
cd website
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

Build and deploy a portable release:

```bash
./ops/production/build-release.sh ops/production/.env.production
scp ops/production/releases/orplyn-RELEASE-linux-amd64.tar.gz* searchyourjob@103.59.94.121:/opt/orplyn/releases/
ssh searchyourjob@103.59.94.121
cd /opt/orplyn
./deploy.sh releases/orplyn-RELEASE-linux-amd64.tar.gz orplyn-web:RELEASE
```

Full deployment and migration runbooks:

- `ops/production/README.md`
- `ops/production/DOMAIN-AND-DNS-ARCHITECTURE.md`
- `ops/production/MIGRATION-SEO.md`

## 10. Public Launch Roadmap

### Phase 0: Source website and commercial truth

Deliverables:

- Align active documentation and source website to event/community acquisition without publishing unverified outcome claims.
- Keep DTF satuan and kaos polos accessible as secondary entry/inbound offers rather than equal campaign priorities.
- Turn confirmed MOQ, lead time, payment, delivery, and pickup rules into website/WA-safe language.
- Prepare a data-driven commercial-proof area that renders only permissioned, verified records; collect the records separately from the owner.
- Create simple package/range-price options for customer qualification; publish only after owner approval.

Exit gate:

No major public claim is based on guessing, and owner has approved pricing/proof language that will appear publicly.

### Phase 1: Conversion-ready public website

Deliverables:

- Keep real WhatsApp number `6282317579311` configured.
- Connect owned domain and HTTPS.
- Perform mobile and desktop QA.
- Test every CTA and generated WhatsApp message.
- Add Google tag, Search Console verification, and Ads conversion.
- Define a lead log with source, qualification, quote, sale, and revenue.

Exit gate:

A test lead can travel from landing page to WhatsApp, be recorded, qualified, quoted, and marked won or lost.

### Phase 2: Local SEO and AI discoverability

Deliverables:

- Optimize Google Business Profile.
- Make NAP identical across website, Maps, Instagram, and directories.
- Add website URL, services, hours, WhatsApp, and current photos to GBP.
- Request legitimate customer reviews with service and location context.
- Submit sitemap and inspect indexing in Search Console.
- Expand pages only around verified services and real customer questions.

Exit gate:

Core pages are indexable, GBP is complete, and NAP is consistent.

### Phase 3: Organic content engine

Content pillars:

1. Real production results.
2. Technique education and close-up details.
3. Use-case solutions for event, brand, team, and organization.
4. Process, trust, and how to order.

Each post should have one useful next action, usually profile link or WhatsApp brief. Avoid posting only aesthetic montages without context, product, technique, location, or CTA.

Exit gate:

There is a repeatable publishing cadence and source tracking for profile or website traffic.

### Phase 4: Google Search Ads pilot

Start only after Phase 1 exit gate.

Recommended initial structure under D-012:

- One campaign only: `Search - Kaos Event/Komunitas - Ciputat/Tangsel`.
- DTF satuan, kaos polos, dan layanan lain remain inbound routes and must not become parallel campaigns until a later owner decision.

Landing mapping under D-014:

- Event Ads keywords -> `/lp/kaos-event-komunitas`.
- Event organic/local SEO -> `/layanan/kaos-event-komunitas`.
- Route lain tetap tersedia untuk organic/inbound traffic, bukan initial Ads destination.

Initial operating rules:

- Use high-intent Search first.
- Start with presence-only targeting in Ciputat/Tangerang Selatan. Expand to Jabodetabek only after owner-approved healthy CPA, higher budget, and available admin/production capacity.
- Build negative keyword list for jobs, tutorials, machines, ink supplies, templates, free designs, and unrelated DIY intent.
- Do not launch Performance Max before reliable conversion data and enough creative assets.
- Do not scale based on cheap clicks. Scale based on qualified leads and sales.
- Start with the owner/admin trial range Rp100 ribu-Rp700 ribu per month only after Phase 1 is passed, then scale only after margin, average order value, capacity, and acceptable acquisition cost are known.

### Phase 5: Optimization and scale

Weekly review:

- search terms;
- source and campaign;
- landing-to-lead rate;
- qualification rate;
- response time;
- quote rate;
- sale rate;
- revenue and margin;
- lost-lead reasons.

Use the data to adjust keyword, ad, landing copy, offer, proof, and admin SOP. Do not redesign the whole funnel after a handful of clicks.

## 11. Google Business Profile Direction

GBP is a core acquisition asset, not a secondary profile.

Runbook eksekusi ada di `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`. Checklist ringkas di bawah adalah arah strategis, bukan pengganti bukti selesai pada runbook.

Checklist:

- Confirm ownership and primary category.
- Use the same business name and address as the website.
- Add real phone or WhatsApp, hours, website, and service areas.
- Upload current product, workshop, process, and finished-result photos.
- Add verified services and descriptions.
- Publish periodic result or offer updates.
- Ask real customers for reviews without scripting false claims.
- Reply to reviews professionally.
- Track website and direction clicks with available reporting and UTM where applicable.

## 12. WhatsApp Sales Direction

### Response objective

Move from generic inquiry to quote-ready brief quickly without making the customer repeat information already sent by the website.

### Minimum qualification fields

- Product.
- Quantity.
- Design status and file.
- Material or desired result.
- Print or embroidery placement.
- Deadline.
- Delivery or pickup location.
- Budget range only when useful.

### Lead status recommendation

- New.
- Contacted.
- Qualified.
- Waiting for design or details.
- Quoted.
- Won.
- Lost.
- Follow-up later.

Capture lost reasons such as price, deadline, MOQ, slow response, out of area, or no reply. This is essential input for marketing optimization.

## 13. Content Asset Direction

Raw asset locations: `assets/raw/google-drive/` dan `assets/raw/instagram/orplyn.id/`.

Website-ready optimized images: `website/public/images/`.

Instagram curation:

- Visual review: `deliverables/content/Orplyn - Kurasi Aset Instagram.html`.
- Editorial selection: `marketing/05-content/instagram/orplyn.id-content-selection.csv`.
- Current batch: 8 selected, 2 reserve, 2 hold.
- Do not move a selected asset into the public website or Ads until `rights_checked` is confirmed and technique labels are verified.

Brand logo sources:

- `assets/raw/google-drive/logo/LOGO ORPLYN.png` - versi putih untuk background gelap.
- `assets/raw/google-drive/logo/LOGO ORPLYN HITAM.png` - versi hitam untuk background terang.
- Kedua source memakai lockup vertikal lengkap dengan monogram, wordmark, dan tagline. Jangan mengecilkan full lockup untuk navbar karena tagline tidak akan terbaca.
- Turunan yang dibutuhkan untuk website: monogram-only, horizontal navbar lockup, dan full footer lockup.
- Minta file vector asli seperti SVG, AI, EPS, atau PDF bila owner memilikinya sebelum membuat banyak turunan permanen.

Use priority:

1. Finished product in clear framing.
2. Close-up print or embroidery texture.
3. Production process that proves capability.
4. Product variation and color.
5. Packaging or completed batch when available.

Before using a raw asset:

- verify category and actual technique;
- avoid exposing customer-sensitive data;
- crop intentionally for the channel;
- compress for web;
- use descriptive SEO-friendly filenames and alt text;
- do not claim a technique if the image classification is uncertain.

## 14. Risks And Guardrails

- Wrong WhatsApp number wastes paid traffic and damages trust.
- Unverified price, MOQ, or lead time creates poor-quality leads and conflict with sales.
- Ads before conversion tracking produce spend without learning.
- Slow WhatsApp response can make a good campaign appear ineffective.
- Broad keywords can attract DIY, job seeker, machine, or supply searches.
- AI discovery cannot be solved only with schema or `llms.txt`; public reputation and consistent sources matter.
- Large raw media can make the site slow if copied directly.
- Technique names in asset folders may contain typos. Public copy should use normalized terms while preserving source records.

## 15. Decision Log

This section is chronological history, not a flat list of simultaneous instructions. Later decisions supersede earlier ones when they conflict; use `marketing/README.md`, the current status board, and Section 16 for active direction.

### 16 Juli 2026

- Chose a lead-generation funnel, not ecommerce checkout, because pricing depends on product, quantity, artwork, material, and deadline.
- Chose WhatsApp brief as primary conversion because the commercial process requires consultation.
- Chose use-case service pages to match buyer intent and future Search Ads groups.
- Chose local positioning around Ciputat and Tangerang Selatan based on the verified business location.
- Used real production media from the supplied Drive folders as proof.
- Did not publish unverified prices, MOQ, lead times, testimonials, or phone number.
- Centralized business and service content in `website/app/lib/site-data.ts`.
- Added environment-based domain, WhatsApp, Google tag, Ads conversion, and Search Console configuration.
- Added LocalBusiness, FAQPage, Service schema, sitemap, robots, and `llms.txt`.
- Added Docker/OrbStack production runtime on port 3010.
- Derived monogram and horizontal black/white logo variants from the official transparent PNG sources without redrawing the mark.
- Replaced the temporary text mark in the header and footer, added the official monogram favicon, and exposed it as the LocalBusiness schema logo.
- Recorded owner confirmation that Orplyn serves both single-unit and wholesale orders, without assuming product-level MOQ or price tiers.
- Added an owner discovery survey, customer/lost-lead survey, customer data template, and evidence-based findings register.
- Completed an external market snapshot covering discoverability, competitors, public price benchmarks, customer risks, segment opportunities, and current Google guidance.
- Created a growth experiment backlog so recommendations have gates, metrics, guardrails, and stop rules.
- Added local UMKM/corporate outbound and partnership as testable acquisition channels, without assuming they outperform inbound.
- Created owner-facing Word forms in `deliverables/owner-research/`: Tahap 1 for launch-critical facts, Tahap 2 for customer/economics/growth depth, and a separate customer/lost-lead interview form.
- Kept Markdown surveys as internal working sources; owner/customer-facing research is delivered as ordinary Word files that can be sent through WhatsApp or uploaded manually to Google Docs without a Drive plugin.
- Added a Docker-based incremental Instagram archive tool pinned to `gallery-dl` 1.32.1, with a public-profile fallback for the latest 12 posts and optional cookie mode for full history without storing a password.
- Archived 12 of 29 Instagram posts as 28 media files (about 89 MB), including captions and per-file metadata, then verified a zero-download incremental rerun.
- Curated the initial Instagram batch into 8 selected, 2 reserve, and 2 hold rows; all publication rights remain pending.
- Added a visual marketer catalog in `deliverables/content/Orplyn - Kurasi Aset Instagram.html` and preserved editorial decisions across downloader reruns.
- Created `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx` with P0/P1/P2 tasks, PIC, evidence, SEO/Search Console, Google tag, lead tracking, and Ads conversion readiness.
- Installed `orplyn-marketing-ops` into Hermes with native `gallery-dl` 1.32.1 and `ffmpeg`, a read-only parent source mount, narrowly scoped writable output mounts, and no Docker socket.
- Smoke-tested the active Hermes container: public incremental update found 12 posts and 28 existing media without duplication; content status, launch status, skill discovery, and project sync passed.
- Kept full-history Instagram access disabled until a Netscape `cookies.txt` file is deliberately added to the read-only Hermes secret mount; no password or cookie value is stored in the project or vault.
- Replaced old/empty owner-research Word forms with the filled 17 Juli 2026 versions and removed the temporary Word lock file.
- Moved owner/admin answers into `business-data/owner-answers.md`: WhatsApp `082317579311`, PIC Aulia, product MOQ/lead time, payment rules, segment priorities, growth targets, and customer voice C001.
- Kept price, proof, capacity, and QC language gated for owner approval because the filled forms did not mark the owner-approval checkbox.

### 18 Juli 2026

- Refreshed local competitor and official Google research in `marketing/07-market-research/offer-serp-refresh-2026-07-18.md`.
- Narrowed homepage positioning to sablon kaos custom and kaos polos in Ciputat, from 1 pcs to batch production.
- Reorganized acquisition into two order lanes and three primary offers: DTF/custom satuan, event/community batch, and kaos polos satuan/grosir.
- Added a dedicated `/layanan/sablon-dtf-satuan` page and kept bordir, jersey, clothing brand, and merchandise secondary.
- Published owner-confirmed MOQ and normal lead-time guidance on local staging without adding unapproved price ranges or quality claims.
- Rebuilt the WhatsApp brief with Lead ID, use case, product-aware quantity rules, deadline, location, UTM, landing page, GCLID, GBRAID, and WBRAID.
- Defined `whatsapp_brief_submit`, `generate_lead`, and `whatsapp_open` as technical events; Ads `lead started` remains secondary to qualified/converted lead.
- Added visible NAP/hours, unified schema naming, a privacy notice, and `NEXT_PUBLIC_ALLOW_INDEXING=false` for localhost/staging.
- Reduced the future Ads pilot to one Search campaign and one offer at launch because the owner trial budget is too small to split learning responsibly.
- Rebuilt Docker successfully; lint had zero errors, production build passed, 6 smoke tests passed, container was healthy, and six core routes returned HTTP 200.
- Audited the shared Kohnu VPS and accepted it for Orplyn V1 with strict isolation: separate `/opt/orplyn`, separate Compose project, no public app port, proxy-network-only access, and conservative resource limits.
- Added a portable `linux/amd64` release workflow with checksum, non-root/read-only runtime, health-gated deployment, automatic config rollback, Caddy validation/reload, and public route verification.
- Deployed noindex staging at `https://orplyn.103-59-94-121.nip.io`; verified HTTPS, canonical, robots, page/header noindex, real WhatsApp build value, resource limits, and unaffected Kohnu/9Router health.
- Documented future hosting migration around a stable final domain and unchanged URL paths. A hosting-only move changes DNS after the new origin is tested; a domain change requires one-to-one permanent redirects and a separate SEO migration process.
- Owner purchased `orplyn.id` through DomaiNesia. Public WHOIS showed the new registration, current `NSX1/NSX2.DOMAINESIA.COM` nameservers, and unsigned DNSSEC before Cloudflare onboarding.
- Cloudflare imported the intended proxied apex/www records and assigned `cleo.ns.cloudflare.com` plus `stella.ns.cloudflare.com`. Prepared and deployed a final-domain noindex image and Caddy apex/www routes before delegating nameservers.
- DomaiNesia saved the Cloudflare nameserver pair successfully. Added `ops/production/DOMAIN-AND-DNS-ARCHITECTURE.md` as the durable record for registrar, DNS, apex/www, Cloudflare proxy, origin IP, Caddy/Docker routing, TLS, noindex, and future hosting migration.
- Public registry and resolver `1.1.1.1` now delegate `orplyn.id` to Cloudflare. Caddy obtained valid Let's Encrypt certificates for apex and `www`; direct-origin HTTPS returns `200` on apex and permanent redirect from `www`.
- Cloudflare Universal SSL became active. Public apex returned `HTTP/2 200`, public `www` returned `HTTP/2 301` to the apex, and the complete deployment verification passed with indexing intentionally disabled.
- Completed a live SEO acquisition audit across source, public HTML, all 11 sitemap URLs, redirects, crawler access, metadata, schema, performance indicators, local intent, offer/proof, WhatsApp measurement, current SERP competitors, and official Google/OpenAI/Cloudflare guidance. Technical readiness is strong, but organic acquisition remains blocked by intentional noindex, missing Search Console/tag/lead log, pending GBP/entity work, and weak approved proof/price anchors. The durable audit is `marketing/02-seo-google/seo-acquisition-audit-2026-07-18.md`.
- Defined the review acquisition workstream in `marketing/02-seo-google/review-acquisition-plan-2026-07-18.md`: WhatsApp requests honest feedback and Google Business Profile is the primary public review destination. A live Maps snapshot also exposed P0 inconsistencies: GBP still shows phone `0811-9719-953`, `lynk.id/orplyn.id`, and Saturday hours `07.00-23.00`, while the current funnel uses phone `0823-1757-9311`, `orplyn.id`, and different admin/workshop hours. Added a policy-safe WhatsApp review template under `deliverables/launch-readiness/`, an owner-ready request for five representative orders under `deliverables/owner-research/`, and recorded that commercial photos should follow verified order/use-case priority, not likes alone.
- Consolidated every remaining human-only dependency into `deliverables/launch-readiness/Orplyn - Daftar Tugas Manual.txt`. The queue uses one active `NEXT` item at a time, separates owner/user/admin responsibilities, defines required evidence and done conditions, and sequences GBP/reviews, proof/offers, WhatsApp/lead log, Cloudflare/Search Console/GA4, QA/indexing, weekly operations, and the later Ads pilot. Current manual next action is M-01: confirm the conflicting GBP phone, website, hours, ownership, and real-world business name.
- Recorded external mobile feedback that the homepage first screen was too wordy and slower to explain the business than the structured service cards. Simplified the hero to the literal H1 `Jasa sablon kaos custom di Ciputat`, a two-sentence single/batch message, and the CTAs `Minta estimasi` plus `Lihat layanan`; detailed MOQ and production guidance remains below the hero. Fixed the short-screen location/WhatsApp overlap, verified three responsive viewports, and deployed the health-checked release `orplyn-web:20260718T163017Z-d510d86` to `https://orplyn.id` with indexing still disabled.

### 19 Juli 2026

- Completed a senior copy review against the sales and qualified-WhatsApp-lead objective. The audit found that the category was clear, but Orplyn was not dominant in the promise, single-unit demand appeared before the owner-confirmed higher-value event/community segment, process language repeated across sections, CTA labels were fragmented, and proof/price remained the main owner-dependent gaps.
- Rewrote the homepage hero to `Sablon & kaos custom di Orplyn`, retained the one-piece-to-batch range, placed event/community first, and changed the secondary action from generic service browsing to production proof.
- Removed duplicate funnel-lanes and buyer-path sections, moved proof directly after the three offers, rewrote `Kenapa Orplyn`, reduced ordering to four customer-facing steps, and kept secondary services available later in the page.
- Standardized CTA language as `Minta estimasi` across header, hero, service pages, portfolio, contact, and mobile sticky CTA. Reworked the form, privacy, service facts, headings, and portfolio labels to reduce internal jargon and clarify price/time expectations without publishing unapproved numbers.
- Added an intersection-aware mobile CTA that appears only after the hero, added regression coverage for the new H1, CTA language, and event-first offer order, and recorded O-010/O-011 plus D-009 in `business-data/findings-register.md`.
- Lint passed with zero errors and nine existing image warnings; production build and six rendered smoke tests passed. Responsive screenshots and the event landing/form passed visual QA. Deployed `orplyn-web:20260719T010341Z-a9d3528` to `https://orplyn.id`; full public verification passed with indexing intentionally disabled.
- Fixed the user-reported form dead end: product and quantity dropdowns were explicitly disabled behind hidden selection dependencies. Homepage/contact now start at `Produksi batch`, both dropdowns remain interactive, and invalid quantity/MOQ combinations are reset with an explanation. Added rendered regression assertions, recorded O-012/D-010, and deployed healthy release `orplyn-web:20260719T013245Z-774f8fe`; public verification passed with indexing still disabled.
- Refreshed product and differentiation research against customer C001, owner segment data, the current funnel, and live public offers from TKS Factory, Teespace, Rumah Sablon Cepat, Seragam Bangsa, Ciptaloka, Sablon Indonesia, and Merch Madness. Confirmed that Orplyn's current generic benefits are category parity rather than a defensible reason to buy.
- Chose `spec-first, repeat-ready production` as an internal product thesis for event/community PICs and repeat partners. Documented the JTBD, need map, parity table, claim ladder, minimum data model, concierge workflow, proof requirements, and validation plan in `marketing/07-market-research/differentiation-product-strategy-2026-07-19.md`; recorded O-013/O-014, H-008, and D-011. No aspirational claim was added to the live website.
- Hardened the differentiation handoff for future AI agents with parseable metadata, an interpretation contract, an explicit completion matrix, and a seven-part public-claim gate. The canonical status is `research_complete_validation_pending`: research/design are finished, while customer validation, operating proof, and permission to change public positioning are not.
- Received and responded to the rank-1 owner feedback `owner-feedback-evolution-lens-2026-07-19.md`. Its seven points now govern priority: top-of-funnel volume before funnel polish, one event/community segment, separate acquisition/retention mechanisms, pilot the buyer's deadline risk, and translate future copy into event status/H-1-risk language only after evidence.
- Recorded D-012 and evolved the previous D-011 interpretation. H-009/E-12 now test event deadline-risk handling as a possible first-order acquisition wedge; H-008/E-11 now test saved specifications only as a retention mechanism. Evidence from one experiment cannot validate the other.
- Added `owner-feedback-response-plan-2026-07-19.md` with role mapping, concrete execution order, deferred work, measurement fields, and claim gates; synchronized the market-research reading order, findings register, experiment backlog, and this handoff.
- At the owner-feedback response-plan checkpoint, no public channel was changed. The later D-013 implementation changed only factual website hierarchy/intake; `aman dari drama H-1`, `tepat waktu`, `no drama`, `slot aman`, repeat-ease, and similar outcomes remain prohibited hypotheses until the relevant pilot, proof, permission, owner approval, and Public-Claim Gate pass.
- Consolidated active strategy across `AGENTS.md`, the marketing router, project brief, funnel, SEO, AI-search, Ads, WhatsApp, content, manual queue, findings register, and this handoff. Historical research was retained but marked superseded where needed.
- Recorded D-013: factual event-first public architecture is allowed, while deadline-risk and repeat-ease outcomes remain gated. External account setup stays deferred.
- Rebuilt the homepage around one featured event/community offer, moved DTF single and kaos polos into supporting roles, updated the event landing and SEO/entity copy, and reordered intake around use case plus date.
- Added a commercial-proof publication contract, typed website data model, and reusable hidden-until-publishable section. No fake review, transaction, customer, quantity, or outcome was added.
- Updated the owner-facing proof request and manual queue. M-06 is now the only `NEXT`; M-01 through M-05 and M-11 through M-13 are `LATER` while setup is deferred.
- Added and visually inspected a 1600px WebP hero derived from the existing Orplyn production image. Local lint/build/render tests and Docker health passed.
- Deployed release `20260719T082000Z-3890f1b` to the existing isolated Orplyn stack. Public route/canonical/noindex verification passed, live event-first HTML and proof gating were confirmed, Cloudflare served the WebP from cache, and neighboring VPS services stayed healthy. Responsive screenshot QA remains pending because the in-app browser runtime was unavailable.
- Owner requested a local-first iteration before any push or deployment. Built a tracked direct-to-WhatsApp candidate with separate editable templates for event/batch and single orders, moved the long form to an optional contact-page path, and rewrote the hero around the verified buyer benefit of getting help choosing materials and techniques. No deadline-risk, quality, guarantee, testimonial, price, or capacity claim was added; public release remains unchanged pending owner approval.
- On `2026-07-19`, completed the read-and-map checkpoint for owner feedback `ORPLYN-OWNER-FEEDBACK-001`, `ORPLYN-OWNER-FEEDBACK-002`, `ORPLYN-OWNER-FEEDBACK-003`, and `ORPLYN-OWNER-FEEDBACK-004`. No website code, public copy, campaign, indexing, deployment, or publication was changed during this checkpoint.
- Integrated direction from feedback 001-004: event/community remains the sole acquisition focus; top-of-funnel volume precedes further funnel polish; deadline-risk handling is the H-009/E-12 acquisition hypothesis; saved specifications remain the H-008/E-11 retention hypothesis; the first paid channel is Google Search only after launch gates; SEO runs in parallel; Meta is deferred to later retargeting/proof roles; and all SEO/Ads pages remain under paths on the single canonical domain `orplyn.id`, not a separate domain or subdomain.
- Recorded the trust-bridge decision model from `ORPLYN-OWNER-FEEDBACK-004`: `p(beli) = p(kenal) x p(percaya) x p(mampu bayar) x ...`, while an offer is rejected when `Value(customer) < Cost + Risk + Effort`. Ads can buy more awareness/intent capture, but cannot substitute for verified trust; for cold paid traffic, event proof and risk reduction must be real, permissioned, and visible before spend begins.
- Classified verified/internal facts separately from hypotheses. Owner-reported facts include the event/community priority across frequency, revenue, margin, and repeat; the current 2-5 new chats/week baseline; the real WhatsApp/admin/domain; and the active single-domain infrastructure. They remain owner-reported rather than lead-log/audit-verified where noted. Assumptions requiring tests include representative buyer fear/status language, H-009/H-008 outcomes, benchmark CPC/CVR/ROI and derived CPA, a 10-30-click/day learning floor, exact Search-vs-Meta economics for Orplyn, conversion lift from a thicker trust bridge, and any SEO-ranking benefit attributed to subfolders.
- Found no direct conflict between feedback 001-004 and the AGENTS.md Non-Negotiable Rules because every feedback document explicitly preserves the Public-Claim Gate and forbids launching Ads now. Operational tensions remain open: feedback 001 prioritizes GBP/reviews and feedback 002 calls for parallel SEO, while the current AGENTS.md work order and latest user instruction defer external setup; feedback 002 narrows initial geo to Ciputat/Tangerang Selatan while older owner data names Jabodetabek as the three-month priority; its 10-30-click/day floor can exceed the owner trial budget of Rp100 ribu-Rp700 ribu/month; feedback 004 says GCLID capture is pending while current source/handoff records show capture hooks already exist but tag IDs, end-to-end verification, lead log, and offline conversion import do not. Current timing rules win, and the remaining items require reconciliation before campaign design rather than silent selection.
- Recorded a documentation sync gap: the requested repo files for feedback 002-004 were absent from `marketing/07-market-research/`. This checkpoint read their owner-authored repo-ready sources in Hermes (`Orplyn-Feedback-Channel-Strategy-Repo-Ready.md`, `Orplyn-Feedback-Domain-Architecture-Repo-Ready.md`, and `Orplyn-Feedback-Trust-Bridge-Repo-Ready.md`) and did not copy or publish them during the read-only strategy phase.
- Set the per-role follow-up order by event impact, without authorizing execution: product/content first gathers M-06 event records, context, redaction, and publication permission; designer/engineer then prepares a mobile-first contextual case structure plus lead-log/tracking requirements without invented proof; marketer validates the baseline and activates only gated event/community owned demand before proposing one Search pilot; copywriter maps factual proof to buyer risk/status language but keeps every outcome line internal until its claim gate passes. Non-event paid landing examples remain deferred under D-012.
- Reaffirmed both hard boundaries from feedback 001-004: no testimonial, customer, event count, on-time result, guarantee, price, capacity, or risk-reduction outcome becomes public without real evidence, permission, relevant pilot, operating rules, and owner-approved wording; Google Ads remains off until at minimum the event trust bridge, conversion tracking, lead log/offline outcome loop, offer, admin readiness, economics, and all AGENTS.md launch gates are ready.
- Recorded D-014: the single future Google Ads destination is `/lp/kaos-event-komunitas` on the canonical `orplyn.id` domain. The existing `/layanan/kaos-event-komunitas` remains the deep, navigable SEO page; the `/lp/` route is a campaign-canonical, permanently `noindex` conversion page with minimal chrome and one repeated primary action, `Minta estimasi` to tracked event WhatsApp. This prevents campaign message leakage without creating a separate domain/subdomain or competing organic page.
- Implemented D-014 locally only. The landing uses factual assistance with material, technique, MOQ, and schedule selection; it does not claim deadline safety, on-time performance, guarantee, customer count, price, capacity, or testimonial. Four distinct trust collections exist for on-time records, aggregate event counts, contextual portfolio, and testimonials, but each collection is empty and the component returns `null` until evidence, publication permission, owner approval, and `publishable` status all pass.
- Added the empty Google Sheets-ready `deliverables/launch-readiness/Orplyn - Lead Log.csv` plus `marketing/06-whatsapp-sales/lead-log-schema.md`, covering source/campaign, event date, qualified lead, quote, sale, revenue, gross profit, response time, lost reason, click identifiers, and offline conversion state. No fabricated lead row was added; owner/user must still select the operating platform/PIC and run real leads through it.
- Added `marketing/04-google-ads/search-event-campaign-draft-2026-07-19.md` with exact/phrase event intent, negative seeds, one theme per ad group, Manual CPC/Maximize Clicks direction, strict Ciputat/Tangerang Selatan geo, and a gated Jabodetabek expansion. No account, AW/G tag ID, billing, campaign, push, deployment, indexing, or ad activation occurred; Google Ads remains OFF.
- Final local verification for D-014 passed: `git diff --check` clean; lint 0 errors with 17 existing/new raw-image optimization warnings; production build successful; all 8 rendered smoke tests passed; Docker rebuilt `orplyn-web` healthy; `/`, `/layanan/kaos-event-komunitas`, and `/lp/kaos-event-komunitas` returned 200; Ads landing emitted self-canonical plus `noindex, follow`, exactly three repeated `Minta estimasi` WhatsApp links, no full navigation, no trust placeholder, and no prohibited deadline/guarantee/testimonial wording. Responsive screenshot QA remains pending because the browser runtime reported no available browser.

### 20 Juli 2026

- Recorded the latest direct owner direction as `ORPLYN-OWNER-DIRECTION-005` in `marketing/07-market-research/owner-direction-manual-printing-2026-07-20.md`: foreground sablon manual in the offer wording.
- Reconciled the direction with D-012 and D-014: event/community remains the sole acquisition segment; `/lp/kaos-event-komunitas` remains the Ads route; `/layanan/kaos-event-komunitas` remains the deep SEO route; DTF single and kaos polos remain secondary inbound offers.
- Owner then confirmed the manual scope: plastisol, rubber/pasta, discharge, high density, glow in the dark, glitter/foil, flocking/beludru, and superwhite. DTF remains a digital technique and a secondary inbound lane, not a manual-event headline.
- Owner confirmed manual MOQ and timing: 12 pcs for one color, 24 pcs for designs with more than one color, and a normal estimate of 3-7 working days depending on quantity and queue. Urgent orders must be checked against schedule, capacity, and work type; no priority or deadline outcome is promised.
- Implemented the resulting factual copy pass locally only: homepage, event SEO service page, and Ads landing now foreground manual printing for event/community; the tracked WhatsApp template identifies the manual-event need. The Ads route remains `/lp/kaos-event-komunitas` and stays `noindex`.
- Owner supplied an indicative manual-shirt range of Rp50.000-Rp90.000/pcs, dependent on technique, material, colors, placement, and quantity. It is recorded for qualification but deliberately not published pending explicit public-wording approval.
- The Public-Claim Gate remains fully active. No local copy claims that manual is better, more durable, faster, on-time, guaranteed, or otherwise superior. Capacity numbers, cutoff, QC/rework, proof publication, and public price approval remain open.
- Local verification after the manual copy pass: lint completed with 0 errors and 17 existing raw-image warnings; production build passed; all 8 rendered tests passed; Docker rebuilt and `orplyn-web` is healthy; the local Ads landing returned HTTP 200 with H1 `Sablon manual untuk kaos event & komunitas.` No push, deployment, indexing change, account setup, or Ads activation occurred.
- Owner then directed the team to use the supplied `assets/proof/` materials rather than leaving them as archive-only. The proof audit selected a Google review and Hari Kartini order as factual event/community evidence, plus a customer response beside a plastisol output as factual manual-technique evidence. Both are now rendered in the local homepage, event SEO service page, and `/lp/kaos-event-komunitas`; DTF is not mislabeled as manual, and neither proof carries a quantity, deadline, capacity, guarantee, or universal quality claim.
- Proof integration verification passed locally: lint had 0 errors, production build and all 8 rendered tests passed, `orplyn-web` is healthy, and the Ads landing HTML contains both selected proof cards plus their local image assets. No public deployment or Ads activation occurred.
- Before the next local review, the public derivative of the Hari Kartini Google-review screenshot was cropped to remove the reviewer display name while preserving the review text and product photo. The supplied original remains internal under `assets/proof/`; only the redacted derivative is web-referenced.
- Reworked proof presentation after local review found that fixed-height `object-fit: cover` cards cropped the evidence and made review text unreadable. Commercial proof images now use full-frame `contain`; a separate interactive proof slider presents all eight owner-authorized proof assets one at a time with next/previous controls, item indicators, full-size access, and factual source-context labels. It is available on the local homepage and event Ads landing. Lint stayed at 0 errors with 18 raw-image warnings; production build and 8 rendered tests passed. Browser-driven visual QA remains pending because no browser runtime is available.
- Read advisory Hermes feedback 006-009 from its index and recorded the response in `marketing/07-market-research/hermes-feedback-006-009-response-2026-07-20.md`. Implemented only gate-safe work: an event/manual process block on LP and event SEO page; LP workshop presence with NAP, hours, owner-confirmed visit/pickup, and Google Maps link; and proof placement correction. The LP now keeps only two immediately visible event/manual proof cards, while the full eight-item slider stays on the homepage as a cross-service archive.
- Constructive disagreements are explicit: filtering proof is accepted for human message-match, but the unverified claim that a cross-segment proof slider automatically harms Google Quality Score/CPC is rejected; D-015 requires manual to remain foregrounded, so the LP H1 combines need and method rather than removing manual; payment risk-reversal and lighter WhatsApp intake are deferred until owner approval/data. The Maps recommendation is implemented as a direct map link rather than an iframe because the verified short Maps URL is lighter and sufficient for verification.
- Geo and public price remain owner gates. Inbound can continue to serve Indonesia, while the existing paid pilot remains Ciputat/Tangerang Selatan unless owner explicitly selects national targeting or an expansion rule. The owner-question list now asks for that paid-geo decision, expansion metric, and approval of public Rp50.000-Rp90.000 manual-price wording. No Ads, deployment, indexing, tag, or public price activation occurred.
- Final local verification after Hermes response: lint 0 errors (18 existing raw-image warnings), production build passed, 8 rendered tests passed, Docker rebuilt successfully, and `http://localhost:3010/lp/kaos-event-komunitas` returned HTTP 200 with the revised need-plus-manual H1, craft-process block, and local workshop trust block. The off-segment proof slider identifier is absent from the LP.
- Normalized the owner-supplied production-photo archive for human/AI use without altering image pixels or publishing any new asset. Its former `assets/fotoproduksi/` path is now migrated into the canonical `assets/curated/production-orders/` and `assets/curated/process/manual/` lanes, with confirmed context, relevance, and per-asset public-claim boundaries in the canonical manifest.
- The new asset audit confirms three order photos have explicit event/panitia context, one is class/community context pending event confirmation, and all four contextual order photos currently documented are DTF or DTF combinations. They may support factual event/volume context after permission but are not evidence of manual printing. The eight manual-process images can substantiate the visible process only; they must not be linked to a named order, customer, deadline, quantity, quality outcome, or technique detail not confirmed by owner.
- Recorded owner clarification that many customer chats contain only design/order exchange rather than the event name. Such chat evidence is now classified `customer feedback - event context unknown` until a message or owner confirmation supplies the use-case context. It is not discarded, but it cannot be used to prove an event/community order in the Ads LP.
- Owner then confirmed permission to use the existing production-photo archive for website and advertising. The local Ads LP now renders three authorized contextual event/panitia portfolios (Perpisahan BKB PAUD Kartini, Hari Kartini PAUD/MI Bustanul Aulad, and panitia BAGANA) through the existing gated trust bridge, plus a factual manual squeegee-process photo in the craft section. The event portfolio captions retain their real DTF techniques; manual-process media is not falsely attached to a named order. The later request for one or two event/manual order examples is deferred and does not block the current local candidate.
- Replaced the three repeated primary CTA labels on the local Ads LP (hero, final section, and mobile sticky CTA) from `Minta estimasi sablon manual` to `Cek kebutuhan & minta estimasi`. This is a single, consistent direct-to-WhatsApp action that frames the verified consultation benefit before quotation; it does not add a second CTA, alter the WhatsApp template, or change tracking.
- Pushed release source commit `db247cd` (`feat: prepare event campaign landing`) to `origin/main` and deployed image `orplyn-web:20260720T120000Z-db247cd` to the isolated production stack on 20 July 2026. The health-gated VPS deployment completed with `healthy`; `https://orplyn.id` passed all core-route, canonical, and robots verification with indexing still set to `false`. The public Ads landing contains the revised CTA and remains `noindex`. No Google tag, Ads account/campaign, Google Business Profile, Search Console, or indexing setting was enabled.
- Read and responded to advisory `ORPLYN-HERMES-FEEDBACK-012` locally. The LP Ads only now uses a problem-first H1 candidate, a clear four-detail explanation, separated factual event-order versus plastisol-feedback proof, and four visible pre-chat FAQs. The SEO `/layanan/` route was intentionally untouched. The four-field form was deferred because #12 itself makes it an owner-approved experiment; no CTA points to a form that does not exist. The response and disagreements are recorded in `marketing/07-market-research/hermes-feedback-012-response-2026-07-20.md`; H1/form decisions are recorded in `questions-for-owner.md`. No push, deploy, indexing, tag, or Ads activity occurred.
- Direct owner instruction then replaced that advisory deferral: the local Ads LP now includes a four-field event brief immediately after the proof section. It collects only name plus city, quantity, event date, and design status in the browser, then opens WhatsApp Aulia with the completed brief, Lead ID, and attribution; it does not store personal data on the server or claim a quote, deadline, or outcome. The hero remains direct-to-WhatsApp, while the form serves buyers who want their first message structured. Headings and proof hierarchy were also made visibly more commercial. This remains local only; no push, deploy, indexing, tag, or Ads activation occurred.
- Owner immediately corrected the conversion decision after reviewing the local form: the first objective is chat volume, not pre-chat qualification. The four-field form and its browser validation were removed entirely. All event LP CTAs now open WhatsApp directly with a structured, editable template; Aulia collects missing detail inside the conversation. This removes an unnecessary cold-traffic hurdle while preserving Lead ID and attribution on the WhatsApp action. Local only; no push, deploy, indexing, tag, or Ads activation occurred.

### 21 Juli 2026

- Began Google Ads setup preparation after the user reactivated the workstream. Google Ads remains `OFF`: no account, billing, campaign, keyword, ad, tag ID, indexing, or activation was performed from the repo.
- Added Ads conversion support to direct WhatsApp quick-start CTAs. When `NEXT_PUBLIC_GOOGLE_TAG_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, and `NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL` are supplied and the site is rebuilt, each valid CTA click sends `whatsapp_open` plus a Google Ads `conversion` event using the Orplyn Lead ID as `transaction_id`. This remains a secondary technical signal, not the primary business conversion.
- Added `marketing/04-google-ads/google-ads-setup-runbook-2026-07-21.md` as the operational setup checklist for account settings, conversion action, env values, campaign skeleton, negative seeds, location targeting, and pre-launch verification. It preserves the event/community-only focus, `/lp/kaos-event-komunitas` final URL, `noindex` LP policy, Public-Claim Gate, and offline qualified/converted lead direction.
- Cleaned local LP copy that had introduced ungated outcome promises. Removed public wording equivalent to free rework and hour-based estimate promises; kept the CTA direct-to-WhatsApp as `Cek kebutuhan & minta estimasi`.
- Google Ads detected destination tag `AW-374076115` on `orplyn.id`. The user supplied the event snippet for `Mengirim formulir lead` with `send_to: AW-374076115/-KloCLqt6NMcENPlr7IB`; local and production env now use that label, and both WhatsApp CTA implementations send the matching conversion payload with `value: 1.0`, `currency: IDR`, and Orplyn Lead ID as `transaction_id`. This is still a secondary lead-start signal; campaigns remain OFF until final verification and launch gates pass.
- The Google Ads conversion payload is now live in production on image `orplyn-web:20260721T072430Z-0a03bbb`; the VPS container `orplyn-production-orplyn-web-1` returned `healthy`, and `https://orplyn.id/lp/kaos-event-komunitas` still returns HTTP 200 with intentional `noindex`. The base Google tag and conversion label are both present in the public build.
- Added a durable measurement framework to `marketing/04-google-ads/google-ads-web-bridge-2026-07-21.md`. Evaluation now follows impression -> click -> landing engagement -> CTA/WhatsApp open -> qualified lead -> quote -> sale -> revenue/profit. Scroll and time-on-page are diagnostic signals only, while budget decisions must use qualified lead, quote, sale, and profit data rather than WhatsApp clicks alone.

### 22 Juli 2026

- Domain utama diperbarui secara lokal mengikuti `ORPLYN-OWNER-DIRECTION-006`: capability line `Sablon manual • DTF • Kaos event • Polo • Hoodie • Jersey • Jaket • Konveksi • Apparel custom • Ciputat` kini tampil sebagai blok kemampuan produksi di homepage. Galeri hasil sablon diganti memakai katalog `website/public/catalog/` yang bersumber dari `assets/curated/`, dengan pemisahan order berkonteks, hasil teknik, produk, dan proses. LP Ads sengaja belum disentuh; pekerjaan ini belum dideploy.
- Koreksi interpretasi visual owner: tanda merah pada foto lama berarti foto tersebut diminta diganti. Homepage kini memakai pilihan hasil terbaru manual, DTF, kaos polos, totebag, dan proses; halaman `/portfolio` tetap memuat katalog lengkap 36 aset baru.
- Penggantian aset diperluas ke homepage, halaman kontak, dan gallery layanan yang memiliki aset pengganti terbaru. Aset lama masih dipertahankan hanya untuk kategori yang belum dikirimkan pengganti yang relevan, terutama bordir dan jersey; tidak diganti dengan foto yang salah kategori.
- Galeri homepage dan `/portfolio` direvisi dari masonry/crop ke kartu katalog seragam dengan frame 4:3, `object-fit: contain`, dan caption terpisah agar aset dengan rasio berbeda tetap terlihat utuh. Lint, build, dan 8 rendered tests lulus.
- Blok bukti komersial direvisi: bukti utama menjadi dua kartu katalog dengan media utuh dan konteks ringkas; arsip bukti menjadi viewer dua kolom desktop dan satu kolom mobile dengan screenshot utuh, caption, kontrol, dan tautan buka ukuran penuh. Tidak ada klaim atau bukti baru yang ditambahkan.
- Hierarki homepage diperjelas mengikuti arahan owner: hero domain utama sekarang memperkenalkan payung `Sablon manual, DTF, dan apparel custom`, menyebut kaos event, polo, hoodie, jersey, jaket, konveksi, dan apparel custom; section berikutnya merinci kemampuan, lalu event/komunitas tetap menjadi penawaran unggulan pertama. LP Ads tidak diubah.
- Copy bukti pelanggan diubah dari bahasa defensif/audit menjadi buyer-facing: `Hasil order & tanggapan pelanggan` dan `Lihat hasil yang sudah dikerjakan Orplyn`. Dua section bukti yang berulang di homepage digabung menjadi satu viewer berisi delapan bukti dengan thumbnail visual; komponen proof pada halaman layanan/portfolio memakai copy baru yang sama, tanpa mengubah isi bukti atau klaim.

- Synchronized the homepage's primary event/batch CTA with the Ads LP wording: `Cek kebutuhan & minta estimasi`. The canonical homepage remains intentionally more complete than the Ads LP, keeping the event offer, supporting single-order/kaos-polos offers, proof, process, FAQ, and full navigation; the Ads LP remains a concise event-only conversion surface.
- Verified the sync pass with lint (0 errors, existing image optimization warnings), production build, and all 8 rendered HTML tests passing. No deployment or Ads activation was performed in this pass.
- Curated the new owner-supplied hasil-sablon archive into the same canonical `assets/curated/` catalog instead of keeping a second process folder. `finished/manual/`, `finished/dtf/`, `products/kaos-polos/`, `products/totebag/`, and the merged `process/manual/` lane now have one AI-readable manifest; image pixels were not changed and Public-Claim boundaries remain explicit.
- Recorded direct owner direction `ORPLYN-OWNER-DIRECTION-006` in `marketing/07-market-research/owner-direction-service-capabilities-2026-07-22.md`: make the broader service capability visible on the main domain (`sablon manual`, `DTF`, `kaos event`, `polo`, `hoodie`, `jersey`, `jaket`, `konveksi`, `apparel custom`, `Ciputat`). This expands homepage/SEO explanation only; event/community remains the sole acquisition focus and the LP Ads message remains event-first.
- Menetapkan karakter verbal domain utama Orplyn: **tegas, keren, dapat dipercaya, dan membersamai**. Benang merah publiknya adalah `Sablon dan apparel custom. Dibuat untuk dipakai bersama.`; cerita dibangun dari konteks nyata acara, panitia, tim, komunitas, brand, dan kebutuhan personal pelanggan, bukan dari klaim besar tentang Orplyn sendiri.
- Homepage, portfolio, dan viewer bukti diperbarui mengikuti karakter tersebut. Hero kini menjelaskan apa yang dikerjakan Orplyn sekaligus maknanya bagi pemakai; section kemampuan, event, galeri, cara kerja, CTA, FAQ, lokasi, dan bukti memakai satu suara yang lebih tegas dan buyer-facing. Isi bukti, angka, hasil, dan izin publikasi tidak diubah atau ditambah.
- Pedoman AI-readable disimpan di `marketing/05-content/orplyn-brand-voice-2026-07-22.md`. Public-Claim Gate tetap berlaku: sejarah brand, jumlah pelanggan/event, outcome, ketepatan deadline, kualitas, dan kedekatan emosional tidak boleh dipublikasikan sebagai fakta tanpa evidence dan izin.
- Verifikasi copy/brand pass: lint 0 error (20 existing raw-image warnings), production build lulus, seluruh 8 rendered HTML tests lulus, dan `git diff --check` bersih. LP Ads tidak diubah dalam pass ini.
- Documentation sync completed for the provisional brand direction and current website state. Updated `AGENTS.md`, marketing router, project brief, funnel, SEO, AI discovery, asset inventory, market-research reading order, owner capability direction, and this handoff. Historical research/advisory files remain evidence only; they do not override the current main-domain-versus-Ads-LP split.
- Canonical interpretation after sync: the main domain may present Orplyn's full confirmed capability and character; event/community remains the only active acquisition segment; `/lp/kaos-event-komunitas` remains the sole Ads destination; Google Ads tag/lead-start conversion is live; Ads, indexing, Search Console, GBP completion, business-outcome measurement, and unsupported claims remain gated.
- Completed the final local route-level copy sync for the provisional brand direction. The shared SEO service template, contact page, header, footer, and event Ads LP now use the same tegas, buyer-facing, mendampingi voice. The main domain and `/layanan/` routes retain the full confirmed capability range; `/lp/kaos-event-komunitas` remains event/community-only, minimally navigable, direct-to-WhatsApp, excluded from the sitemap, and explicitly `noindex, follow`.
- Final verification after the route sync: lint 0 errors (20 existing raw-image optimization warnings), production build passed, all 8 rendered tests passed, `git diff --check` passed, Docker rebuilt successfully, and `orplyn-web` is healthy at `http://localhost:3010`. Homepage, portfolio, contact, all seven SEO service routes, the Ads LP, privacy, robots, and sitemap returned HTTP 200. Local/preview routes remain intentionally non-indexable through environment configuration; no public push, deployment, campaign activation, or indexing change occurred.
- Strengthened the local Ads LP trust bridge after owner review found that visitors should not need to leave the landing page to trust Orplyn. The LP now presents a self-contained evidence stack: three permissioned event-order records with context, six clearly labelled examples of manual-print results, four workshop-process images, the permissioned Hari Kartini review, and the permissioned plastisol customer response. Technique/process examples remain explicitly separate from event-order claims; no testimonial, outcome, deadline, or quality claim was invented.
- Replaced the procedural value heading `Kamu urus acaranya. Detail produksinya kita cek bersama.` with the more buyer-facing line `Kamu urus acaranya. Orplyn bantu wujudkan kaos yang akan dipakai bersama.` Supporting copy still carries the factual material, technique, MOQ, and schedule explanation. All proof media on the new LP gallery uses contained full-frame presentation instead of cropping.
- Verification after the LP proof expansion: lint 0 errors (22 raw-image optimization warnings), production build and all 8 rendered tests passed, `git diff --check` passed, Docker rebuilt healthy, and `http://localhost:3010/lp/kaos-event-komunitas` returned HTTP 200 with the complete evidence stack. This remains local only; no push, public deployment, indexing, or Ads activation occurred.
- User approved the complete local candidate for commit, push, and public deployment. Commit `8eae04a` (`feat: refresh brand site and campaign proof`) was pushed to `origin/main`; health-gated release `orplyn-web:20260722T050533Z-8eae04a` was built for `linux/amd64`, checksum-verified, uploaded to `/opt/orplyn/releases/`, and deployed successfully. The production container is healthy. Public verification passed for `https://orplyn.id` with `indexing=false`; homepage capability/brand copy, the expanded LP proof stack, canonical URL, real WhatsApp destination, and Google tag `AW-374076115` are present. Google Ads remains OFF.
- Direct owner feedback clarified two homepage communication details: the quick-contact strip must name the role as `LANGSUNG CHAT ADMIN (AULIA)`, and the official Instagram account must be visibly accessible. The homepage now adds `Instagram @orplyn.id` beside the production-results link in the hero, while the contact page refers to `Admin Aulia`. Instagram remains absent from the Ads LP so its single direct-to-WhatsApp conversion path is not diluted. Commit `afe36fd` (`feat: clarify admin contact and social link`) was pushed to `origin/main` and deployed as `orplyn-web:20260722T054152Z-afe36fd`; production is healthy, public verification passed with indexing still disabled, and both the Admin Aulia label and official Instagram link were confirmed in the rendered public homepage.
- Privacy update: the two event photos showing children (BKB PAUD Kartini and Hari Kartini Bustanul Aulad) now use face-blurred derivatives in homepage portfolio and Ads proof references. Original production assets remain unchanged and separate; local lint/build/rendered tests passed, and commit `5d06b9c` was deployed as `orplyn-web:20260722T072759Z-5d06b9c` with the production container healthy.
- Process-proof update: replaced the story-style squeegee asset with the clean workshop photo `13-process-manual-large-format-squeegee.jpeg` across the manual-process section, Ads process gallery, and portfolio data. The photo no longer carries screenshot UI or embedded story bars; the descriptive caption remains page text. Local lint, build, and rendered tests passed.
- **D-016 — factual brand architecture:** the active differentiator is now `workshop nyata di Legoso + direct Admin Aulia + visible manual craft + permissioned contextual work`. This supersedes treating `Dibuat untuk dipakai bersama` as a sufficient differentiator by itself; that line remains a supporting theme. The decision translates the provisional traits tegas, keren, trustable, membersamai, grassroots, and personal into four observable facts rather than additional adjectives.
- Implemented the D-016 candidate locally across the requested brand surfaces. Homepage now opens on a three-frame workshop-process hero, connects Legoso, Admin Aulia, screen/rakel/curing documentation, and a gated BAGANA order card; `/portfolio` leads with the three publishable contextual orders before the wider catalog; `/kontak` makes direct chat with Aulia the dominant path and keeps the detailed form optional; the Ads LP receives only short Legoso/Aulia copy cues while preserving its existing event focus, single primary WhatsApp CTA, proof structure, FAQ, tracking, and noindex behavior.
- Owner permission allows the existing Aulia/business/order material to be used, but it does not create missing evidence. Aulia is therefore represented by a designed initial and verified role, WhatsApp, and admin hours; no face photo, personal quotation, or emotional biography was fabricated. BAGANA remains one factual 1,000 pcs cotton-combed-24s/DTF panitia order in Jakarta, not a capacity, on-time, or manual-production claim. Visible manual craft is limited to documented screen, rakel, colour-layer, and curing stages; no `all techniques in-house` claim was added.
- Verified the canonical Google Maps destination behind the saved short link as `ORPLYN KAOS POLOS DAN SABLON CUSTOM`, Jl. Legoso Sel. II No.43, Pisangan/Ciputat Timur. This supports the existing NAP and Maps link only. No Google rating, review quotation, profile photo, or additional GBP claim was imported because those records could not be reliably inspected in the available runtime.
- Local D-016 verification passed: lint has 0 errors, production build passed, all 9 rendered HTML tests passed, `git diff --check` is clean, Docker rebuilt, and `/`, `/lp/kaos-event-komunitas`, `/portfolio`, and `/kontak` return HTTP 200 at `http://localhost:3010`. Automated browser screenshot QA remains unavailable because the browser runtime exposed no browser; real-phone/manual visual review is still required. This candidate has not been committed, pushed, deployed, indexed, or used to activate Ads.
- Corrected the local D-016 hero after owner review identified an unintended black band above two process panels. The band was embedded in the original phone-screenshot files, not a content slot or layout spacer. Homepage now uses three clean workshop assets (`02-proses-sablon`, `14-process-manual-color-layer-application`, and `01-proses-sablon-meja-curing`); the contact-process frame also uses the clean colour-layer asset. Lint remains at 0 errors, production build and all 9 rendered tests pass, and the rebuilt local container is healthy.
- User approved D-016 for release. Commit `bd5a205` (`feat: strengthen Orplyn workshop brand story`) was pushed to `origin/main`; release `orplyn-web:20260722T062832Z-bd5a205` was built for `linux/amd64`, checksum-uploaded, and deployed to the shared VPS. The production container is healthy and public verification returned HTTP 200 for `/`, `/lp/kaos-event-komunitas`, `/portfolio`, and `/kontak`. Google Ads remains OFF and indexing remains disabled.

## 16. Immediate Next Actions

Latest public release is `orplyn-web:20260722T062832Z-bd5a205` and is healthy. Google Ads remains OFF and indexing remains disabled until the remaining launch gates are explicitly cleared.

Human-only tasks are tracked sequentially in `deliverables/launch-readiness/Orplyn - Daftar Tugas Manual.txt`. Keep exactly one item marked `NEXT`; current item is M-07, approval of public offer/price/capacity wording. M-06 is sufficient for the current factual website; stronger event/manual proof remains optional.

1. Review the live D-016 homepage, portfolio, contact, and event LP on a real phone; then run the end-to-end WhatsApp CTA test with Aulia.
2. Lint, production build, 9 rendered smoke tests, local/production container health, and four target-route checks are complete. Run responsive screenshot/manual QA when browser tooling is available.
3. Approve public price/range, capacity, cut-off, rush-order, QC/rework, quotation, and admin/production ownership through M-07/M-08. These rules are not permission to advertise a deadline promise.
4. Run M-09 and M-10: test both WhatsApp templates on a phone, then operate the prepared lead log through qualified, quote, sale/lost, revenue, gross profit, response time, and lost reason.
5. Complete GBP/NAP, Cloudflare `Full (strict)`, Search Console, GA4 if needed, indexing, and review acquisition. Do not reinstall the existing Google Ads tag.
6. Add stronger event/manual proof only when real permissioned evidence becomes available; do not delay the current factual website or invent the missing link.
7. Run E-08 for referrals from verified event/repeat customers and E-03 as focused event/community demand generation. Do not split focus across unrelated segments.
8. Route five eligible event orders into E-12 and decide `continue`, `iterate`, or `stop` for H-009; run E-11 only on a real repeat opportunity and decide H-008 separately.
9. Keep public deadline/H-1 and repeat-ease copy, broad multi-segment campaigns, custom portal/CRM, and unsupported funnel polish deferred until their relevant evidence and gates pass.
10. Only after launch, economics, admin, and Public-Claim Gates pass, test one approved event Search Ads offer without splitting the initial Rp100 ribu-Rp700 ribu/month budget.

## 17. Handoff Checklist For Every Future Session

Before work:

- Read `AGENTS.md` and this document.
- Check the newest user instruction.
- Inspect whether owner data or environment values changed.
- Check Docker and tests if touching the website.

After work:

- State what changed and why.
- Run relevant verification.
- Update Current State, blockers, roadmap status, and Decision Log.
- Preserve factual uncertainty instead of filling it with assumptions.
- Leave a clear next action tied to sales or measurement.
