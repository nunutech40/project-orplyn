# SEO Acquisition Audit - 18 Juli 2026

## Tujuan Audit

Audit ini menilai website Orplyn sebagai mesin acquisition dengan tujuan bisnis:

`Search / Maps / AI discovery -> landing page -> brief -> WhatsApp -> qualified lead -> quotation -> sale`

Ranking, traffic, dan WhatsApp click bukan hasil akhir. Website dinilai dari kemampuannya mendatangkan intent yang relevan dan membantu Orplyn menghasilkan qualified lead, quotation, revenue, serta gross profit.

Audit mencakup source website, HTML publik, route dan redirect, metadata, schema, robots/sitemap, local SEO, keyword-intent fit, proof, offer, funnel WhatsApp, measurement, AI crawler, dan observasi SERP lokal.

## Executive Verdict

Website tidak perlu dibangun ulang dan teknologinya bukan penghambat SEO. HTML utama, title, description, H1, internal link, FAQ, dan structured data sudah dikirim dari server. Google tidak perlu menunggu interaksi JavaScript untuk membaca konten utama.

Fondasi teknis dan positioning tiga offer utama sudah baik. Namun website belum menjadi channel SEO yang aktif karena masih sengaja `noindex`, Search Console dan Google tag belum terpasang, GBP belum diaudit tuntas, serta proof dan offer komersial belum cukup kuat untuk menandingi bisnis lokal yang sudah memiliki review, detail proses, dan informasi harga yang lebih mudah dibandingkan.

Expert judgment:

- Technical SEO readiness: `8/10`.
- On-page intent untuk empat money page utama: `8/10`.
- Organic acquisition readiness hari ini: `4/10`.
- Alasan selisihnya: indexing, measurement, GBP/entity, proof, dan offer belum lulus gate.

Jangan membuka indexing hanya karena domain sudah hidup. Selesaikan P0, lalu buka indexing sekali dengan verification yang dapat dibuktikan.

## Scorecard

| Area | Status | Kesimpulan |
| --- | --- | --- |
| Server rendering | Strong | Konten penting tersedia pada raw HTML |
| HTTPS dan URL hygiene | Strong | Apex 200, HTTP ke HTTPS, www ke apex, trailing slash, dan 404 benar |
| Canonical dan metadata | Strong | Canonical unik dan metadata literal pada semua route utama |
| Crawl dan indexing | Blocked by design | Meta robots, robots.txt, dan proxy header masih menutup index |
| Primary keyword-intent map | Strong | Homepage, DTF satuan, event/community, dan kaos polos sudah terpisah |
| Secondary service depth | Partial | Empat service page masih memakai template dan proof yang dangkal |
| Local SEO/entity | Blocked | Alamat/pin cocok, tetapi telepon, website, dan jam GBP berbeda dari funnel; naming, ownership, services, dan review belum diaudit final |
| Offer clarity | Partial | MOQ dan lead time jelas; range harga dan paket belum disetujui owner |
| Production proof | Weak | Foto nyata tersedia, tetapi portfolio belum menjadi case study atau trust proof |
| WhatsApp qualification | Strong foundation | Brief menyaring lane, produk, jumlah, use case, deadline, desain, dan lokasi |
| Measurement sampai sale | Not operational | Code event tersedia, tetapi tag, lead log, dan offline qualified/converted lead belum aktif |
| Performance | Good base, image risk | TTFB dan bundle ringan; hero dan galeri belum responsive/modern image delivery |
| AI discovery | Blocked until launch | Google AI butuh page indexable; OAI-SearchBot dapat mencapai server tetapi saat ini terkena wildcard Disallow |

## Live Evidence

Pemeriksaan publik 18 Juli 2026:

