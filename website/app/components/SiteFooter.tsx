"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, MapPin } from "./Icons";
import { business, primaryServices } from "../lib/site-data";
import { WhatsAppQuickStart } from "./WhatsAppQuickStart";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/lp/")) {
    return (
      <footer className="campaign-footer">
        <div className="campaign-footer-inner">
          <div>
            <img
              className="brand-logo campaign-footer-logo"
              src="/brand/orplyn-horizontal-white.png"
              alt="Orplyn"
              width="1757"
              height="428"
            />
            <p>{business.address}</p>
          </div>
          <div className="campaign-footer-meta">
            <span>Admin {business.adminHours}</span>
            <Link href="/kebijakan-privasi">Kebijakan privasi</Link>
          </div>
        </div>
      </footer>
    );
  }

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
            Sablon dan apparel custom dari workshop Orplyn di Ciputat. Dibuat
            untuk acara, tim, komunitas, brand, dan kebutuhan personal.
          </p>
        </div>

        <div>
          <h2>Layanan</h2>
          {primaryServices.map((service) => (
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
          <WhatsAppQuickStart
            whatsappNumber={business.whatsapp}
            lane="batch"
            label="Cek kebutuhan & minta estimasi"
            product="Kaos custom event / komunitas"
            useCase="Event / komunitas"
            placement="footer_batch"
          />
          <span className="footer-contact-meta">Admin {business.adminHours}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Orplyn.</span>
        <Link href="/kebijakan-privasi">Kebijakan privasi</Link>
        <span>Ciputat, Tangerang Selatan</span>
      </div>
    </footer>
  );
}
