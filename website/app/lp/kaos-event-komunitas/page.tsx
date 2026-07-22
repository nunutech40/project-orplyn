import type { Metadata } from "next";
import { CheckCircle2, MapPin } from "../../components/Icons";
import { AdsTrustBridge } from "../../components/AdsTrustBridge";
import { AdsManualProofGallery } from "../../components/AdsManualProofGallery";
import { CommercialProofSection } from "../../components/CommercialProofSection";
import { ManualPrintProcess } from "../../components/ManualPrintProcess";
import { MobileQuoteCta } from "../../components/MobileQuoteCta";
import { WhatsAppQuickStart } from "../../components/WhatsAppQuickStart";
import { getCommercialProofs } from "../../lib/commercial-proofs";
import { business } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Sablon Manual Kaos Event & Komunitas Ciputat",
  description:
    "Sablon manual untuk kaos event dan komunitas di Ciputat. Kirim jumlah, desain, tanggal acara, dan lokasi untuk mengecek teknik, MOQ, serta estimasi produksi.",
  alternates: {
    canonical: "/lp/kaos-event-komunitas",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: "Sablon Manual Kaos Event & Komunitas Ciputat | Orplyn",
    description:
      "Sampaikan jumlah, desain, tanggal acara, dan lokasi untuk mengecek pilihan sablon manual bersama Orplyn.",
    url: "/lp/kaos-event-komunitas",
    images: [
      {
        url: "/images/hero-sablon.webp",
        alt: "Hasil sablon kaos produksi Orplyn",
      },
    ],
  },
};

const checkItems = [
  {
    title: "Bahan kaos",
    description:
      "Pilihan 20s, 24s, atau 30s dibahas berdasarkan kebutuhan pemakaian.",
  },
  {
    title: "Teknik manual",
    description:
      "Plastisol, rubber/pasta, discharge, atau efek khusus dipilih sesuai desain dan bahan.",
  },
  {
    title: "Minimum order",
    description: "MOQ disesuaikan dengan produk dan teknik yang dipakai.",
  },
  {
    title: "Estimasi produksi",
    description:
      "Tanggal acara dicatat agar admin dapat mengecek jadwal sebelum order dilanjutkan.",
  },
];

const landingFaqs = [
  {
    question: "Minimum ordernya berapa?",
    answer:
      "Sablon manual mulai 12 pcs untuk 1 warna, dan 24 pcs untuk desain lebih dari 1 warna. Untuk kebutuhan satuan atau full-color, ada opsi DTF.",
  },
  {
    question: "Berapa lama pengerjaannya?",
    answer:
      "Estimasi normal sablon manual 3-7 hari kerja, tergantung jumlah dan antrean. Tanggal acara dicek dulu bersama admin sebelum order dilanjutkan.",
  },
  {
    question: "Belum tahu bahan atau teknik yang cocok, bagaimana?",
    answer:
      "Tidak masalah. Kirim jumlah, desain, dan tanggal acara. Aulia membantu mengecek bahan, teknik, serta MOQ sebelum kamu memutuskan.",
  },
  {
    question: "Bisa datang ke workshop?",
    answer:
      "Bisa. Workshop ada di Ciputat, Tangerang Selatan. Kamu bisa datang atau pickup; janji datang disarankan agar kebutuhanmu langsung dicek admin.",
  },
  {
    question: "Bisa bikin sample atau test print dulu?",
    answer:
      "Bisa. Kamu bisa minta satu sample berbayar sebelum lanjut ke produksi jumlah besar. Biaya sample akan didiskusikan saat percakapan WhatsApp.",
  },
];