- `https://orplyn.id` mengembalikan `HTTP/2 200`.
- `http://orplyn.id` mengembalikan `308` ke HTTPS.
- `https://www.orplyn.id` mengembalikan `301` ke apex.
- Trailing slash service route dikonsolidasikan dengan `308`.
- URL tidak dikenal mengembalikan `404`.
- Homepage raw HTML mempunyai title, description, canonical, H1, FAQ, LocalBusiness schema, dan konten offer.
- Semua 11 URL sitemap mengembalikan `200`, title, description, canonical, dan satu H1.
- Googlebot user-agent dan OAI-SearchBot user-agent sama-sama menerima `200`; crawler tidak diblokir WAF pada level request.
- Homepage masih mengirim meta `noindex, nofollow` dan header `X-Robots-Tag: noindex, nofollow`.
- `robots.txt` masih mempunyai wildcard `Disallow: /` dari aplikasi, ditambah Cloudflare Managed robots content.
- Tidak ditemukan Google tag, Google Ads tag, atau Search Console verification marker pada HTML publik.
- TTFB sample dari Indonesia sekitar `0.21s`; compressed HTML sekitar `13.6 KB`.
- CSS utama sekitar `6.7 KB` compressed dan JavaScript route homepage sekitar `100 KB` compressed.
- Hero JPEG sekitar `453 KB`; first service image sekitar `285 KB`; kaos polos image sekitar `251 KB`.
- Lint lulus tanpa error dengan 9 warning penggunaan raw `<img>`.
- Production build dan 6 rendered-HTML tests lulus.

PageSpeed Insights API tidak dapat dipakai saat audit karena public quota mengembalikan `429`. Domain baru juga belum mempunyai data lapangan Search Console/CrUX yang cukup. Karena itu audit tidak mengarang nilai LCP, INP, atau CLS.

## P0 Findings - Sebelum Indexing

### P0.1 Organic Search Saat Ini Nol Secara Desain

Tiga lapis kontrol masih menutup index:

1. `NEXT_PUBLIC_ALLOW_INDEXING=false` menghasilkan meta robots `noindex`.
2. `robots.txt` menghasilkan `Disallow: /` dan tidak mengiklankan sitemap.
3. Caddy menambahkan `X-Robots-Tag: noindex, nofollow`.

Impact:

- halaman tidak eligible untuk ranking organik;
- branded query belum dapat mengangkat domain baru;
- Google AI Overviews/AI Mode tidak dapat memakai page sebagai supporting link karena page harus indexed;
- OAI-SearchBot menerima HTTP 200, tetapi wildcard robots masih memintanya tidak crawl.

Recommendation:

- pertahankan kondisi ini sampai P0 lain selesai;
- buat release launch yang versioned, bukan edit spontan di server;
- ubah application indexing flag dan Caddy header dalam satu release window;
- setelah launch, pastikan `robots.txt` Allow dan mencantumkan sitemap;
- jalankan `./ops/production/verify-deployment.sh https://orplyn.id true`;
- gunakan URL Inspection untuk homepage dan tiga money page, lalu submit sitemap.

Operational risk:

Repo baru memiliki final-domain prelaunch Caddy file dan env example dengan indexing false. Launch config yang eksplisit perlu dibuat agar tidak ada kondisi aplikasi indexable tetapi proxy masih `noindex`, atau sebaliknya.

### P0.2 Search Console Dan Measurement Belum Aktif

Code mendukung Google tag, Search Console verification, attribution, Lead ID, GCLID, GBRAID, dan WBRAID. Production HTML belum mempunyai Google tag atau verification marker.

Impact:

- tidak ada data impressions, query, average position, index coverage, atau page performance;
- tidak ada baseline landing-to-brief conversion;
- tidak dapat membedakan SEO traffic yang menghasilkan qualified lead dari traffic kosong;
- Google Ads nanti berisiko belajar dari WhatsApp open, bukan customer yang layak di-quote.

Recommendation:

1. Buat Search Console Domain Property dan verifikasi via Cloudflare DNS.
2. Pasang Google tag/GA4 dan verifikasi page_view serta event dengan Tag Assistant/DebugView.
3. Pisahkan event teknis `whatsapp_brief_submit` atau `whatsapp_open` dari business outcome.
4. Jadikan `qualified_lead` dan `converted_lead` sebagai primary business conversions setelah lead log siap.
5. Rekam Lead ID yang sama dari form sampai qualified, quoted, won/lost, revenue, dan gross profit.

