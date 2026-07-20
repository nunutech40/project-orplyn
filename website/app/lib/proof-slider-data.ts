export type ProofSliderItem = {
  id: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  context: string;
};

// Owner authorized use of assets/proof on 20 July 2026. Captions identify the
// source context only; they do not turn every item into a manual/event claim.
export const proofSliderItems: ProofSliderItem[] = [
  {
    id: "hari-kartini-google-review",
    image: "/proof/ulasan-google-hari-kartini-redacted.jpeg",
    alt: "Ulasan Google dan foto kaos Hari Kartini produksi Orplyn",
    label: "ULASAN GOOGLE · EVENT SEKOLAH / KOMUNITAS",
    title: "Pesanan kaos Hari Kartini",
    context: "Bukti ulasan Google dan hasil kaos untuk kebutuhan acara sekolah atau komunitas.",
  },
  {
    id: "plastisol-colour-feedback",
    image: "/proof/testimoni-plastisol-warna.jpeg",
    alt: "Tanggapan pelanggan dengan foto hasil sablon plastisol",
    label: "TANGGAPAN PELANGGAN · PLASTISOL",
    title: "Hasil warna sablon plastisol",
    context: "Foto hasil dan tanggapan pelanggan tentang warna pada sablon plastisol.",
  },
  {
    id: "repeat-order-blank-shirt",
    image: "/proof/repeat-order-kaos-polos.jpeg",
    alt: "Bukti percakapan repeat order kaos polos",
    label: "BUKTI CHAT · KAOS POLOS",
    title: "Repeat order kaos polos",
    context: "Dokumentasi percakapan order ulang untuk kebutuhan kaos polos.",
  },
  {
    id: "dtf-feedback",
    image: "/proof/testimoni-sablon-dtf.jpeg",
    alt: "Bukti tanggapan pelanggan dan hasil sablon DTF",
    label: "TANGGAPAN PELANGGAN · DTF",
    title: "Hasil sablon DTF",
    context: "Foto hasil dan tanggapan pelanggan untuk pesanan sablon DTF.",
  },
  {
    id: "tiktok-single-custom-two",
    image: "/proof/ulasan-tiktok-kaos-custom-satuan-2.jpeg",
    alt: "Ulasan TikTok untuk kaos custom satuan",
    label: "ULASAN TIKTOK · PESANAN SATUAN",
    title: "Ulasan kaos custom satuan",
    context: "Dokumentasi ulasan marketplace untuk kebutuhan kaos custom satuan.",
  },
  {
    id: "google-jersey-review",
    image: "/proof/ulasan-google-jersey.jpeg",
    alt: "Ulasan Google dan foto hasil jersey custom",
    label: "ULASAN GOOGLE · JERSEY",
    title: "Ulasan hasil jersey",
    context: "Bukti ulasan Google dan foto hasil pesanan jersey custom.",
  },
  {
    id: "dtf-recommendation-feedback",
    image: "/proof/testimoni-rekomendasi-dtf.jpeg",
    alt: "Tanggapan pelanggan yang merekomendasikan hasil sablon DTF",
    label: "TANGGAPAN PELANGGAN · DTF",
    title: "Tanggapan untuk hasil DTF",
    context: "Dokumentasi pesan pelanggan mengenai hasil sablon DTF.",
  },
  {
    id: "tiktok-single-custom",
    image: "/proof/ulasan-tiktok-kaos-custom-satuan.jpeg",
    alt: "Ulasan TikTok lain untuk kaos custom satuan",
    label: "ULASAN TIKTOK · PESANAN SATUAN",
    title: "Ulasan order kaos custom",
    context: "Dokumentasi ulasan marketplace untuk pesanan kaos custom satuan.",
  },
];
