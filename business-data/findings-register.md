# Orplyn Findings Register

Last updated: 20 Juli 2026

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

### F-007 - Funnel web dan domain final

- Finding: website lead-generation berjalan lokal di OrbStack pada `http://localhost:3010` dan publik di `https://orplyn.id` dengan landing page layanan, portfolio, form brief, SEO/schema, serta tracking hook. Domain, Cloudflare DNS, edge HTTPS, origin HTTPS, dan redirect `www` sudah aktif.
- Source: `PROJECT-HANDOFF.md` dan verification 18-19 Juli 2026.
- Limit: website publik tetap sengaja `noindex`; tracking ID, lead log, owner approval untuk beberapa klaim komersial/proof, admin readiness, dan end-to-end lead test belum selesai.

### F-008 - Kontak, order rule, dan operasional sales

- Finding: WhatsApp sales yang diberikan adalah `082317579311` dengan PIC Aulia, admin aktif Senin-Sabtu 08:00-19:00, workshop 08:00-17:00, DP 50%, area layanan seluruh Indonesia, dan pencatatan lead saat ini masih di WhatsApp.
- Source: `deliverables/owner-research/Orplyn - Form Owner Tahap 1.docx`, diisi 17 Juli 2026 oleh Aulia/Admin.
- Limit: checkbox owner approval belum ditandai; target maksimal first response dan format quotation belum dipilih. Domain sudah aktif, tetapi indexing, tracking, SOP follow-up, proof, dan approval final masih pending.
- Marketing implication: website dapat diuji dengan WhatsApp nyata, tetapi acquisition launch tetap menunggu lead log, tracking, SOP follow-up, proof, dan approval final.

### F-009 - Segmen dan customer voice awal

- Finding: segmen yang paling kuat menurut input owner/admin adalah event/komunitas; segmen ini sering order, repeat, bernilai Rp10 juta-Rp30 juta, dan termasuk omzet serta margin terbaik. Vendor juga repeat; individu/satuan sering sulit karena membandingkan harga dan spesifikasi belum jelas.
- Source: `deliverables/owner-research/Orplyn - Form Owner Tahap 2.docx`, diisi 17 Juli 2026, dan `deliverables/owner-research/Orplyn - Survey Customer.docx` responden C001.
- Customer voice: pelanggan butuh kualitas baik, harga sesuai budget, pilihan bahan/teknik yang jelas, dan katalog/pricelist/paket yang memudahkan estimasi.
- Limit: baru satu interview customer/lost lead; belum ada data order 90 hari, AOV, margin, atau close rate.
- Marketing implication: prioritas offer berikutnya adalah paket/range harga untuk event/komunitas dan DTF satuan, plus katalog bahan/jenis sablon yang membantu qualification tanpa menjanjikan harga palsu.

### F-010 - Owner direction: foreground sablon manual

- Finding: pada 20 Juli 2026 owner meminta kata-kata offer Orplyn menonjolkan sablon manual.
- Source: arahan langsung owner, dicatat di `marketing/07-market-research/owner-direction-manual-printing-2026-07-20.md`.
- Interpretation: sablon manual menjadi sudut offer utama di dalam fokus acquisition event/komunitas; DTF satuan dan kaos polos tetap inbound sekunder.
- Detail confirmed: manual mencakup plastisol, rubber/pasta, discharge, high density, glow in the dark, glitter/foil, flocking/beludru, dan superwhite. MOQ 12 pcs untuk 1 warna atau 24 pcs untuk desain lebih dari 1 warna; estimasi normal 3-7 hari kerja bergantung jumlah dan antrean. DTF tetap dipisahkan sebagai teknik digital.
- Limit: arahan ini belum membuktikan manual lebih unggul, lebih awet, lebih cepat, lebih aman deadline, atau bergaransi. Kapasitas angka aman, cutoff, QC/rework, izin proof, dan wording harga publik masih perlu dikonfirmasi.
- Marketing implication: kandidat lokal memakai intent `sablon manual untuk event/komunitas`, dengan Public-Claim Gate tetap aktif dan harga indikatif Rp50.000-Rp90.000/pcs tidak dipublikasikan dahulu.

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

### O-007 - Google Business Profile belum konsisten dengan funnel baru

