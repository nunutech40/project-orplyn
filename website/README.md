# Orplyn Marketing Funnel

Website lead-generation untuk Orplyn Apparel & Print Studio. Pengunjung memilih kebutuhan produksi, melihat bukti hasil kerja, lalu mengirim brief terstruktur ke WhatsApp.

Konteks bisnis, status, blocker, dan roadmap lengkap ada di `../PROJECT-HANDOFF.md`. Aturan untuk AI atau agent berikutnya ada di `../AGENTS.md`.

## Halaman

- `/` - funnel utama, portfolio ringkas, FAQ, lokasi, dan form estimasi
- `/layanan/[slug]` - landing page intent-spesifik untuk SEO dan Google Ads
- `/portfolio` - dokumentasi hasil produksi
- `/kontak` - lokasi, Instagram, dan form WhatsApp
- `/kebijakan-privasi` - penggunaan data brief dan attribution
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` - discovery untuk search engine dan AI crawler

## Jalankan dengan OrbStack/Docker

```bash
cp .env.example .env
docker compose up --build -d
```

Buka `http://localhost:3010`.

## Konfigurasi wajib

Isi `NEXT_PUBLIC_WHATSAPP_NUMBER` di `.env` dengan nomor WhatsApp sales dalam format kode negara dan angka saja, misalnya `6281234567890`.

Saat domain sudah dipilih, ubah `NEXT_PUBLIC_SITE_URL`. Nilai ini dipakai untuk canonical URL, Open Graph, sitemap, dan robots.

Biarkan `NEXT_PUBLIC_ALLOW_INDEXING=false` pada localhost dan staging. Ubah ke `true` hanya setelah domain, HTTPS, NAP, tracking, dan launch QA selesai.

## Tracking

Konfigurasi opsional tersedia untuk:

- `NEXT_PUBLIC_GOOGLE_TAG_ID` - Google tag, misalnya `G-...` atau `AW-...`
- `NEXT_PUBLIC_GOOGLE_ADS_ID` - Google Ads account/conversion ID
- `NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL` - label secondary conversion saat brief membuka WhatsApp
- `GOOGLE_SITE_VERIFICATION` - token Google Search Console

Submit form memicu `whatsapp_brief_submit`, `generate_lead`, dan `whatsapp_open`. Bila ID dan label Ads tersedia, form juga memicu secondary event `conversion` dengan Lead ID sebagai `transaction_id`. UTM, landing page, `gclid`, `gbraid`, dan `wbraid` dibawa ke brief. Qualified lead dan sale tetap dicatat offline sebagai conversion bisnis.

## Perintah lokal

```bash
npm install
npm run brand:build
npm run dev
npm run lint
npm test
```
