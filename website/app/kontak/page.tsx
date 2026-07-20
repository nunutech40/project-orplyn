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
        <p className="eyebrow">KONTAK & LOKASI</p>
        <h1>Hubungi Orplyn untuk cek harga dan waktu produksi.</h1>
        <p>
          Pilih template event/batch atau satuan untuk langsung chat Aulia.
          Form lengkap tetap tersedia bila kamu ingin menyiapkan semua detail
          sebelum membuka WhatsApp.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <div>
            <MessageCircle size={25} aria-hidden="true" />
            <h2>WhatsApp sales</h2>
            <p>
              {business.whatsappDisplay} · Aulia
              <br />
              Admin {business.adminHours}
            </p>
            <div className="contact-wa-links">
              <WhatsAppQuickStart
                whatsappNumber={business.whatsapp}
                lane="batch"
                label="Chat event / batch"
                product="Kaos custom event / komunitas"
                useCase="Event / komunitas"
                placement="contact_card_batch"
              />
              <WhatsAppQuickStart
                whatsappNumber={business.whatsapp}
                lane="single"
                label="Chat order satuan"
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
              src="/images/proses-sablon.jpg"
              alt="Workshop dan proses produksi Orplyn"
              width="900"
              height="1200"
            />
          </div>
        </div>

        <div className="contact-quote" id="quote">
          <p className="eyebrow eyebrow-dark">OPSIONAL · BRIEF LENGKAP</p>
          <h2>Siapkan semua detail sebelum masuk WhatsApp.</h2>
          <QuoteBuilder whatsappNumber={business.whatsapp} compact />
        </div>
      </section>
    </>
  );
}
