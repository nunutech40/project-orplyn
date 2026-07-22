import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Palette,
  Ruler,
  ScanLine,
  Shirt,
} from "./components/Icons";
import { MobileQuoteCta } from "./components/MobileQuoteCta";
import { ProofSlider } from "./components/ProofSlider";
import { WhatsAppQuickStart } from "./components/WhatsAppQuickStart";
import {
  business,
  homepagePortfolio,
  primaryServices,
  secondaryServices,
  siteUrl,
  WHATSAPP_PLACEHOLDER,
} from "./lib/site-data";

export const metadata: Metadata = {
  title: "Sablon Manual, DTF & Apparel Custom Ciputat",
  description:
    "Orplyn mengerjakan sablon manual, DTF, kaos event, polo, hoodie, jersey, jaket, konveksi, dan apparel custom di Ciputat.",
  alternates: {
    canonical: "/",
  },
};

const serviceIcons = [Shirt, ScanLine, Palette];
const featuredService = primaryServices[0]!;
const supportingServices = primaryServices.slice(1);

const faqs = [
  {
    question: "Apa yang perlu disiapkan untuk minta estimasi kaos event?",
    answer:
      "Siapkan perkiraan jumlah, tanggal dipakai, lokasi kirim atau pickup, status desain, dan pilihan bahan bila sudah ada. Admin akan memakai detail itu untuk mengecek pilihan produksi, MOQ, jadwal, dan harga.",
  },
  {
    question: "Berapa minimum order kaos event atau komunitas?",
    answer:
      "Sablon manual memiliki minimum order 12 pcs untuk 1 warna. Untuk desain lebih dari 1 warna, minimum pemesanan menjadi 24 pcs. DTF dapat dimulai dari 1 pcs bila teknik tersebut lebih sesuai. Pilihan final mengikuti desain, bahan, jumlah, dan hasil pengecekan admin.",
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
  image: `${siteUrl}/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg`,
  description:
    "Sablon manual, DTF, kaos event, polo, hoodie, jersey, jaket, konveksi, dan apparel custom di Ciputat, Tangerang Selatan.",
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
          src="/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg"
          alt="Hasil sablon manual pada kaos produksi Orplyn"
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">ORPLYN APPAREL &amp; PRINT STUDIO · CIPUTAT</p>
          <h1>Sablon dan apparel custom. Dibuat untuk dipakai bersama.</h1>
          <p className="hero-copy">
            Dari workshop Orplyn di Ciputat: sablon manual, DTF, kaos event,
            polo, hoodie, jersey, jaket, konveksi, dan apparel custom untuk
            acara, tim, komunitas, brand, dan kebutuhan personal.
          </p>
          <div className="hero-actions">
            <WhatsAppQuickStart
              whatsappNumber={business.whatsapp}
              lane="batch"
              label="Cek kebutuhan & minta estimasi"
              className="button button-primary"
              product="Sablon / apparel custom"
              useCase="Kebutuhan apparel custom"
              placement="homepage_hero_batch"
            />
            <Link className="button button-ghost-light" href="#layanan">
              Lihat kemampuan Orplyn <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <Link className="hero-proof-link" href="#hasil-produksi">
            Lihat hasil produksi Orplyn
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-location">
          <MapPin size={18} aria-hidden="true" />
          Jl. Legoso Selatan II, Ciputat Timur
        </div>
      </section>

      <section className="capability-strip" aria-label="Aturan order utama Orplyn">
        <span>LANGSUNG CHAT AULIA</span>
        <span>DTF MULAI 1 PCS</span>
        <span>MANUAL 1 WARNA MULAI 12 PCS</span>
        <span>PICKUP DI CIPUTAT</span>
      </section>

      <section
        className="section capability-overview"
        id="layanan"
        aria-labelledby="capability-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">ORPLYN UNTUK BANYAK KEBUTUHAN</p>
            <h2 id="capability-title">
              Untuk acara yang disiapkan, tim yang dibangun, dan identitas yang ingin dibawa.
            </h2>
          </div>
          <p>
            Orplyn mengerjakan sablon manual, DTF, kaos event, polo, hoodie,
            jersey, jaket, konveksi, dan apparel custom.
          </p>
        </div>
        <div className="capability-tags" aria-label="Jenis produk dan layanan Orplyn">
          {[
            "Sablon manual",
            "DTF",
            "Kaos event",
            "Polo",
            "Hoodie",
            "Jersey",
            "Jaket",
            "Konveksi",
            "Apparel custom",
            "Ciputat",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-services" id="paket">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">UNTUK EVENT &amp; KOMUNITAS</p>
            <h2>Saat semua bergerak bersama, identitasnya harus terlihat.</h2>
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
          <p className="eyebrow">DARI DESAIN KE HASIL JADI</p>
          <h2>Lihat hasilnya. Kenali cara kerjanya.</h2>
          <p>
            Jelajahi hasil sablon, apparel custom, dan proses produksi untuk
            menemukan arah yang paling dekat dengan kebutuhanmu.
          </p>
          <Link className="button button-light" href="/portfolio">
            Lihat semua hasil <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="portfolio-preview">
          {homepagePortfolio.map((item, index) => (
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

      <ProofSlider id="bukti-pesanan" />

      <section className="section why-section">
        <div className="why-image">
          <img
            src="/catalog/process/manual/01-proses-sablon-meja-curing.jpeg"
            alt="Proses sablon kaos di workshop Orplyn"
            width="1080"
            height="1440"
            loading="lazy"
          />
        </div>
        <div className="why-content">
          <p className="eyebrow eyebrow-dark">CARA ORPLYN BEKERJA</p>
          <h2>Kebutuhan dulu. Teknik menyusul.</h2>
          <p className="lead-copy">
            Ceritakan akan dipakai untuk apa, kapan dibutuhkan, jumlahnya, dan
            desain yang kamu bawa. Aulia membantu mengecek bahan, teknik,
            minimum order, serta estimasi sebelum produksi dilanjutkan.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Langsung masuk WhatsApp dengan template event atau satuan
            </li>
            <li>
              <Ruler aria-hidden="true" />
              DTF bisa mulai 1 pcs, sablon manual atau plastisol mulai 12 pcs
            </li>
            <li>
              <Palette aria-hidden="true" />
              Bahan dan teknik dibahas mengikuti desain serta penggunaan
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
            <h2>Dari chat ke produksi, detailnya dibahas satu per satu.</h2>
          </div>
          <p>Detail yang lengkap membantu admin memberi estimasi lebih sesuai.</p>
        </div>
        <ol className="process-list">
          {[
            ["01", "Pilih jalur chat", "Pilih event / batch atau pesanan satuan."],
            ["02", "Lengkapi template", "Tambahkan jumlah, tanggal pakai, desain, dan lokasi di WhatsApp."],
            ["03", "Tunggu pengecekan", "Aulia memeriksa bahan, teknik, MOQ, jadwal, dan harga."],
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
          <p className="eyebrow">LANGSUNG KE WHATSAPP</p>
          <h2>Mulai pesananmu dari WhatsApp.</h2>
          <p>
            Tidak perlu mengisi form di website. Buka WhatsApp, lengkapi bagian
            yang masih kosong, lalu kirim ke Aulia.
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
        <div className="quick-order-panel">
          <article className="quick-order-option quick-order-option-primary">
            <span className="quick-order-tag">JALUR UTAMA</span>
            <h3>Event / produksi batch</h3>
            <p>
              Untuk panitia, komunitas, kampus, kantor, atau kebutuhan kelompok.
              Sablon manual 1 warna mulai 12 pcs; desain lebih dari 1 warna
              mulai 24 pcs.
            </p>
            <WhatsAppQuickStart
              whatsappNumber={business.whatsapp}
              lane="batch"
              label="Cek kebutuhan & minta estimasi"
              className="button button-dark"
              product="Sablon manual kaos event / komunitas"
              useCase="Event / komunitas"
              placement="homepage_quick_order_batch"
            />
          </article>
          <article className="quick-order-option">
            <span className="quick-order-tag">SATUAN / COBA DULU</span>
            <h3>Pesanan satuan</h3>
            <p>
              Untuk kaos personal, sampel, atau test print. DTF dan kaos polos
              bisa dimulai dari 1 pcs.
            </p>
            <WhatsAppQuickStart
              whatsappNumber={business.whatsapp}
              lane="single"
              label="Chat order satuan"
              className="button button-outline"
              placement="homepage_quick_order_single"
            />
          </article>
          <p className="quick-order-note">
            Sudah punya detail lengkap? <Link href="/kontak#quote">Isi brief lengkap</Link>.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">FAQ ORDER</p>
          <h2>Yang perlu kamu tahu sebelum produksi.</h2>
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
            <p className="eyebrow">LEBIH DARI KAOS EVENT</p>
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
          <h2>Workshop di Ciputat. Kirim ke seluruh Indonesia.</h2>
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
