# Orplyn Marketing Project

Workspace untuk bantu Orplyn mendapatkan sales atau minimal leads masuk ke WhatsApp lewat web funnel, Google/SEO, AI search/chat discovery, konten, dan iklan.

## Start Here

Untuk melanjutkan project dari AI, chat, atau agent lain, baca dalam urutan ini:

1. `AGENTS.md` - aturan kerja, invariant, dan urutan prioritas.
2. `PROJECT-HANDOFF.md` - single source of truth untuk strategi, status, blocker, roadmap, runbook, dan decision log.
3. `deliverables/owner-research/Orplyn - Form Owner Tahap 1.docx` - formulir yang dikirim ke owner untuk data launch-critical.

Jangan mulai Google Ads atau mengirim traffic publik sebelum launch gate di `PROJECT-HANDOFF.md` terpenuhi.

## Cara Baca Folder

- `business-data/`
  Data dasar brand: lokasi, social profile, dan referensi channel resmi.
- `assets/raw/google-drive/`
  Asset mentah dari Google Drive, dikelompokkan berdasarkan kategori produk/teknik.
- `assets/raw/instagram/`
  Arsip media Instagram beserta metadata per file. Batch publik terbaru berisi 12 post.
- `marketing/00-brief/`
  Marketing brief, survey owner, survey pelanggan, template data customer, positioning, dan offer.
- `marketing/01-web-funnel/`
  Rencana funnel website/landing page untuk ubah traffic jadi lead WhatsApp.
- `marketing/02-seo-google/`
  Rencana SEO Google, local SEO, Google Business Profile, dan keyword.
- `marketing/03-ai-search/`
  Rencana supaya Orplyn mudah ditemukan/direkomendasikan oleh AI chat/search.
- `marketing/04-google-ads/`
  Rencana Google Ads setelah funnel dan tracking siap.
- `marketing/05-content/`
  Inventaris asset dan arah konten IG/TikTok/Reels.
- `marketing/06-whatsapp-sales/`
  Script WhatsApp, lead qualification, dan flow closing.
- `marketing/07-market-research/`
  Riset pasar eksternal, competitor benchmark, search intent, dan growth experiment backlog.
- `deliverables/owner-research/`
  File Word yang ramah untuk owner/customer. Folder ini yang dipakai untuk pengiriman eksternal; file `.md` di `marketing/` adalah catatan kerja internal.
- `deliverables/content/`
  Katalog visual kurasi aset Instagram yang bisa langsung dibuka di browser.
- `deliverables/launch-readiness/`
  Checklist operasional Google Business Profile, SEO, dan tracking dalam format Word.
- `website/`
  Funnel web Orplyn yang sudah siap dijalankan lewat OrbStack/Docker.
- `ops/production/`
  Deployment VPS portabel, rollback, verifikasi, integrasi Caddy, dan runbook migrasi hosting tanpa mengubah URL SEO.
- `tools/`
  Tooling internal, termasuk downloader Instagram incremental dan generator katalog kurasi.

## Website Lokal

Website production lokal berjalan di `http://localhost:3010` melalui container `orplyn-web`.

Halaman yang tersedia:

- Funnel utama dengan CTA dan form brief WhatsApp.
- Tujuh landing page kebutuhan untuk SEO dan Google Ads.
- Portfolio hasil produksi.
- Halaman kontak dan lokasi Google Maps.
- Structured data, sitemap, robots, dan `llms.txt` untuk search/AI discovery.

Konfigurasi ada di `website/.env.example`. Nomor WhatsApp sales dan domain `orplyn.id` sudah tersedia, tetapi sebelum traffic publik masuk masih perlu aktivasi Cloudflare/HTTPS, ID tracking Google, dan test end-to-end lead sampai WhatsApp/log.

Staging publik berjalan di `https://orplyn.103-59-94-121.nip.io` dan sengaja `noindex`. Ini hanya alamat QA, bukan domain SEO final. Deployment dan aturan migrasi hosting ada di `ops/production/README.md` serta `ops/production/MIGRATION-SEO.md`.

## Priority Plan

1. Rapikan data bisnis dan offer.
2. Buat web funnel dengan CTA WhatsApp.
3. Setup SEO lokal dan indexing Google.
4. Siapkan AI search presence dengan halaman yang jelas dan structured content.
5. Pakai konten organik dari asset yang sudah ada.
6. Jalankan Google Ads setelah landing page, WA CTA, dan tracking siap.

