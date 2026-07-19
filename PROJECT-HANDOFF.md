# Orplyn Project Handoff

Last updated: 19 Juli 2026

Dokumen ini adalah single source of truth untuk melanjutkan project Orplyn dari chat, model, atau agent lain. Baca dokumen ini sebelum mengusulkan strategi baru atau mengubah website.

## 1. Executive Summary

Orplyn adalah apparel and print studio di Ciputat, Tangerang Selatan. Project ini dibuat untuk membantu bisnis mendapatkan sales, atau minimal menghasilkan lead berkualitas yang masuk ke WhatsApp sales.

Website bukan tujuan akhir. Website adalah bagian tengah funnel:

`Google / Maps / Instagram / AI search / Ads -> landing page -> proof -> brief -> WhatsApp -> qualification -> quotation -> sale`

Funnel web memiliki dua jalur order, tetapi acquisition aktif hanya berfokus pada event/komunitas; DTF satuan dan kaos polos tetap tersedia sebagai entry/inbound offer sekunder. Nomor WhatsApp nyata, MOQ, lead time normal, NAP, Lead ID, dan attribution sudah masuk ke website. Final domain, Cloudflare DNS, edge HTTPS, dan origin HTTPS sudah aktif; website tetap sengaja `noindex`. Owner evolution lens 19 Juli 2026 memindahkan prioritas ke volume top-of-funnel event/komunitas, dan instruksi terbaru mengizinkan factual event-first website alignment tanpa membuka izin untuk klaim deadline-risk.

### Current status board

| Workstream | Status | Next gate |
| --- | --- | --- |
| Business identity and location | Verified | Keep NAP consistent |
| Commercial facts and offer | MOQ/lead time confirmed; event-first acquisition with DTF/kaos polos as secondary entry offers | M-06 verified proof, then owner approval for event price anchor and capacity |
| Product differentiation | Owner evolution recorded as D-012: H-009 acquisition and H-008 retention are separated | Five event orders for E-12; repeat opportunities for E-11; no public claim before gate |
| Raw asset archive | Drive complete; latest Instagram batch complete | Confirm rights and archive 17 older IG posts if useful |
| Web funnel source | Event-first release `20260719T082000Z-3890f1b` live at `https://orplyn.id` with intentional noindex | Responsive manual QA and end-to-end lead test |
| Docker/OrbStack runtime | Local runtime healthy | Keep local checks passing |
| Shared VPS staging | Healthy; final-domain routes, edge TLS, and origin TLS active | Confirm Cloudflare Full (strict) mode |
| Technical SEO foundation | Prepared; final domain intentionally noindex | Indexing decision and Search Console |
| Google Business Profile | Access exists via `orplyn.id@gmail.com`; audit pending | Complete P0 rows and verify ownership/PIC |
| AI discovery foundation | Prepared | Public sources, reviews, and citations |
| Analytics and Ads conversion | Lead ID, attribution, events, and checklist prepared | Lead log, real IDs, and offline conversion verification |
| Organic content system | Initial Instagram batch curated; commercial-proof publication contract and hidden-until-publishable component ready | Complete M-06 rights/context and build event/community proof first |
| External market intelligence | Competitor refresh and owner evolution response complete | Validate H-009/E-12 for acquisition and H-008/E-11 for retention separately |
| Owner research pack | Tahap 1, Tahap 2, and first customer survey filled | Resolve remaining unknowns and owner approval |
| Launch readiness checklist | Word checklist prepared | Assign PIC and complete evidence columns |
| Hermes marketing operations | Installed and smoke-tested | Add cookie secret only if full Instagram history is needed |
| Google Ads | Intentionally deferred | Pass Phase 1 launch gate |

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
- Search Console, Google tag/Analytics, dan Ads conversion disiapkan.
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
- Deployed image: `orplyn-web:20260719T013245Z-774f8fe` for `linux/amd64`, built with canonical `https://orplyn.id` and indexing disabled.
- Reverse proxy: existing Caddy, connected only through `kohnu-production_edge`; Orplyn exposes no host port.
- Runtime guardrails: Caddy allows only GET/HEAD, non-root user, read-only filesystem, all capabilities dropped, 256 MiB memory, 0.5 CPU, 100 PID, bounded logs, healthcheck, and automatic restart.
- Staging is protected by application `noindex`, blocked `robots.txt`, and Caddy `X-Robots-Tag`.

