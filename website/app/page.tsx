import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Palette,
  Ruler,
  ScanLine,
  Shirt,
  Sparkles,
} from "./components/Icons";
import { QuoteBuilder } from "./components/QuoteBuilder";
import {
  business,
  portfolio,
  services,
  siteUrl,
  WHATSAPP_PLACEHOLDER,
} from "./lib/site-data";

export const metadata: Metadata = {
  title: "Jasa Sablon Kaos & Apparel Custom di Ciputat",
  description:
    "Orplyn melayani kaos custom, sablon DTF dan manual, bordir, jersey, totebag, dan kaos polos di Ciputat, Tangerang Selatan.",
  alternates: {
    canonical: "/",
  },
};

const serviceIcons = [Shirt, Layers3, ScanLine, Sparkles, PackageCheck, Palette];

const faqs = [
  {
    question: "Orplyn bisa mengerjakan produk apa saja?",
    answer:
      "Kaos polos dan custom, sablon DTF maupun manual, bordir, jersey, kemeja, jaket, hoodie, totebag, serta kebutuhan apparel lainnya.",
  },
  {
    question: "Apakah bisa kirim desain sendiri?",
    answer:
      "Bisa. Kirim desain yang tersedia saat konsultasi. Tim Orplyn akan membantu mengecek pilihan teknik yang sesuai dengan artwork dan bahan.",
  },
  {
    question: "Berapa minimum order dan lama produksinya?",
    answer:
      "Minimum order dan waktu produksi bergantung pada produk, teknik, jumlah, serta detail desain. Isi brief singkat agar admin bisa mengecek kebutuhanmu.",
  },
  {
    question: "Apakah pesanan bisa diambil langsung?",
    answer:
      "Bisa dikonsultasikan untuk pickup di lokasi Orplyn, Jl. Legoso Selatan II, Ciputat Timur, Tangerang Selatan.",
  },
  {
    question: "Teknik sablon apa saja yang tersedia?",
    answer:
      "Tersedia DTF dan beragam teknik manual seperti plastisol, discharge, rubber, puff, high density, foil, glitter, bludru, dan lainnya sesuai kebutuhan desain.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ORPLYN KAOS POLOS DAN SABLON CUSTOM",
  alternateName: business.longName,
  url: siteUrl,
  logo: `${siteUrl}/brand/orplyn-monogram-black.png`,
  image: `${siteUrl}/images/hero-sablon.jpg`,
  description:
    "Penyedia kaos polos, sablon custom, bordir, jersey, dan apparel custom di Ciputat, Tangerang Selatan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Legoso Sel. II No.43, Pisangan",
    addressLocality: "Ciputat Timur",
    addressRegion: "Banten",
    postalCode: "15419",
    addressCountry: "ID",
  },
  areaServed: ["Ciputat", "Tangerang Selatan", "Jakarta Selatan", "Depok"],
  sameAs: [business.instagram, business.maps],
  ...(business.whatsapp !== WHATSAPP_PLACEHOLDER
    ? {
        telephone: `+${business.whatsapp}`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${business.whatsapp}`,
          contactType: "sales",
          availableLanguage: ["Indonesian"],
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
          <p className="eyebrow">APPAREL & PRINT STUDIO · CIPUTAT</p>
          <h1>Kaos custom yang siap dipakai, dijual, dan dibanggakan.</h1>
          <p className="hero-copy">
            Dari kaos event sampai produksi clothing brand. Sablon DTF & manual,
            bordir, jersey, totebag, dan apparel custom dikerjakan di Ciputat,
            Tangerang Selatan.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#quote">
              <MessageCircle size={20} aria-hidden="true" />
              Konsultasi & cek estimasi
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

      <section className="capability-strip" aria-label="Layanan utama Orplyn">
        <span>DTF & SABLON MANUAL</span>
        <span>BORDIR</span>
        <span>JERSEY & APPAREL</span>
        <span>PICKUP DI CIPUTAT</span>
      </section>

      <section className="section section-services" id="layanan">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">PILIH KEBUTUHAN</p>
            <h2>Mau bikin apa?</h2>
          </div>
          <p>
            Mulai dari kebutuhanmu. Teknik, bahan, dan detail produksi kita cek
            setelah brief-nya jelas.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article className="service-card" key={service.slug}>
                <div className="service-image-wrap">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width="720"
                    height="540"
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
                <div className="service-card-content">
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/layanan/${service.slug}`}>
                    Lihat layanan <ArrowRight size={17} aria-hidden="true" />
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
          <h2>Bukan mockup. Ini yang keluar dari workshop.</h2>
          <p>
            Lihat karakter warna, tekstur, dan detail pengerjaan untuk membantu
            menentukan arah produksi yang cocok.
          </p>
          <Link className="button button-light" href="/portfolio">
            Buka semua portfolio <ArrowRight size={18} aria-hidden="true" />
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

      <section className="section buyer-paths">
        <div className="buyer-path buyer-path-event">
          <p className="eyebrow eyebrow-dark">EVENT & ORGANISASI</p>
          <h2>Satu kebutuhan, banyak ukuran, satu deadline.</h2>
          <p>
            Cocok untuk kepanitiaan, komunitas, sekolah, kampus, gathering, dan
            tim kantor.
          </p>
          <Link href="/layanan/kaos-event-komunitas">
            Siapkan order kelompok <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="buyer-path buyer-path-brand">
          <p className="eyebrow">CLOTHING BRAND</p>
          <h2>Artwork punya karakter. Teknik cetaknya harus mendukung.</h2>
          <p>
            Eksplorasi plastisol, discharge, puff, high density, foil, fullprint,
            dan teknik lainnya.
          </p>
          <Link href="/layanan/produksi-clothing-brand">
            Bahas produksi brand <ArrowRight size={18} aria-hidden="true" />
          </Link>
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
          <h2>Mulai dari hasil yang kamu kejar.</h2>
          <p className="lead-copy">
            Desain yang sama bisa membutuhkan teknik berbeda. Orplyn membantu
            mengarahkan pilihan berdasarkan artwork, bahan, jumlah, dan kebutuhan
            akhirnya.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Pilihan teknik digital dan manual dalam satu studio
            </li>
            <li>
              <Ruler aria-hidden="true" />
              Brief jumlah, ukuran, desain, dan deadline diperiksa di awal
            </li>
            <li>
              <Palette aria-hidden="true" />
              Efek cetak bisa disesuaikan dengan karakter artwork
            </li>
            <li>
              <MapPin aria-hidden="true" />
              Lokasi workshop jelas di Ciputat Timur
            </li>
          </ul>
        </div>
      </section>

      <section className="section process-section" id="cara-order">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">ALUR ORDER</p>
            <h2>Dari brief sampai jadi.</h2>
          </div>
          <p>Supaya kebutuhan cepat dipahami dan estimasi tidak bolak-balik.</p>
        </div>
        <ol className="process-list">
          {[
            ["01", "Kirim brief", "Pilih produk, jumlah, deadline, dan status desain."],
            ["02", "Cek artwork", "Kami cocokkan desain dengan bahan dan teknik produksi."],
            ["03", "Terima estimasi", "Detail kebutuhan dikonfirmasi sebelum produksi dimulai."],
            ["04", "Produksi", "Pesanan masuk ke proses cetak, bordir, atau finishing."],
            ["05", "Ambil atau kirim", "Koordinasikan pickup di Ciputat atau opsi pengiriman."],
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
          <h2>Ceritakan kebutuhanmu dalam satu menit.</h2>
          <p>
            Brief ini langsung disusun menjadi pesan WhatsApp agar admin bisa
            mengecek kebutuhan lebih cepat.
          </p>
          <div className="quote-highlights">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Produk
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Jumlah
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Deadline
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Status desain
            </span>
          </div>
        </div>
        <QuoteBuilder whatsappNumber={business.whatsapp} />
      </section>

      <section className="section faq-section">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">FAQ</p>
          <h2>Sebelum mulai order.</h2>
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

      <section className="location-section">
        <div>
          <p className="eyebrow eyebrow-dark">WORKSHOP ORPLYN</p>
          <h2>Datang atau pickup di Ciputat.</h2>
          <p>{business.address}</p>
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
            Lihat detail kontak <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Link className="mobile-quote-cta" href="#quote">
        <MessageCircle size={20} aria-hidden="true" />
        Minta estimasi
      </Link>
    </>
  );
}
