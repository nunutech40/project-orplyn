# Google Ads Plan

## Status

Belum diluncurkan dan sengaja ditunda. Landing pages per intent, form terqualifikasi, Lead ID, attribution, dan secondary conversion hook sudah disiapkan.

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

Budget trial Rp100 ribu-Rp700 ribu per bulan tidak layak dibagi ke empat campaign sejak hari pertama. Mulai dengan satu Search campaign dan satu offer yang telah dipilih berdasarkan gross profit, close rate, capacity, dan deadline risk. Kandidatnya:

1. `Search - DTF Satuan - Ciputat/Tangsel`; atau
2. `Search - Kaos Event/Komunitas - Tangsel/Jaksel`.

Jangan menjalankan keduanya sekaligus pada budget bawah. Setelah volume qualified lead cukup, baru pisahkan lane, search terms, landing copy, target CPA, dan conversion value.

## Search Ad Themes

- Jasa sablon kaos Ciputat/Tangsel.
- Kaos polos custom.
- Bordir kaos/topi.
- Vendor kaos event/komunitas/kantor.
- Totebag custom.

Initial budget owner masih kecil untuk banyak campaign. Saat launch pertama, pilih satu theme paling jelas antara `kaos custom/sablon DTF satuan` atau `kaos event/komunitas grosir`, lalu scale setelah ada data qualified lead.

## Landing Page Requirement

Setiap ad group idealnya mengarah ke halaman yang paling relevan, bukan homepage umum.

- Event/komunitas -> `/layanan/kaos-event-komunitas`.
- DTF/kaos custom satuan -> `/layanan/sablon-dtf-satuan`.
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

Secondary technical conversion signal:

- Valid website brief yang membuka WhatsApp dan memicu `whatsapp_brief_submit`, `generate_lead`, serta `whatsapp_open`.
- Google Ads `lead started` conversion setelah ID dan label dikonfigurasi.
- Event memakai Lead ID sebagai `transaction_id` untuk membantu deduplikasi.

Consideration only:

- direction click ke Google Maps;
- service atau portfolio engagement;
- WhatsApp click hanya sebagai secondary signal, bukan ukuran sales utama.

Jika volume memungkinkan, import qualified lead atau sale sebagai offline conversion agar bidding tidak belajar dari lead sampah.

## 2026 Measurement Direction

Google merekomendasikan `Qualified Lead` atau `Converted Lead` sebagai goal untuk enhanced conversions for leads. Website menyimpan `gclid`, `gbraid`, `wbraid`, source, campaign, landing page, dan Lead ID dalam brief. Lead log berikutnya perlu menyimpan phone/identifier yang sesuai kebijakan, status, conversion time, revenue, gross profit, value, dan consent sebelum upload melalui Google Ads Data Manager.

Karena form website saat ini tidak meminta email atau nomor telepon, enhanced conversions berbasis user-provided data belum boleh dianggap selesai. Mulai dari click identifier dan lead log yang rapi; aktifkan first-party data matching hanya setelah consent, field, penyimpanan, dan kebijakan datanya siap.

Mulai raw `generate_lead` sebagai signal teknis. Jangan menjadikannya satu-satunya primary bidding goal setelah volume qualified/converted lead sudah stabil.

Current references:

- `https://support.google.com/google-ads/answer/11021502`
- `https://support.google.com/google-ads/answer/11459091`
- `https://support.google.com/google-ads/answer/16782203`

## Search-Term Guardrail

Review dan exclude intent yang tidak relevan seperti tutorial, alat/mesin, tinta mentah, lowongan, kursus, template gratis, dan wilayah yang tidak dilayani. Negative keyword dibuat dari search-term data aktual, bukan daftar panjang yang berisiko memblokir calon pembeli.
