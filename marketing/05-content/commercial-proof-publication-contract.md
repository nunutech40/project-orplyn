---
document_id: ORPLYN-COMMERCIAL-PROOF-001
document_type: internal_publication_contract
status: active_waiting_owner_evidence
public_claim_status: prohibited_per_record_until_publishable
last_updated: 2026-07-19
---

# Commercial Proof Publication Contract

Dokumen ini mengatur bagaimana transaksi, case study, review, testimoni, logo customer, dan outcome order boleh masuk ke website Orplyn.

## AI Reading Contract

1. Galeri hasil produksi tidak otomatis membuktikan transaksi, jumlah, repeat order, kepuasan, deadline, atau customer identity.
2. Screenshot chat, invoice, transfer, resi, dan foto customer adalah evidence internal sampai disensor serta mendapat izin publikasi.
3. Jangan membuat review, nama customer, angka order, quote, outcome, atau placeholder yang terlihat nyata.
4. Hanya record berstatus `publishable` yang boleh dipindahkan ke `website/app/lib/commercial-proofs.ts`.
5. Bukti untuk H-009 tidak otomatis membuktikan H-008, dan sebaliknya.
6. Jika permission atau wording meragukan, jangan render record tersebut.

## Record Status

| Status | Meaning | Website action |
| --- | --- | --- |
| `requested` | Data sudah diminta, belum diterima | Jangan render |
| `received_unverified` | File/data diterima, fakta belum dicocokkan | Jangan render |
| `verified_internal` | Fakta cocok dengan order/evidence internal | Jangan render |
| `permission_pending` | Fakta valid, izin publik belum lengkap | Jangan render |
| `wording_pending` | Izin ada, public wording belum disetujui | Jangan render |
| `publishable` | Evidence, redaction, permission, dan wording lengkap | Boleh masuk website |
| `revoked` | Izin dicabut atau evidence tidak lagi layak | Hapus dari website |

## Minimum Internal Evidence

- Proof ID dan Order/Lead ID internal.
- Use case dan service slug yang relevan.
- Produk, jumlah atau range yang diizinkan.
- Tanggal order/selesai atau periode yang diizinkan.
- Challenge/kebutuhan awal berdasarkan order nyata.
- Solusi yang benar-benar diberikan.
- Outcome yang dapat dibuktikan tanpa melebihkan.
- Media source dan pemilik hak.
- Customer attribution rule: nama asli, organisasi, inisial, anonim, atau tidak boleh disebut.
- Quote exact bila ada; jangan merapikan kalimat sampai mengubah makna.
- Permission untuk foto, desain, logo, wajah, nama, jumlah, outcome, dan kutipan secara terpisah.
- Public wording yang disetujui owner/PIC.

## Public Website Shape

Setiap record `publishable` dapat mempunyai:

- `id`;
- `serviceSlugs`;
- `eyebrow` factual, misalnya `Event komunitas`;
- `title` factual;
- `summary` singkat;
- `image` dan `imageAlt`;
- maksimal tiga `facts` dengan label/value;
- optional `quote` dan `attribution`;
- optional public source URL.

Tidak semua field harus ditampilkan. Gunakan data minimum yang cukup meyakinkan tanpa membuka informasi pribadi atau komersial sensitif.

## Publication Flow

1. Gunakan owner-facing request yang sudah tersedia di `deliverables/owner-research/Orplyn - Permintaan Data Produk dan Foto Prioritas.txt`.
2. Simpan evidence mentah di lokasi internal/non-public; jangan memasukkan invoice, transfer, chat penuh, atau data pribadi ke repository publik.
3. Verifikasi fakta terhadap order/admin.
4. Catat permission per media/fakta/kutipan.
5. Redact nomor telepon, alamat, nilai transaksi sensitif, rekening, dan data personal.
6. Susun wording factual dan minta approval.
7. Setelah status `publishable`, tambahkan public-safe record ke `website/app/lib/commercial-proofs.ts`.
8. Jalankan lint, build, rendered HTML test, visual QA, dan cek structured data sebelum deploy.
9. Catat proof yang dipublikasikan di `PROJECT-HANDOFF.md`.

## Current Status

Owner sedang diminta mengirim bukti transaksi/order memuaskan. Belum ada record yang boleh dirender sebagai commercial proof. Website harus tetap terlihat selesai dengan production portfolio yang ada; section commercial proof tidak muncul sampai minimal satu record `publishable` tersedia.
