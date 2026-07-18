"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/#paket", label: "Paket & MOQ" },
  { href: "/portfolio", label: "Hasil produksi" },
  { href: "/#cara-order", label: "Cara order" },
  { href: "/kontak", label: "Lokasi" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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

        <Link className="header-cta" href="/#quote">
          <MessageCircle size={18} aria-hidden="true" />
          Cek estimasi
        </Link>

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
          <Link href="/#quote" onClick={() => setOpen(false)}>
            <MessageCircle size={18} aria-hidden="true" />
            Cek estimasi
          </Link>
        </nav>
      )}
    </header>
  );
}
