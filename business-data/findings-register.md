# Orplyn Findings Register

Last updated: 18 Juli 2026

Dokumen ini memisahkan fakta, observasi publik, hipotesis, gap, dan keputusan. Tujuannya agar strategi tidak berubah menjadi klaim tanpa bukti.

## Status Evidence

- **Confirmed:** dinyatakan langsung oleh owner/user atau tercatat pada sumber bisnis resmi.
- **Observed:** terlihat pada channel/aset publik pada tanggal tertentu, tetapi dapat berubah.
- **Hypothesis:** dugaan kerja yang perlu diuji dengan data atau eksperimen.
- **Unknown:** informasi belum tersedia dan tidak boleh dianggap fakta.
- **Decision:** pilihan strategi yang dibuat berdasarkan evidence saat ini.

## Confirmed Facts

### F-001 - Identitas dan lokasi

- Finding: brand publik menggunakan nama `ORPLYN KAOS POLOS DAN SABLON CUSTOM` dan berlokasi di Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419.
- Source: Google Maps yang diberikan user dan `business-data/location.json`.
- Marketing implication: local SEO, Google Business Profile, NAP consistency, dan keyword Ciputat/Tangerang Selatan harus menjadi fondasi.

### F-002 - Channel Instagram

- Finding: Instagram resmi adalah `@orplyn.id` dengan descriptor `ORPLYN | Apparel & Print Studio`.
- Source: URL Instagram dari user dan `business-data/social-profiles.json`.
- Marketing implication: gunakan nama, descriptor, lokasi, dan link website secara konsisten.

### F-003 - Portofolio layanan

- Finding: sumber dan aset menunjukkan kaos polos, DTF, sablon manual, plastisol, discharge, rubber, puff, high density, foil, glitter, bludru, fullprint, bordir, jersey, totebag, dan kebutuhan apparel lain.
- Source: 20 folder Google Drive dan bio Instagram.
- Limit: folder aset menunjukkan capability/proof, bukan otomatis harga, MOQ, kapasitas, atau ketersediaan saat ini.

### F-004 - Aset produksi

- Finding: tersedia 156 file, sekitar 606 MB, dalam 20 kategori, termasuk dua logo transparan.
- Source: arsip lokal `assets/raw/google-drive/` pada 16 Juli 2026.
- Marketing implication: gunakan hasil produksi nyata sebagai trust proof; klasifikasi teknik perlu diverifikasi sebelum membuat klaim detail.

### F-005 - Model penjualan

- Finding: Orplyn melayani pesanan **satuan dan grosir**.
- Source: pernyataan owner yang disampaikan user pada 16 Juli 2026 dan formulir owner/admin yang diisi 17 Juli 2026.
- Detail baru: kaos polos dan DTF bisa 1 pcs; manual/plastisol, special ink, fullprint, dan totebag mulai 12 pcs; bordir/seragam dan jersey custom mulai 6 pcs. Batas grosir umum disebut 24 pcs, tetapi beberapa layanan memakai 6, 12, atau 100 pcs sebagai batas grosir.
- Limit: tier harga grosir detail dan approval publik untuk harga belum tersedia.
- Marketing implication: funnel, CRM, keyword, dan offer perlu memisahkan intent satuan dan grosir dengan rule per produk, bukan klaim umum yang sama untuk semua layanan.

### F-006 - Tujuan project

- Finding: objective utama adalah sales; conversion antara adalah qualified lead yang masuk ke WhatsApp.
- Source: brief user dan `marketing/00-brief/project-brief.md`.
- Marketing implication: optimasi harus sampai quotation, order, revenue, dan gross profit, bukan berhenti pada traffic atau WhatsApp click.

### F-007 - Funnel web lokal

