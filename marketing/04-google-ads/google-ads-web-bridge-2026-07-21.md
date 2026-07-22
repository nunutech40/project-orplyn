---
document_id: ORPLYN-GOOGLE-ADS-WEB-BRIDGE-2026-07-21
document_type: bridge_doc
status: active_internal
primary_segment: event_and_community
active_decision_id: D-015
last_updated: 2026-07-21
---

# Jembatan Web, Google Ads, dan Setup Orplyn

Dokumen ini menjawab pertanyaan: setup apa saja yang dibutuhkan, kenapa
dibutuhkan, dan bagian mana yang sudah selesai untuk Orplyn.

## Inti Jawaban Singkat

Setup itu diperlukan supaya iklan Google Ads tidak berhenti di klik, tapi bisa
dilacak sampai masuk WhatsApp, lalu dipetakan menjadi lead, quote, dan sale.

Kalau tanpa setup:

- iklan bisa jalan tapi hasilnya tidak kebaca;
- WhatsApp masuk tapi sumbernya tidak jelas;
- tim tidak tahu keyword atau campaign mana yang menghasilkan lead;
- bidding tidak bisa dioptimasi berdasarkan kualitas lead.

## Alur Kerja Orplyn

1. Orang mencari kebutuhan di Google.
2. Iklan Search menampilkan Orplyn.
3. Klik membawa orang ke landing page khusus event/komunitas di
   `https://orplyn.id/lp/kaos-event-komunitas`.
4. CTA membuka WhatsApp Aulia dengan template brief singkat.
5. Lead ID dan atribut sumber ikut terkirim.
6. Admin mencatat lead sampai `Qualified`, `Quote Sent`, `Won/Lost`, `Revenue`,
   dan `Gross Profit`.
7. Setelah data nyata cukup, lead berkualitas bisa diupload sebagai offline
   conversion.

## Setup Yang Dibutuhkan

### 1. Website / landing page

Fungsi:

- jadi halaman tujuan iklan;
- menjelaskan offer yang relevan untuk event/komunitas;
- menampilkan proof, lokasi, FAQ, dan CTA WhatsApp;
- memberi konteks agar orang mau chat.

Yang sudah ada:

- landing page event/komunitas di `orplyn.id/lp/kaos-event-komunitas`;
- CTA utama langsung ke WhatsApp;
- proof order event dan workshop Ciputat;
- `noindex` untuk LP Ads.

Kenapa perlu:

- tanpa landing page khusus, traffic iklan bercampur dengan halaman lain;
- pesan iklan jadi kurang relevan;
- conversion rate biasanya turun karena pengunjung harus cari-cari konteks.

### 2. Google tag

Fungsi:

- memberi identitas akun Google Ads ke website;
- membuat Google bisa mendeteksi aktivitas dasar di site.

Yang sudah ada:

- `AW-374076115` aktif di public build Orplyn.

Kenapa perlu:

- tanpa tag, Google Ads tidak bisa memverifikasi domain dan event website;
- conversion tidak bisa dilacak dengan benar.

### 3. Conversion action

Fungsi:

- mendefinisikan tindakan yang dianggap bernilai oleh Google Ads.

Yang sudah ada:

- conversion action: `Mengirim formulir lead`;
- label event snippet: `-KloCLqt6NMcENPlr7IB`.

Kenapa perlu:

- Google Ads perlu tahu event mana yang dihitung sebagai lead;
- ini dipakai untuk tracking dan nanti bisa dipakai sebagai sinyal bidding.

### 4. Event tracking WhatsApp

Fungsi:

- merekam saat orang menekan CTA WhatsApp;
- mengirim `whatsapp_open` dan Google Ads `conversion` event;
- membawa `Lead ID` agar chat dan tracking bisa disambungkan.

Yang sudah ada:

- CTA `WhatsAppQuickStart`;
- form lama `QuoteBuilder`;
- payload conversion memakai `AW-374076115/-KloCLqt6NMcENPlr7IB`;
- nilai conversion `1.0` dengan currency `IDR`.

Kenapa perlu:

- WhatsApp adalah tujuan utama akuisisi Orplyn;
- klik WA tanpa tracking hanya jadi angka mentah;
- dengan tracking, sumber lead bisa ditelusuri.

### 5. Lead log

Fungsi:

- mencatat kualitas lead setelah masuk WhatsApp;
- menghubungkan traffic iklan dengan penjualan nyata.

Field inti:

- source;
- campaign;
- landing page;
- product / use case;
- qualified;
- quote sent;
- won / lost;
- revenue;
- gross profit;
- response time;
- lost reason.

Kenapa perlu:

- klik WhatsApp belum berarti sales;
- optimasi iklan harus berbasis hasil bisnis, bukan sekadar klik.

### 6. Campaign setup Google Ads

Fungsi:

- membatasi iklan ke intent yang cocok;
- menjaga budget tetap fokus ke event/komunitas.

Yang disiapkan:

- Search only;
- geo Ciputat dan Tangerang Selatan;
- keyword exact/phrase intent tinggi;
- negative keyword seed;
- schedule jam aktif admin.

Kenapa perlu:

- tanpa pembatasan, budget gampang bocor ke query yang tidak relevan;
- campaign jadi lebih sulit dibaca.

### 7. Offline conversion

Fungsi:

- menutup gap antara lead WhatsApp dan penjualan nyata.

Kenapa perlu:

- lead yang benar-benar bernilai adalah yang qualified dan jadi sale;
- Google Ads perlu sinyal yang lebih dekat ke revenue untuk optimasi jangka
  panjang.

## Status Sekarang

Sudah selesai:

- landing page event/komunitas;
- noindex LP;
- Google tag `AW-374076115`;
- conversion label `-KloCLqt6NMcENPlr7IB`;
- klik CTA WhatsApp mengirim conversion event;
- deploy live ke `orplyn.id`.

Masih ditahan:

- campaign Google Ads dinyalakan;
- offline conversion upload;
- Google Business Profile dan Search Console sebagai aktivasi eksternal
  berikutnya;
- scale ke segmen lain.

## Kenapa Setup Ini Bukan Sekadar Formalitas

Setup ini dipakai untuk tiga hal:

1. mengukur apa yang terjadi;
2. membedakan traffic yang bagus dan jelek;
3. membuat budget bisa dipindahkan ke keyword atau ad group yang benar.

Kalau setup ini belum ada, Google Ads tetap bisa dibuka, tapi Orplyn akan
susah tahu apakah iklan benar-benar menghasilkan lead yang layak dijual.

## Patokan Membaca Hasil Iklan

Gunakan funnel berikut saat mengevaluasi data. Setiap tahap menjawab pertanyaan
yang berbeda; jangan memakai metrik tahap awal sebagai pengganti hasil bisnis.

| Tahap | Metrik | Cara membaca |
|---|---|---|
| Iklan tampil | Impression | Apakah iklan mendapat kesempatan tampil? |
| Iklan diklik | Click, CTR, CPC | Apakah keyword dan iklan menarik bagi pencari? |
| Landing dibuka | Page view/session | Apakah traffic sampai ke halaman yang benar? |
| Isi dibaca | Scroll, waktu aktif, section viewed | Apakah halaman relevan dan mudah dipahami? Ini diagnosis, bukan tujuan utama. |
| CTA ditekan | CTA click | Apakah pengunjung mulai berminat? |
| WhatsApp dibuka | `whatsapp_open` dan Ads conversion | Lead started; belum berarti lead berkualitas. |
| Chat memenuhi syarat | Qualified lead | Apakah kebutuhan cocok dengan fokus event/komunitas dan bisa ditindaklanjuti? |
| Estimasi dikirim | Quote sent | Apakah percakapan sudah masuk proses penawaran? |
| Penjualan terjadi | Won, revenue, gross profit | Ini hasil bisnis yang menjadi dasar keputusan budget. |

Urutan diagnosisnya:

1. Banyak impression tetapi sedikit click: periksa keyword, headline iklan, dan relevansi offer.
2. Banyak click tetapi sedikit page engagement: periksa kecepatan, pesan hero, dan kecocokan landing dengan keyword.
3. Banyak pengunjung tetapi sedikit WhatsApp open: periksa CTA, proof, lokasi, dan hambatan di halaman.
4. Banyak WhatsApp open tetapi sedikit qualified lead: periksa kualitas traffic, template chat, MOQ, dan segmentasi keyword.
5. Banyak qualified lead tetapi sedikit quote/sale: periksa respons admin, offer, harga, kapasitas, dan proses quotation.

Scroll dan waktu baca boleh ditambahkan sebagai diagnostic, tetapi tidak dijadikan
conversion utama. Patokan utama Orplyn adalah:

`Biaya iklan -> chat -> qualified lead -> quote -> sale -> revenue/profit`
