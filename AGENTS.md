# Orplyn Agent Guide

File ini berlaku untuk seluruh workspace Orplyn. Baca `PROJECT-HANDOFF.md` sebelum melakukan pekerjaan strategis atau teknis yang besar.

## Mission

Tujuan utama project adalah menghasilkan sales untuk Orplyn. Tujuan antara yang dipakai untuk mengukur funnel adalah lead berkualitas yang masuk ke WhatsApp sales.

Jangan mengubah project menjadi sekadar website company profile, katalog pasif, atau eksperimen branding yang tidak membantu conversion.

## Current State

Per 18 Juli 2026:

- Data brand, lokasi, Instagram, dan sumber Google Drive sudah disimpan.
- Owner/admin sudah mengisi form Tahap 1 dan Tahap 2 pada 17 Juli 2026; model satuan/grosir, MOQ awal, lead time awal, payment rules, segment priority, dan growth target sudah dirangkum di `business-data/owner-answers.md`.
- WhatsApp sales tersedia: `082317579311` / `6282317579311`, PIC Aulia, admin aktif Senin-Sabtu 08:00-19:00.
- Asset mentah berjumlah 156 file, sekitar 606 MB, dalam 20 kategori, termasuk dua logo transparan.
- Dua belas post Instagram terbaru sudah diarsipkan menjadi 28 media file, sekitar 89 MB. Kurasi awal: 8 selected, 2 reserve, 2 hold; seluruh izin publikasi masih `pending`.
- Tool Docker incremental ada di `tools/instagram-archive/`; katalog visual marketer ada di `deliverables/content/Orplyn - Kurasi Aset Instagram.html`.
- Skill Hermes `orplyn-marketing-ops` aktif dari `/Users/nununugraha/mybusinessmap`; update aset, ringkasan kurasi, status launch, dan sinkronisasi snapshot dapat dijalankan dari runtime Hermes.
- Web funnel sudah dibangun di `website/`.
- Container lokal bernama `orplyn-web` berjalan di OrbStack pada `http://localhost:3010`.
- Staging publik terisolasi berjalan di VPS bersama pada `https://orplyn.103-59-94-121.nip.io`, sengaja `noindex`, dengan deployment portabel di `ops/production/`.
- Domain final `orplyn.id` dibeli melalui DomaiNesia pada 18 Juli 2026; onboarding Cloudflare, DNS, HTTPS origin, dan production build belum selesai.
- Homepage memakai dua jalur order dan tiga offer utama; dedicated DTF/satuan, enam landing lain, portfolio, kontak, privasi, schema, sitemap, robots, dan `llms.txt` sudah tersedia.
- Form WhatsApp memakai nomor nyata, Lead ID, MOQ-aware quantity, use case, deadline, lokasi, UTM, landing page, GCLID/GBRAID/WBRAID, dan event teknis terpisah dari qualified lead.
- Local/staging sengaja `noindex` melalui `NEXT_PUBLIC_ALLOW_INDEXING=false`.
- External market snapshot, offer/SERP refresh, dan growth experiment backlog tersedia di `marketing/07-market-research/`.
- Tiga formulir Word nonteknis untuk owner/customer tersedia di `deliverables/owner-research/`; file canonical sudah diganti dengan versi terisi.
- Checklist Word Google Business Profile, SEO, dan tracking tersedia di `deliverables/launch-readiness/`.
- Lint tidak punya error, production build berhasil, enam smoke test lulus, container sehat, dan core routes HTTP 200.
- Website belum siap menerima traffic acquisition karena aktivasi Cloudflare/domain, lead log, tracking IDs, approval harga/proof, manual QA, dan end-to-end WhatsApp test belum selesai.

## Strategy In One Line

Traffic dengan intent jelas -> landing page yang relevan -> bukti hasil produksi nyata -> brief singkat -> WhatsApp -> kualifikasi -> quotation -> sale.

## Non-Negotiable Rules

1. Prioritaskan sales dan qualified leads, bukan vanity metrics.
2. Jangan mengarang nomor WhatsApp, harga, MOQ, lead time, kapasitas, testimoni, nama customer, garansi, atau klaim kualitas.
3. Gunakan asset hasil produksi Orplyn sebagai proof. Jangan mengganti semuanya dengan stock photo atau mockup generik.
4. Pertahankan positioning lokal Ciputat dan Tangerang Selatan sampai owner memutuskan area lain.
5. Setiap CTA utama harus mengarah ke alur brief WhatsApp yang dapat dilacak.
6. Jangan menjalankan Google Ads sebelum nomor WhatsApp, domain, tracking conversion, offer, dan kesiapan admin sudah dikonfirmasi.
7. Jangan menilai sukses dari WhatsApp click saja. Lanjutkan pencatatan sampai qualified lead, quote, sale, dan revenue.
8. Gunakan bahasa Indonesia yang jelas, spesifik, dan tidak berlebihan.
9. Jangan memasukkan seluruh 606 MB raw assets ke bundle website. Pilih dan optimalkan asset yang benar-benar dipakai.
10. Setelah perubahan penting, update `PROJECT-HANDOFF.md` agar status tidak basi.
11. Perlakukan file `.md` sebagai dokumentasi kerja internal. Materi yang dikirim ke owner atau customer harus memakai format nonteknis di `deliverables/`, kecuali mereka meminta format lain.
12. Jangan meminta password atau isi cookie Instagram melalui chat. Cookie opsional untuk histori penuh hanya boleh berada di secret mount Hermes yang read-only.

