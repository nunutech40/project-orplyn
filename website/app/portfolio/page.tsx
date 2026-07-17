import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "../components/Icons";
import { portfolio } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio Sablon, Bordir & Apparel Custom",
  description:
    "Lihat hasil produksi sablon, bordir, jersey, totebag, dan apparel custom dari workshop Orplyn di Ciputat.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-intro page-intro-portfolio">
        <p className="eyebrow">PORTFOLIO ORPLYN</p>
        <h1>Detail yang sudah pernah kami kerjakan.</h1>
        <p>
          Dokumentasi hasil dan proses produksi nyata dari beragam teknik sablon,
          bordir, jersey, totebag, dan apparel custom.
        </p>
      </section>

      <section className="portfolio-page-grid">
        {portfolio.map((item, index) => (
          <figure key={item.image} className={`portfolio-page-item page-item-${index + 1}`}>
            <img
              src={item.image}
              alt={`${item.title} - ${item.category}`}
              width="900"
              height="900"
            />
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="portfolio-cta">
        <div>
          <p className="eyebrow eyebrow-dark">PUNYA REFERENSI SENDIRI?</p>
          <h2>Kirim desainmu. Kita cek arah produksinya.</h2>
        </div>
        <Link className="button button-dark" href="/#quote">
          <MessageCircle size={20} aria-hidden="true" />
          Minta estimasi
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
