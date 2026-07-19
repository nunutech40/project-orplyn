# Orplyn Agent Guide

File ini berlaku untuk seluruh workspace Orplyn. Baca `marketing/README.md` dan `PROJECT-HANDOFF.md` sebelum melakukan pekerjaan strategis atau teknis yang besar.

## Mission

Tujuan utama project adalah menghasilkan sales untuk Orplyn. Tujuan antara yang dipakai untuk mengukur funnel adalah lead berkualitas yang masuk ke WhatsApp sales.

Jangan mengubah project menjadi sekadar website company profile, katalog pasif, atau eksperimen branding yang tidak membantu conversion.

## Current State

Per 19 Juli 2026:

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
- Domain final `orplyn.id` aktif melalui Cloudflare. Delegasi `cleo.ns.cloudflare.com`/`stella.ns.cloudflare.com`, proxied apex/www, edge HTTPS, origin HTTPS, dan redirect permanen `www` ke apex sudah terverifikasi.
- Owner evolution lens 19 Juli 2026 menetapkan event/komunitas sebagai satu fokus acquisition. H-009/E-12 adalah hypothesis deadline-risk untuk first order; H-008/E-11 adalah retention hypothesis untuk repeat order. Keduanya belum menjadi public claim.
- Homepage, dedicated event/komunitas dan DTF/satuan, enam landing layanan, portfolio, kontak, privasi, schema, sitemap, robots, dan `llms.txt` sudah tersedia. Event-first release `20260719T082000Z-3890f1b` aktif di `https://orplyn.id`; DTF/kaos polos tetap entry offer sekunder.
- Form WhatsApp memakai nomor nyata, Lead ID, MOQ-aware quantity, event-first use case, tanggal pakai/target, lokasi, UTM, landing page, GCLID/GBRAID/WBRAID, `days_to_target`, dan event teknis terpisah dari qualified lead.
- Commercial-proof component sudah tersedia dan tidak merender apa pun selama `commercial-proofs.ts` kosong. Owner sedang diminta mengirim lima order event/community melalui M-06.
- Local/staging sengaja `noindex` melalui `NEXT_PUBLIC_ALLOW_INDEXING=false`.
- External market snapshot, offer/SERP refresh, dan growth experiment backlog tersedia di `marketing/07-market-research/`.
- Tiga formulir Word nonteknis untuk owner/customer tersedia di `deliverables/owner-research/`; file canonical sudah diganti dengan versi terisi.
- Checklist Word Google Business Profile, SEO, dan tracking tersedia di `deliverables/launch-readiness/`.
- Lint tidak punya error, production build berhasil, enam rendered smoke test lulus, local/public container sehat, seluruh deployment route lulus, dan hero WebP aktif melalui cache Cloudflare.
- Source implementation memenuhi factual event-first dan proof-gating contract. Final responsive visual QA masih perlu dijalankan ketika browser tooling tersedia. Public acquisition tetap ditahan oleh intentional `noindex`, lead log, tracking IDs, approval harga/proof, admin readiness, dan end-to-end WhatsApp test.
- Per arahan user terbaru, setup eksternal GBP, Search Console, Google tag, indexing, dan Google Ads dikerjakan kemudian. Pekerjaan aktif sekarang adalah konsistensi dokumentasi dan kesiapan website.

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
13. Selama D-012 aktif, event/komunitas adalah satu-satunya fokus acquisition. DTF satuan, kaos polos, vendor, corporate, dan layanan lain tetap dapat dilayani tetapi tidak boleh dijalankan sebagai parallel campaign tanpa owner decision baru.
14. Jangan mempublikasikan outcome H-009 atau H-008 sebelum eksperimen, evidence, publication permission, owner approval, dan Public-Claim Gate terkait lulus.
15. Commercial proof di website hanya boleh berasal dari record berstatus publishable. Jangan membuat placeholder testimoni, transaksi, customer, angka, atau hasil yang terlihat nyata.

## Source Of Truth

Urutan sumber yang harus dipercaya:

1. Jawaban langsung terbaru dari owner/user.
2. `business-data/` untuk data bisnis dan channel resmi.
3. `marketing/README.md` untuk status dokumen, active direction, dan aturan supersession.
4. `PROJECT-HANDOFF.md` untuk status, keputusan, roadmap, dan blocker.
5. `marketing/00-brief/project-brief.md` untuk objective dan concise active brief.
6. `website/app/lib/site-data.ts` untuk content yang sedang tampil di website.
7. Dokumen channel aktif di `marketing/` untuk funnel, SEO, Ads, content, AI discovery, dan WhatsApp.
8. Snapshot historis di `marketing/07-market-research/` hanya untuk evidence pasar/kompetitor; jangan jadikan rekomendasi lamanya sebagai prioritas bila bertentangan dengan D-012.

Jika dua sumber bertentangan, jangan menebak. Pakai informasi owner yang paling baru dan perbarui semua file terkait.

## Immediate Work Order

Urutan kerja aktif:

1. Selesaikan M-06: terima, verifikasi, redact, dan cek izin lima order event/community; publish hanya record berstatus `publishable`.
2. Jalankan final responsive visual QA dan uji CTA nyata ke WhatsApp Aulia pada ponsel; jangan mengubah status noindex.
3. Operasikan lead log sampai qualified, quote, sale, revenue, dan gross profit.
4. Lengkapi offer event, capacity/cut-off, admin readiness, dan quotation melalui M-07/M-08.
5. Baru lanjutkan setup eksternal GBP, Search Console, Google tag, indexing, dan conversion ketika user mengaktifkannya kembali.
6. Jalankan event/community acquisition dan E-12 hanya setelah capacity, cut-off, admin/production ownership, serta Public-Claim Gate siap.
7. Jalankan satu pilot Search Ads event/community setelah semua launch gate lulus; jangan membagi budget awal ke DTF atau segmen lain.

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
The full domain and network map is in `ops/production/DOMAIN-AND-DNS-ARCHITECTURE.md`; update it whenever registrar, nameserver, DNS, origin IP, TLS, or canonical behavior changes.

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
