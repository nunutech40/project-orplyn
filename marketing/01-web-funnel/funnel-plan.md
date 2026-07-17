# Web Funnel Plan

## Status

Versi awal funnel sudah diimplementasikan di `website/` dan berjalan lokal melalui OrbStack. Blocker public launch adalah nomor WhatsApp, domain, commercial facts, tracking ID, dan final manual QA.

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
- Phone click: tidak digunakan karena nomor publik belum tersedia.
- Scroll depth: belum diimplementasikan dan bukan prioritas sebelum sales tracking.
