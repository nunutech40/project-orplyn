export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  landingPage: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const attributionStorageKey = "orplyn_attribution";

function classifySource(params: URLSearchParams) {
  if (params.get("utm_source")) {
    return params.get("utm_source") || "website";
  }

  if (params.get("gclid") || params.get("gbraid") || params.get("wbraid")) {
    return "google_ads";
  }

  const referrer = document.referrer.toLowerCase();
  if (referrer.includes("google.")) return "google_organic";
  if (referrer.includes("instagram.com")) return "instagram";
  if (referrer) return "referral";
  return "direct";
}

export function readAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  let stored: Partial<Attribution> = {};

  try {
    stored = JSON.parse(sessionStorage.getItem(attributionStorageKey) || "{}");
  } catch {
    stored = {};
  }

  const attributionKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
  ];
  const hasNewAttribution = attributionKeys.some((key) => params.has(key));
  const value = (key: string, storedValue = "") =>
    hasNewAttribution ? params.get(key) || "" : storedValue;
  const currentLandingPage = `${window.location.pathname}${window.location.search}`;

  return {
    source: hasNewAttribution
      ? classifySource(params)
      : stored.source || classifySource(params),
    medium: value("utm_medium", stored.medium),
    campaign: value("utm_campaign", stored.campaign),
    term: value("utm_term", stored.term),
    content: value("utm_content", stored.content),
    gclid: value("gclid", stored.gclid),
    gbraid: value("gbraid", stored.gbraid),
    wbraid: value("wbraid", stored.wbraid),
    landingPage: hasNewAttribution
      ? currentLandingPage
      : stored.landingPage || currentLandingPage,
  };
}

export function rememberAttribution() {
  const attribution = readAttribution();

  try {
    sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution));
  } catch {
    // Conversion links still work when session storage is unavailable.
  }

  return attribution;
}

export function getJakartaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
  }).format(new Date());
}

export function createLeadId() {
  const date = getJakartaDate().replaceAll("-", "");
  const suffix = crypto.randomUUID().slice(0, 6).toUpperCase();
  return `ORP-${date}-${suffix}`;
}

export function getDaysToTarget(targetDate: string) {
  const target = Date.parse(`${targetDate}T00:00:00Z`);
  const today = Date.parse(`${getJakartaDate()}T00:00:00Z`);

  if (Number.isNaN(target) || Number.isNaN(today)) return undefined;

  return Math.max(0, Math.ceil((target - today) / 86_400_000));
}

export function createWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