`generate_lead` sekarang ditembak tepat sebelum `window.open(wa.me)`. Itu membuktikan tombol/form bekerja, bukan membuktikan percakapan sampai, lead qualified, atau sale terjadi.

### P0.3 GBP Dan Entity Consistency Belum Final

Yang sudah benar:

- Maps short link mengarah ke nama `ORPLYN KAOS POLOS DAN SABLON CUSTOM` dan alamat Jl. Legoso Sel. II No.43.
- Alamat dan pin GBP sesuai dengan lokasi project.
- Website memakai nomor WhatsApp, jam admin/workshop, dan domain yang sudah diberikan owner/user.

Yang belum final:

- snapshot publik GBP masih menampilkan telepon `0811-9719-953`, website `https://lynk.id/orplyn.id`, dan jam Sabtu `07.00-23.00`, sedangkan funnel memakai WhatsApp `0823-1757-9311`, `https://orplyn.id`, jam admin `08.00-19.00`, dan jam workshop `08.00-17.00`;
- code memakai `Orplyn`, `Orplyn Apparel & Print Studio`, dan descriptor `Kaos Polos & Sablon Custom`;
- Maps memakai nama panjang all-caps;
- belum ada bukti audit ownership, primary category, secondary category, website field, WhatsApp, services, description, photos, review, dan hours/special hours;
- nama GBP harus mengikuti nama yang benar-benar digunakan pada signage dan branding, bukan hasil penambahan keyword.

Recommendation:

- owner tunjuk satu PIC GBP;
- konfirmasi apakah nomor `0811-9719-953` masih aktif dan fungsi jam `07.00-23.00` sebelum mengubah profile;
- setelah dikonfirmasi, samakan telepon, website `https://orplyn.id`, serta business hours pada GBP dan website;
- verifikasi nama pada signage, invoice, kemasan, dan branding nyata;
- gunakan real-world name yang sama pada GBP, website entity schema, Instagram, dan citation;
- pilih satu primary category yang paling menggambarkan bisnis, lalu categories tambahan secukupnya;
- masukkan tiga offer utama sebagai services beserta description yang faktual;
- hubungkan `https://orplyn.id` dan nomor WhatsApp;
- upload foto workshop, exterior/signage, process, team, dan hasil yang sudah berizin;
- minta review hanya dari customer nyata, tanpa diskon atau insentif, lalu balas secara spesifik.

Local ranking ditentukan terutama oleh relevance, distance, dan prominence. Untuk Orplyn, GBP completeness, review, web mentions, NAP consistency, serta proximity lebih prioritas daripada menambah puluhan artikel.

### P0.4 Proof Dan Offer Belum Cukup Untuk Menutup Keraguan Pembeli

Website sudah menjawab MOQ, bahan, teknik, waktu normal, lokasi, pembayaran, dan pengiriman. Ini jauh lebih kuat daripada company profile generik.

Gap terbesar:

- belum ada approved starting price/range;
- belum ada review/testimonial yang sah;
- belum ada case study dengan spesifikasi nyata;
- belum ada capacity/QC/rework statement yang disetujui;
- portfolio hanya berupa image grid dan label generik;
- belum ada bukti repeat order, customer segment, atau result yang boleh dipublikasikan.

Impact:

- buyer dengan high intent tetap harus masuk WhatsApp untuk mengetahui apakah budget-nya realistis;
- halaman kalah trust dari kompetitor yang menampilkan price guide, process, workshop detail, review, atau customer proof;
- lead volume dapat naik, tetapi qualification rate dan quote rate belum tentu ikut naik.

Recommendation:

Owner approve maksimum tiga anchor yang mudah dibandingkan:

1. DTF/kaos custom satuan dengan spesifikasi tetap.
2. Paket event/community pada quantity dan spesifikasi tetap.
3. Kaos polos satuan dan tier grosir.

Setiap anchor wajib menyebut faktor yang dapat mengubah harga dan bukan janji untuk semua order.

