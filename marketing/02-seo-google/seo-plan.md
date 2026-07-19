---
document_id: ORPLYN-SEO-001
document_type: active_operational_plan
status: on_page_active_external_setup_deferred
primary_segment: event_and_community
active_decision_id: D-012
last_updated: 2026-07-19
---

# SEO Google Plan

## Status

Technical foundation sudah tersedia: high-intent homepage, halaman DTF satuan, halaman event/community, kaos polos, service pages, metadata, canonical config, image alt, FAQ, LocalBusiness/Service/FAQ schema, sitemap, robots, dan NAP terlihat. Nomor WhatsApp dan jam sudah nyata. Final domain `https://orplyn.id` sudah aktif melalui Cloudflare, tetapi masih sengaja `noindex` melalui aplikasi dan Caddy.

Yang masih pending adalah Search Console, Google tag/Analytics, lead log sampai sale, Google Business Profile, konsistensi nama bisnis, review autentik, proof/offer approval, manual QA, launch config, dan perubahan `NEXT_PUBLIC_ALLOW_INDEXING=true` hanya saat launch gate lulus.

Per arahan user 19 Juli 2026, account setup, GBP, tag, dan indexing dikerjakan kemudian. Pekerjaan aktif sekarang adalah message hierarchy, on-page event/community, internal link, proof architecture, factual content, dan technical verification yang tidak membutuhkan akun eksternal.

Audit terbaru dan urutan eksekusinya tersedia di `marketing/02-seo-google/seo-acquisition-audit-2026-07-18.md`.

Checklist operasional dengan prioritas, PIC, dan kolom bukti selesai sudah tersedia di `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`. Dokumen itu menjadi runbook pelaksanaan; file ini tetap menjadi arah strategi SEO internal.

SERP snapshot 16 Juli 2026 tidak menemukan website first-party Orplyn pada empat branded-query checks dan sample local-intent queries. Hasil ini bukan market-share measurement, tetapi memperkuat prioritas domain, indexing, GBP, citation, dan review. Detail: `marketing/07-market-research/market-landscape-2026-07-16.md`.

## SEO Goal

Membuat Orplyn relevan untuk pencarian jasa sablon kaos event/komunitas di Ciputat, Tangerang Selatan, Jakarta Selatan, dan sekitarnya. DTF satuan serta kaos polos tetap mempunyai route sendiri untuk inbound organic intent, tetapi tidak menjadi content/campaign focus aktif.

## Priority SEO Work

### Active now, no external setup

1. Jadikan homepage dan `/layanan/kaos-event-komunitas` event-first serta saling terhubung jelas.
2. Pertahankan server-rendered title, description, H1, canonical, schema, FAQ, NAP, dan factual order rules.
3. Siapkan commercial proof component yang hanya merender record publishable.
4. Perbaiki image/LCP delivery, mobile readability, form usability, internal navigation, lint, build, dan route tests.
5. Dapatkan approval owner untuk proof, price anchor, dan material visual sebelum menambah claim.

### Deferred setup

1. Verifikasi Search Console Domain Property dan pasang Google tag.
2. Optimalkan Google Business Profile, real-world business name, category, dan konsistensi NAP.
3. Buat launch config yang menghapus application dan Caddy `noindex` secara bersamaan.
4. Izinkan indexing dan verifikasi homepage, event/community, DTF satuan, serta kaos polos.
5. Tambahkan review/testimoni yang sah dan case study produksi.
6. Perluas content hanya berdasarkan query Search Console, pertanyaan customer, dan case study nyata.

## Seed Keywords

- vendor kaos komunitas Tangsel
- bikin kaos event Tangerang Selatan
- jasa sablon kaos event Ciputat
- kaos panitia custom Tangsel
- jasa sablon kaos Ciputat
- jasa sablon kaos Tangerang Selatan

Secondary route research, bukan active campaign focus:

- kaos polos Ciputat;
- sablon DTF Tangerang Selatan;
- bordir kaos Ciputat;
- sablon plastisol Ciputat.

## Research-Backed Intent Clusters

Volume dan CPC belum tersedia; cluster berikut berasal dari query serta competitor pages yang muncul pada snapshot pasar.

### Satuan

- sablon kaos satuan Ciputat
- sablon kaos satuan Tangerang Selatan
- kaos custom 1 pcs
- DTF satuan Tangsel
- sablon kaos cepat jadi

### Grosir dan produksi

- sablon kaos grosir Tangerang Selatan
- sablon kaos lusinan Ciputat
- konveksi kaos Tangerang Selatan
- produksi kaos custom Tangsel

### Use case

- vendor kaos event dan komunitas
- kaos panitia custom
- seragam kantor dan polo bordir
- produksi clothing brand
- jersey custom tim
- totebag merchandise perusahaan

### Research intent

- harga sablon kaos
- DTF vs plastisol
- bahan kaos 24s vs 30s
- ukuran area sablon
- minimum order dan waktu produksi

Research-intent content harus memberi jawaban nyata dan mengarah ke `Kirim desain untuk dicek`, bukan artikel generik yang hanya mengulang keyword.

## Priority Route Map

- `/` -> jasa sablon kaos custom Ciputat/Tangerang Selatan.
- `/layanan/sablon-dtf-satuan` -> sablon DTF satuan dan kaos custom 1 pcs.
- `/layanan/kaos-event-komunitas` -> vendor kaos event, panitia, komunitas, sekolah/kampus.
- `/layanan/kaos-polos` -> kaos polos satuan dan grosir Ciputat/Tangsel.

Halaman lain tetap indexable setelah launch, tetapi tidak mendapat bobot navigasi yang sama sampai data menunjukkan demand dan economics yang sehat.

## Google Business Profile Checklist

Gunakan checklist Word di `deliverables/launch-readiness/Orplyn - Checklist GBP SEO Tracking.docx`. Launch gate utamanya adalah ownership owner, nama/alamat/pin/kategori yang akurat, nomor nyata, jam operasional, domain final, foto yang sudah lolos izin, review autentik, Search Console, sitemap, dan verifikasi indexing.

Dokumen yang sama mencakup Google tag, `generate_lead`, click-to-WhatsApp, UTM/GCLID, lead log sampai sale/revenue, Tag Assistant, Google Ads conversion, serta enhanced conversions for leads. Jangan menandai tracking selesai hanya karena tag terpasang; satu test lead harus bisa ditelusuri end-to-end.

Google menyatakan local result terutama ditentukan oleh relevance, distance, dan prominence. Profile completeness, category relevance, website consistency, photos, links, dan authentic reviews menjadi prioritas; tidak ada cara membayar untuk ranking organik lokal. Source: `https://support.google.com/business/answer/7091`.

## AI Discovery Priority

`llms.txt` dipertahankan sebagai ringkasan mesin, tetapi bukan workstream acquisition utama. Jangan membuat schema atau file AI tambahan sebagai pengganti domain, indexing, internal link, media nyata, GBP, review, dan konten berbasis pengalaman produksi.
