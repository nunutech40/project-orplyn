import type { Metadata, Viewport } from "next";
import { MarketingScripts } from "./components/MarketingScripts";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteUrl } from "./lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orplyn | Apparel & Print Studio Ciputat",
    template: "%s | Orplyn",
  },
  description:
    "Kaos polos, sablon custom, bordir, jersey, totebag, dan apparel custom dari Ciputat, Tangerang Selatan.",
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
    title: "Orplyn | Apparel & Print Studio Ciputat",
    description:
      "Kaos custom, sablon DTF & manual, bordir, jersey, totebag, dan apparel custom di Ciputat.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Orplyn Apparel & Print Studio di Ciputat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orplyn | Apparel & Print Studio Ciputat",
    description:
      "Kaos custom, sablon, bordir, jersey, dan apparel produksi dari Ciputat.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
