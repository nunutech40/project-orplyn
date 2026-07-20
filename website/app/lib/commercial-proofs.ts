export type CommercialProofFact = {
  label: string;
  value: string;
};

export type CommercialProof = {
  id: string;
  serviceSlugs: string[];
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  facts: CommercialProofFact[];
  quote?: {
    text: string;
    attribution: string;
  };
  source?: {
    label: string;
    url: string;
  };
};

// Only records that have passed the commercial-proof publication contract belong here.
// These two records were selected from assets/proof after owner direction on 20 July 2026.
export const commercialProofs: CommercialProof[] = [
  {
    id: "google-review-hari-kartini",
    serviceSlugs: ["kaos-event-komunitas"],
    eyebrow: "ULASAN GOOGLE · SEKOLAH / KOMUNITAS",
    title: "Pesanan kaos Hari Kartini di Ciputat",
    summary:
      "Bukti pesanan kaos Hari Kartini yang dibagikan dalam ulasan Google untuk kebutuhan acara sekolah atau komunitas.",
    image: "/proof/ulasan-google-hari-kartini-redacted.jpeg",
    imageAlt:
      "Ulasan Google dan foto kaos Hari Kartini hasil produksi Orplyn",
    facts: [
      { label: "Kebutuhan", value: "Kaos Hari Kartini" },
      { label: "Konteks", value: "Acara sekolah / komunitas" },
    ],
    quote: {
      text: "Hasilnya bagus banget! Warna merahnya cerah, sablon rapi dan detail.",
      attribution: "Ulasan Google",
    },
  },
  {
    id: "customer-feedback-plastisol-colour",
    serviceSlugs: ["kaos-event-komunitas", "produksi-clothing-brand"],
    eyebrow: "TANGGAPAN PELANGGAN · PLASTISOL",
    title: "Contoh hasil warna sablon plastisol",
    summary:
      "Foto hasil produksi dan tanggapan pelanggan untuk sablon plastisol. Ditampilkan sebagai contoh hasil, bukan janji hasil yang sama untuk setiap desain.",
    image: "/proof/testimoni-plastisol-warna.jpeg",
    imageAlt: "Foto hasil sablon plastisol pada kaos warna terang",
    facts: [
      { label: "Teknik", value: "Plastisol" },
      { label: "Bukti", value: "Tanggapan pelanggan" },
    ],
    quote: {
      text: "Bagus banget warnanya.",
      attribution: "Pelanggan Orplyn",
    },
  },
];

export function getCommercialProofs(serviceSlug?: string) {
  if (!serviceSlug) return commercialProofs;

  return commercialProofs.filter((proof) =>
    proof.serviceSlugs.includes(serviceSlug),
  );
}