- Observed: snapshot Google Maps publik 18 Juli 2026 menampilkan telepon `0811-9719-953`, website `https://lynk.id/orplyn.id`, dan jam Sabtu `07.00-23.00`.
- Contrast: website/data owner memakai WhatsApp `0823-1757-9311`, domain `https://orplyn.id`, jam admin `08.00-19.00`, dan jam workshop `08.00-17.00`.
- Source: public Google Maps place endpoint untuk Place ID `ChIJU3Dd1W7vaS4RTctFBDXmEcA`, `business-data/owner-answers.md`, dan website production data.
- Limit: nomor lama mungkin masih aktif dan jam GBP mungkin memiliki fungsi berbeda; owner harus mengonfirmasi sebelum data diubah.
- Marketing implication: rapikan ownership, telepon, website, jam, kategori, dan services sebelum mengirim traffic atau review request ke GBP.

### O-008 - Review publik belum dapat diarsipkan dari snapshot

- Observed: snapshot publik menyediakan tombol `Beri rating dan ulas`, tetapi tidak mengembalikan teks review atau aggregate rating yang dapat diarsipkan.
- Limit: ini tidak membuktikan jumlah review pasti nol; dashboard owner/PIC GBP tetap menjadi source of truth untuk inventory review.
- Marketing implication: audit review dari dashboard harus dilakukan sebelum memilih review untuk website atau menjalankan outreach.

### O-009 - Hero homepage terlalu padat pada ponsel

- Observed: feedback eksternal yang dikirim user pada 18 Juli 2026 menyatakan first screen homepage berisi terlalu banyak kata pada ponsel dan belum cepat menjelaskan Orplyn itu apa. Informasi pada service card dinilai lebih nyaman karena lebih ringkas dan terstruktur.
- Source: dua screenshot percakapan dan tampilan mobile yang diberikan user.
- Limit: baru satu reviewer eksternal dan belum merupakan usability study terukur.
- Marketing implication: first viewport harus menjawab kategori bisnis dalam satu H1 literal, memakai supporting copy pendek, dan memberi CTA yang dipahami tanpa istilah internal seperti MOQ.

### O-010 - Urutan pesan belum mengikuti nilai segmen

- Observed: data owner menempatkan event/komunitas sebagai segmen dengan frekuensi, omzet, margin, dan repeat paling kuat, sedangkan customer satuan lebih sering membandingkan harga dan batal. Versi homepage 18 Juli menempatkan pesan `mulai 1 pcs` dan kartu DTF satuan lebih dahulu.
- Source: `business-data/owner-answers.md`, source homepage, dan screenshot mobile live 19 Juli 2026.
- Limit: belum ada AOV, close rate, margin, dan qualified-lead rate per landing page untuk mengukur dampak urutan pesan secara langsung.
- Marketing implication: homepage tetap melayani satuan dan batch, tetapi event/komunitas harus menjadi offer pertama; traffic iklan satuan dan batch tetap diarahkan ke landing page masing-masing.

### O-011 - CTA dan copy proses terlalu terfragmentasi

- Observed: website memakai `Cek estimasi`, `Minta estimasi`, `Bahas kebutuhan`, `Mulai brief`, dan `Kirim brief`, sementara konsep jalur/brief/teknik/jumlah diulang pada beberapa section homepage. Sticky CTA juga tampil bersamaan dengan CTA hero pada ponsel.
- Source: source website, HTML production, dan screenshot full-page mobile 19 Juli 2026.
- Limit: belum ada event-level CTA click rate atau usability test lima responden untuk mengukur setiap friction point.
- Marketing implication: gunakan satu CTA utama, ganti istilah internal dengan bahasa customer, tampilkan sticky CTA setelah hero, dan potong section yang mengulang keputusan yang sama.

### O-012 - Dropdown form terlihat rusak karena dependency tersembunyi

- Observed: user tidak dapat membuka dropdown produk dan jumlah pada form homepage. Source menunjukkan produk diberi atribut `disabled` sebelum skala pesanan dipilih, sedangkan jumlah diberi `disabled` sebelum produk dipilih; urutan wajib ini tidak terlihat pada potongan layar sehingga kedua input tampak tidak berfungsi.
- Source: screenshot dan laporan langsung user pada 19 Juli 2026, source `QuoteBuilder`, serta HTML production sebelum perbaikan.
- Limit: laporan berasal dari satu pengguna, tetapi atribut `disabled` mengonfirmasi adanya hambatan fungsional yang deterministik.
- Marketing implication: input utama tidak boleh menjadi dead end. Gunakan produksi batch sebagai default komersial, biarkan dropdown produk dan jumlah selalu dapat dibuka, lalu terapkan MOQ secara reaktif dan jelaskan bila jumlah perlu dipilih ulang.