export default function EventCommunityAdsLandingPage() {
  const commercialProofs = getCommercialProofs("kaos-event-komunitas");

  return (
    <div className="ads-landing">
      <section className="ads-landing-hero">
        <img
          className="ads-hero-media"
          src="/images/hero-sablon.webp"
          alt="Hasil sablon penuh warna pada kaos produksi Orplyn"
          width="1600"
          height="1067"
          loading="eager"
          fetchPriority="high"
        />
        <div className="ads-hero-overlay" aria-hidden="true" />
        <div className="ads-hero-content">
          <p className="eyebrow">
            SABLON MANUAL KAOS EVENT & KOMUNITAS · CIPUTAT
          </p>
          <h1>Kaos Event untuk Tim, Panitia, dan Komunitas.</h1>
          <p className="ads-hero-copy">
            Kirim jumlah, desain, dan tanggal acara. Aulia membantu mengecek
            sablon manual, bahan, MOQ, serta estimasi sebelum produksi dimulai.
          </p>
          <WhatsAppQuickStart
            whatsappNumber={business.whatsapp}
            lane="batch"
            label="Cek kebutuhan & minta estimasi"
            className="button button-primary ads-primary-cta"
            product="Sablon manual kaos event / komunitas"
            useCase="Event / komunitas"
            placement="ads_lp_hero"
          />
          <p className="ads-cta-note">
            Template chat sudah menanyakan detail penting. Kamu tinggal
            melengkapinya di WhatsApp.
          </p>
        </div>
      </section>

      <section className="ads-order-guide" aria-label="Panduan awal order">
        <div>
          <strong>12 pcs</strong>
          <span>Minimum sablon manual untuk 1 warna</span>
        </div>
        <div>
          <strong>3-7 hari</strong>
          <span>Estimasi produksi normal</span>
        </div>
        <div>
          <strong>Ciputat</strong>
          <span>Pickup atau pengiriman</span>
        </div>
        <p>
          Desain lebih dari 1 warna minimum 24 pcs. Harga dan jadwal final
          dikonfirmasi setelah desain, bahan, jumlah, stok, serta tanggal acara
          diperiksa admin.
        </p>
      </section>

      <section className="ads-value-section">
        <div className="ads-section-heading">
          <p className="eyebrow eyebrow-dark">YANG DIBANTU CEK</p>
          <h2>
            Kamu urus acaranya. Orplyn bantu wujudkan kaos yang akan dipakai
            bersama.
          </h2>
          <p>
            Kamu tidak perlu menentukan semua spesifikasi di awal. Empat hal ini
            diperiksa sebelum harga dan jadwal dikonfirmasi.
          </p>
        </div>
        <div className="ads-value-grid">
          {checkItems.map((item) => (
            <article key={item.title}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ManualPrintProcess />

      <section className="ads-brief-section">
        <div className="ads-brief-copy">
          <p className="eyebrow">SEBELUM MINTA ESTIMASI</p>
          <h2>Supaya estimasi bisa dicek, siapkan 4 hal ini.</h2>
          <p>
            Empat informasi ini cukup untuk membantu Aulia mulai mengecek
            teknik, MOQ, dan estimasi yang sesuai kebutuhan acaramu.
          </p>
        </div>
        <ol className="ads-process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Jumlah kaos</h3>
              <p>
                Perkiraan jumlah membantu mengecek minimum order dan jalur
                produksi.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Tanggal acara</h3>
              <p>Tanggal dipakai dicatat sebelum admin mengecek jadwal.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Status desain</h3>
              <p>Sudah ada desain atau masih konsep, keduanya bisa dibahas.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Lokasi atau pickup</h3>
              <p>Pilih kebutuhan kirim atau pickup di workshop Ciputat.</p>
            </div>
          </li>
        </ol>
      </section>

      <AdsTrustBridge />

      <AdsManualProofGallery />

      <CommercialProofSection
        proofs={commercialProofs}
        id="tanggapan-pelanggan"
        eyebrow="ULASAN & TANGGAPAN PELANGGAN"
        title="Bukan hanya hasilnya. Lihat juga tanggapan pemesannya."
        description="Dua bukti yang sudah mendapat izin publikasi: ulasan pesanan Hari Kartini dan tanggapan pelanggan untuk hasil plastisol."
      />

      <section
        className="local-presence-proof"
        aria-label="Lokasi workshop Orplyn"
      >
        <div>
          <p className="eyebrow eyebrow-dark">WORKSHOP ORPLYN · CIPUTAT</p>
          <h2>Boleh datang atau pickup di workshop.</h2>
          <p>
            Lokasi workshop bisa didatangi untuk pickup. Janji datang disarankan
            agar kebutuhanmu bisa dicek bersama admin.
          </p>
        </div>
        <div className="local-presence-details">
          <address>{business.address}</address>
          <dl>
            <div>
              <dt>Workshop</dt>
              <dd>{business.workshopHours}</dd>
            </div>
            <div>
              <dt>Admin</dt>
              <dd>{business.adminHours}</dd>
            </div>
          </dl>
          <a
            className="local-presence-map"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={19} aria-hidden="true" /> Lihat lokasi di Google Maps
          </a>
        </div>
      </section>

      <section
        className="section faq-section ads-faq-section"
        aria-label="Pertanyaan sebelum chat"
      >
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">PERTANYAAN SEBELUM CHAT</p>
          <h2>Yang sering ditanyakan sebelum minta estimasi.</h2>
        </div>
        <div className="faq-list">
          {landingFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="ads-final-cta">
        <div>
          <p className="eyebrow">MULAI DARI CHAT SINGKAT</p>
          <h2>Mulai kaos untuk acaramu.</h2>
          <p>
            Admin aktif {business.adminHours}. Workshop berada di Ciputat,
            Tangerang Selatan.
          </p>
          <span className="ads-location">
            <MapPin size={18} aria-hidden="true" /> {business.address}
          </span>
        </div>
        <WhatsAppQuickStart
          whatsappNumber={business.whatsapp}
          lane="batch"
          label="Cek kebutuhan & minta estimasi"
          className="button button-primary ads-primary-cta"
          product="Sablon manual kaos event / komunitas"
          useCase="Event / komunitas"
          placement="ads_lp_final"
        />
      </section>

      <MobileQuoteCta
        label="Cek kebutuhan & minta estimasi"
        placement="ads_lp_mobile_sticky"
        heroSelector=".ads-landing-hero"
        product="Sablon manual kaos event / komunitas"
      />
    </div>
  );
}