Status saat ini: langkah 1-4 sudah disiapkan, batch awal konten sudah dikurasi, dan formulir owner/customer sudah terisi. Nomor WhatsApp dan domain final tersedia; Cloudflare/HTTPS, tracking, approval klaim publik, dan test lead end-to-end masih dibutuhkan untuk aktivasi publik.

## Current Known Data

- Brand: ORPLYN KAOS POLOS DAN SABLON CUSTOM
- Lokasi: Legoso, Ciputat Timur, Tangerang Selatan
- Instagram: `@orplyn.id`
- WhatsApp sales: `082317579311` / `6282317579311`
- PIC admin: Aulia
- Admin aktif: Senin-Sabtu, 08:00-19:00
- Goal utama: sales
- Goal minimal: leads masuk ke WhatsApp
- Model penjualan: satuan dan grosir dengan MOQ/lead time berbeda per produk
- Domain: `orplyn.id` melalui DomaiNesia; aktivasi Cloudflare sedang disiapkan

## Instagram Asset Archive

Batch awal 12 post terbaru sudah tersimpan sebagai 28 media file, sekitar 89 MB. Delapan post dipilih untuk funnel/konten, dua menjadi cadangan, dan dua ditahan sampai konteks teknik atau izin publikasi dikonfirmasi.

Jalankan update incremental:

```bash
./tools/instagram-archive/download.sh --recent 12
```

Katalog visual: `deliverables/content/Orplyn - Kurasi Aset Instagram.html`.

Instagram melaporkan 29 post pada profil, tetapi snapshot publik anonim hanya membuka 12 post terbaru. Gunakan mode `--cookies` yang dijelaskan di `tools/instagram-archive/README.md` untuk arsip histori penuh tanpa menyimpan password.

### Hermes Marketing Operations

Tool Orplyn juga terpasang sebagai skill `orplyn-marketing-ops` di runtime Hermes pada `/Users/nununugraha/mybusinessmap`. Command utamanya:

```text
orplyn-marketing instagram update 12
orplyn-marketing instagram dry-run 3
orplyn-marketing content status
orplyn-marketing launch status
orplyn-marketing sync
```

Project induk di-mount read-only. Hanya folder output arsip, katalog, galeri, dan state yang writable. Arsip histori penuh membutuhkan `cookies.txt` pada secret mount Hermes; jangan kirim password atau isi cookie melalui chat/Telegram.

## Owner Research Pack

File yang boleh langsung dikirim lewat WhatsApp atau dibuka di Word/Google Docs:

- `deliverables/owner-research/Orplyn - Form Owner Tahap 1.docx`
  Versi terisi 17 Juli 2026. Berisi data wajib untuk mengaktifkan WhatsApp, offer, website, SEO, dan Ads secara benar.
- `deliverables/owner-research/Orplyn - Form Owner Tahap 2.docx`
  Versi terisi 17 Juli 2026. Berisi profil customer, economics, proof, positioning, akses akun, dan target growth.
- `deliverables/owner-research/Orplyn - Survey Customer.docx`
  Berisi responden awal C001; lanjutkan sampai 8-12 customer/lost lead.

Dokumen internal pendukung:

- `marketing/00-brief/owner-discovery-survey.md`
  Sumber kerja internal untuk formulir owner.
- `marketing/00-brief/customer-discovery-survey.md`
  Sumber kerja internal untuk survey customer.
- `marketing/00-brief/customer-data-template.md`
  Struktur data lead/order 90 hari dan rekap penjualan 12 bulan.
- `business-data/findings-register.md`
  Register fakta, observasi, hipotesis, unknown, dan keputusan marketing.
- `marketing/07-market-research/market-landscape-2026-07-16.md`
  Snapshot pasar, kompetitor, public price benchmark, opportunity segment, dan channel implication.
- `marketing/07-market-research/growth-experiment-backlog.md`
  Daftar tes growth dengan gate, KPI, guardrail, dan stop rule.

Dokumen launch yang bisa dibuka di Word/Google Docs:

- `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`
  Checklist P0/P1/P2 dengan PIC, bukti selesai, launch gate, Search Console, Google tag, lead tracking, dan Google Ads conversion readiness.
