---
document_id: ORPLYN-WEB-FUNNEL-001
document_type: active_operational_plan
status: source_implementation_complete_manual_qa_pending
primary_segment: event_and_community
active_decision_id: D-012
last_updated: 2026-07-22
---

# Web Funnel Plan

## Status

Funnel fokus-konversi sudah diimplementasikan dan diselaraskan ke D-012. Public release aktif adalah `orplyn-web:20260722T050533Z-8eae04a`. Homepage memperkenalkan keseluruhan Orplyn, lalu menempatkan event/community sebagai featured offer pertama. LP `/lp/kaos-event-komunitas` tetap sempit untuk Ads dan membawa proof stack mandiri agar visitor tidak perlu pindah ke homepage. CTA membuka WhatsApp langsung dengan template editable, Lead ID, dan attribution; detail lanjutan dikumpulkan Aulia di dalam chat.

Nomor WhatsApp nyata, aturan order owner, domain, Cloudflare, HTTPS, Google Ads tag, dan conversion label lead-start sudah aktif. Website sengaja `noindex`. Launch blocker tersisa: Search Console, GBP/NAP correction, lead log operasional, offer/capacity/admin approval, end-to-end WhatsApp verification, indexing decision, dan final responsive manual QA.

## Funnel Name

Lead-gen web funnel untuk Orplyn.

## Main Conversion

Pada level website: valid brief yang membuka WhatsApp dan membawa Lead ID. Pada level bisnis: qualified WhatsApp lead, quotation, dan sale. Event teknis tidak boleh disamakan dengan hasil bisnis.

## Secondary Conversion

View service page atau portfolio, buka Google Maps, dan interaksi lain yang menunjukkan consideration. Secondary conversion tidak boleh menggantikan qualified lead sebagai KPI utama.

## Recommended Page Structure

1. Hero literal: Orplyn + kaos custom event/community + Ciputat, tanpa outcome deadline yang belum terbukti.
2. Event/community sebagai featured acquisition offer.
3. DTF/custom satuan dan kaos polos sebagai supporting entry offers, bukan tiga kartu yang sama dominan.
4. Proof hasil produksi nyata langsung setelah offer.
5. Commercial proof terverifikasi hanya bila evidence, permission, dan public wording sudah approved.
6. Alasan memilih dan alur order dimulai dari jumlah, desain, tanggal pakai, serta lokasi; bukan daftar teknik.
7. Brief WhatsApp terstruktur dengan tanggal pakai/target selesai.
8. FAQ harga/MOQ/bahan/teknik/lead time dan capability sekunder.
9. NAP, Maps, jam, pickup workshop, privasi, dan CTA yang konsisten.

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

`Cek kebutuhan & minta estimasi`

Secondary actions:

`Lihat hasil produksi` atau link detail layanan yang relevan.

## Page Variants To Consider

- Main landing page event-first dengan DTF/kaos polos sebagai entry offer sekunder: implemented.
- Local SEO intent Ciputat/Tangerang Selatan: implemented pada homepage dan metadata.
- High-intent DTF/satuan: implemented pada `/layanan/sablon-dtf-satuan`.
- High-intent event/community SEO: implemented pada `/layanan/kaos-event-komunitas` dengan navigasi dan konten mendalam.
- Event/community Ads: live pada `/lp/kaos-event-komunitas` dengan navigasi minim, satu CTA primer `Cek kebutuhan & minta estimasi`, direct WhatsApp template, proof yang sesuai konteks, FAQ, dan `noindex`.
- Use-case service pages: implemented untuk clothing brand, bordir/seragam, jersey, totebag, dan kaos polos sebagai secondary routes.

## Tracking Needed

- Valid brief event `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`: implemented.
- Lead ID unik dan source tracking dengan UTM, landing page, `gclid`, `gbraid`, dan `wbraid`: implemented.
- Google Ads `lead started` conversion: live dengan `AW-374076115` dan label yang diberikan user; tetap secondary sampai kualitas lead dan sale dapat dikembalikan ke Ads.
- Qualified lead, quote, sale, dan revenue: belum ada lead log atau CRM.
- Phone click/WhatsApp click: bisa digunakan sebagai secondary signal setelah nomor nyata diuji.
- Scroll depth: belum diimplementasikan dan bukan prioritas sebelum sales tracking.

## Commercial Proof Contract

- Website source menyediakan model data dan reusable section untuk case study/review transaksi.
- Ads landing memakai portfolio event/panitia dan bukti manual/customer yang sudah tersedia serta berizin, tanpa mengubah DTF menjadi manual atau menambah outcome. Gate outcome seperti on-time, jumlah event total, kapasitas, dan garansi tetap kosong sampai evidence lengkap.
- Hanya record `publishable` yang boleh dirender.
- Satu record publishable minimal memiliki use case, fakta order yang diizinkan, outcome yang dapat dibuktikan, media berizin, wording approved, dan source evidence internal.
- Quote customer bersifat opsional dan membutuhkan izin kutip terpisah.
- Ketika belum ada record publishable, section tidak dirender. Website tidak boleh menampilkan dummy review, skeleton testimoni, atau angka placeholder.
- Visual portfolio yang sudah ada tetap menjadi production proof, tetapi tidak boleh dilabeli bestseller, repeat, on-time, atau jumlah besar tanpa evidence dan izin.

## Pre-Ads Website Definition

Source website dianggap siap untuk tahap setup berikutnya bila event message match, navigation, form, proof gating, factual order rules, mobile layout, privacy, NAP, attribution hooks, lint, build, smoke tests, dan route checks lulus. Ini tidak mengizinkan Ads berjalan sebelum setup dan launch gate selesai.