Ubah portfolio dari galeri menjadi proof library. Format minimum tiap case:

- kebutuhan/customer type tanpa membuka identitas yang tidak diizinkan;
- produk dan quantity range;
- bahan dan teknik;
- constraint desain/deadline;
- proses atau keputusan produksi;
- hasil akhir;
- lokasi/pengiriman bila relevan;
- 3-6 foto nyata;
- CTA ke offer yang sama.

## P1 Findings - 30 Hari Pertama

### P1.1 Empat Secondary Service Pages Masih Terlalu Template-Driven

Tujuh service URLs memakai satu template metadata dan content structure. Ini efisien secara engineering, tetapi empat secondary pages belum mempunyai cukup evidence unik.

Risk:

- title dan meta description hanya mengganti nama service;
- halaman rata-rata sekitar 350 kata termasuk navigation, footer, form, dan boilerplate;
- page belum menjawab decision criteria yang berbeda untuk bordir, jersey, clothing brand, atau merchandise;
- semua service diberi priority sitemap sama walau business priority dan proof tidak sama.

Recommendation:

- prioritaskan indexing dan internal-link weight pada `/`, DTF satuan, event/community, dan kaos polos;
- pertahankan secondary pages hanya bila fakta dan proof-nya benar;
- enrich satu per satu berdasarkan demand, margin, capacity, dan Search Console query;
- jangan membuat location doorway pages untuk setiap kota;
- jangan menambah blog atau service page hanya untuk mengejar keyword.

Unique content yang dibutuhkan per service:

- materials/variants;
- MOQ dan production rules;
- design file requirements;
- technique fit and limitations;
- realistic production timeline;
- care instructions bila telah dikonfirmasi;
- true case study;
- service-specific FAQ;
- approved price anchor.

### P1.2 Primary Metadata Bagus, Tetapi Service Intent Masih Bisa Lebih Literal

Homepage title/H1 sudah kuat dan tidak perlu dirombak. DTF dan kaos polos juga jelas.

Event page saat ini menggunakan title `Kaos Event & Komunitas di Ciputat`. Setelah data query tersedia, test title yang memasukkan intent vendor/jasa, misalnya konsep `Jasa Sablon Kaos Event & Komunitas di Ciputat`, tanpa keyword stuffing.

Contact H1 `Mulai dari brief. Lanjutkan di WhatsApp.` bagus untuk conversion, tetapi kurang literal sebagai local landing signal. Heading atau supporting copy dapat menyebut `Workshop Sablon Kaos Orplyn di Ciputat Timur` secara natural.

Jangan menebak title berdasarkan feeling setelah launch. Pakai impressions, CTR, query, dan position Search Console selama 28 hari sebelum test besar.

### P1.3 Portfolio Harus Menjadi Halaman Trust, Bukan Hanya Galeri

Live portfolio hanya sekitar 140 visible words dan sembilan item dengan category/title singkat. Foto nyata bernilai tinggi, tetapi search engine dan buyer tidak mendapat konteks proses, jumlah, material, tujuan, atau hasil.

Recommendation:

- buat portfolio index dengan filter use case/technique;
- buat individual case pages untuk case yang sudah disetujui;
- tambahkan captions yang konkret;
- hubungkan case ke relevant service page dan form yang sudah preselected;
- gunakan review customer hanya setelah izin.

### P1.4 Image Delivery Adalah Risiko Performa Terbesar

Yang sudah baik:

- ukuran elemen stabil melalui CSS/aspect ratio;
- alt text tersedia;
- image filenames deskriptif;
- JS/CSS relatif ringan;
- Cloudflare caching aktif.

Yang perlu diperbaiki:

- hero memakai CSS background JPEG sekitar 453 KB;
- first service image yang berada di bawah hero diset eager dan menambah sekitar 285 KB pada initial load;
- `<img>` tidak memakai `srcset`/`sizes`;
- belum ada AVIF/WebP variants;
- OG image sekitar 1.1 MB;
- lint memberi 9 warning raw image.

Recommendation:

