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
import { CommercialProofSection } from "./components/CommercialProofSection";
import { commercialProofs } from "./lib/commercial-proofs";
import {
  business,
  portfolio,
  primaryServices,
  secondaryServices,
  siteUrl,
  WHATSAPP_PLACEHOLDER,
} from "./lib/site-data";

export const metadata: Metadata = {
  title: "Jasa Sablon Kaos Event & Komunitas Ciputat",
  description:
    "Kaos custom untuk event dan komunitas di Orplyn, Ciputat. Kirim jumlah, desain, dan tanggal pakai untuk mengecek MOQ serta estimasi produksi.",
  alternates: {
    canonical: "/",
  },
};

const serviceIcons = [Shirt, ScanLine, Palette];
const featuredService = primaryServices[0]!;
const supportingServices = primaryServices.slice(1);
const homepageProofs = commercialProofs.slice(0, 3);

const faqs = [
  {
    question: "Apa yang perlu disiapkan untuk minta estimasi kaos event?",
    answer:
      "Siapkan perkiraan jumlah, tanggal dipakai, lokasi kirim atau pickup, status desain, dan pilihan bahan bila sudah ada. Admin akan memakai detail itu untuk mengecek pilihan produksi, MOQ, jadwal, dan harga.",
  },
  {
    question: "Berapa minimum order kaos event atau komunitas?",
    answer:
      "Sablon manual atau plastisol memiliki minimum order 12 pcs. DTF dapat dimulai dari 1 pcs bila teknik tersebut lebih sesuai. Pilihan final mengikuti desain, bahan, jumlah, dan hasil pengecekan admin.",
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
    question: "Apakah Orplyn menerima sablon kaos satuan?",
    answer:
      "Ya. Kaos custom dengan sablon DTF dan kaos polos bisa dimulai dari 1 pcs. Sablon manual, plastisol, special ink, fullprint, dan totebag memiliki minimum order 12 pcs; bordir/seragam dan jersey minimum 6 pcs.",
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
  image: `${siteUrl}/images/hero-sablon.webp`,
  description:
    "Jasa sablon kaos custom untuk event dan komunitas di Ciputat, Tangerang Selatan. DTF satuan, kaos polos, bordir, jersey, dan merchandise juga tersedia.",
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
    itemListElement: [...primaryServices, ...secondaryServices].map((service) => ({
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

      <section className="hero">
        <img
          className="hero-media"
          src="/images/hero-sablon.webp"
          alt="Kaos custom hasil produksi Orplyn untuk kebutuhan kelompok"
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">ORPLYN · SABLON KAOS CUSTOM · CIPUTAT</p>
          <h1>Kaos custom untuk event &amp; komunitas.</h1>
          <p className="hero-copy">
            Sampaikan jumlah, desain, dan tanggal pakai. Admin Orplyn mengecek
            pilihan bahan, minimum order, serta estimasi produksi sebelum
            pesanan dilanjutkan.
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
        <span>FOKUS EVENT &amp; KOMUNITAS</span>
        <span>TANGGAL PAKAI DICATAT</span>
        <span>MANUAL MULAI 12 PCS</span>
        <span>PICKUP DI CIPUTAT</span>
      </section>

      <section className="section section-services" id="paket">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">FOKUS EVENT &amp; KOMUNITAS</p>
            <h2>Mulai dari kebutuhan acaramu.</h2>
          </div>
          <p>
            Tanggal pakai, jumlah, desain, dan lokasi membantu admin mengecek
            jalur produksi yang relevan sebelum memberi estimasi.
          </p>
        </div>

        <article className="service-feature">
          <div className="service-feature-image">
            <img
              src={featuredService.image}
              alt={featuredService.imageAlt}
              width="960"
              height="720"
              loading="lazy"
            />
          </div>
          <div className="service-feature-content">
            <Shirt size={28} aria-hidden="true" />
            <p className="service-kicker">{featuredService.eyebrow}</p>
            <h3>{featuredService.title}</h3>
            <p>{featuredService.shortDescription}</p>
            <ul className="offer-facts">
              {featuredService.orderFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <Link href={`/layanan/${featuredService.slug}`}>
              Lihat kaos event <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className="supporting-services-heading">
          <h3>Butuh satuan atau kaos polos?</h3>
          <p>Kedua layanan ini tetap tersedia sebagai pilihan order langsung.</p>
        </div>

        <div className="service-grid service-grid-supporting">
          {supportingServices.map((service, index) => {
            const Icon = serviceIcons[index + 1];
            return (
              <article className="service-card" key={service.slug}>
                <div className="service-image-wrap">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width="720"
                    height="540"
                    loading="lazy"
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

      <CommercialProofSection proofs={homepageProofs} />

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
          <p className="eyebrow eyebrow-dark">UNTUK PIC EVENT</p>
          <h2>Mulai dari tanggal pakai, bukan istilah sablon.</h2>
          <p className="lead-copy">
            Sampaikan kebutuhan acara lebih dulu. Bahan dan teknik dibahas
            setelah jumlah, desain, tanggal pakai, dan lokasi diketahui.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Tanggal pakai, jumlah, dan lokasi masuk sejak permintaan awal
            </li>
            <li>
              <Ruler aria-hidden="true" />
              Minimum order dan estimasi normal terlihat sebelum masuk WhatsApp
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
            <h2>Empat langkah menyiapkan pesanan event.</h2>
          </div>
          <p>Detail yang lengkap membantu admin memberi estimasi lebih sesuai.</p>
        </div>
        <ol className="process-list">
          {[
            ["01", "Tentukan acara", "Masukkan kebutuhan dan tanggal kaos akan dipakai."],
            ["02", "Kirim detail", "Pilih produk, jumlah, status desain, dan lokasi."],
            ["03", "Terima estimasi", "Admin memeriksa bahan, teknik, MOQ, jadwal, dan harga."],
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
          <h2>Cek kebutuhan kaos untuk acaramu.</h2>
          <p>
            Masukkan jumlah, tanggal pakai, dan detail awal. Informasinya
            langsung dikirim ke WhatsApp Aulia untuk diperiksa.
          </p>
          <div className="quote-highlights">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Tanggal pakai
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Jumlah
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Status desain
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Pengiriman
            </span>
          </div>
        </div>
        <QuoteBuilder
          whatsappNumber={business.whatsapp}
          initialUseCase="Event / komunitas"
        />
      </section>

      <section className="section faq-section">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">FAQ ORDER</p>
          <h2>Pertanyaan sebelum minta estimasi.</h2>
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
