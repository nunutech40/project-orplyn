"use client";

import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import {
  services,
  WHATSAPP_PLACEHOLDER,
} from "../lib/site-data";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type QuoteBuilderProps = {
  whatsappNumber: string;
  initialProduct?: string;
  compact?: boolean;
};

const quantities = ["1-5 pcs", "6-12 pcs", "13-24 pcs", "25-50 pcs", "51-100 pcs", "100+ pcs"];
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const googleAdsConversionLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

export function QuoteBuilder({
  whatsappNumber,
  initialProduct = "",
  compact = false,
}: QuoteBuilderProps) {
  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [design, setDesign] = useState("Sudah ada desain");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const isConfigured = useMemo(
    () => whatsappNumber !== WHATSAPP_PLACEHOLDER,
    [whatsappNumber],
  );

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!product || !quantity || !deadline) {
      setStatus("Lengkapi produk, jumlah, dan target selesai dulu.");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || "";
    const source = params.get("utm_source") || (gclid ? "google_ads" : "website");
    const campaign = params.get("utm_campaign") || "";
    const message = [
      "Halo Orplyn, saya mau konsultasi produksi.",
      "",
      `Nama: ${name || "Belum diisi"}`,
      `Produk: ${product}`,
      `Jumlah: ${quantity}`,
      `Target selesai: ${deadline}`,
      `Desain: ${design}`,
      `Sumber: ${source}`,
      campaign ? `Campaign: ${campaign}` : "",
      "",
      "Boleh dibantu cek teknik dan estimasi harganya?",
    ]
      .filter(Boolean)
      .join("\n");

    if (!isConfigured) {
      setStatus(
        "Form sudah siap. Nomor WhatsApp utama tinggal dipasang di konfigurasi website.",
      );
      return;
    }

    window.dataLayer?.push({
      event: "generate_lead",
      lead_channel: "whatsapp",
      product,
      quantity,
      source,
      campaign,
      gclid,
    });
    window.gtag?.("event", "generate_lead", {
      lead_channel: "whatsapp",
      product,
      quantity,
      campaign,
    });

    if (googleAdsId && googleAdsConversionLabel) {
      window.gtag?.("event", "conversion", {
        send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
      });
    }

    setStatus("Membuka WhatsApp dengan brief pesanan...");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      className={compact ? "quote-form quote-form-compact" : "quote-form"}
      onSubmit={submitQuote}
    >
      <div className="field-group">
        <label htmlFor={`quote-name-${compact ? "compact" : "full"}`}>Nama</label>
        <input
          id={`quote-name-${compact ? "compact" : "full"}`}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nama kamu"
          autoComplete="name"
        />
      </div>

      <div className="field-group">
        <label htmlFor={`quote-product-${compact ? "compact" : "full"}`}>
          Mau bikin apa?
        </label>
        <select
          id={`quote-product-${compact ? "compact" : "full"}`}
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          required
        >
          <option value="">Pilih produk</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor={`quote-quantity-${compact ? "compact" : "full"}`}>
          Perkiraan jumlah
        </label>
        <select
          id={`quote-quantity-${compact ? "compact" : "full"}`}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        >
          <option value="">Pilih jumlah</option>
          {quantities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor={`quote-deadline-${compact ? "compact" : "full"}`}>
          Target selesai
        </label>
        <input
          id={`quote-deadline-${compact ? "compact" : "full"}`}
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
          required
        />
      </div>

      <fieldset className="design-status">
        <legend>Status desain</legend>
        <div className="segmented-control">
          {[
            "Sudah ada desain",
            "Perlu dibantu",
          ].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={`design-status-${compact ? "compact" : "full"}`}
                value={option}
                checked={design === option}
                onChange={() => setDesign(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className="button button-whatsapp quote-submit" type="submit">
        <MessageCircle size={20} aria-hidden="true" />
        Kirim brief ke WhatsApp
        <Send size={17} aria-hidden="true" />
      </button>

      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
