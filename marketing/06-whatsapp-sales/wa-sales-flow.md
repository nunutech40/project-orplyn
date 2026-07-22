---
document_id: ORPLYN-WHATSAPP-SALES-001
document_type: active_operational_plan
status: workflow_defined_admin_setup_deferred
primary_segment: event_and_community
active_decision_id: D-012
last_updated: 2026-07-22
---

# WhatsApp Sales Flow

## Status

Website membuka WhatsApp langsung dengan template editable untuk jalur satuan atau event/batch. Template membawa Lead ID, use case, produk awal, source, campaign, landing page, dan click identifier; calon customer melengkapi jumlah, tanggal, desain, serta lokasi di dalam chat. Google Ads lead-start conversion ikut dikirim sebagai sinyal sekunder. Nomor WhatsApp sales: `6282317579311`; PIC Aulia; jam admin Senin-Sabtu 08:00-19:00; workshop 08:00-17:00.

Yang masih perlu dirapikan sebelum traffic publik: uji WhatsApp end-to-end dari semua CTA, target first response, pengoperasian lead log, dan template follow-up final. Schema serta CSV kosong sudah tersedia di `lead-log-schema.md` dan `../../deliverables/launch-readiness/Orplyn - Lead Log.csv`; belum ada data lead nyata di dalamnya.

## Goal

Mengubah chat masuk menjadi inquiry yang jelas dan bisa di-quote cepat.

## First Reply Template

Untuk lead dari website:

`Halo kak, terima kasih sudah kirim brief ke Orplyn. Lead ID [ID] sudah kami terima. Kami cek dulu MOQ, bahan/teknik, dan target waktunya ya. Untuk hitung final, boleh kirim desain serta rincian ukuran bila sudah ada?`

Jangan meminta ulang produk, jumlah, deadline, lokasi, atau status desain bila sudah ada di brief.

Untuk lead event/community, setelah membaca brief:

`Halo kak, terima kasih. Kami sudah catat kebutuhan acara dan tanggal pakainya. Tim akan cek dulu produk, jumlah, kesiapan desain, bahan, antrean, dan lokasi pengiriman sebelum memberi estimasi. Kalau rincian ukuran atau file desainnya sudah ada, boleh langsung dikirim ya.`

Template ini hanya menjanjikan pengecekan. Jangan menulis bahwa slot, deadline, atau ketepatan waktu sudah aman sebelum produksi mengonfirmasi feasibility dan rule owner terpenuhi.

Untuk chat tanpa brief:

Halo kak, terima kasih sudah menghubungi Orplyn. Boleh info kebutuhan kakak?

1. Dipakai untuk acara/kebutuhan apa dan tanggal pakainya kapan?
2. Jenis produknya apa? kaos custom, kaos polos, sablon DTF/manual, bordir, jersey, totebag, atau lainnya.
3. Jumlah pcs berapa?
4. Sudah ada desain/file dan rincian ukuran?
5. Bahan atau jenis produksi sudah ada pilihan? Kalau belum tahu, admin akan bantu cek opsi.
6. Lokasi pengiriman atau mau pickup di workshop?

Nanti kami bantu cek bahan, teknik produksi, estimasi harga, dan waktu pengerjaan.

## Lead Qualification

- Product type
- Quantity
- Size breakdown
- Material
- Design readiness
- Print area/technique
- Deadline
- Delivery location
- Budget range, if needed

Minimum data untuk quotation dari owner: jenis produk, jumlah, ukuran, bahan, jenis sablon, dan desain.

## Order Rules From Owner

- Kaos polos: satuan bisa, MOQ 1 pcs, grosir mulai 6 pcs, estimasi 2 hari.
- Sablon DTF: satuan bisa, MOQ 1 pcs, grosir mulai 12 pcs, estimasi 2 hari.
- Sablon manual/plastisol: satuan belum diarahkan, MOQ 12 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.
- Special ink: MOQ 12 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.
- Bordir/seragam: MOQ 6 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.
- Jersey custom: MOQ 6 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.
- Fullprint: MOQ 12 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.
- Totebag/merchandise: MOQ 12 pcs, grosir mulai 100 pcs, estimasi 3-7 hari.

Catatan publikasi: lead time tergantung antrean, jumlah, deadline, kesulitan desain, dan ketersediaan bahan. Jangan tampilkan sebagai janji mutlak sebelum owner approve copy final.

## Follow-Up Draft - Pending M-08

- Usulan awal adalah follow-up lead 1-2 kali dan menutup lead tanpa respons setelah 7 hari.
- Angka tersebut belum menjadi SLA aktif sampai owner dan Aulia menyetujuinya pada M-08.
- Lead log skeleton sudah dibuat; platform, PIC input/review, dan satu test lead nyata masih harus diaktifkan sebelum Ads jalan.

## Lead Log Minimum

Kontrak field lengkap dan vocabulary status berada di `lead-log-schema.md`.

Satu baris per Lead ID:

- `lead_id`, `created_at`, `first_response_at`, `response_minutes`;
- `source`, `medium`, `campaign`, `keyword`, `landing_page`;
- `gclid`, `gbraid`, `wbraid` bila ada;
- `lane`, `segment`, `use_case`, `product`, `quantity`, `event_date`, `days_to_event`, `deadline`, `location`;
- `qualified`, `qualification_reason`, `quotation_status`, `quotation_value`;
- `status`, `won_at`, `lost_reason`, `revenue`, `gross_profit`;
- `next_action`, `owner`, dan catatan singkat.

Definisi minimum:

- `Qualified`: produk, jumlah, deadline, lokasi, dan intent meminta estimasi cukup jelas serta order tidak langsung gugur karena MOQ/capacity.
- `Quoted`: estimasi/quotation konkret sudah dikirim.
- `Won`: customer menyetujui order dan melakukan komitmen pembayaran sesuai proses Orplyn.
- `Lost`: kebutuhan tidak lanjut; alasan wajib dipilih agar marketing bisa belajar.

## Closing Angle

- Bantu cek desain dulu.
- Beri estimasi harga mulai.
- Minta file desain untuk quote lebih akurat.
- Tawarkan opsi sesuai budget dan deadline.
- Untuk order event/komunitas, mulai dari tanggal pakai lalu jelaskan bahwa bahan, teknik, MOQ, jadwal, dan harga baru dipastikan setelah kebutuhan diperiksa.
- Untuk reseller/vendor, arahkan ke aturan grosir dan repeat order.

Retention note: saved specification atau `samakan seperti order sebelumnya` hanya digunakan bila prior Order ID benar-benar tersedia. Jangan menjadikannya alasan akuisisi untuk first-time lead.

## WhatsApp CTA Copy

- Konsultasi & hitung harga via WhatsApp.
- Kirim desain, nanti kami cek teknik dan estimasi biayanya.
- Tanya harga kaos custom sekarang.
