# Orplyn Project Handoff

Last updated: 18 Juli 2026

Dokumen ini adalah single source of truth untuk melanjutkan project Orplyn dari chat, model, atau agent lain. Baca dokumen ini sebelum mengusulkan strategi baru atau mengubah website.

## 1. Executive Summary

Orplyn adalah apparel and print studio di Ciputat, Tangerang Selatan. Project ini dibuat untuk membantu bisnis mendapatkan sales, atau minimal menghasilkan lead berkualitas yang masuk ke WhatsApp sales.

Website bukan tujuan akhir. Website adalah bagian tengah funnel:

`Google / Maps / Instagram / AI search / Ads -> landing page -> proof -> brief -> WhatsApp -> qualification -> quotation -> sale`

Funnel web sudah direfokuskan pada dua jalur order dan tiga offer utama. Nomor WhatsApp nyata, MOQ, lead time normal, NAP, Lead ID, dan attribution sudah masuk ke website. Staging sengaja `noindex`; prioritas berikutnya adalah lead log operasional, domain, measurement, GBP, approval range harga/proof, lalu peluncuran acquisition bertahap.

### Current status board

| Workstream | Status | Next gate |
| --- | --- | --- |
| Business identity and location | Verified | Keep NAP consistent |
| Commercial facts and offer | MOQ/lead time confirmed; two lanes and three offers implemented | Owner approval for price anchors, proof, and capacity |
| Raw asset archive | Drive complete; latest Instagram batch complete | Confirm rights and archive 17 older IG posts if useful |
| Web funnel source | Conversion-focused rebuild complete locally | Domain, manual QA, and end-to-end lead test |
| Docker/OrbStack runtime | Healthy | Keep production checks passing |
| Technical SEO foundation | Prepared; staging intentionally noindex | Final domain, public indexing, and Search Console |
| Google Business Profile | Access exists via `orplyn.id@gmail.com`; audit pending | Complete P0 rows and verify ownership/PIC |
| AI discovery foundation | Prepared | Public sources, reviews, and citations |
| Analytics and Ads conversion | Lead ID, attribution, events, and checklist prepared | Lead log, real IDs, and offline conversion verification |
| Organic content system | Initial Instagram batch curated | Confirm rights, prepare P0 variants, and set cadence |
| External market intelligence | Initial snapshot and offer/SERP refresh complete | Validate keyword volume, Maps rank, and experiments |
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
- Domain: belum punya. Email bisnis dan akun utama: `orplyn.id@gmail.com`.
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

### P0, wajib sebelum public launch

- Domain final yang dimiliki owner.
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

Orplyn adalah jasa sablon kaos custom dan kaos polos di Ciputat, dari 1 pcs sampai produksi batch, dengan brief awal untuk membantu mengecek MOQ, bahan, teknik, dan deadline.

Model satuan/test print dan produksi/batch menjadi dua jalur intent, bukan dua brand terpisah. Tiga offer utama adalah DTF/custom satuan, event/community batch, dan kaos polos satuan/grosir. Bordir, jersey, clothing brand, special ink, fullprint, serta merchandise tetap tersedia sebagai capability sekunder.

### Why this positioning

- Lokasi jelas dan punya nilai untuk pencarian lokal.
- Asset menunjukkan variasi teknik produksi yang nyata.
- Calon pembeli biasanya mulai dari kebutuhan, jumlah, desain, dan deadline, bukan nama mesin atau proses teknis saja.
- Konsultasi teknik bisa menjadi pembeda ketika desain atau bahan belum final.

### Initial buyer segments

Urutan ini diperbarui dari form owner/admin dan satu survey customer awal. Tetap validasi dengan data lead/order 90 hari sebelum budget iklan dibesarkan:

