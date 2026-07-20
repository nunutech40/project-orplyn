import type { Metadata } from "next";
import { CommercialProofSection } from "../components/CommercialProofSection";
import { WhatsAppQuickStart } from "../components/WhatsAppQuickStart";
import { commercialProofs } from "../lib/commercial-proofs";
import { business, portfolio } from "../lib/site-data";

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
        <h1>Hasil produksi nyata dari workshop Orplyn.</h1>
        <p>
          Lihat contoh sablon, bordir, jersey, totebag, dan apparel custom sebelum
          menentukan arah produksimu.
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

      <CommercialProofSection proofs={commercialProofs} />

      <section className="portfolio-cta">
        <div>
          <p className="eyebrow eyebrow-dark">PUNYA REFERENSI SENDIRI?</p>
          <h2>Kirim desainmu untuk cek bahan, teknik, harga, dan waktu produksi.</h2>
        </div>
        <WhatsAppQuickStart
          whatsappNumber={business.whatsapp}
          lane="batch"
          label="Chat desain ini ke Aulia"
          className="button button-dark"
          useCase="Referensi dari portfolio"
          placement="portfolio_cta_batch"
        />
      </section>
    </>
  );
}
