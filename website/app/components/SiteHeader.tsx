"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "../lib/site-data";
import { WhatsAppQuickStart } from "./WhatsAppQuickStart";

const navigation = [
  { href: "/layanan/kaos-event-komunitas", label: "Kaos event" },
  { href: "/portfolio", label: "Hasil produksi" },
  { href: "/#cara-order", label: "Cara order" },
  { href: "/kontak", label: "Lokasi" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isAdsLanding = pathname.startsWith("/lp/");

  if (isAdsLanding) {
    return (
      <header className="site-header campaign-header">
        <div className="header-inner campaign-header-inner">
          <span className="brand" aria-label="Orplyn">
            <img
              className="brand-logo brand-logo-header"
              src="/brand/orplyn-horizontal-white.png"
              alt="Orplyn"
              width="1757"
              height="428"
            />
          </span>
          <WhatsAppQuickStart
            whatsappNumber={business.whatsapp}
            lane="batch"
            label="Minta estimasi"
            className="header-cta campaign-header-cta"
            product="Kaos custom event / komunitas"
            useCase="Event / komunitas"
            placement="ads_lp_header"
          />
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Orplyn beranda">
          <img
            className="brand-logo brand-logo-header"
            src="/brand/orplyn-horizontal-white.png"
            alt=""
            width="1757"
            height="428"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <WhatsAppQuickStart
          whatsappNumber={business.whatsapp}
          lane="batch"
          label="Mulai di WhatsApp"
          className="header-cta"
          product="Kaos custom event / komunitas"
          useCase="Event / komunitas"
          placement="header_batch"
        />

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          title={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navigasi seluler">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <WhatsAppQuickStart
            whatsappNumber={business.whatsapp}
            lane="batch"
            label="Cek kebutuhan & minta estimasi"
            product="Kaos custom event / komunitas"
            useCase="Event / komunitas"
            placement="mobile_menu_batch"
            onStart={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
