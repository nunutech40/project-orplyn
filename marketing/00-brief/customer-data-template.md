# Template Data Pelanggan Dan Penjualan

Versi: 1.0  
Periode awal yang disarankan: 90 hari terakhir atau minimal 30 lead

## Kenapa Data Ini Dibutuhkan

Profil pelanggan tidak cukup ditentukan dari pendapat internal. Kita perlu membandingkan siapa yang bertanya, siapa yang qualified, siapa yang menerima quotation, siapa yang membeli, dan siapa yang hilang. Data ini akan menentukan prioritas segmen, offer satuan/grosir, keyword, budget, serta cara admin melakukan follow-up.

## Aturan Privasi

- Jangan masukkan nama, nomor WhatsApp, email, atau alamat lengkap pelanggan.
- Gunakan ID anonim seperti `L001` atau `C001`.
- Gunakan kota/kecamatan, bukan alamat rumah.
- Catat nilai transaksi dan margin hanya pada file internal.
- Izin testimoni disimpan terpisah dari data performa.

## Tabel Lead 90 Hari

Buat Google Sheet/Excel dengan satu baris per lead. Gunakan header berikut:

```text
Lead ID | Tanggal Masuk | Segmen | Mode Beli | Baru/Repeat | Kota/Area | Produk | Teknik | Perkiraan Qty | Sumber Lead | Campaign/Referral | Waktu Respons (menit) | Status Akhir | Nilai Quotation | Revenue Final | Estimasi HPP | Gross Profit | Deadline Customer | Lead Time Aktual (hari) | Tepat Waktu? | Alasan Lost | Catatan
```

Nilai standar agar analisis konsisten:

- **Segmen:** Individu, Event/Komunitas, Sekolah/Kampus/Organisasi, Kantor/Perusahaan, Clothing Brand/Kreator, Tim Olahraga, Reseller/Vendor, Lainnya.
- **Mode Beli:** Satuan, Grosir, Belum Jelas.
- **Baru/Repeat:** Baru, Repeat.
- **Sumber Lead:** Instagram, Google Search, Google Maps, Referral, Walk-in, Marketplace, TikTok, Website, Lainnya.
- **Status Akhir:** New, Contacted, Qualified, Waiting Detail, Quoted, Won, Lost, Follow-up Later.
- **Alasan Lost:** Harga, MOQ, Deadline, Respons Lambat, Desain Belum Siap, Memilih Vendor Lain, Tidak Ada Respons, Area/Pengiriman, Kapasitas, Kebutuhan Batal, Lainnya.

## Contoh Baris Yang Sudah Dianonimkan

| Lead ID | Tanggal | Segmen | Mode | Baru/Repeat | Produk | Qty | Sumber | Status | Revenue | Alasan Lost |
| --- | --- | --- | --- | --- | --- | ---: | --- | --- | ---: | --- |
| L001 | 2026-07-01 | Event/Komunitas | Grosir | Baru | Kaos custom | 50 | Referral | Won |  |  |
| L002 | 2026-07-02 | Individu | Satuan | Baru | DTF | 1 | Instagram | Lost | 0 | Deadline |

Contoh di atas hanya menunjukkan format. Jangan dipakai sebagai data Orplyn.

## Rekap Bulanan 12 Bulan

Isi satu baris per bulan:

```text
Bulan | Total Lead | Qualified Lead | Quotation | Order Won | Order Satuan | Order Grosir | Repeat Order | Omzet | Estimasi HPP | Gross Profit | Ad Spend | Catatan Musiman
```

## Matriks Produk Dan Ekonomi

Isi satu baris per produk/layanan:

```text
Produk | Bisa Satuan? | MOQ | Grosir Mulai | Harga Mulai Satuan | Tier Harga Grosir | Lead Time Normal | Kapasitas/Minggu | Margin Band | Repeat Potential | Prioritas Marketing | Catatan
```

## Output Yang Akan Dihitung Setelah Data Masuk

1. Komposisi lead, order, omzet, dan gross profit: satuan vs grosir.
2. Segmen dengan volume, omzet, margin, dan repeat terbaik.
3. Produk dengan permintaan tinggi tetapi close rate rendah.
4. Sumber lead yang menghasilkan customer, bukan hanya chat.
5. Average order value dan gross profit per order.
6. Qualification, quote, dan sale rate.
7. Waktu respons vs kemungkinan closing.
8. Alasan lost paling sering.
9. Area pelanggan dengan konsentrasi tertinggi.
10. Musim permintaan dan kapasitas produksi.

## Minimum Data Yang Masih Berguna

Jika pencatatan belum rapi, mulai dengan 30 lead terakhir dan isi minimal:

- tanggal;
- segmen;
- satuan/grosir;
- produk;
- quantity;
- sumber;
- status menang/kalah;
- nilai order bila menang;
- alasan lost bila kalah.

Data yang belum diketahui boleh kosong. Jangan mengarang angka untuk melengkapi tabel.