### O-013 - Klaim dasar Orplyn adalah category parity

- Observed: sampel live TKS Factory, Teespace, Rumah Sablon Cepat, Seragam Bangsa, Ciptaloka, Sablon Indonesia, dan Merch Madness sudah menonjolkan kombinasi harga/MOQ, satuan hingga massal, konsultasi, workshop, sampel, QC/garansi, tracking, proses transparan, serta corporate proof.
- Source: `marketing/07-market-research/differentiation-product-strategy-2026-07-19.md` dan official competitor pages yang dicatat di dalamnya.
- Limit: klaim kompetitor belum diverifikasi independen dan sampel tidak mencakup seluruh pasar.
- Marketing implication: `harga kompetitif`, `berkualitas`, `tepat waktu`, `bisa satuan sampai banyak`, dan `banyak teknik` tetap harus didukung, tetapi tidak boleh diperlakukan sebagai unique reason to buy.

### O-014 - Nilai customer terletak pada pengurangan ketidakpastian

- Observed: customer Orplyn paling sering bertanya harga, MOQ, bahan, teknik, dan waktu; C001 takut bahan/sablon tidak sesuai, merasa konsultasi paling membantu, tetapi bingung karena banyak pilihan dan meminta katalog/pricelist yang lebih mudah dibandingkan. Event/community dan vendor juga merupakan segmen repeat.
- Source: `business-data/owner-answers.md`, customer C001, dan competitor pattern 19 Juli 2026.
- Limit: voice of customer baru bergantung pada satu survey terisi dan input owner/admin; emotional job serta repeat-workflow value masih hipotesis.
- Marketing implication: Orplyn perlu memproduksikan consultation menjadi rekomendasi terbatas, spesifikasi yang disetujui, update status, dan referensi repeat order, bukan hanya chat bebas.

### O-015 - Dokumen lama masih membawa prioritas yang sudah superseded

- Observed: brief awal, Ads plan lama, manual queue, handoff, dan beberapa audit historis masih dapat dibaca seolah DTF, event, serta kaos polos adalah tiga fokus acquisition setara; manual queue juga masih menandai setup GBP sebagai pekerjaan pertama setelah user menundanya.
- Source: audit repository 19 Juli 2026 terhadap `AGENTS.md`, `PROJECT-HANDOFF.md`, `business-data/`, `marketing/`, `deliverables/`, dan source website.
- Limit: evidence pasar dan decision log lama tetap dipertahankan sebagai sejarah; tidak semua penyebutan tiga offer berarti instruksi aktif.
- Marketing implication: AI membutuhkan router kanonik, document status, supersession rule, dan satu manual `NEXT`. Active direction sekarang adalah event/community; M-06 menjadi manual `NEXT`, sedangkan setup eksternal berstatus `LATER` sampai user melanjutkannya.

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

### H-007 - Commercial proof lebih kuat daripada galeri bestseller generik

- Hypothesis: asset yang menunjukkan use case prioritas, quantity, proses, hasil, dan repeat context akan lebih meyakinkan daripada foto yang dipilih hanya berdasarkan likes atau estetika.
- Evidence direction: owner sudah menempatkan event/komunitas sebagai segmen paling sering order, repeat, omzet besar, dan margin baik; exact bestseller product/technique belum tersedia.
- Validation: data order 3-6 bulan, izin publikasi, landing-to-qualified-lead rate, dan pertanyaan customer terhadap proof yang ditampilkan.
- Guardrail: jangan melabeli foto sebagai bestseller, order besar, atau repeat tanpa data dan izin.

### H-008 - Spec-first dan repeat-ready dapat meningkatkan retensi