- Finding: website lead-generation sudah berjalan lokal di OrbStack pada `http://localhost:3010` dengan landing page layanan, portfolio, form brief, SEO/schema, dan tracking hook.
- Source: `PROJECT-HANDOFF.md` dan test/runtime tanggal 16 Juli 2026.
- Limit: belum siap traffic publik karena domain, tracking ID, final owner approval untuk beberapa klaim komersial, dan end-to-end lead test belum selesai.

### F-008 - Kontak, order rule, dan operasional sales

- Finding: WhatsApp sales yang diberikan adalah `082317579311` dengan PIC Aulia, admin aktif Senin-Sabtu 08:00-19:00, workshop 08:00-17:00, DP 50%, area layanan seluruh Indonesia, dan pencatatan lead saat ini masih di WhatsApp.
- Source: `deliverables/owner-research/Orplyn - Form Owner Tahap 1.docx`, diisi 17 Juli 2026 oleh Aulia/Admin.
- Limit: checkbox owner approval belum ditandai; target maksimal first response dan format quotation belum dipilih; domain belum ada.
- Marketing implication: website lokal bisa dikonfigurasi untuk uji CTA WhatsApp nyata, tetapi public launch tetap menunggu domain, tracking, SOP follow-up, dan approval final.

### F-009 - Segmen dan customer voice awal

- Finding: segmen yang paling kuat menurut input owner/admin adalah event/komunitas; segmen ini sering order, repeat, bernilai Rp10 juta-Rp30 juta, dan termasuk omzet serta margin terbaik. Vendor juga repeat; individu/satuan sering sulit karena membandingkan harga dan spesifikasi belum jelas.
- Source: `deliverables/owner-research/Orplyn - Form Owner Tahap 2.docx`, diisi 17 Juli 2026, dan `deliverables/owner-research/Orplyn - Survey Customer.docx` responden C001.
- Customer voice: pelanggan butuh kualitas baik, harga sesuai budget, pilihan bahan/teknik yang jelas, dan katalog/pricelist/paket yang memudahkan estimasi.
- Limit: baru satu interview customer/lost lead; belum ada data order 90 hari, AOV, margin, atau close rate.
- Marketing implication: prioritas offer berikutnya adalah paket/range harga untuk event/komunitas dan DTF satuan, plus katalog bahan/jenis sablon yang membantu qualification tanpa menjanjikan harga palsu.

## Public Observations

### O-001 - Instagram snapshot

- Observed: bio publik menyebut kaos polos, sablon custom, hoodie, jersey, jaket, kemeja, DTF/manual, bordir, dan lokasi Ciputat/Tangerang Selatan.
- Snapshot date: 16 Juli 2026.
- Note: jumlah post/follower dan isi bio dapat berubah; cek ulang sebelum dipakai dalam laporan performa.

### O-002 - Breadth of techniques

- Observed: aset sangat kuat untuk menunjukkan variasi teknik dan tekstur hasil produksi.
- Risk: terlalu banyak nama teknik di komunikasi awal dapat membingungkan pembeli yang sebenarnya berpikir dari produk, quantity, deadline, dan use case.

### O-003 - Brand discoverability masih lemah

- Observed: website first-party Orplyn tidak muncul pada empat branded-query checks dan sample local-intent queries tanggal 16 Juli 2026.
- Source: SERP snapshot yang dirangkum di `marketing/07-market-research/market-landscape-2026-07-16.md`.
- Limit: hasil berubah menurut lokasi, waktu, perangkat, dan personalisasi; observasi ini tidak mengukur Maps rank atau market share.
- Marketing implication: domain publik, indexing, Google Business Profile, citation consistency, dan review merupakan acquisition foundation.

### O-004 - Kompetitor menjual kepastian dan convenience

- Observed: competitor pages menonjolkan price visibility, express production, tracking, real-time stock, reject guarantee, proof perusahaan, dan order satuan sampai massal.
- Source: public pages TKS Factory, Teespace, Rumah Sablon Cepat, Rafsakaos, Fame Production, dan benchmark lain pada 16 Juli 2026.
- Limit: public claims belum diverifikasi melalui mystery shopping.
- Marketing implication: klaim generik `murah`, `premium`, dan `cepat` tidak cukup; Orplyn perlu proof dan process clarity yang dapat dipertanggungjawabkan.

