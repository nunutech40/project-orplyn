import Link from "next/link";
import { ArrowLeft } from "./components/Icons";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow eyebrow-dark">404</p>
      <h1>Halaman ini tidak ditemukan.</h1>
      <p>Kembali ke beranda untuk memilih layanan Orplyn.</p>
      <Link className="button button-dark" href="/">
        <ArrowLeft size={18} aria-hidden="true" /> Kembali ke beranda
      </Link>
    </section>
  );
}
