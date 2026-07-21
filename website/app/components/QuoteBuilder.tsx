"use client";

import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  createLeadId,
  createWhatsAppUrl,
  getDaysToTarget,
  getJakartaDate,
  readAttribution,
  rememberAttribution,
} from "../lib/lead-attribution";
import {
  getQuoteProduct,
  quoteProducts,
  WHATSAPP_PLACEHOLDER,
} from "../lib/site-data";
import type { FunnelLane } from "../lib/site-data";

type QuoteBuilderProps = {
  whatsappNumber: string;
  initialProductId?: string;
  initialLane?: FunnelLane;
  initialUseCase?: string;
  compact?: boolean;
};

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const googleAdsLeadStartedLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL;

const quantities = [
  { label: "1 pcs", minimum: 1 },
  { label: "2-5 pcs", minimum: 2 },
  { label: "6-11 pcs", minimum: 6 },
  { label: "12-23 pcs", minimum: 12 },
  { label: "24-49 pcs", minimum: 24 },
  { label: "50-99 pcs", minimum: 50 },
  { label: "100+ pcs", minimum: 100 },
];

const useCases = [
  "Event / komunitas",
  "Sekolah / kampus",
  "Kantor / perusahaan",
  "Personal / hadiah",
  "Clothing brand",
  "Vendor / reseller",
  "Tim olahraga",
];

