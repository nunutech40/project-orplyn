import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Palette,
  Ruler,
  ScanLine,
  Shirt,
} from "./components/Icons";
import { QuoteBuilder } from "./components/QuoteBuilder";
import { MobileQuoteCta } from "./components/MobileQuoteCta";
import {
  business,
  portfolio,
  primaryServices,
  secondaryServices,
  services,
  siteUrl,
  WHATSAPP_PLACEHOLDER,
} from "./lib/site-data";

export const metadata: Metadata = {
  title: "Jasa Sablon Kaos Custom Ciputat & Tangerang Selatan",
  description:
    "Orplyn melayani sablon DTF dan kaos polos mulai 1 pcs, serta kaos event dan produksi batch di Ciputat, Tangerang Selatan.",
  alternates: {
    canonical: "/",
  },
};

const serviceIcons = [Shirt, ScanLine, Palette];

const faqs = [
  {
    question: "Apakah Orplyn menerima sablon kaos satuan?",
    answer:
      "Ya. Kaos custom dengan sablon DTF dan kaos polos bisa dimulai dari 1 pcs. Sablon manual, plastisol, special ink, fullprint, dan totebag memiliki minimum order 12 pcs; bordir/seragam dan jersey minimum 6 pcs.",
  },
  {
    question: "Berapa lama estimasi produksinya?",
    answer:
      "Estimasi normal kaos polos dan DTF sekitar 2 hari. Sablon manual, special ink, bordir, jersey, fullprint, dan merchandise sekitar 3-7 hari. Jadwal final tetap mengikuti jumlah, desain, antrean produksi, dan ketersediaan bahan.",
  },
  {
    question: "Bagaimana cara mendapatkan estimasi harga?",
    answer:
      "Harga dihitung dari jenis produk, jumlah, bahan, ukuran, teknik sablon, dan desain. Isi detail pesanan agar admin dapat memberi estimasi sesuai spesifikasi kebutuhanmu.",
  },
  {
    question: "Bahan kaos apa yang tersedia?",
    answer:
      "Pilihan utama adalah cotton combed 20s, 24s, dan 30s. Bahan lain dapat dikonsultasikan sesuai kebutuhan, stok, dan rencana penggunaan.",
  },
  {
    question: "Apakah bisa kirim desain sendiri?",
    answer:
      "Bisa. Kirim desain saat percakapan WhatsApp. Orplyn akan membantu mengecek ukuran cetak, bahan, dan teknik yang sesuai sebelum produksi dimulai.",
  },
  {
    question: "Bagaimana pembayaran dan pengirimannya?",
    answer:
      "Pesanan menggunakan DP 50 persen. Pelunasan dilakukan setelah produksi selesai dan sebelum barang dikirim. Pesanan dapat diambil di Ciputat atau dikirim ke Jabodetabek dan seluruh Indonesia.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  alternateName: business.longName,
  url: siteUrl,
  logo: `${siteUrl}/brand/orplyn-monogram-black.png`,
  image: `${siteUrl}/images/hero-sablon.jpg`,
  description:
    "Jasa sablon kaos custom, kaos polos, DTF, produksi event, bordir, jersey, dan merchandise di Ciputat, Tangerang Selatan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Legoso Sel. II No.43, Pisangan",
    addressLocality: "Ciputat Timur",
    addressRegion: "Banten",
    postalCode: "15419",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: ["Ciputat", "Tangerang Selatan", "Jabodetabek", "Indonesia"],
  sameAs: [business.instagram, business.maps],
  ...(business.whatsapp !== WHATSAPP_PLACEHOLDER
    ? {
        telephone: `+${business.whatsapp}`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${business.whatsapp}`,
          contactType: "sales",
          availableLanguage: ["Indonesian"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "19:00",
          },
        },
      }
    : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Orplyn",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="hero"
        style={{ backgroundImage: "url('/images/hero-sablon.jpg')" }}
      >
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">APPAREL &amp; PRINT STUDIO · CIPUTAT</p>
          <h1>Sablon &amp; kaos custom di Orplyn.</h1>
          <p className="hero-copy">
            Mulai 1 pcs hingga produksi batch untuk event, komunitas, bisnis,
            dan kebutuhan personal.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#quote">
              <MessageCircle size={20} aria-hidden="true" />
              Minta estimasi
            </Link>
            <Link className="button button-ghost-light" href="#hasil-produksi">
              Lihat hasil produksi
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-location">
          <MapPin size={18} aria-hidden="true" />
          Jl. Legoso Selatan II, Ciputat Timur
        </div>
      </section>

      <section className="capability-strip" aria-label="Aturan order utama Orplyn">
        <span>DTF MULAI 1 PCS</span>
        <span>KAOS POLOS MULAI 1 PCS</span>
        <span>MANUAL MULAI 12 PCS</span>
        <span>PICKUP DI CIPUTAT</span>
      </section>

      <section className="section section-services" id="paket">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">PILIH SESUAI KEBUTUHAN</p>
            <h2>Tiga layanan utama Orplyn.</h2>
          </div>
          <p>
            Lihat minimum order dan estimasi produksi sebelum meminta harga.
            Jadwal final tetap mengikuti desain, stok bahan, dan tanggal pakai.
          </p>
        </div>

        <div className="service-grid service-grid-primary">
          {primaryServices.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article className="service-card" key={service.slug}>
                <div className="service-image-wrap">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width="720"
                    height="540"
                    loading={index > 0 ? "lazy" : "eager"}
                  />
                </div>
                <div className="service-card-content">
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <ul className="offer-facts">
                    {service.orderFacts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <Link href={`/layanan/${service.slug}`}>
                    Lihat detail <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section proof-section" id="hasil-produksi">
        <div className="proof-intro">
          <p className="eyebrow">HASIL PRODUKSI NYATA</p>
          <h2>Lihat hasil Orplyn sebelum menentukan pilihan.</h2>
          <p>
            Foto hasil dan proses produksi membantu melihat warna, tekstur, dan
            penerapan teknik pada kebutuhan yang berbeda.
          </p>
          <Link className="button button-light" href="/portfolio">
            Lihat semua hasil <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="portfolio-preview">
          {portfolio.slice(0, 6).map((item, index) => (
            <figure key={item.image} className={`portfolio-item item-${index + 1}`}>
              <img
                src={item.image}
                alt={`${item.title} - ${item.category}`}
                width="720"
                height="720"
                loading="lazy"
              />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="why-image">
          <img
            src="/images/proses-sablon.jpg"
            alt="Proses sablon kaos di workshop Orplyn"
            width="1080"
            height="1440"
            loading="lazy"
          />
        </div>
        <div className="why-content">
          <p className="eyebrow eyebrow-dark">KENAPA ORPLYN</p>
          <h2>Lebih mudah memilih sebelum produksi dimulai.</h2>
          <p className="lead-copy">
            Belum yakin soal bahan atau teknik? Orplyn membantu menyesuaikan
            pilihan dengan desain, jumlah, penggunaan, dan target selesai.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Pesanan satuan dan produksi batch tersedia dalam satu tempat
            </li>
            <li>
              <Ruler aria-hidden="true" />
              Jumlah, ukuran, desain, dan target selesai diperiksa sebelum harga
            </li>
            <li>
              <Palette aria-hidden="true" />
              Konsultasi bahan dan teknik mengikuti desain serta penggunaan
            </li>
            <li>
              <MapPin aria-hidden="true" />
              Workshop jelas di Ciputat Timur dan melayani pengiriman nasional
            </li>
          </ul>
        </div>
      </section>

      <section className="section process-section" id="cara-order">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">CARA ORDER</p>
            <h2>Empat langkah menuju produksi.</h2>
          </div>
          <p>Detail yang lengkap membantu admin memberi estimasi lebih sesuai.</p>
        </div>
        <ol className="process-list">
          {[
            ["01", "Pilih layanan", "Tentukan produk dan kisaran jumlah pesanan."],
            ["02", "Isi detail", "Kirim penggunaan, desain, target selesai, dan lokasi."],
            ["03", "Terima estimasi", "Admin memeriksa bahan, teknik, jadwal, dan harga."],
            ["04", "Konfirmasi produksi", "Setujui detail, lakukan DP, lalu pilih pickup atau pengiriman."],
          ].map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">MINTA ESTIMASI</p>
          <h2>Ceritakan pesananmu untuk cek harga dan waktu produksi.</h2>
          <p>
            Pilih produk, jumlah, dan target selesai. Detailnya langsung dikirim
            ke WhatsApp Aulia untuk diperiksa.
          </p>
          <div className="quote-highlights">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Produk
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Jumlah
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Target selesai
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Pengiriman
            </span>
          </div>
        </div>
        <QuoteBuilder whatsappNumber={business.whatsapp} />
      </section>

      <section className="section faq-section">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">FAQ ORDER</p>
          <h2>Jawaban sebelum masuk WhatsApp.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="secondary-services-section">
        <div className="secondary-services-inner">
          <div>
            <p className="eyebrow">LAYANAN PRODUKSI LAIN</p>
            <h2>Bordir, jersey, clothing brand, dan merchandise.</h2>
          </div>
          <div className="secondary-service-list">
            {secondaryServices.map((service) => (
              <Link href={`/layanan/${service.slug}`} key={service.slug}>
                <span>{service.title}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section">
        <div>
          <p className="eyebrow eyebrow-dark">WORKSHOP & ADMIN ORPLYN</p>
          <h2>Pickup di Ciputat, kirim ke seluruh Indonesia.</h2>
          <p>{business.address}</p>
          <div className="location-meta">
            <span>WhatsApp {business.whatsappDisplay}</span>
            <span>Admin {business.adminHours}</span>
            <span>Workshop {business.workshopHours}</span>
          </div>
        </div>
        <div className="location-actions">
          <a
            className="button button-dark"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={19} aria-hidden="true" /> Buka Google Maps
          </a>
          <Link className="button button-outline" href="/kontak">
            Kontak lengkap <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <MobileQuoteCta />
    </>
  );
}
