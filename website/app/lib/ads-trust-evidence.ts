export type PublicationGate = {
  evidenceReference: string;
  publicationPermission: "pending" | "granted" | "denied";
  ownerApproved: boolean;
  status: "draft" | "publishable";
};

export type OnTimeEvidence = PublicationGate & {
  id: string;
  title: string;
  eventDate: string;
  promisedDate: string;
  completedDate: string;
  context: string;
};

export type EventCountEvidence = PublicationGate & {
  id: string;
  count: number;
  periodLabel: string;
  scopeLabel: string;
};

export type ContextualPortfolioEvidence = PublicationGate & {
  id: string;
  title: string;
  eventType: string;
  quantityLabel: string;
  materialAndTechnique: string;
  locationLabel: string;
  context: string;
  image: string;
  imageAlt: string;
};

export type TestimonialEvidence = PublicationGate & {
  id: string;
  quote: string;
  attribution: string;
  eventContext: string;
};

export type AdsTrustEvidence = {
  onTime: OnTimeEvidence[];
  eventCount: EventCountEvidence[];
  contextualPortfolio: ContextualPortfolioEvidence[];
  testimonials: TestimonialEvidence[];
};

// These contextual records passed M-06 after the owner authorized the supplied
// production assets for website and advertising use on 20 July 2026. The UI
// still enforces every publication gate at render time.
export const adsTrustEvidence: AdsTrustEvidence = {
  onTime: [],
  eventCount: [],
  contextualPortfolio: [
    {
      id: "event-perpisahan-bkb-paud-kartini",
      evidenceReference: "PROD-ORDER-001",
      publicationPermission: "granted",
      ownerApproved: true,
      status: "publishable",
      title: "Kaos perpisahan BKB PAUD Kartini",
      eventType: "EVENT SEKOLAH",
      quantityLabel: "Sekitar 15 pcs",
      materialAndTechnique: "Cotton combed 24s · DTF",
      locationLabel: "Tangerang",
      context: "Kaos custom lengan panjang anak untuk perpisahan tahun pelajaran 2025/2026 di Tangerang.",
      image: "/proof/order-event-perpisahan-bkb-paud-kartini-dtf.jpeg",
      imageAlt: "Kaos custom anak untuk acara perpisahan BKB PAUD Kartini",
    },
    {
      id: "event-hari-kartini-bustanul-aulad",
      evidenceReference: "PROD-ORDER-003",
      publicationPermission: "granted",
      ownerApproved: true,
      status: "publishable",
      title: "Kaos peserta Hari Kartini",
      eventType: "EVENT SEKOLAH",
      quantityLabel: "Sekitar 15 pcs",
      materialAndTechnique: "Kaos PE · DTF",
      locationLabel: "Tangerang",
      context: "Kaos custom peserta peringatan Hari Kartini PAUD/MI Bustanul Aulad di Tangerang.",
      image: "/proof/order-event-hari-kartini-bustanul-aulad-dtf.jpeg",
      imageAlt: "Kaos custom peserta acara Hari Kartini PAUD atau MI Bustanul Aulad",
    },
    {
      id: "event-panitia-bagana",
      evidenceReference: "PROD-ORDER-004",
      publicationPermission: "granted",
      ownerApproved: true,
      status: "publishable",
      title: "Kaos panitia BAGANA",
      eventType: "KAOS PANITIA",
      quantityLabel: "1.000 pcs",
      materialAndTechnique: "Cotton combed 24s · DTF",
      locationLabel: "Jakarta",
      context: "Kaos panitia BAGANA untuk kebutuhan acara di Jakarta.",
      image: "/proof/order-event-panitia-bagana-dtf.jpeg",
      imageAlt: "Kaos panitia BAGANA hasil produksi Orplyn",
    },
  ],
  testimonials: [],
};

function passedPublicationGate(record: PublicationGate) {
  return (
    record.status === "publishable" &&
    record.publicationPermission === "granted" &&
    record.ownerApproved &&
    record.evidenceReference.trim().length > 0
  );
}

export function getPublishableAdsTrustEvidence(
  evidence: AdsTrustEvidence = adsTrustEvidence,
): AdsTrustEvidence {
  return {
    onTime: evidence.onTime.filter(passedPublicationGate),
    eventCount: evidence.eventCount.filter(passedPublicationGate),
    contextualPortfolio:
      evidence.contextualPortfolio.filter(passedPublicationGate),
    testimonials: evidence.testimonials.filter(passedPublicationGate),
  };
}