export function QuoteBuilder({
  whatsappNumber,
  initialProductId = "",
  initialLane,
  initialUseCase = "",
  compact = false,
}: QuoteBuilderProps) {
  const [lane, setLane] = useState<FunnelLane>(initialLane || "batch");
  const [productId, setProductId] = useState(initialProductId);
  const [quantity, setQuantity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [design, setDesign] = useState("Sudah ada desain");
  const [name, setName] = useState("");
  const [useCase, setUseCase] = useState(initialUseCase);
  const [material, setMaterial] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [status, setStatus] = useState("");

  const isConfigured = useMemo(
    () => whatsappNumber !== WHATSAPP_PLACEHOLDER,
    [whatsappNumber],
  );

  const currentProduct = getQuoteProduct(productId);
  const availableProducts = quoteProducts.filter(
    (product) => lane !== "single" || product.canSingle,
  );
  const effectiveMinimumOrder = currentProduct
    ? lane === "batch" && currentProduct.canSingle
      ? currentProduct.wholesaleFrom
      : currentProduct.minimumOrder
    : 0;
  const availableQuantities = currentProduct
    ? quantities.filter((item) => item.minimum >= effectiveMinimumOrder)
    : quantities;

  const today = useMemo(() => getJakartaDate(), []);

  useEffect(() => {
    rememberAttribution();
  }, []);

  function changeLane(nextLane: FunnelLane) {
    setLane(nextLane);
    setQuantity("");
    setStatus("");

    const selected = getQuoteProduct(productId);
    if (nextLane === "single" && selected && !selected.canSingle) {
      setProductId("");
    }
  }

  function changeProduct(nextProductId: string) {
    const nextProduct = getQuoteProduct(nextProductId);
    const nextLane = lane === "single" && nextProduct && !nextProduct.canSingle
      ? "batch"
      : lane;
    const nextMinimumOrder = nextProduct
      ? nextLane === "batch" && nextProduct.canSingle
        ? nextProduct.wholesaleFrom
        : nextProduct.minimumOrder
      : 0;
    const selectedQuantity = quantities.find((item) => item.label === quantity);

    if (nextLane !== lane) {
      setLane(nextLane);
    }
    setProductId(nextProductId);
    if (selectedQuantity && selectedQuantity.minimum < nextMinimumOrder) {
      setQuantity("");
      setStatus(
        `Pilih ulang jumlah. Minimum untuk produk dan skala ini ${nextMinimumOrder} pcs.`,
      );
    } else {
      setStatus("");
    }
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const product = getQuoteProduct(productId);
    if (!product || !quantity || !deadline || !useCase || !deliveryLocation) {
      setStatus(
        "Lengkapi skala pesanan, produk, jumlah, kebutuhan, tanggal dipakai atau target selesai, dan lokasi dulu.",
      );
      return;
    }

    const attribution = readAttribution();
    const leadId = createLeadId();
    const trackingLines = [
      attribution.gclid ? `GCLID: ${attribution.gclid}` : "",
      attribution.gbraid ? `GBRAID: ${attribution.gbraid}` : "",
      attribution.wbraid ? `WBRAID: ${attribution.wbraid}` : "",
    ].filter(Boolean);

    const message = [
      "Halo Orplyn, saya mau minta estimasi produksi.",
      "",
      `Lead ID: ${leadId}`,
      `Nama: ${name || "Belum diisi"}`,
      `Jalur order: ${lane === "single" ? "Satuan / test print" : "Produksi / batch"}`,
      `Kebutuhan: ${useCase}`,
      `Tanggal dipakai / target selesai: ${deadline}`,
      `Produk: ${product.title}`,
      `Jumlah: ${quantity}`,
      `Bahan / produk: ${material || "Belum tahu, perlu rekomendasi"}`,
      `Desain: ${design}`,
      `Kirim / pickup: ${deliveryLocation}`,
      `Sumber: ${attribution.source}`,
      attribution.medium ? `Medium: ${attribution.medium}` : "",
      attribution.campaign ? `Campaign: ${attribution.campaign}` : "",
      attribution.term ? `Keyword: ${attribution.term}` : "",
      attribution.content ? `Konten: ${attribution.content}` : "",
      ...trackingLines,
      "",
      "Boleh dibantu cek pilihan produksi, MOQ, jadwal, dan estimasi harganya?",
    ]
      .filter(Boolean)
      .join("\n");

    if (!isConfigured) {
      setStatus(
        "Form sudah siap. Nomor WhatsApp utama tinggal dipasang di konfigurasi website.",
      );
      return;
    }

    const eventData = {
      lead_id: leadId,
      lead_channel: "whatsapp",
      funnel_lane: lane,
      product: product.title,
      quantity,
      use_case: useCase,
      days_to_target: getDaysToTarget(deadline),
      source: attribution.source,
      medium: attribution.medium,
      campaign: attribution.campaign,
      landing_page: attribution.landingPage,
      gclid: attribution.gclid,
      gbraid: attribution.gbraid,
      wbraid: attribution.wbraid,
    };

    window.dataLayer?.push({
      event: "whatsapp_brief_submit",
      ...eventData,
    });
    window.gtag?.("event", "generate_lead", eventData);
    window.gtag?.("event", "whatsapp_open", eventData);

    if (googleAdsId && googleAdsLeadStartedLabel) {
      window.gtag?.("event", "conversion", {
        send_to: `${googleAdsId}/${googleAdsLeadStartedLabel}`,
        value: 1.0,
        currency: "IDR",
        transaction_id: leadId,
      });
    }

    setStatus(`Membuka WhatsApp. Lead ID ${leadId} ikut dikirim untuk pencatatan.`);
    window.open(
      createWhatsAppUrl(whatsappNumber, message),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      className={compact ? "quote-form quote-form-compact" : "quote-form"}
      onSubmit={submitQuote}
    >
      <fieldset className="order-lane">
        <legend>Skala pesanan</legend>
        <div className="segmented-control">
          <label>
            <input
              type="radio"
              name={`order-lane-${compact ? "compact" : "full"}`}
              value="single"
              checked={lane === "single"}
              onChange={() => changeLane("single")}
            />
            <span>Pesanan satuan</span>
          </label>
          <label>
            <input
              type="radio"
              name={`order-lane-${compact ? "compact" : "full"}`}
              value="batch"
              checked={lane === "batch"}
              onChange={() => changeLane("batch")}
            />
            <span>Produksi batch</span>
          </label>
        </div>
      </fieldset>

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
        <label htmlFor={`quote-use-case-${compact ? "compact" : "full"}`}>
          Dipakai untuk apa?
        </label>
        <select
          id={`quote-use-case-${compact ? "compact" : "full"}`}
          value={useCase}
          onChange={(event) => setUseCase(event.target.value)}
          required
        >
          <option value="">Pilih kebutuhan</option>
          {useCases.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor={`quote-deadline-${compact ? "compact" : "full"}`}>
          Tanggal dipakai / target selesai
        </label>
        <input
          id={`quote-deadline-${compact ? "compact" : "full"}`}
          type="date"
          min={today}
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor={`quote-product-${compact ? "compact" : "full"}`}>
          Mau bikin apa?
        </label>
        <select
          id={`quote-product-${compact ? "compact" : "full"}`}
          value={productId}
          onChange={(event) => changeProduct(event.target.value)}
          required
        >
          <option value="">Pilih produk</option>
          {availableProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
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
          {availableQuantities.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor={`quote-material-${compact ? "compact" : "full"}`}>
          Bahan yang diinginkan (opsional)
        </label>
        <input
          id={`quote-material-${compact ? "compact" : "full"}`}
          type="text"
          value={material}
          onChange={(event) => setMaterial(event.target.value)}
          placeholder="Contoh: cotton combed 24s atau minta rekomendasi"
        />
      </div>

      {currentProduct && (
        <p className="order-rule">
          Minimum {effectiveMinimumOrder} pcs · perhitungan grosir mulai {currentProduct.wholesaleFrom} pcs · estimasi produksi {currentProduct.normalLeadTime}. Jadwal final mengikuti desain, antrean, dan stok bahan.
        </p>
      )}

      <div className="field-group field-group-full">
        <label htmlFor={`quote-location-${compact ? "compact" : "full"}`}>
          Lokasi kirim / pickup
        </label>
        <input
          id={`quote-location-${compact ? "compact" : "full"}`}
          type="text"
          value={deliveryLocation}
          onChange={(event) => setDeliveryLocation(event.target.value)}
          placeholder="Contoh: Ciputat, Jakarta Selatan, atau pickup"
          required
        />
      </div>

      <fieldset className="design-status">
        <legend>Status desain</legend>
        <div className="segmented-control">
          {["Sudah ada desain", "Perlu dibantu"].map((option) => (
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
        Kirim detail &amp; minta estimasi
        <Send size={17} aria-hidden="true" />
      </button>

      <p className="privacy-note">
        Dengan mengirim detail pesanan, kamu menyetujui data kebutuhan digunakan
        untuk menanggapi permintaan estimasi. Baca <a href="/kebijakan-privasi">kebijakan privasi</a>.
      </p>

      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