1. Event dan komunitas: sering order, repeat, nilai tipikal Rp10 juta-Rp30 juta.
2. Vendor/reseller: repeat dan relevan untuk kaos custom serta sablon manual.
3. Sekolah/kampus dan kantor/perusahaan: potensi omzet/margin, cocok untuk seragam/event.
4. Pembeli satuan lokal: bisa menjadi entry offer, tetapi sering sensitif harga dan belum punya spesifikasi/desain jelas.
5. Clothing brand, tim olahraga, dan merchandise: layak diuji sebagai channel/offer spesifik.

External market snapshot mendukung pengujian outbound UMKM/corporate lokal dan partner channel selain inbound Search. Signal ini belum membuktikan profitability atau urutan segment.

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
- Runtime lokal: Docker/OrbStack.
- Container: `orplyn-web`.
- URL: `http://localhost:3010`.
- Healthcheck: aktif.

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

Verified on 18 Juli 2026 after the conversion/offer rebuild:

- `npm run lint`: zero errors, 9 image optimization warnings only.
- `npm run build`: passed.
- `node --test tests/rendered-html.test.mjs`: 6 tests passed.
- Docker image build: passed.
- Container health: healthy.
- Homepage, DTF landing, privacy, sitemap, robots, and `llms.txt`: HTTP 200.
- Runtime checks confirmed literal H1, real WhatsApp display, two order lanes, three primary offers, privacy link, and staging `noindex`.
- Automated visual browser backend was unavailable. Desktop and mobile still need final manual visual QA before public launch.

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

## 10. Public Launch Roadmap

### Phase 0: Owner data and commercial truth

Deliverables:

- Resolve remaining P0 gaps: domain, first-response target, quotation format, and owner approval for public claims.
- Validate the implemented offer architecture: DTF satuan, event/community batch, and kaos polos.
- Turn confirmed MOQ, lead time, payment, delivery, and pickup rules into website/WA-safe language.
- Collect permissioned review/testimonial/case-study proof where permitted.
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

Recommended initial structure:

- One campaign: `Search - DTF Satuan - Ciputat/Tangsel`; or
- One campaign: `Search - Kaos Event/Komunitas - Tangsel/Jaksel`.
- Choose one, based on gross profit, close rate, capacity, and deadline risk. Do not split the trial budget across both at launch.

Landing mapping:

- Event keywords -> `/layanan/kaos-event-komunitas`.
- DTF/satuan keywords -> `/layanan/sablon-dtf-satuan`.
- Clothing brand or special print -> `/layanan/produksi-clothing-brand`.
- Bordir or seragam -> `/layanan/bordir-seragam`.
- Jersey -> `/layanan/jersey-custom`.
- Totebag -> `/layanan/totebag-merchandise`.
- Kaos polos -> `/layanan/kaos-polos`.

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

## 16. Immediate Next Actions

The next agent should not start by redesigning the website. Start here:

1. Run one manual CTA-to-WhatsApp test on a phone, confirm the prefilled Lead ID/brief reaches Aulia, and record the result.
2. Create the operational lead log/CRM using the schema in `marketing/06-whatsapp-sales/wa-sales-flow.md`; test one lead through qualified, quoted, won/lost, revenue, and gross profit.
3. Get or choose the public domain, then set HTTPS, canonical URL, Search Console, Google tag, and only then change `NEXT_PUBLIC_ALLOW_INDEXING=true`.
4. Ask owner to approve public price anchors, rush-order rules, capacity, QC/rework, and proof/testimonial usage.
5. Build the approved package/range-price sheet for DTF satuan, event/community, and kaos polos.
6. Agree the first-response target and quotation format with Aulia.
7. Assign PIC and start the P0 rows in `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`.
8. Confirm publication rights and technique labels for the 8 selected Instagram posts; prioritize the four P0 assets in the visual catalog.
9. Complete GBP, authentic review outreach, public indexing, Search Console, and end-to-end lead measurement.
10. Only then select one Search Ads offer and run the Rp100 ribu-Rp700 ribu/month pilot without splitting the initial budget.

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
