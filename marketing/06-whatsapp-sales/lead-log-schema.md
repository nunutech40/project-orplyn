---
document_id: ORPLYN-WHATSAPP-LEAD-LOG-001
document_type: active_operational_schema
status: skeleton_ready_owner_operation_pending
primary_segment: event_and_community
active_decision_id: D-012
last_updated: 2026-07-19
---

# Lead Log Schema

## Purpose

Lead log menghubungkan sumber traffic sampai hasil bisnis. WhatsApp click dan
`generate_lead` hanya signal teknis; keputusan marketing harus memakai
qualified lead, quotation, sale, revenue, dan gross profit.

Template kosong yang dapat dibuka langsung di Excel atau diimpor ke Google
Sheets tersedia di:

`deliverables/launch-readiness/Orplyn - Lead Log.csv`

Tidak ada baris contoh agar data palsu tidak tercampur dengan lead nyata.

## Operating Rule

- Satu baris mewakili satu `Lead ID`.
- Gunakan waktu WIB dan format `YYYY-MM-DD HH:MM`.
- Aulia atau PIC sales memperbarui baris yang sama sampai `Won` atau `Lost`.
- Jangan menghapus lead gagal. Isi `Lost Reason` agar keyword, offer, dan SOP
  dapat dievaluasi.
- `WhatsApp Open` tidak otomatis berarti `Qualified`.
- `Qualified` hanya diisi `Ya` setelah kebutuhan, jumlah, tanggal acara atau
  target, lokasi, dan intent meminta estimasi cukup jelas untuk ditindaklanjuti.
- Nilai uang memakai rupiah tanpa teks tambahan agar dapat dihitung.
- Gross profit diisi dari angka bisnis nyata setelah definisi biaya langsung
  disetujui owner; jangan menaksirnya dari revenue.

## Required Field Dictionary

| Field | Definition | Required when |
| --- | --- | --- |
| Lead ID | ID unik dari website atau ID manual dengan pola yang disepakati | Saat lead masuk |
| Created At WIB | Waktu chat pertama diterima | Saat lead masuk |
| First Response At WIB | Waktu balasan manusia pertama dari admin | Setelah dibalas |
| Response Time Minutes | Selisih menit antara lead masuk dan respons pertama | Setelah dibalas |
| Source | `google_ads`, `google_organic`, `instagram`, `referral`, `direct`, atau sumber lain yang nyata | Saat lead masuk |
| Medium | Medium UTM bila tersedia | Saat lead masuk |
| Campaign | Nama campaign UTM/Ads bila tersedia | Saat lead masuk |
| Ad Group | Tema ad group bila berasal dari Ads | Saat lead masuk |
| Keyword | Keyword Ads yang tercatat | Saat lead masuk |
| Search Term | Query aktual dari laporan Search Terms; diisi saat rekonsiliasi | Setelah data Ads tersedia |
| Landing Page | Path pertama yang membawa lead | Saat lead masuk |
| GCLID / GBRAID / WBRAID | Click identifier Google bila tersedia | Saat lead masuk |
| Segment | Fokus saat ini `Event / komunitas`; segment lain tetap dicatat bila inbound | Saat lead masuk |
| Event Date | Tanggal acara/tanggal kaos dipakai | Untuk event/community |
| Days To Event | Selisih hari antara lead masuk dan tanggal acara | Untuk event/community |
| Product | Produk yang diminta | Saat qualified |
| Quantity | Jumlah perkiraan | Saat qualified |
| Delivery / Pickup Location | Kota tujuan atau pickup Ciputat | Saat qualified |
| Design Status | `Sudah ada`, `Perlu dibantu`, atau `Belum jelas` | Saat qualified |
| Qualified | `Ya`, `Tidak`, atau `Pending` | Setelah kualifikasi |
| Qualified At WIB | Waktu lead dinyatakan qualified | Jika `Qualified = Ya` |
| Quote Status | `Belum`, `Disiapkan`, `Terkirim`, atau `Tidak dibuat` | Setelah kualifikasi |
| Quoted At WIB | Waktu quotation dikirim | Jika quote terkirim |
| Quote Value IDR | Nilai quotation | Jika quote terkirim |
| Sale Status | `Open`, `Won`, atau `Lost` | Sepanjang proses |
| Sale Date | Tanggal deal/order | Jika won |
| Revenue IDR | Revenue order yang benar-benar disepakati | Jika won |
| Gross Profit IDR | Revenue dikurangi biaya langsung sesuai definisi owner | Jika datanya tersedia |
| Lost Reason | Alasan utama lead/order tidak lanjut | Jika lost |
| Follow-up Status | `Belum`, `Terjadwal`, `Selesai`, atau `Tidak perlu` | Sepanjang proses |
| Owner / PIC | Orang yang menangani lead | Saat lead masuk |
| Offline Conversion Status | `Belum siap`, `Siap upload`, `Uploaded`, atau `Tidak eligible` | Setelah tracking disiapkan |
| Offline Conversion Uploaded At | Waktu hasil bisnis dikirim kembali ke Ads | Setelah upload nyata |
| Notes | Fakta operasional penting, tanpa klaim atau asumsi | Bila perlu |

## Lost Reason Vocabulary

Gunakan satu alasan utama yang paling dekat dengan fakta:

- `Harga`
- `MOQ`
- `Jadwal tidak masuk`
- `Respons lambat`
- `Desain belum siap`
- `Stok / bahan`
- `Lokasi / pengiriman`
- `Memilih vendor lain`
- `Tidak ada balasan`
- `Kebutuhan batal`
- `Di luar layanan`
- `Lainnya - jelaskan di Notes`

## Measurement Mapping

| Funnel stage | Source field | Ads role |
| --- | --- | --- |
| WhatsApp dibuka | Website event | Secondary technical signal |
| Lead qualified | `Qualified = Ya` | Primary business conversion candidate |
| Quotation terkirim | `Quote Status = Terkirim` | Sales progression |
| Sale | `Sale Status = Won` | Converted lead / final outcome |
| Revenue | `Revenue IDR` | ROAS and customer value |
| Gross profit | `Gross Profit IDR` | Profitability and scaling decision |

## Setup Still Required

- Owner/user memilih platform final dan PIC input/review.
- Aulia menjalankan satu test lead sampai `Won` atau `Lost`.
- Google tag dan conversion action memakai ID asli setelah akun disiapkan.
- Offline conversion import baru diuji setelah consent, identifier, conversion
  name, time, dan format upload disetujui.

Google Ads tetap `OFF` sampai seluruh launch gate lulus.