- gunakan responsive `<picture>` atau image component/loader yang cocok dengan vinext runtime;
- sediakan AVIF/WebP dan fallback JPEG pada beberapa width;
- preload hanya hero yang benar-benar LCP;
- ubah first below-fold service image menjadi lazy bila visual QA membuktikan aman;
- targetkan hero transfer mobile yang jauh lebih kecil tanpa merusak detail hasil produksi;
- ukur LCP/INP/CLS dengan Search Console dan PageSpeed setelah traffic tersedia.

### P1.5 Structured Data Bagus, Tetapi Bukan Pengganti Entity Dan Proof

Yang sudah ada:

- `LocalBusiness`;
- `Service`;
- `FAQPage`;
- Offer catalog;
- address, telephone, hours, area served, sameAs, dan images.

Recommended cleanup:

- tambahkan stable `@id` untuk entity Orplyn dan referensikan provider yang sama dari service pages;
- tambah `WebSite` schema untuk preferred site name;
- pertimbangkan `BreadcrumbList` pada service pages;
- gunakan `hasMap` dan geo hanya setelah datanya dipastikan;
- pastikan schema business name sama dengan keputusan real-world name;
- validasi dengan Rich Results Test sebelum indexing.

FAQ visible tetap berguna bagi buyer, tetapi Google umumnya tidak menampilkan FAQ rich result untuk website komersial biasa. Jangan mengalokasikan banyak waktu untuk mengejar FAQ snippet.

### P1.6 AI Discovery Tidak Membutuhkan Workstream Terpisah

Google AI Overviews/AI Mode memakai fondasi Google Search. Page harus indexable, eligible for snippet, mudah ditemukan melalui internal links, mempunyai text yang berguna, media berkualitas, dan Business Profile yang akurat.

Cloudflare Managed robots saat ini:

- mengizinkan generic search use;
- memblokir GPTBot yang digunakan untuk model training;
- tidak menambahkan block khusus OAI-SearchBot;
- origin wildcard `Disallow: /` tetap memblokir semua crawler sampai launch.

Setelah launch:

- pastikan OAI-SearchBot explicitly or implicitly allowed;
- pertahankan GPTBot blocked bila owner tidak ingin content dipakai untuk training;
- jangan menganggap `llms.txt` sebagai ranking lever;
- fokus pada indexability, first-party evidence, GBP, review, citations, and helpful content.

## P2 Content Roadmap - Setelah Ada Data

Jangan memulai dengan 30 artikel generik. Buat content berdasarkan pertanyaan yang muncul pada lead log dan Search Console:

1. Faktor harga sablon kaos: quantity, material, area, colors, technique, artwork, deadline.
2. DTF vs plastisol untuk order satuan dan batch.
3. Cotton combed 20s vs 24s vs 30s berdasarkan penggunaan.
4. File desain dan ukuran area sablon yang dibutuhkan.
5. Checklist order kaos event agar deadline dan size breakdown aman.
6. Case study event/community, vendor/reseller, sekolah/kampus, atau corporate yang benar-benar dikerjakan.

Setiap content harus:

- menjawab pertanyaan dengan pengalaman produksi Orplyn;
- menyebut limitation atau tradeoff secara jujur;
- memakai foto/proses nyata;
- link ke satu relevant money page;
- mempunyai CTA brief yang sesuai intent;
- menghindari klaim kualitas, harga, atau deadline yang belum disetujui.

## Recommended Money Page Map

| Priority | Route | Primary intent | Commercial job |
| --- | --- | --- | --- |
| P0 | `/` | jasa sablon kaos Ciputat/Tangerang Selatan | Menjelaskan positioning, proof, dan memilih lane |
| P0 | `/layanan/sablon-dtf-satuan` | sablon DTF satuan, kaos custom 1 pcs | Menangkap small order/test print |
| P0 | `/layanan/kaos-event-komunitas` | vendor kaos event, panitia, komunitas | Menangkap batch dengan deadline |
| P0 | `/layanan/kaos-polos` | kaos polos satuan/grosir Ciputat | Menangkap retail, reseller, dan basis sablon |
| Support | `/portfolio` | bukti hasil sablon/bordir/apparel | Mengurangi trust objection |
| Support | `/kontak` | lokasi workshop/WhatsApp Orplyn | Menguatkan local entity dan visit intent |
| P1 | Secondary service pages | bordir, jersey, clothing brand, merchandise | Index setelah proof dan commercial priority cukup |

