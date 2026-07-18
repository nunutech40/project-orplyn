import type { Metadata, Viewport } from "next";
import { MarketingScripts } from "./components/MarketingScripts";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { allowIndexing, siteUrl } from "./lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orplyn | Jasa Sablon Kaos Custom Ciputat",
    template: "%s | Orplyn",
  },
  description:
    "Sablon DTF dan kaos polos mulai 1 pcs, serta produksi kaos event dan komunitas di Ciputat, Tangerang Selatan.",
  icons: {
    icon: [
      {
        url: "/brand/orplyn-monogram-black.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/brand/orplyn-monogram-black.png",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "jasa sablon kaos Ciputat",
    "sablon custom Tangerang Selatan",
    "bordir custom Ciputat",
    "jersey custom Tangerang Selatan",
    "kaos polos Ciputat",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Orplyn",
    title: "Orplyn | Jasa Sablon Kaos Custom Ciputat",
    description:
      "Sablon DTF dan kaos polos mulai 1 pcs, serta produksi kaos event dan komunitas di Ciputat.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hasil produksi sablon kaos custom Orplyn di Ciputat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orplyn | Jasa Sablon Kaos Custom Ciputat",
    description:
      "Sablon DTF dan kaos polos mulai 1 pcs, serta produksi kaos event dan komunitas di Ciputat.",
    images: ["/og.png"],
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <MarketingScripts />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
