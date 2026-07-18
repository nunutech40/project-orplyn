# Web Funnel Plan

## Status

Versi awal funnel sudah diimplementasikan di `website/` dan berjalan lokal melalui OrbStack. Nomor WhatsApp, PIC admin, jam admin, aturan minimum order, lead time awal, area layanan, pembayaran, dan model satuan/grosir sudah dikonfirmasi dari form owner 17 Juli 2026.

Blocker public launch sekarang adalah domain final, tracking ID, Search Console/Google tag, approval copy publik, lead log, uji WhatsApp end-to-end, dan final manual QA.

## Funnel Name

Lead-gen web funnel untuk Orplyn.

## Main Conversion

Valid brief submission yang membuka percakapan WhatsApp. Pada level bisnis, conversion utama adalah qualified WhatsApp lead, bukan click mentah.

## Secondary Conversion

View service page atau portfolio, buka Google Maps, dan interaksi lain yang menunjukkan consideration. Secondary conversion tidak boleh menggantikan qualified lead sebagai KPI utama.

## Recommended Page Structure

1. Hero: jasa utama + lokasi + CTA WhatsApp.
2. Category selector: kaos polos, sablon custom, bordir, totebag, jersey, fullprint.
3. Proof gallery: hasil produksi dari asset yang sudah ada.
4. How to order: kirim desain, pilih bahan/teknik, hitung harga, produksi, kirim/ambil.
5. Use cases: komunitas, event, kantor, brand clothing, sekolah/kampus.
6. FAQ: minimum order, estimasi produksi, file desain, pembayaran, pengiriman.
7. Final CTA: konsultasi via WhatsApp.

## Confirmed Conversion Inputs

- WhatsApp sales: `6282317579311`.
- PIC/admin: Aulia.
- Jam admin: Senin-Sabtu 08:00-19:00.
- Workshop/toko: 08:00-17:00; customer boleh datang/pickup, janji disarankan tapi tidak wajib.
- Area layanan: seluruh Indonesia, dengan prioritas marketing Jabodetabek.
- Pembayaran: transfer bank dan marketplace.
- DP: 50%; pelunasan setelah produksi selesai dan sebelum barang dikirim.
- Data minimum quotation: jenis produk, jumlah, ukuran, bahan, jenis sablon, desain.

## CTA Direction

Primary CTA:

`Konsultasi & Hitung Harga via WhatsApp`

Alternative CTA:

`Tanya Sablon Custom`

`Cek Harga Kaos Polos`

`Kirim Desain untuk Dicek`

## Page Variants To Consider

- Main landing page semua layanan: implemented.
- Local SEO intent Ciputat/Tangerang Selatan: implemented pada homepage dan metadata.
- Use-case service pages: implemented untuk event, clothing brand, bordir/seragam, jersey, totebag, dan kaos polos.
- Technique-specific pages seperti DTF atau plastisol: hanya dibuat jika search demand dan informasi owner cukup.

## Tracking Needed

- Valid brief event `generate_lead`: implemented.
- Source tracking dengan UTM dan `gclid`: implemented.
- Google Ads conversion hook: implemented, belum dikonfigurasi.
- Qualified lead, quote, sale, dan revenue: belum ada lead log atau CRM.
- Phone click/WhatsApp click: bisa digunakan sebagai secondary signal setelah nomor nyata diuji.
- Scroll depth: belum diimplementasikan dan bukan prioritas sebelum sales tracking.