### Routes

- `/` - main lead funnel dan local intent page.
- `/layanan/sablon-dtf-satuan` - DTF dan kaos custom mulai 1 pcs.
- `/layanan/kaos-event-komunitas` - kebutuhan kelompok dan event.
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

- Form utama ada di `website/app/components/QuoteBuilder.tsx`.
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

- Documentation audit consolidated active direction in `marketing/README.md`; old SERP/audit/research recommendations are explicitly historical when they conflict with D-012.
- Homepage, event landing, header navigation, metadata, schema, `llms.txt`, and WhatsApp intake are factual event-first; DTF/kaos polos remain secondary routes.
- Commercial-proof data model and reusable section are implemented on homepage, service pages, and portfolio. With zero publishable records, no proof placeholder renders publicly.
- The form puts use case and use date before production details, preselects event/community on relevant pages, includes `days_to_target` in technical event data, and keeps exact date in the WhatsApp message.
- Hero delivery uses the real Orplyn production image as a 1600px WebP (about 207 KB, down from the 442 KB JPEG source).
- `npm run lint`: zero errors, 13 existing/pattern image-element warnings.
- `npm run build`: passed.
- `node --test tests/rendered-html.test.mjs`: 6/6 passed.
- Local Docker rebuild passed; `orplyn-web` is healthy at `http://localhost:3010`. Homepage and event landing returned HTTP 200, event use case is selected, canonical/noindex are intact, and the commercial-proof section is absent while data is empty.
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

- One campaign only: `Search - Kaos Event/Komunitas - Tangsel/Jaksel`.
- DTF satuan, kaos polos, dan layanan lain remain inbound routes and must not become parallel campaigns until a later owner decision.

Landing mapping:

- Event keywords -> `/layanan/kaos-event-komunitas`.
- Route lain tetap tersedia untuk organic/inbound traffic, bukan initial Ads destination.

Initial operating rules:

- Use high-intent Search first.
- Start with Jabodetabek while allowing broader shipping language only where relevant.
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

## 16. Immediate Next Actions

Latest user direction on 19 Juli 2026 supersedes the previous sequencing note that deferred all website work. Active sequence is: consolidate conflicting documentation, finish a factual event-first source website, verify it, and prepare a gated commercial-proof surface. External account setup remains paused.

Human-only tasks are tracked sequentially in `deliverables/launch-readiness/Orplyn - Daftar Tugas Manual.txt`. Keep exactly one item marked `NEXT`; current item is M-06, five representative event/community orders plus publication context and permission. M-01 through M-05 are intentionally `LATER` while external setup is deferred.

1. Finish the factual event-first homepage, event landing, WhatsApp intake, and gated commercial-proof component; keep DTF single and kaos polos accessible as secondary routes.
2. Run lint, production build, rendered smoke tests, local container health, core-route checks, and responsive manual QA when browser tooling is available.
3. Complete M-06 publication rights/context, then publish only verified event/community proof records. Do not attach deadline, bestseller, customer, quantity, or outcome claims without evidence and permission.
4. Run one manual CTA-to-WhatsApp test and create the minimum operational lead log. Capture source, segment, event date, qualified, quote, sale, revenue, gross profit, response time, and lost reason; verify the owner baseline of 2-5 chats/week from actual records.
5. Approve capacity, cut-off, rush-order, QC/rework, quotation, and admin/production ownership through M-07/M-08. These rules are required to accept event orders responsibly, not permission to advertise a deadline promise.
6. When the user resumes external setup, complete M-01 through M-05, Cloudflare `Full (strict)`, GBP/NAP, Search Console, Google tag, conversion verification, indexing, and review acquisition.
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
