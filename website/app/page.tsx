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

const serviceIcons = [ScanLine, Shirt, Palette];

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
      "Harga dihitung dari jenis produk, jumlah, bahan, ukuran, teknik sablon, dan desain. Isi brief WhatsApp agar admin bisa mengecek spesifikasi dan memberi estimasi yang sesuai, bukan harga yang menyesatkan.",
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
          <p className="eyebrow">ORPLYN · SABLON &amp; KAOS CUSTOM</p>
          <h1>Jasa sablon kaos custom di Ciputat.</h1>
          <p className="hero-copy">
            Mulai 1 pcs untuk DTF dan kaos polos. Tersedia juga produksi batch
            untuk event dan bisnis.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#quote">
              <MessageCircle size={20} aria-hidden="true" />
              Minta estimasi
            </Link>
            <Link className="button button-ghost-light" href="#paket">
              Lihat layanan
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

      <section className="funnel-lanes" aria-label="Pilih jalur order">
        <div className="funnel-lane funnel-lane-single">
          <p className="eyebrow eyebrow-dark">SATUAN / TEST PRINT</p>
          <h2>Butuh 1-5 pcs?</h2>
          <p>
            Mulai dari kaos polos atau kaos custom dengan sablon DTF. Cocok untuk
            kebutuhan personal, sample brand, dan coba desain.
          </p>
          <Link href="#quote">
            Mulai brief satuan <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="funnel-lane funnel-lane-batch">
          <p className="eyebrow">PRODUKSI / BATCH</p>
          <h2>Butuh untuk kelompok atau dijual lagi?</h2>
          <p>
            Untuk event, komunitas, sekolah, kantor, clothing brand, vendor,
            atau reseller. MOQ mengikuti produk dan teknik yang dipilih.
          </p>
          <Link href="#quote">
            Mulai brief produksi <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section section-services" id="paket">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">TIGA KEBUTUHAN UTAMA</p>
            <h2>Mulai dari jalur yang paling relevan.</h2>
          </div>
          <p>
            Minimum order dan estimasi di bawah adalah panduan normal. Admin
            tetap mengecek desain, stok bahan, antrean, serta tanggal pakai.
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

      <section className="section proof-section" id="hasil-produksi">
        <div className="proof-intro">
          <p className="eyebrow">HASIL PRODUKSI NYATA</p>
          <h2>Lihat detail hasil sebelum memilih teknik.</h2>
          <p>
            Foto hasil dan proses produksi membantu membandingkan karakter warna,
            tekstur, serta penerapan teknik pada kebutuhan yang berbeda.
          </p>
          <Link className="button button-light" href="/portfolio">
            Buka portfolio <ArrowRight size={18} aria-hidden="true" />
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
          <p className="eyebrow eyebrow-dark">EVENT & KOMUNITAS</p>
          <h2>Satu tanggal pakai, banyak ukuran, satu brief produksi.</h2>
          <p>
            Siapkan jumlah, desain, bahan yang diinginkan, dan target selesai agar
            kebutuhan kelompok bisa dicek lebih cepat.
          </p>
          <Link href="/layanan/kaos-event-komunitas">
            Bahas order kelompok <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="buyer-path buyer-path-brand">
          <p className="eyebrow">VENDOR, RESELLER & BRAND</p>
          <h2>Repeat order dimulai dari spesifikasi yang jelas.</h2>
          <p>
            Bahas bahan, teknik, jumlah, artwork, sample, dan kebutuhan produksi
            berulang bersama admin.
          </p>
          <Link href="/layanan/produksi-clothing-brand">
            Bahas produksi batch <ArrowRight size={18} aria-hidden="true" />
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
          <p className="eyebrow eyebrow-dark">CARA ORPLYN MEMBANTU</p>
          <h2>Mulai dari kebutuhan, bukan sekadar nama teknik.</h2>
          <p className="lead-copy">
            Desain yang sama bisa membutuhkan pendekatan berbeda. Brief awal
            membantu admin mengarahkan bahan, teknik, jumlah, dan jadwal yang
            lebih masuk akal.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Jalur satuan dan produksi dipisahkan sejak awal
            </li>
            <li>
              <Ruler aria-hidden="true" />
              MOQ, jumlah, ukuran, desain, dan deadline diperiksa sebelum quote
            </li>
            <li>
              <Palette aria-hidden="true" />
              Bahan dan teknik dibahas mengikuti artwork serta penggunaan
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
            <p className="eyebrow eyebrow-dark">ALUR ORDER</p>
            <h2>Dari brief sampai produksi.</h2>
          </div>
          <p>Supaya admin tidak mengulang pertanyaan dasar dari nol.</p>
        </div>
        <ol className="process-list">
          {[
            ["01", "Pilih jalur", "Tentukan satuan/test print atau produksi/batch."],
            ["02", "Kirim brief", "Isi produk, jumlah, penggunaan, deadline, dan lokasi."],
            ["03", "Cek kebutuhan", "Admin mengecek MOQ, bahan, teknik, desain, dan jadwal."],
            ["04", "Konfirmasi", "Setujui detail dan lakukan DP 50 persen sebelum produksi."],
            ["05", "Ambil atau kirim", "Pelunasan dilakukan sebelum pickup atau pengiriman."],
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
          <p className="eyebrow">CEK MOQ & ESTIMASI</p>
          <h2>Kirim brief yang langsung bisa ditindaklanjuti.</h2>
          <p>
            Form akan menyaring produk dan jumlah berdasarkan jalur satuan atau
            produksi, lalu menyusun pesan lengkap ke WhatsApp Aulia.
          </p>
          <div className="quote-highlights">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Jalur order
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Produk & jumlah
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Deadline
            </span>
            <span>
              <CheckCircle2 size={18} aria-hidden="true" /> Lokasi
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

      <Link className="mobile-quote-cta" href="#quote">
        <MessageCircle size={20} aria-hidden="true" />
        Cek estimasi
      </Link>
    </>
  );
}
