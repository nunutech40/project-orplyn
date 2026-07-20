import type { Metadata } from "next";
import { CheckCircle2, MapPin } from "../../components/Icons";
import { AdsTrustBridge } from "../../components/AdsTrustBridge";
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
    description:
      "MOQ disesuaikan dengan produk dan teknik yang dipakai.",
  },
  {
    title: "Estimasi produksi",
    description:
      "Tanggal acara dicatat agar admin dapat mengecek jadwal sebelum order dilanjutkan.",
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
          <p className="eyebrow">ORPLYN · KAOS EVENT & KOMUNITAS · CIPUTAT</p>
          <h1>Kaos event & komunitas dengan sablon manual.</h1>
          <p className="ads-hero-copy">
            Kirim jumlah, desain, tanggal acara, dan lokasi. Aulia membantu
            mengecek bahan, teknik manual, minimum order, serta estimasi
            produksi sesuai detail pesanan dan antrean.
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
          <h2>Kamu bawa kebutuhan acaranya. Detail produksinya kita periksa bersama.</h2>
          <p>
            Kamu tidak perlu menentukan semua spesifikasi di awal. Empat hal
            ini diperiksa sebelum harga dan jadwal dikonfirmasi.
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
          <p className="eyebrow">CUKUP MULAI DARI EMPAT DETAIL</p>
          <h2>Lebih cepat masuk ke pembahasan yang bisa dihitung.</h2>
          <p>
            Template WhatsApp langsung menanyakan jumlah, tanggal acara,
            status desain, dan lokasi. Aulia lalu mengecek pilihan produksi
            yang sesuai dengan brief tersebut.
          </p>
        </div>
        <ol className="ads-process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Buka template WhatsApp</h3>
              <p>Lead ID dan sumber kunjungan ikut tercatat otomatis.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Lengkapi kebutuhan acara</h3>
              <p>Tulis jumlah, tanggal pakai, desain, dan lokasi.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Terima hasil pengecekan</h3>
              <p>Admin mengonfirmasi opsi, MOQ, jadwal, dan estimasi harga.</p>
            </div>
          </li>
        </ol>
      </section>

      <AdsTrustBridge />

      <CommercialProofSection
        proofs={commercialProofs}
        id="bukti-pesanan-event"
      />

      <section className="local-presence-proof" aria-label="Lokasi workshop Orplyn">
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
          <a className="local-presence-map" href={business.maps} target="_blank" rel="noreferrer">
            <MapPin size={19} aria-hidden="true" /> Lihat lokasi di Google Maps
          </a>
        </div>
      </section>

      <section className="ads-final-cta">
        <div>
          <p className="eyebrow">MULAI DARI BRIEF SINGKAT</p>
          <h2>Ceritakan kebutuhan eventmu ke Aulia.</h2>
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
