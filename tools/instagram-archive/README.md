# Orplyn Instagram Archive Tool

Tool ini mengarsipkan feed `@orplyn.id`, termasuk Reels yang tampil di feed, untuk kurasi website dan konten. Docker menjalankan `gallery-dl` versi `1.32.1`; tidak ada package Python global yang dipasang.

Untuk batch terbaru, tool otomatis memakai snapshot profil publik bila endpoint feed anonim Instagram sedang diblokir. Snapshot publik saat ini memuat maksimal 12 post. Arsip seluruh histori memerlukan sesi browser dalam bentuk `cookies.txt`.

## Pemakaian

Ambil 12 post terbaru:

```bash
./tools/instagram-archive/download.sh --recent 12
```

Ambil semua post secara incremental dengan cookie browser:

```bash
./tools/instagram-archive/download.sh --cookies tools/instagram-archive/secrets/instagram-cookies.txt
```

Ambil post sejak tanggal tertentu:

```bash
./tools/instagram-archive/download.sh --since 2026-01-01
```

Mode pengecekan tanpa menyimpan media:

```bash
./tools/instagram-archive/download.sh --recent 3 --dry-run
```

## Bila Instagram Meminta Login

Jangan menaruh username atau password Instagram di script. Export sesi browser sebagai file Netscape `cookies.txt`, simpan lokal di `tools/instagram-archive/secrets/instagram-cookies.txt`, lalu jalankan:

```bash
./tools/instagram-archive/download.sh --cookies tools/instagram-archive/secrets/instagram-cookies.txt
```

Folder `secrets/` dan `state/` diabaikan oleh `.gitignore`. Hapus cookie saat tidak dibutuhkan lagi dan jangan kirim file tersebut ke siapa pun.

## Output

- Media dan metadata: `assets/raw/instagram/orplyn.id/<tahun>/<bulan>/`.
- Katalog otomatis: `marketing/05-content/instagram/orplyn.id-catalog.csv` dan `.json`.
- Lembar kurasi yang mempertahankan penilaian lama: `marketing/05-content/instagram/orplyn.id-content-selection.csv`.
- Katalog visual untuk marketer: `deliverables/content/Orplyn - Kurasi Aset Instagram.html`.
- Riwayat download incremental gallery-dl: `tools/instagram-archive/state/download-archive.sqlite3`.
- Snapshot profil publik terakhir: `tools/instagram-archive/state/public-profile-snapshot.json`.

Kolom `rights_checked` selalu dimulai dengan `pending`. Periksa wajah customer, desain pihak lain, nomor telepon, alamat, logo customer, dan izin publikasi sebelum aset dipakai ulang.

Tool memakai jeda request bawaan Instagram extractor agar tidak agresif. Jalankan satu proses pada satu waktu. Sumber teknis: `https://github.com/mikf/gallery-dl`.

## Runtime Hermes

Default di Mac tetap menjalankan image Docker. Di dalam container Hermes, gunakan instalasi `gallery-dl` native agar tidak membutuhkan Docker socket:

```bash
INSTAGRAM_ARCHIVE_RUNTIME=native \
  /source/Orplyn/tools/instagram-archive/download.sh --recent 12
```

Mode native menulis ke subfolder Orplyn yang secara khusus di-mount read-write oleh stack Hermes. Source project lainnya tetap read-only.
