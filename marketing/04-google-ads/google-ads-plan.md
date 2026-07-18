# Google Ads Plan

## Status

Belum diluncurkan dan sengaja ditunda. Landing pages dan conversion hook sudah disiapkan. Nomor WhatsApp, admin, area prioritas, target lead, budget trial, produk prioritas, dan aturan order awal sudah dikonfirmasi dari form owner 17 Juli 2026.

Launch gate belum lulus karena domain, Google tag/conversion, Search Console, approval copy publik, capacity/economics, lead log, dan uji WhatsApp end-to-end belum selesai.

## When To Start

Google Ads sebaiknya mulai setelah:

- landing page sudah live di domain milik owner;
- nomor WhatsApp nyata sudah diuji end-to-end;
- conversion tracking aktif dan terverifikasi;
- keyword, offer, MOQ, lead time, dan area layanan sudah jelas;
- admin siap membalas dan mencatat lead dengan cepat;
- qualified lead, quotation, sale, dan revenue dapat dihubungkan ke sumber campaign.

Owner inputs for pilot:

- Area prioritas: Jabodetabek.
- Produk prioritas: kaos polos, kaos custom, jasa sablon.
- Target qualified lead: 30-50 per bulan.
- Target customer baru: 10-20 per bulan.
- Budget trial: Rp100.000-Rp700.000 per bulan.
- Durasi pilot: 1-2 bulan.
- Pause rule: hentikan/kurangi Ads jika produksi atau admin overload.

## Campaign Priority

1. Search campaign untuk keyword high intent.
2. Local campaign/Performance Max nanti setelah asset dan conversion data cukup.
3. Remarketing setelah traffic website cukup.

Search tidak diluncurkan sebagai satu campaign campur-aduk. Berdasarkan market research 16 Juli 2026, pisahkan minimal:

1. `Search - Satuan/DTF - Ciputat/Tangsel`;
2. `Search - Bulk/Event - Tangsel/Jaksel`;
3. `Search - Corporate/Uniform`;
4. `Search - Product` hanya untuk category dengan margin dan capacity sehat.

Satuan dan grosir harus mempunyai search terms, landing copy, qualification, target CPA, dan value yang berbeda.

## Search Ad Themes

- Jasa sablon kaos Ciputat/Tangsel.
- Kaos polos custom.
- Bordir kaos/topi.
- Vendor kaos event/komunitas/kantor.
- Totebag custom.

Initial budget owner masih kecil untuk banyak campaign. Saat launch pertama, pilih 1-2 theme paling jelas saja, misalnya `kaos custom/sablon DTF satuan` dan `kaos event/komunitas grosir`, lalu scale setelah ada data qualified lead.

## Landing Page Requirement

Setiap ad group idealnya mengarah ke halaman yang paling relevan, bukan homepage umum.

- Event/komunitas -> `/layanan/kaos-event-komunitas`.
- Clothing brand/sablon manual -> `/layanan/produksi-clothing-brand`.
- Bordir/seragam -> `/layanan/bordir-seragam`.
- Jersey -> `/layanan/jersey-custom`.
- Totebag/merchandise -> `/layanan/totebag-merchandise`.
- Kaos polos -> `/layanan/kaos-polos`.

## Conversion

Primary business conversion:

- Qualified WhatsApp lead.
- Quotation sent.
- Sale and revenue untuk evaluasi akhir.

Primary technical conversion signal:

- Valid website brief yang membuka WhatsApp dan memicu `generate_lead`.
- Google Ads `conversion` setelah ID dan label dikonfigurasi.

Secondary:

- direction click ke Google Maps;
- service atau portfolio engagement;
- WhatsApp click hanya sebagai secondary signal, bukan ukuran sales utama.

Jika volume memungkinkan, import qualified lead atau sale sebagai offline conversion agar bidding tidak belajar dari lead sampah.

## 2026 Measurement Direction

Google merekomendasikan `Qualified Lead` atau `Converted Lead` sebagai goal untuk enhanced conversions for leads. Website sudah menyimpan `gclid`; berikutnya lead log perlu menyimpan lead/order ID, source, status, conversion time, revenue, dan value sebelum upload melalui Google Ads Data Manager.

Mulai raw `generate_lead` sebagai signal teknis. Jangan menjadikannya satu-satunya primary bidding goal setelah volume qualified/converted lead sudah stabil.

Current references:

- `https://support.google.com/google-ads/answer/2998031`
- `https://support.google.com/google-ads/answer/16782203`

## Search-Term Guardrail

Review dan exclude intent yang tidak relevan seperti tutorial, alat/mesin, tinta mentah, lowongan, kursus, template gratis, dan wilayah yang tidak dilayani. Negative keyword dibuat dari search-term data aktual, bukan daftar panjang yang berisiko memblokir calon pembeli.
