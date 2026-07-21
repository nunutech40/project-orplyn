"use client";

import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import type { MouseEvent } from "react";
import {
  createLeadId,
  createWhatsAppUrl,
  readAttribution,
  rememberAttribution,
} from "../lib/lead-attribution";
import { WHATSAPP_PLACEHOLDER } from "../lib/site-data";
import type { FunnelLane } from "../lib/site-data";

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const googleAdsLeadStartedLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL;

type WhatsAppQuickStartProps = {
  whatsappNumber: string;
  lane: FunnelLane;
  label: string;
  className?: string;
  product?: string;
  useCase?: string;
  placement?: string;
  onStart?: () => void;
};

function buildMessage({
  lane,
  product,
  useCase,
  leadId,
  trackingLines = [],
}: {
  lane: FunnelLane;
  product?: string;
  useCase?: string;
  leadId?: string;
  trackingLines?: string[];
}) {
  const isBatch = lane === "batch";

  return [
    isBatch
      ? "Halo Kak Aulia, saya mau tanya kaos untuk event / produksi batch."
      : "Halo Kak Aulia, saya mau tanya pesanan satuan / test print.",
    "",
    leadId ? `Lead ID: ${leadId}` : "",
    `Nama:`,
    `Kebutuhan: ${useCase || (isBatch ? "Event / komunitas" : "Personal / sampel / test print")}`,
    isBatch ? "Nama acara / komunitas:" : "",
    `Mau dibuat: ${product || (isBatch ? "Kaos custom" : "Kaos custom DTF / kaos polos")}`,
    isBatch ? "Tanggal dipakai:" : "Tanggal dibutuhkan:",
    "Perkiraan jumlah:",
    "Sudah ada desain: Ya / Belum",
    "Lokasi kirim / pickup:",
    "",
    isBatch
      ? "Boleh bantu cek pilihan kaos, teknik, MOQ, jadwal, dan estimasi harganya?"
      : "Boleh bantu cek pilihan produk, jadwal, dan estimasi harganya?",
    ...trackingLines,
  ]
    .filter(Boolean)
    .join("\n");
}

export function WhatsAppQuickStart({
  whatsappNumber,
  lane,
  label,
  className = "",
  product,
  useCase,
  placement = "website",
  onStart,
}: WhatsAppQuickStartProps) {
  const isConfigured = whatsappNumber !== WHATSAPP_PLACEHOLDER;
  const fallbackMessage = buildMessage({ lane, product, useCase });
  const fallbackHref = isConfigured
    ? createWhatsAppUrl(whatsappNumber, fallbackMessage)
    : "/kontak";

  useEffect(() => {
    rememberAttribution();
  }, []);

  function startWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
    onStart?.();
    if (!isConfigured) return;

    event.preventDefault();
    const attribution = readAttribution();
    const leadId = createLeadId();
    const trackingLines = [
      "",
      `Sumber: ${attribution.source}`,
      attribution.medium ? `Medium: ${attribution.medium}` : "",
      attribution.campaign ? `Campaign: ${attribution.campaign}` : "",
      attribution.term ? `Keyword: ${attribution.term}` : "",
      attribution.content ? `Konten: ${attribution.content}` : "",
      `Landing page: ${attribution.landingPage}`,
      attribution.gclid ? `GCLID: ${attribution.gclid}` : "",
      attribution.gbraid ? `GBRAID: ${attribution.gbraid}` : "",
      attribution.wbraid ? `WBRAID: ${attribution.wbraid}` : "",
    ].filter(Boolean);
    const message = buildMessage({
      lane,
      product,
      useCase,
      leadId,
      trackingLines,
    });
    const eventData = {
      lead_id: leadId,
      lead_channel: "whatsapp",
      funnel_lane: lane,
      product: product || "not_selected",
      use_case: useCase || (lane === "batch" ? "Event / komunitas" : "Satuan"),
      cta_placement: placement,
      source: attribution.source,
      medium: attribution.medium,
      campaign: attribution.campaign,
      landing_page: attribution.landingPage,
      gclid: attribution.gclid,
      gbraid: attribution.gbraid,
      wbraid: attribution.wbraid,
    };

    window.dataLayer?.push({
      event: "whatsapp_quick_start",
      ...eventData,
    });
    window.gtag?.("event", "whatsapp_open", eventData);
    if (googleAdsId && googleAdsLeadStartedLabel) {
      window.gtag?.("event", "conversion", {
        send_to: `${googleAdsId}/${googleAdsLeadStartedLabel}`,
        transaction_id: leadId,
      });
    }
    window.open(
      createWhatsAppUrl(whatsappNumber, message),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <a
      className={className}
      href={fallbackHref}
      target={isConfigured ? "_blank" : undefined}
      rel={isConfigured ? "noreferrer" : undefined}
      onClick={startWhatsApp}
    >
      <MessageCircle size={20} aria-hidden="true" />
      {label}
    </a>
  );
}
