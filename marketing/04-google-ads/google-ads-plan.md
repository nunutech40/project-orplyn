---
document_id: ORPLYN-GOOGLE-ADS-001
document_type: deferred_operational_plan
status: deferred_until_launch_gate
primary_segment: event_and_community
active_decision_id: D-015
last_updated: 2026-07-21
---

# Google Ads Plan

## Status

Belum diluncurkan dan sengaja ditunda. Domain final serta HTTPS sudah aktif; local-only Ads landing, Lead ID, attribution, lead-log skeleton, dan secondary conversion hook sudah disiapkan. Source candidate belum dipush atau dideploy.

Launch gate belum lulus karena Google tag/conversion, Search Console/indexing, approval copy/proof publik, capacity/economics, lead log, admin readiness, dan uji WhatsApp end-to-end belum selesai. Per arahan user 19 Juli 2026, seluruh setup eksternal dikerjakan setelah dokumentasi dan website source selesai.

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

Budget trial Rp100 ribu-Rp700 ribu per bulan tidak layak dibagi ke banyak campaign. Selama D-012 aktif, pilot pertama hanya:

`Search - Kaos Event/Komunitas - Ciputat/Tangsel`

DTF satuan, kaos polos, corporate, bordir, jersey, dan merchandise tidak menjadi parallel campaign. Setelah event/community mempunyai baseline qualified lead, quote, sale, gross profit, dan capacity yang sehat, owner dapat membuat decision baru untuk membuka segment berikutnya.

## Search Ad Themes

- vendor kaos event Tangerang Selatan;
- jasa sablon kaos event Ciputat;
- kaos panitia custom;
- kaos komunitas custom;
- produksi kaos acara Ciputat/Tangerang Selatan.

Keyword final harus divalidasi melalui Keyword Planner dan search-term data saat setup. Jangan menambahkan keyword DTF/satuan ke campaign event hanya untuk mengejar volume.

## Landing Page Requirement

Pilot pertama mengarah ke campaign landing `/lp/kaos-event-komunitas`, bukan homepage umum atau halaman SEO. Ad, keyword, H1, order facts, proof, dan CTA WhatsApp harus memiliki message match yang sama.

- Event/komunitas Ads -> `/lp/kaos-event-komunitas`.
- Organic/local SEO event intent -> `/layanan/kaos-event-komunitas`.

Route DTF, clothing brand, bordir, jersey, totebag, dan kaos polos tetap tersedia untuk SEO/inbound tetapi tidak menjadi Ads destination selama fokus event belum selesai.

Campaign draft lokal, keyword exact/phrase, negative seed, bidding direction,
geo gate, dan pre-activation checklist berada di
`search-event-campaign-draft-2026-07-19.md`. Runbook setup akun, conversion
action, env, dan verifikasi pre-launch berada di
`google-ads-setup-runbook-2026-07-21.md`. Dokumen-dokumen tersebut tidak memberi
izin menyalakan Ads.

Google requires destinations to be functional, useful, crawlable, accessible, and easy to navigate. Source website readiness must therefore include working common-device routes, original Orplyn content, clear navigation, no forced redirect/download, mobile usability, and a final URL on `orplyn.id`. Official references:

- `https://support.google.com/adspolicy/answer/6368661`
- `https://support.google.com/google-ads/answer/7543502`
- `https://support.google.com/google-ads/answer/6167118`

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
