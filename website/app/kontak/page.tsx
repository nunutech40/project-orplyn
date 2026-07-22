import type { Metadata } from "next";
import {
  Camera,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
} from "../components/Icons";
import { QuoteBuilder } from "../components/QuoteBuilder";
import { WhatsAppQuickStart } from "../components/WhatsAppQuickStart";
import { business } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Workshop Orplyn",
  description:
    "Hubungi Orplyn dan temukan workshop kaos custom, sablon, bordir, dan apparel di Ciputat Timur, Tangerang Selatan.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-intro contact-intro">
        <p className="eyebrow">KONTAK ORPLYN · LEGOSO, CIPUTAT</p>
        <h1>Langsung bicara dengan Admin Aulia.</h1>
        <p>
          Ceritakan apa yang ingin dibuat, jumlahnya, dan kapan dipakai. Aulia
          menjadi kontak pertama untuk membantu mengecek kebutuhan sebelum
          pesanan masuk ke tahap berikutnya.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <div className="contact-aulia-card">
            <div className="contact-aulia-heading">
              <span className="aulia-avatar aulia-avatar-dark" aria-hidden="true">A</span>
              <div>
                <p className="eyebrow">ADMIN ORPLYN</p>
                <h2>Aulia menerima kebutuhanmu langsung.</h2>
              </div>
            </div>
            <p>
              Pesanmu masuk langsung ke Aulia. Pilih jalur event/batch atau
              satuan, lalu lanjutkan detailnya di WhatsApp.
            </p>
            <span className="contact-aulia-meta">
              <MessageCircle size={18} aria-hidden="true" />
              {business.whatsappDisplay} · {business.adminHours}
            </span>
            <div className="contact-wa-links">
              <WhatsAppQuickStart
                whatsappNumber={business.whatsapp}
                lane="batch"
                label="Chat event / batch dengan Aulia"
                className="button button-primary"
                product="Kaos custom event / komunitas"
                useCase="Event / komunitas"
                placement="contact_card_batch"
              />
              <WhatsAppQuickStart
                whatsappNumber={business.whatsapp}
                lane="single"
                label="Chat order satuan"
                className="button button-ghost-light"
                placement="contact_card_single"
              />
            </div>
          </div>
          <div>
            <Clock3 size={25} aria-hidden="true" />
            <h2>Jam workshop</h2>
            <p>
              {business.workshopHours}. Konfirmasi ke admin sebelum datang untuk
              memastikan kebutuhanmu bisa dilayani.
            </p>
          </div>
          <div>
            <MapPin size={25} aria-hidden="true" />
            <h2>Workshop Ciputat</h2>
            <p>
              {business.address}
              <br />
              {business.serviceArea}
            </p>
            <a href={business.maps} target="_blank" rel="noreferrer">
              <Navigation size={18} aria-hidden="true" /> Buka petunjuk arah
            </a>
          </div>
          <div>
            <Camera size={25} aria-hidden="true" />
            <h2>Instagram</h2>
            <p>Lihat update hasil produksi dan detail teknik terbaru.</p>
            <a href={business.instagram} target="_blank" rel="noreferrer">
              @orplyn.id
            </a>
          </div>
          <div className="contact-image">
            <img
              src="/catalog/process/manual/14-process-manual-color-layer-application.jpeg"
              alt="Proses penarikan rakel sablon manual di workshop Orplyn"
              width="908"
              height="1600"
            />
            <div>
              <span>WORKSHOP LEGOSO</span>
              <strong>Proses manual yang bisa dilihat, bukan hanya hasil akhirnya.</strong>
            </div>
          </div>
        </div>

        <div className="contact-quote" id="quote">
          <p className="eyebrow eyebrow-dark">OPSIONAL · BRIEF LENGKAP</p>
          <h2>Kalau detailnya sudah siap, susun brief lebih lengkap.</h2>
          <p>
            Jalur tercepat tetap chat langsung. Form ini tersedia kalau kamu
            ingin merapikan spesifikasi sebelum membuka WhatsApp.
          </p>
          <QuoteBuilder whatsappNumber={business.whatsapp} compact />
        </div>
      </section>
    </>
  );
}
