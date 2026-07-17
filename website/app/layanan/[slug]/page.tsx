import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "../../components/Icons";
import { notFound } from "next/navigation";
import { QuoteBuilder } from "../../components/QuoteBuilder";
import { business, getService, services, siteUrl } from "../../lib/site-data";

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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/layanan/${service.slug}`,
    image: `${siteUrl}${service.image}`,
    areaServed: ["Ciputat", "Tangerang Selatan", "Jakarta Selatan", "Depok"],
    provider: {
      "@type": "LocalBusiness",
      name: business.longName,
      address: business.address,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('${service.image}')` }}
      >
        <div className="hero-overlay" aria-hidden="true" />
        <div className="subpage-hero-content">
          <Link href="/#layanan" className="back-link">
            <ArrowLeft size={18} aria-hidden="true" /> Semua layanan
          </Link>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <Link className="button button-primary" href="#service-quote">
            <MessageCircle size={20} aria-hidden="true" />
            Bahas kebutuhan
          </Link>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-block">
          <p className="eyebrow eyebrow-dark">COCOK UNTUK</p>
          <h2>Kebutuhan yang bisa dimulai dari sini.</h2>
          <ul className="detail-list">
            {service.idealFor.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-detail-block service-detail-accent">
          <p className="eyebrow">YANG BISA DIBAHAS</p>
          <h2>Sesuaikan brief sebelum masuk produksi.</h2>
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
            Semua portfolio <ArrowRight size={18} aria-hidden="true" />
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

      <section className="service-quote-section" id="service-quote">
        <div>
          <p className="eyebrow">MULAI DARI BRIEF</p>
          <h2>Butuh {service.title.toLowerCase()}?</h2>
          <p>
            Isi detail awal agar percakapan WhatsApp langsung masuk ke kebutuhan
            produksi.
          </p>
        </div>
        <QuoteBuilder
          whatsappNumber={business.whatsapp}
          initialProduct={service.title}
          compact
        />
      </section>

      <section className="section related-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">LAYANAN LAIN</p>
            <h2>Mungkin masih satu kebutuhan.</h2>
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
