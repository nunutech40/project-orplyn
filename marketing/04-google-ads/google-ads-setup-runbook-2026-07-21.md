---
document_id: ORPLYN-GOOGLE-ADS-SETUP-RUNBOOK-2026-07-21
document_type: setup_runbook
status: draft_ads_off
primary_segment: event_and_community
active_decision_id: D-015
last_updated: 2026-07-21
---

# Google Ads Setup Runbook

## Status

Google Ads tetap `OFF`. Dokumen ini dipakai untuk menyiapkan akun, tracking,
campaign skeleton, dan verifikasi tanpa menyalakan iklan sampai launch gate
lulus.

## Rule Utama

- Satu campaign awal: event/komunitas.
- Final URL: `https://orplyn.id/lp/kaos-event-komunitas`.
- LP Ads tetap `noindex`; halaman SEO tetap `/layanan/kaos-event-komunitas`.
- Jangan pakai DTF satuan, kaos polos, bordir, jersey, atau layanan lain sebagai
  ad group paralel.
- Jangan pakai klaim deadline aman, garansi, jumlah customer, rating, harga
  publik, atau kapasitas sebelum ada bukti, izin, dan owner approval.
- Optimasi bisnis memakai qualified lead, quotation, sale, revenue, dan gross
  profit. WhatsApp open hanya secondary signal.

## 1. Account Setup

1. Buat atau buka Google Ads account untuk Orplyn.
2. Billing boleh disiapkan, tetapi campaign tetap paused.
3. Hubungkan domain final `orplyn.id`.
4. Pastikan zona waktu account Asia/Jakarta dan mata uang sesuai owner.
5. Jangan aktifkan auto-apply recommendation tanpa review manual.

## 2. Conversion Setup

### Secondary website conversion

Gunakan conversion action untuk klik CTA WhatsApp dari LP:

- Name: `Lead Started - WhatsApp`
- Category: `Contact`
- Value: jangan pakai revenue palsu; boleh kosong/default.
- Count: `One`
- Use as account-default goal: `No` untuk fase awal, karena ini belum qualified
  lead.

Ambil dua nilai dari Google Ads:

- Google tag / destination ID: biasanya `AW-XXXXXXXXX`
- Event snippet label: bagian setelah `/` pada `send_to`

Masukkan ke env saat owner sudah siap:

```bash
NEXT_PUBLIC_GOOGLE_TAG_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL=XXXXXXXXXXXXXXX
```

Setelah env diisi, rebuild image. CTA `WhatsAppQuickStart` dan form lama
`QuoteBuilder` sama-sama mengirim:

- `whatsapp_open`
- `conversion` ke `AW-ID/LABEL`
- `transaction_id` = Lead ID Orplyn

### Primary business conversion

Primary conversion belum bisa full otomatis dari website karena lead masuk ke
WhatsApp. Operasionalnya:

1. Semua lead dari WhatsApp dicatat di lead log.
2. Admin menandai `Qualified`, `Quote Sent`, `Won/Lost`, `Revenue`, dan `Gross
   Profit`.
3. Setelah data real stabil, upload `Qualified Lead` atau `Converted Lead`
   sebagai offline conversion lewat Google Ads Data Manager.

Jangan optimasi bidding ke WhatsApp open saja.

## 3. Campaign Setup

Campaign:

- Name: `Search | Event-Komunitas | Ciputat-Tangsel | Pilot`
- Objective: Leads
- Network: Search only
- Search Partners: Off untuk baseline awal
- Display Network: Off
- Location: Ciputat dan Tangerang Selatan
- Location option: Presence, yaitu orang yang berada atau rutin berada di target
  area
- Schedule: Senin-Sabtu, 08.00-19.00 WIB
- Final URL: `https://orplyn.id/lp/kaos-event-komunitas`

Bidding awal:

- Pilih `Manual CPC` atau `Maximize Clicks` dengan CPC limit setelah Keyword
  Planner dicek.
- Jangan pakai Target CPA sebelum qualified/converted lead punya volume dan
  value yang masuk akal.

## 4. Ad Group

Ikuti draft canonical:

- `Ad Group 1 - Kaos Event`
- `Ad Group 2 - Kaos Komunitas`
- `Ad Group 3 - Sablon Event Lokal`

Keyword awal tetap exact dan phrase. Hindari broad match sampai search-term
quality dan negative keyword sudah stabil.

## 5. Negative Keywords

Pasang seed negative dari
`marketing/04-google-ads/search-event-campaign-draft-2026-07-19.md`, terutama:

- lowongan, loker, magang
- tutorial, cara sablon, DIY
- mesin, alat, tinta, screen, rakel
- template, mockup, vector, png, download
- DTF satuan, kaos polos, jersey custom untuk fase pilot event

Review search terms rutin; jangan menambah negative yang bisa memblokir money
keyword.

## 6. Verification Before Launch

Checklist wajib sebelum campaign enabled:

- [ ] LP final live di `https://orplyn.id/lp/kaos-event-komunitas`.
- [ ] LP tetap `noindex` dan tidak masuk sitemap.
- [ ] Google tag terdeteksi di semua halaman publik.
- [ ] Test click CTA WhatsApp memicu `whatsapp_open` dan Ads conversion.
- [ ] GCLID/GBRAID/WBRAID terbawa ke template WhatsApp.
- [ ] Lead ID masuk ke chat dan lead log.
- [ ] Aulia menguji respon nyata dari ponsel.
- [ ] Lead log dipakai minimal untuk source, qualified, quote, sale, revenue,
  gross profit, response time, dan lost reason.
- [ ] Owner approve RSA final, negative list, geo, schedule, dan budget harian.
- [ ] Public-Claim Gate lulus untuk semua proof/klaim yang tampil.

## 7. First Week Operating Rules

- Cek search terms setiap hari aktif.
- Catat semua chat masuk, termasuk yang tidak qualified.
- Jangan scale karena banyak klik; scale hanya bila query, qualified rate, quote
  rate, dan kapasitas terlihat sehat.
- Pause campaign bila admin lambat membalas atau produksi overload.
- Jangan buka campaign baru sampai event/community punya baseline.