### O-005 - Basis prospect B2B lokal besar

- Observed: portal resmi EDC UMKM Tangerang Selatan menampilkan 79.319 pelaku UMKM dan 1.002 koperasi terdaftar pada snapshot 16 Juli 2026.
- Source: `https://edc.tangerangselatankota.go.id/`.
- Limit: count bersifat dinamis, tidak semua entitas aktif atau membutuhkan apparel, dan kualitas katalog masih terbatas.
- Marketing implication: local outbound dan partnership layak diuji selain inbound Search/Instagram.

### O-006 - Video relevan sebagai media trust

- Observed: laporan e-Conomy SEA 2025 menunjukkan fashion/accessories sebagai kategori terbesar dalam video commerce Indonesia dan pertumbuhan kuat seller/transaksi video.
- Source: Google, Temasek, dan Bain Indonesia e-Conomy SEA 2025.
- Limit: custom apparel production bukan retail video commerce; data ini tidak memprediksi conversion Orplyn.
- Marketing implication: uji video proof proses, hasil, QC, dan case study dengan qualified WA lead sebagai outcome.

## Working Hypotheses

### H-001 - Dua jalur intent lebih efektif

- Hypothesis: visitor satuan dan grosir membutuhkan pesan serta bukti yang berbeda.
- Satuan likely needs: kejelasan apakah 1 pcs diterima, kecepatan, proses praktis, lokasi/pickup, dan harga mulai.
- Grosir likely needs: tier harga, MOQ, kapasitas, konsistensi, sample/proof, lead time, QC, dan repeat order.
- Validation: owner survey, 90-day lead data, dan conversion rate per mode.

### H-002 - Use case lebih mudah dipahami daripada teknik

- Hypothesis: halaman berbasis kebutuhan seperti event, brand, seragam, jersey, dan merchandise akan mengonversi lebih baik daripada daftar tinta/mesin saja.
- Validation: search query, lead source, product requested, dan landing-to-qualified-lead rate.

### H-003 - Segmen kelompok mungkin bernilai tinggi

- Hypothesis: event, komunitas, sekolah/kampus, kantor, dan brand berpotensi menghasilkan order lebih besar daripada pembeli satuan.
- Status: belum terbukti karena belum ada AOV, margin, close rate, dan repeat rate per segmen.
- Guardrail: jangan mengalokasikan budget besar hanya berdasarkan asumsi ini.

### H-004 - Process clarity dapat menjadi positioning yang defensible

- Hypothesis: check design, rekomendasi teknik, proof approval, QC, production update, dan aturan komplain yang jelas akan lebih meyakinkan daripada klaim kualitas generik.
- Validation: conversion test, objection tracking, review language, on-time rate, reject rate, dan repeat rate.
- Guardrail: fitur operasional hanya boleh dijanjikan setelah SOP dan owner approval tersedia.

### H-005 - Outbound lokal dapat menambah demand incremental

- Hypothesis: UMKM, kantor, event organizer, sekolah/kampus, komunitas, agency, designer, dan vendor non-apparel dapat menghasilkan demand yang tidak sedang mencari vendor di Google.
- Validation: pilot 50 account dengan contact, positive reply, meeting, quote, sale, gross profit, dan cycle per vertical.
- Guardrail: hindari broadcast massal dan prioritaskan outreach berdasarkan kebutuhan yang terlihat.

### H-006 - Satuan dapat menjadi entry offer ke batch

- Hypothesis: sample/test print satuan dapat mengakuisisi creator atau clothing brand sebelum produksi batch.
- Validation: sample-to-batch rate, repeat, gross profit, dan beban admin.
- Guardrail: jangan mensubsidi satuan bila unit economics dan operational load tidak sehat.