- Hypothesis: customer repeat dan partner mengeluarkan effort lebih kecil serta lebih mungkin reorder ketika final specification order lama dapat diambil kembali dan hanya perubahan yang perlu dikonfirmasi.
- Validation: E-11 pada order yang menghasilkan repeat opportunity; ukur retrieval, changed fields, clarification rounds, repeat requote time, repeat sale, revenue, gross profit, dan feedback customer.
- Primary outcome: repeat order, repeat revenue, dan repeat gross profit.
- Limit: production record pada first order tidak membuktikan acquisition value atau repeat convenience sebelum reorder benar-benar terjadi.
- Guardrail: jangan menjual `repeat lebih cepat`, `tidak perlu jelaskan ulang`, `consistent`, atau outcome retensi lain sebelum E-11 membuktikannya.

### H-009 - Pengambilalihan risiko deadline dapat menjadi wedge akuisisi event

- Hypothesis: PIC event/community lebih mungkin memilih Orplyn ketika proses dimulai dari tanggal acara dan Orplyn mampu membuat feasibility, cut-off, approval, risiko, serta status pesanan lebih jelas.
- Source direction: owner feedback `owner-feedback-evolution-lens-2026-07-19.md`; ini framing prioritas dan bukan bukti capability atau izin klaim publik.
- Validation: E-12 pada lima order event nyata setelah capacity, cut-off, rush-order, approval, QC/rework, dan PIC operasional disetujui.
- Primary outcome: qualified-event-lead-to-sale, revenue, gross profit, actual completion, on-time outcome, dan feedback PIC.
- Guardrail: jangan mengklaim `aman dari drama H-1`, `tepat waktu`, `no drama`, `slot aman`, atau padanan outcome sebelum pilot, proof, permission, dan owner approval lulus.

## Critical Unknowns

Item account setup di bawah tetap launch gate, tetapi sengaja ditunda oleh instruksi user 19 Juli 2026.

1. Konfirmasi dan perbaiki perbedaan telepon, website, serta jam Google Business Profile terhadap website/data owner.
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
13. Jumlah/rating review GBP saat ini, link request resmi, dan review/testimoni yang sudah mendapat izin kutip.
14. Lima order paling representatif dalam 3-6 bulan terakhir beserta produk, teknik, quantity, repeat status, aset, dan izin publikasi.

## Strategic Implications Of Satuan + Grosir

1. **Positioning:** satuan dan grosir tetap dua lane operasional, tetapi D-012 sudah memilih event/community sebagai satu fokus acquisition. `Apparel & Print Studio` tetap payung brand, bukan alasan membagi campaign.
2. **Website:** quantity dan mode order membantu qualification; homepage memimpin dengan event/community, sedangkan DTF satuan dan kaos polos tetap route inbound sekunder.
3. **SEO:** pisahkan intent seperti `sablon kaos satuan Ciputat` dari `vendor/grosir sablon kaos Tangerang Selatan`.
4. **Ads:** selama D-012 aktif, pilot hanya event/community. Pemisahan campaign satuan/grosir baru relevan setelah baseline event sehat dan owner membuat decision baru.
5. **WhatsApp:** setiap lead perlu tag `Satuan`, `Grosir`, atau `Belum Jelas`.
6. **Measurement:** laporkan volume dan revenue per mode; jangan menyimpulkan grosir lebih baik hanya karena order value besar tanpa melihat margin, cycle, dan kapasitas.
7. **Content:** proof event/community menjadi prioritas aktif. Konten satuan tetap dapat melayani inbound, tetapi tidak mengambil cadence utama sampai fokus berubah.

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

### D-006 - WhatsApp meminta review, Google menjadi tujuan utama

WhatsApp dipakai untuk meminta feedback setelah order selesai. Customer diarahkan ke link review resmi Google Business Profile dan bebas menulis pengalaman apa adanya. Tidak ada request lima bintang, script wajib, review gating, atau insentif. Testimoni WhatsApp hanya dipakai sebagai proof website/content setelah disensor dan diberi izin terpisah.

### D-007 - Pilihan foto mengikuti commercial priority

Hero, landing, dan case study memprioritaskan order/use case yang paling relevan dengan target sales, memiliki proof kuat, serta mendapat izin. Likes dan visual appeal tetap dipertimbangkan, tetapi tidak menggantikan data order, repeat, margin, intent, dan hak publikasi. Event/community batch menjadi prioritas awal; exact bestseller tetap harus dikonfirmasi dari data owner/order.

### D-008 - Mobile hero mengutamakan category clarity

