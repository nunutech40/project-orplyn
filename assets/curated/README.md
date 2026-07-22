# Orplyn Curated Assets

Ini adalah satu-satunya katalog terkurasi untuk aset produksi dan kemampuan
Orplyn. Folder ini menggantikan dua folder lama `assets/fotoproduksi/` dan
`assets/hasilsablon/` agar AI tidak bingung membaca kategori proses.

## Lane aset

- `production-orders/`: foto hasil order dengan konteks owner yang tercatat. Ini evidence use-case/order, bukan otomatis bukti sablon manual atau hasil tepat waktu.
- `finished/manual/`: contoh hasil teknik manual dari arsip tambahan owner.
- `finished/dtf/`: contoh hasil DTF atau kombinasi DTF.
- `products/kaos-polos/`: katalog kaos polos.
- `products/totebag/`: katalog totebag dan zipper pouch.
- `process/manual/`: seluruh foto proses sablon manual dari dua sumber lama, digabung menjadi satu lane.
- `process/other/`: proses produk non-kaos.
- `ASSET-MANIFEST.md`: manifest canonical dan batas Public-Claim.

## Bedanya dengan `assets/proof/`

`assets/proof/` adalah bukti customer, review, chat, atau transaksi yang punya
aturan publikasi lebih ketat. `assets/curated/` adalah katalog hasil/kemampuan.
Jangan memakai foto katalog sebagai testimoni, bukti order event, angka order,
atau klaim kualitas tanpa metadata dan izin yang sesuai.
