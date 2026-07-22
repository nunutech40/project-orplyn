import type { Metadata } from "next";
import { CommercialProofSection } from "../components/CommercialProofSection";
import { WhatsAppQuickStart } from "../components/WhatsAppQuickStart";
import {
  adsTrustEvidence,
  getPublishableAdsTrustEvidence,
} from "../lib/ads-trust-evidence";
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

const contextualWork = getPublishableAdsTrustEvidence(
  adsTrustEvidence,
).contextualPortfolio;

const contextualTitles = new Set([
  "Perpisahan BKB PAUD Kartini",
  "Hari Kartini Bustanul Aulad",
  "Panitia BAGANA",
]);

const catalogWork = portfolio.filter((item) => !contextualTitles.has(item.title));

export default function PortfolioPage() {
  return (
    <>
      <section className="page-intro page-intro-portfolio">
        <p className="eyebrow">PEKERJAAN NYATA ORPLYN · LEGOSO, CIPUTAT</p>
        <h1>Bukan hanya hasil jadi. Ada kebutuhan di balik setiap pesanan.</h1>
        <p>
          Lihat pekerjaan yang konteksnya sudah diketahui, lalu jelajahi hasil
          sablon, apparel custom, dan proses dari workshop Orplyn.
        </p>
      </section>

      <section className="portfolio-story-section" aria-labelledby="portfolio-story-title">
        <div className="portfolio-story-heading">
          <div>
            <p className="eyebrow eyebrow-dark">DARI KEBUTUHAN KE HASIL JADI</p>
            <h2 id="portfolio-story-title">Pekerjaan yang datang dengan konteks nyata.</h2>
          </div>
          <p>
            Tiga pekerjaan ini memperlihatkan kebutuhan, jumlah, bahan, teknik,
            dan lokasi dalam konteks ordernya.
          </p>
        </div>

        <div className="portfolio-story-grid">
          {contextualWork.map((item) => (
            <article className="portfolio-story-card" key={item.id}>
              <div className="portfolio-story-media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width="900"
                  height="1600"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-story-content">
                <p className="eyebrow eyebrow-dark">
                  {item.eventType} · {item.locationLabel}
                </p>
                <h3>{item.title}</h3>
                <p>{item.context}</p>
                <dl>
                  <div>
                    <dt>Jumlah</dt>
                    <dd>{item.quantityLabel}</dd>
                  </div>
                  <div>
                    <dt>Bahan &amp; teknik</dt>
                    <dd>{item.materialAndTechnique}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-catalog-heading" aria-labelledby="portfolio-catalog-title">
        <p className="eyebrow eyebrow-dark">HASIL &amp; PROSES LAINNYA</p>
        <h2 id="portfolio-catalog-title">Lihat ragam yang sudah dikerjakan Orplyn.</h2>
        <p>
          Gunakan kumpulan ini untuk melihat ragam teknik, produk, dan tahap
          pengerjaan.
        </p>
      </section>

      <section className="portfolio-page-grid">
        {catalogWork.map((item, index) => (
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
