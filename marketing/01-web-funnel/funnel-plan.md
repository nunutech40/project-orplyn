# Web Funnel Plan

## Status

Funnel fokus-konversi sudah diimplementasikan di `website/`. Homepage sekarang memakai tiga offer utama, FAQ komersial, NAP yang terlihat, dan form WhatsApp yang membedakan skala satuan/batch serta mengikuti MOQ produk. Section jalur order yang repetitif sudah dihapus dari homepage; pilihan skala tetap tersedia di form.

Nomor WhatsApp nyata, aturan order owner, domain final, Cloudflare, dan HTTPS sudah aktif. Website sengaja `noindex`. Blocker acquisition launch adalah tracking ID, Search Console/Google tag, lead log operasional, approval range harga/proof, uji WhatsApp nyata, GBP/NAP, dan final manual QA.

## Funnel Name

Lead-gen web funnel untuk Orplyn.

## Main Conversion

Pada level website: valid brief yang membuka WhatsApp dan membawa Lead ID. Pada level bisnis: qualified WhatsApp lead, quotation, dan sale. Event teknis tidak boleh disamakan dengan hasil bisnis.

## Secondary Conversion

View service page atau portfolio, buka Google Maps, dan interaksi lain yang menunjukkan consideration. Secondary conversion tidak boleh menggantikan qualified lead sebagai KPI utama.

## Recommended Page Structure

1. Hero literal: sablon dan kaos custom oleh Orplyn + Ciputat + satuan sampai batch.
2. Tiga offer: event/community batch, DTF/custom satuan, dan kaos polos satuan/grosir.
3. Proof hasil produksi langsung setelah offer utama.
4. Alasan memilih Orplyn dalam bahasa customer.
5. Alur order dan FAQ harga/MOQ/bahan/teknik/lead time.
6. Capability sekunder: clothing brand, bordir, jersey, dan merchandise.
7. Brief WhatsApp terstruktur.
8. NAP, Maps, jam, dan pickup workshop.

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

- Main landing page fokus tiga offer dengan pilihan skala satuan/batch di form: implemented.
- Local SEO intent Ciputat/Tangerang Selatan: implemented pada homepage dan metadata.
- High-intent DTF/satuan: implemented pada `/layanan/sablon-dtf-satuan`.
- Use-case service pages: implemented untuk event, clothing brand, bordir/seragam, jersey, totebag, dan kaos polos.

## Tracking Needed

- Valid brief event `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`: implemented.
- Lead ID unik dan source tracking dengan UTM, landing page, `gclid`, `gbraid`, dan `wbraid`: implemented.
- Google Ads `lead started` conversion hook: implemented, belum dikonfigurasi dan harus secondary.
- Qualified lead, quote, sale, dan revenue: belum ada lead log atau CRM.
- Phone click/WhatsApp click: bisa digunakan sebagai secondary signal setelah nomor nyata diuji.
- Scroll depth: belum diimplementasikan dan bukan prioritas sebelum sales tracking.
