# Web Funnel Plan

## Status

Funnel fokus-konversi sudah diimplementasikan di `website/`. Homepage sekarang memakai dua jalur order, tiga offer utama, FAQ komersial, NAP yang terlihat, dan form WhatsApp yang mengikuti MOQ produk.

Nomor WhatsApp nyata dan aturan order owner sudah dipasang. Staging sengaja `noindex`. Blocker public launch adalah domain final, tracking ID, Search Console/Google tag, lead log operasional, approval range harga/proof, uji WhatsApp nyata, dan final manual QA.

## Funnel Name

Lead-gen web funnel untuk Orplyn.

## Main Conversion

Pada level website: valid brief yang membuka WhatsApp dan membawa Lead ID. Pada level bisnis: qualified WhatsApp lead, quotation, dan sale. Event teknis tidak boleh disamakan dengan hasil bisnis.

## Secondary Conversion

View service page atau portfolio, buka Google Maps, dan interaksi lain yang menunjukkan consideration. Secondary conversion tidak boleh menggantikan qualified lead sebagai KPI utama.

## Recommended Page Structure

1. Hero literal: jasa sablon kaos custom + Ciputat + satuan sampai batch.
2. Dua jalur: satuan/test print dan produksi/batch.
3. Tiga offer: DTF/custom satuan, event/community batch, kaos polos satuan/grosir.
4. Capability sekunder: clothing brand, bordir, jersey, dan merchandise.
5. Proof gallery dari produksi nyata.
6. Segmen: event/community dan vendor/reseller/brand.
7. Alur order dan FAQ harga/MOQ/bahan/teknik/lead time.
8. Brief WhatsApp terstruktur dan NAP workshop.

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

`Cek MOQ & estimasi`

Alternative CTA:

`Tanya Sablon Custom`

`Cek Harga Kaos Polos`

`Kirim Desain untuk Dicek`

## Page Variants To Consider

- Main landing page fokus dua jalur/tiga offer: implemented.
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
