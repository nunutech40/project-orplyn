---
document_id: ORPLYN-WEB-FUNNEL-001
document_type: active_operational_plan
status: source_implementation_complete_manual_qa_pending
primary_segment: event_and_community
active_decision_id: D-012
last_updated: 2026-07-19
---

# Web Funnel Plan

## Status

Funnel fokus-konversi sudah diimplementasikan, diselaraskan ke D-012, dan live pada release `20260719T082000Z-3890f1b`. Homepage serta landing event/community memimpin acquisition; DTF satuan dan kaos polos tetap findable sebagai entry offer sekunder. Form WhatsApp membedakan satuan/batch, mengikuti MOQ produk, memulai konteks dari use case serta tanggal pakai/target, dan mengirim `days_to_target` pada event tracking tanpa menjadikannya deadline promise.

Nomor WhatsApp nyata, aturan order owner, domain final, Cloudflare, dan HTTPS sudah aktif. Website sengaja `noindex`. External setup ditunda oleh user sampai source website selesai dirapikan. Launch blocker tetap tracking ID, Search Console/Google tag, lead log operasional, approval range harga/proof, uji WhatsApp nyata, GBP/NAP, indexing, dan final manual QA.

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

`Minta estimasi`

Secondary actions:

`Lihat hasil produksi` atau link detail layanan yang relevan.

## Page Variants To Consider

- Main landing page event-first dengan DTF/kaos polos sebagai entry offer sekunder: implemented.
- Local SEO intent Ciputat/Tangerang Selatan: implemented pada homepage dan metadata.
- High-intent DTF/satuan: implemented pada `/layanan/sablon-dtf-satuan`.
- High-intent event/community SEO: implemented pada `/layanan/kaos-event-komunitas` dengan navigasi dan konten mendalam.
- Event/community Ads: implemented secara lokal pada `/lp/kaos-event-komunitas` dengan navigasi minim, satu CTA primer `Minta estimasi`, dan trust bridge yang tidak merender tanpa bukti publishable.
- Use-case service pages: implemented untuk clothing brand, bordir/seragam, jersey, totebag, dan kaos polos sebagai secondary routes.

## Tracking Needed

- Valid brief event `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`: implemented.
- Lead ID unik dan source tracking dengan UTM, landing page, `gclid`, `gbraid`, dan `wbraid`: implemented.
- Google Ads `lead started` conversion hook: implemented, belum dikonfigurasi dan harus secondary.
- Qualified lead, quote, sale, dan revenue: belum ada lead log atau CRM.
- Phone click/WhatsApp click: bisa digunakan sebagai secondary signal setelah nomor nyata diuji.
- Scroll depth: belum diimplementasikan dan bukan prioritas sebelum sales tracking.

## Commercial Proof Contract

- Website source menyediakan model data dan reusable section untuk case study/review transaksi.
- Ads landing menyediakan empat gate terpisah untuk bukti on-time, jumlah event, portfolio berkonteks, dan testimoni. Seluruh collection masih kosong.
- Hanya record `publishable` yang boleh dirender.
- Satu record publishable minimal memiliki use case, fakta order yang diizinkan, outcome yang dapat dibuktikan, media berizin, wording approved, dan source evidence internal.
- Quote customer bersifat opsional dan membutuhkan izin kutip terpisah.
- Ketika belum ada record publishable, section tidak dirender. Website tidak boleh menampilkan dummy review, skeleton testimoni, atau angka placeholder.
- Visual portfolio yang sudah ada tetap menjadi production proof, tetapi tidak boleh dilabeli bestseller, repeat, on-time, atau jumlah besar tanpa evidence dan izin.

## Pre-Ads Website Definition

Source website dianggap siap untuk tahap setup berikutnya bila event message match, navigation, form, proof gating, factual order rules, mobile layout, privacy, NAP, attribution hooks, lint, build, smoke tests, dan route checks lulus. Ini tidak mengizinkan Ads berjalan sebelum setup dan launch gate selesai.