## Source Of Truth

Urutan sumber yang harus dipercaya:

1. Jawaban langsung terbaru dari owner/user.
2. `business-data/` untuk data bisnis dan channel resmi.
3. `marketing/00-brief/` untuk objective, positioning, dan pertanyaan owner.
4. `PROJECT-HANDOFF.md` untuk status, keputusan, roadmap, dan blocker.
5. `website/app/lib/site-data.ts` untuk content yang sedang tampil di website.
6. Dokumen channel di `marketing/` untuk rencana SEO, AI discovery, Ads, content, dan WhatsApp.
7. `marketing/07-market-research/` untuk evidence pasar eksternal, competitor observation, dan experiment hypotheses.

Jika dua sumber bertentangan, jangan menebak. Pakai informasi owner yang paling baru dan perbarui semua file terkait.

## Immediate Work Order

Urutan kerja yang direkomendasikan:

1. Uji satu CTA ke WhatsApp nyata dan catat satu Lead ID sampai qualified, quoted, won/lost, revenue, serta gross profit.
2. Buat lead log operasional berdasarkan `marketing/06-whatsapp-sales/wa-sales-flow.md`.
3. Aktifkan Cloudflare untuk `orplyn.id`, pasang HTTPS origin, canonical final, Search Console, Google tag, dan Google Ads conversion; baru izinkan indexing.
4. Minta owner approve price anchor, rush order, capacity, QC/rework, proof, dan testimoni.
5. Jalankan checklist `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`, termasuk audit Google Business Profile dan konsistensi NAP.
6. Buat paket/range harga untuk DTF satuan, event/community, dan kaos polos; publish hanya setelah approved.
7. Uji event/panitia hanya bila capacity dan deadline cut-off aman.
8. Jalankan content organik dari asset nyata dan pilot outbound 50 account untuk membangun trust serta baseline demand.
9. Jalankan satu pilot Google Search Ads high-intent setelah semua launch gate lulus.
10. Optimalkan berdasarkan qualified lead rate, cost per qualified lead, quote rate, sale rate, revenue, dan gross profit.

## Website Invariants

- Nomor placeholder adalah `6280000000000`. Form sengaja tidak membuka WhatsApp jika placeholder masih aktif.
- Konfigurasi ada di `website/.env.example`.
- Local/staging harus memakai `NEXT_PUBLIC_ALLOW_INDEXING=false`; ubah ke `true` hanya setelah launch gate lulus.
- Variable `NEXT_PUBLIC_*` masuk ke client bundle saat build. Setelah mengubahnya, rebuild image Docker.
- Canonical URL, sitemap, robots, dan social URL berasal dari `NEXT_PUBLIC_SITE_URL`.
- Lead form membaca UTM, landing page, `gclid`, `gbraid`, dan `wbraid` serta membuat Lead ID.
- Submit valid memicu `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`; konfigurasi Ads dapat memicu secondary `lead started` conversion.
- Service page dan schema harus relevan dengan intent pencarian; indexing publik hanya diaktifkan saat domain dan launch gate siap.
- Social preview berada di `website/public/og.png`.
- Official brand variants berada di `website/public/brand/` dan dibuat ulang dengan `npm run brand:build`.

## Technical Runbook

```bash
cd website
docker compose up --build -d
docker compose ps
docker compose logs --tail=80 --no-color
```

Quality checks:

```bash
cd website
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

Local production URL: `http://localhost:3010`.

Portable VPS deployment:

```bash
./ops/production/build-release.sh ops/production/.env.production
ssh searchyourjob@103.59.94.121
cd /opt/orplyn
docker compose --env-file .env.production -f compose.production.yml ps
```

Hosting migration rules are in `ops/production/MIGRATION-SEO.md`. Keep the final domain and paths unchanged when moving hosts; test the new origin first, then change DNS only.

Instagram archive:

```bash
./tools/instagram-archive/download.sh --recent 12
./tools/instagram-archive/download.sh --cookies tools/instagram-archive/secrets/instagram-cookies.txt
```

Hermes runtime:

```bash
/opt/data/bin/orplyn-marketing instagram update 12
/opt/data/bin/orplyn-marketing content status
/opt/data/bin/orplyn-marketing launch status
/opt/data/bin/orplyn-marketing sync
```

## Definition Of Done For Public V1

Public V1 belum dianggap selesai sebelum:

- nomor WhatsApp nyata bekerja dari semua CTA;
- domain final dan HTTPS aktif;
- NAP akurat dan konsisten;
- minimum order serta lead time tidak menyesatkan;
- Google tag dan conversion terverifikasi;
- admin bisa merespons lead dengan SOP yang disepakati;
- mobile dan desktop diuji manual;
- Search Console dan Google Business Profile terhubung;
- satu mekanisme pencatatan lead sampai sale tersedia.

## Documentation Discipline

Setelah menyelesaikan milestone:

- ubah tanggal `Last updated` di `PROJECT-HANDOFF.md`;
- pindahkan item dari blocker ke completed bila benar-benar selesai;
- tulis keputusan baru di Decision Log;
- catat hasil test atau eksperimen dengan angka;
- jangan menghapus konteks keputusan lama tanpa alasan.
- jangan menyuruh owner mengisi file `.md`; arahkan ke formulir Word di `deliverables/owner-research/`.
