import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "../../components/Icons";
import { notFound } from "next/navigation";
import { CommercialProofSection } from "../../components/CommercialProofSection";
import { QuoteBuilder } from "../../components/QuoteBuilder";
import { getCommercialProofs } from "../../lib/commercial-proofs";
import {
  business,
  getService,
  services,
  siteUrl,
  WHATSAPP_PLACEHOLDER,
} from "../../lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} di Ciputat`,
    description: `${service.shortDescription} Konsultasikan kebutuhan produksi bersama Orplyn di Ciputat, Tangerang Selatan.`,
    alternates: {
      canonical: `/layanan/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} di Ciputat | Orplyn`,
      description: service.shortDescription,
      url: `/layanan/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const commercialProofs = getCommercialProofs(service.slug);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/layanan/${service.slug}`,
    image: `${siteUrl}${service.image}`,
    areaServed: [
      "Ciputat",
      "Tangerang Selatan",
      "Jabodetabek",
      "Indonesia",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      alternateName: business.longName,
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressCountry: "ID",
      },
      ...(business.whatsapp !== WHATSAPP_PLACEHOLDER
        ? { telephone: `+${business.whatsapp}` }
        : {}),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="subpage-hero">
        <img
          className="subpage-hero-media"
          src={service.image}
          alt={service.imageAlt}
          width="1440"
          height="1080"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="subpage-hero-content">
          <Link href="/#paket" className="back-link">
            <ArrowLeft size={18} aria-hidden="true" /> Semua layanan
          </Link>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <Link className="button button-primary" href="#service-quote">
            <MessageCircle size={20} aria-hidden="true" />
            Minta estimasi
          </Link>
        </div>
      </section>

      <section className="service-order-facts" aria-label="Aturan order">
        <div>
          <p className="eyebrow eyebrow-dark">PANDUAN ORDER</p>
          <h2>Minimum order dan estimasi produksi.</h2>
        </div>
        <ul>
          {service.orderFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <p>
          Harga dan jadwal final dikonfirmasi setelah desain, bahan, jumlah,
          stok, serta target selesai diperiksa admin.
        </p>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-block">
          <p className="eyebrow eyebrow-dark">COCOK UNTUK</p>
          <h2>Layanan ini cocok untuk kebutuhan berikut.</h2>
          <ul className="detail-list">
            {service.idealFor.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-detail-block service-detail-accent">
          <p className="eyebrow">PILIHAN PRODUKSI</p>
          <h2>Detail yang dapat disesuaikan.</h2>
          <ul className="detail-list">
            {service.capabilities.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
          <div className="method-list" aria-label="Pilihan teknik">
            {service.methods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-gallery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">DETAIL PRODUKSI</p>
            <h2>Lihat hasil dan prosesnya.</h2>
          </div>
          <Link href="/portfolio">
            Lihat semua hasil <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="service-gallery">
          {service.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${service.title} produksi Orplyn ${index + 1}`}
              width="900"
              height="900"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <CommercialProofSection proofs={commercialProofs} />

      <section className="service-quote-section" id="service-quote">
        <div>
          <p className="eyebrow">MINTA ESTIMASI</p>
          <h2>Minta estimasi untuk {service.title.toLowerCase()}.</h2>
          <p>
            Kirim produk, jumlah, desain, dan target selesai agar admin dapat
            memeriksa harga serta waktu produksi.
          </p>
        </div>
        <QuoteBuilder
          whatsappNumber={business.whatsapp}
          initialProductId={service.quoteProductId}
          initialLane={service.defaultLane}
          initialUseCase={service.defaultUseCase}
          compact
        />
      </section>

      <section className="section related-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">LAYANAN LAIN</p>
            <h2>Lihat layanan Orplyn lainnya.</h2>
          </div>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link href={`/layanan/${item.slug}`} key={item.slug}>
              <img src={item.image} alt={item.imageAlt} width="640" height="480" />
              <span>{item.title}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