## Launch Sequence

### Before indexing

1. Confirm Cloudflare `Full (strict)`.
2. Complete one phone CTA-to-WhatsApp test through Aulia.
3. Create and test lead log through qualified, quoted, and won/lost.
4. Install Search Console Domain Property, GA4/Google tag, and verification.
5. Audit GBP ownership, real-world name, category, NAP, URL, WhatsApp, hours, services, photos, and reviews.
6. Get owner approval for public proof and offer claims.
7. Perform mobile/desktop visual QA and test all forms/routes.
8. Create versioned launch env and Caddy config.

### Open indexing

1. Rebuild with `NEXT_PUBLIC_ALLOW_INDEXING=true`.
2. Remove final-domain Caddy `X-Robots-Tag`.
3. Confirm robots allows crawl and advertises sitemap.
4. Run deployment verification with indexing expected true.
5. Test Googlebot and OAI-SearchBot access.
6. Validate LocalBusiness, Service, WebSite, and breadcrumb schema.
7. Submit sitemap and inspect the four money pages.

### First 30 days

1. Monitor index coverage and branded/non-branded queries weekly.
2. Add approved three offer anchors.
3. Publish at least two strong, approved production cases before generic articles.
4. Optimize hero and service images.
5. Run authentic review outreach to real customers and reply to every review.
6. Keep source/landing/product/quantity/qualified/quote/sale data connected by Lead ID.

### Days 31-90

1. Enrich pages based on impressions and lead quality.
2. Publish research-intent content only from real customer questions.
3. Validate secondary services by demand, margin, capacity, and close rate.
4. Start one Google Search Ads offer only after conversion and admin gates pass.

## KPI Framework

SEO report must contain business outcomes, not only traffic:

- indexed pages and coverage issues;
- non-branded impressions/clicks by money page;
- GBP calls, website visits, direction requests, and messages;
- landing sessions;
- valid brief submissions;
- WhatsApp conversations received;
- qualified leads;
- quotations;
- won orders;
- revenue and gross profit;
- landing-to-brief rate;
- qualification rate;
- quote rate;
- sale rate;
- response time;
- revenue and gross profit by source/landing page.

Initial 28-day data is baseline, not proof of success or failure. Avoid changing title, page structure, offer, and targeting every few days before enough impressions and lead outcomes accumulate.

## What Not To Do

- Do not open indexing before measurement and lead handling are tested.
- Do not publish invented reviews, customer logos, prices, capacity, guarantees, or deadlines.
- Do not create dozens of near-duplicate city pages.
- Do not split a small Ads budget across all services.
- Do not optimize Ads toward `whatsapp_open` as the final business outcome.
- Do not replace real production media with generic stock photos.
- Do not treat schema, `llms.txt`, or AI crawler files as a substitute for first-party evidence.
- Do not keyword-stuff the GBP name; use the verified real-world business name.

## Primary References

- Google local ranking: https://support.google.com/business/answer/7091
- Google Business Profile representation guidelines: https://support.google.com/business/answer/3038177
- Google Business Profile services: https://support.google.com/business/answer/9455399
- Google authentic review guidance: https://support.google.com/business/answer/3474122
- Google AI features and websites: https://developers.google.com/search/docs/appearance/ai-features
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google image SEO: https://developers.google.com/search/docs/appearance/google-images
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- OpenAI crawlers: https://developers.openai.com/api/docs/bots
- Cloudflare Managed robots.txt: https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/

Competitor pages were used only as qualitative SERP observations, not as verified claims or content to copy:

- https://www.rumahsabloncepat.com/tentang-kami/
- https://www.abyadscreenprinting.com/sablon-kaos-satuan/
- https://berkaos.com/jasa-sablon-kaos/tangerang/