## Critical Unknowns

1. Domain final.
2. Target maksimal first response dan SOP follow-up detail.
3. Format quotation final.
4. Tier harga grosir detail dan approval publik untuk harga mulai.
5. Kapasitas produksi aman per minggu/bulan.
6. Teknik yang dikerjakan sendiri vs melalui partner.
7. Omzet, order rata-rata, AOV, margin, CAC sehat, dan komposisi satuan vs grosir.
8. Baseline qualified lead rate, quote rate, sale rate, dan lost reasons dari data nyata.
9. Bukti yang sudah mendapat izin publik: review, testimoni, logo customer, case study, foto workshop/tim, dan owner video.
10. Search Console, Analytics/Tag Manager, Google Ads conversion, dan CRM/lead log.
11. Keyword volume, CPC, Maps grid ranking, dan external share of voice.
12. Response dan economics dari outbound per vertical B2B.

## Strategic Implications Of Satuan + Grosir

1. **Positioning:** Orplyn tidak perlu memilih salah satu secara prematur. Gunakan payung `Apparel & Print Studio`, lalu pisahkan kebutuhan satuan dan produksi/grosir pada offer.
2. **Website:** quantity sudah membantu kualifikasi, tetapi label mode beli dan copy satuan/grosir baru boleh diperjelas setelah rule per produk terisi.
3. **SEO:** pisahkan intent seperti `sablon kaos satuan Ciputat` dari `vendor/grosir sablon kaos Tangerang Selatan`.
4. **Ads:** campaign/ad group satuan dan grosir harus punya keyword, landing copy, dan target CPA berbeda karena nilai order berbeda.
5. **WhatsApp:** setiap lead perlu tag `Satuan`, `Grosir`, atau `Belum Jelas`.
6. **Measurement:** laporkan volume dan revenue per mode; jangan menyimpulkan grosir lebih baik hanya karena order value besar tanpa melihat margin, cycle, dan kapasitas.
7. **Content:** satuan membutuhkan contoh praktis dan cepat; grosir membutuhkan batch proof, QC, konsistensi, packing, dan repeat production.

## Current Decisions

### D-001 - Lead-generation funnel, bukan checkout langsung

Harga bergantung pada produk, quantity, bahan, artwork, dan deadline. Brief WhatsApp tetap menjadi conversion utama sampai aturan harga cukup standar untuk checkout.

### D-002 - Commercial claims menunggu owner

Harga, MOQ, lead time, kapasitas, garansi, dan proof tidak dipublikasikan sebelum dikonfirmasi.

### D-003 - Customer profiling memakai tiga sumber

Persona dan segment priority akan disusun dari:

1. jawaban owner;
2. data lead/order 90 hari;
3. survey/wawancara pelanggan dan lost leads.

### D-004 - Strategy memakai evidence internal dan eksternal

Owner answers menjelaskan kemampuan dan economics internal. Market research menjelaskan demand signal, competitor pattern, dan channel opportunity. Keduanya harus dibandingkan dengan actual lead/order outcomes sebelum budget dinaikkan.

### D-005 - Growth work dikelola sebagai experiment backlog

Market recommendation diterjemahkan menjadi hypothesis, gate, primary metric, guardrail, dan stop rule di `marketing/07-market-research/growth-experiment-backlog.md`. Ide tidak otomatis menjadi komitmen campaign.

## Documentation Protocol

Setiap temuan baru harus mencatat:

- tanggal;
- tipe evidence;
- sumber;
- batas/ketidakpastian;
- implikasi marketing;
- keputusan atau eksperimen berikutnya.

Jawaban owner yang terkonfirmasi dipindahkan ke `business-data/owner-answers.md`. Hipotesis tetap berada di register ini sampai tervalidasi. Jika sumber bertentangan, gunakan pernyataan owner terbaru dan catat perubahan, bukan menghapus riwayat diam-diam.
