import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "../components/Icons";
import { business } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Informasi penggunaan data pada form estimasi dan pengukuran pemasaran website Orplyn.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-intro privacy-intro">
        <p className="eyebrow">KEBIJAKAN PRIVASI</p>
        <h1>Data pesanan dipakai untuk menanggapi permintaan estimasi.</h1>
        <p>
          Halaman ini menjelaskan data yang digunakan ketika kamu meminta
          estimasi melalui website Orplyn.
        </p>
      </section>

      <article className="privacy-content">
        <Link className="back-link back-link-dark" href="/">
          <ArrowLeft size={18} aria-hidden="true" /> Kembali ke beranda
        </Link>

        <h2>Data yang kamu kirim</h2>
        <p>
          Form dapat memuat nama, jenis kebutuhan, produk, jumlah, bahan,
          target selesai, status desain, serta lokasi kirim atau pickup. Saat
          tombol dikirim, website menyusun data tersebut menjadi pesan WhatsApp.
        </p>

        <h2>Data pengukuran pemasaran</h2>
        <p>
          Website dapat menyimpan sumber kunjungan, kampanye, halaman masuk,
          dan pengenal iklan seperti GCLID, GBRAID, atau WBRAID. Data ini dipakai
          untuk menilai sumber calon customer dan hasil pemasaran ketika tag
          pengukuran sudah diaktifkan.
        </p>

        <h2>Tujuan penggunaan</h2>
        <p>
          Data digunakan untuk menanggapi permintaan estimasi, mengecek
          kelayakan produksi, menindaklanjuti penawaran harga, dan mengukur
          apakah aktivitas pemasaran menghasilkan calon customer atau penjualan.
        </p>

        <h2>WhatsApp dan penyimpanan</h2>
        <p>
          Ketika kamu melanjutkan ke WhatsApp, pemrosesan pesan juga mengikuti
          kebijakan platform WhatsApp. Orplyn tidak menjual data pesanan kepada
          pihak lain. Data operasional disimpan selama masih dibutuhkan untuk
          komunikasi pesanan dan evaluasi bisnis.
        </p>

        <h2>Kontak</h2>
        <p>
          Pertanyaan atau permintaan terkait data dapat disampaikan melalui
          WhatsApp resmi Orplyn di {business.whatsappDisplay}.
        </p>
        <Link className="button button-dark" href="/#quote">
          <MessageCircle size={19} aria-hidden="true" /> Hubungi Orplyn
        </Link>
      </article>
    </>
  );
}
