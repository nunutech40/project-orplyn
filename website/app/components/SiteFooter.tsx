import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "./Icons";
import { business, services } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="brand brand-footer" aria-label="Orplyn beranda">
            <img
              className="brand-logo brand-logo-footer"
              src="/brand/orplyn-horizontal-white.png"
              alt=""
              width="1757"
              height="428"
            />
          </Link>
          <p>
            Kaos polos, sablon custom, bordir, jersey, dan apparel produksi dari
            Ciputat, Tangerang Selatan.
          </p>
        </div>

        <div>
          <h2>Layanan</h2>
          {services.slice(0, 5).map((service) => (
            <Link key={service.slug} href={`/layanan/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>

        <div>
          <h2>Kontak</h2>
          <a href={business.instagram} target="_blank" rel="noreferrer">
            <Camera size={17} aria-hidden="true" /> @orplyn.id
          </a>
          <a href={business.maps} target="_blank" rel="noreferrer">
            <MapPin size={17} aria-hidden="true" /> Buka Google Maps
          </a>
          <Link href="/#quote">
            <MessageCircle size={17} aria-hidden="true" /> Minta estimasi
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Orplyn.</span>
        <span>Ciputat, Tangerang Selatan</span>
      </div>
    </footer>
  );
}