Keputusan awal 18 Juli memakai H1 literal `Jasa sablon kaos custom di Ciputat`, satu supporting message tentang order 1 pcs dan batch, serta CTA `Minta estimasi` dan `Lihat layanan`. Keputusan ini menyelesaikan kepadatan awal, lalu disempurnakan oleh D-009 setelah review brand, audience priority, dan keseluruhan alur copy.

### D-009 - Brand, offer priority, dan CTA memakai satu sistem copy

Status: historical implementation step; equal three-offer presentation was superseded by D-013, while the standardized CTA and plain-language rules remain active.

Homepage memperkenalkan Orplyn sebagai tempat sablon dan kaos custom, menempatkan event/komunitas sebagai offer pertama, serta mempertahankan satuan sebagai pilihan yang tetap terlihat. CTA utama di seluruh funnel memakai `Minta estimasi`; sticky CTA baru muncul setelah hero. Istilah internal seperti `brief`, `jalur`, dan `ditindaklanjuti` diganti dengan bahasa customer. Funnel lanes dan buyer paths di homepage dihapus karena mengulang service cards; proof ditempatkan langsung setelah tiga offer utama. Range harga, review, dan case study tetap menunggu M-06/M-07 karena tidak boleh dikarang.

### D-010 - Form tidak memakai dropdown yang terkunci

Homepage dan halaman kontak memakai `Produksi batch` sebagai skala awal agar sesuai dengan prioritas komersial dan produk dapat langsung dipilih. Dropdown produk serta jumlah tetap aktif; pilihan jumlah disaring setelah produk diketahui, dan kombinasi di bawah MOQ dikosongkan dengan pesan yang menjelaskan minimum terkait. Landing page layanan tetap memakai skala dan produk bawaan masing-masing.

### D-011 - Diferensiasi dibangun dari production clarity dan repeatability

Orplyn tidak mengklaim keunikan dari harga kompetitif, kualitas, kecepatan, konsultasi, banyak teknik, atau jangkauan satuan-batch karena seluruhnya umum di kategori. Product direction internal awal adalah `spec-first, repeat-ready production`: kebutuhan diterjemahkan menjadi rekomendasi terbatas, production specification disetujui sebelum produksi, milestone dicatat, dan final spec dapat dipakai sebagai referensi repeat order. Arah ini belum menjadi klaim publik. Pada 19 Juli 2026, D-012 mempersempit perannya menjadi retention mechanism, bukan acquisition wedge.

### D-012 - Akuisisi dan retensi dipisahkan berdasarkan owner evolution lens

Akuisisi dikonsentrasikan pada satu segmen, event/komunitas, dengan demand generation sebagai prioritas karena pipa owner hanya sekitar 2-5 chat baru per minggu. H-009/E-12 menguji apakah date-first intake dan pengendalian risiko deadline layak menjadi reason to buy pertama. Retensi memakai H-008/E-11 untuk menguji saved specification dan repeat-ready workflow. Semua calon outcome copy tetap hipotesis dan dilarang masuk ke website, GBP, WhatsApp, quotation, content, atau Ads sebelum gate terkait lulus.

### D-013 - Website factual event-first dan proof memakai publication gate

Instruksi user 19 Juli 2026 mengizinkan homepage, landing event, metadata, schema, navigation, dan WhatsApp intake diselaraskan ke event/community tanpa outcome claim. Date/use-case dapat diminta lebih awal karena itu input factual. DTF satuan dan kaos polos tetap route pendukung. Commercial proof hanya dirender dari `website/app/lib/commercial-proofs.ts` setelah record lolos evidence, redaction, permission, wording, serta owner approval; array kosong tidak menampilkan placeholder publik. Setup GBP, Search Console, tag, indexing, dan Ads tetap ditunda tanpa menghapus launch gate.

## Documentation Protocol

Setiap temuan baru harus mencatat:

- tanggal;
- tipe evidence;
- sumber;
- batas/ketidakpastian;
- implikasi marketing;
- keputusan atau eksperimen berikutnya.

Jawaban owner yang terkonfirmasi dipindahkan ke `business-data/owner-answers.md`. Hipotesis tetap berada di register ini sampai tervalidasi. Jika sumber bertentangan, gunakan pernyataan owner terbaru dan catat perubahan, bukan menghapus riwayat diam-diam.
