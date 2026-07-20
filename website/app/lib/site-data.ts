export const WHATSAPP_PLACEHOLDER = "6280000000000";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3010"
).replace(/\/+$/, "");

export const allowIndexing =
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const business = {
  name: "Orplyn",
  longName: "Orplyn Apparel & Print Studio",
  descriptor: "Kaos Polos & Sablon Custom",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    WHATSAPP_PLACEHOLDER,
  whatsappDisplay: "0823-1757-9311",
  instagram: "https://www.instagram.com/orplyn.id/",
  maps: "https://maps.app.goo.gl/CF2yTrHvkHe8d6cRA",
  address:
    "Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419",
  adminHours: "Senin-Sabtu, 08.00-19.00 WIB",
  workshopHours: "08.00-17.00 WIB",
  serviceArea: "Jabodetabek dan pengiriman ke seluruh Indonesia",
};

export type FunnelLane = "single" | "batch";

export type QuoteProduct = {
  id: string;
  title: string;
  canSingle: boolean;
  minimumOrder: number;
  wholesaleFrom: number;
  normalLeadTime: string;
};

export const quoteProducts: QuoteProduct[] = [
  {
    id: "kaos-custom-dtf",
    title: "Kaos custom + sablon DTF",
    canSingle: true,
    minimumOrder: 1,
    wholesaleFrom: 12,
    normalLeadTime: "sekitar 2 hari",
  },
  {
    id: "kaos-polos",
    title: "Kaos polos",
    canSingle: true,
    minimumOrder: 1,
    wholesaleFrom: 6,
    normalLeadTime: "sekitar 2 hari",
  },
  {
    id: "sablon-manual-plastisol",
    title: "Sablon manual / plastisol",
    canSingle: false,
    minimumOrder: 12,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
  {
    id: "special-ink",
    title: "Special ink / efek sablon",
    canSingle: false,
    minimumOrder: 12,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
  {
    id: "bordir-seragam",
    title: "Bordir / seragam",
    canSingle: false,
    minimumOrder: 6,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
  {
    id: "jersey-custom",
    title: "Jersey custom",
    canSingle: false,
    minimumOrder: 6,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
  {
    id: "fullprint",
    title: "Fullprint",
    canSingle: false,
    minimumOrder: 12,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
  {
    id: "totebag-merchandise",
    title: "Totebag / merchandise",
    canSingle: false,
    minimumOrder: 12,
    wholesaleFrom: 100,
    normalLeadTime: "sekitar 3-7 hari",
  },
];

export function getQuoteProduct(productId: string) {
  return quoteProducts.find((product) => product.id === productId);
}

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  idealFor: string[];
  capabilities: string[];
  methods: string[];
  gallery: string[];
  quoteProductId: string;
  defaultLane: FunnelLane;
  defaultUseCase?: string;
  orderFacts: string[];
};

export const services: Service[] = [
  {
    slug: "sablon-dtf-satuan",
    title: "Sablon DTF & Kaos Custom Satuan",
    eyebrow: "Mulai 1 pcs untuk coba desain",
    shortDescription:
      "Kaos custom dan sablon DTF mulai 1 pcs untuk kebutuhan personal, sampel, atau uji cetak.",
    description:
      "Kirim desain dan kebutuhanmu. Orplyn membantu mengecek bahan, ukuran cetak, jumlah, serta estimasi produksi sebelum pesanan dilanjutkan.",
    image: "/images/sablon-pasta.jpg",
    imageAlt: "Hasil sablon warna pada kaos produksi Orplyn",
    idealFor: [
      "Kaos custom personal",
      "Sampel atau uji cetak",
      "Desain penuh warna",
      "Pesanan kecil sebelum produksi batch",
    ],
    capabilities: [
      "Pesanan bisa dimulai dari 1 pcs",
      "Konsultasi bahan 20s, 24s, atau 30s",
      "Pengecekan desain dan ukuran cetak",
      "Ambil di Ciputat atau pengiriman",
    ],
    methods: ["DTF", "Kaos custom", "20s", "24s", "30s"],
    gallery: [
      "/images/sablon-pasta.jpg",
      "/images/hero-sablon.webp",
      "/images/kaos-polos-warna.jpg",
    ],
    quoteProductId: "kaos-custom-dtf",
    defaultLane: "single",
    defaultUseCase: "Personal / hadiah",
    orderFacts: [
      "Minimum order 1 pcs",
      "Perhitungan grosir mulai 12 pcs",
      "Estimasi produksi sekitar 2 hari",
    ],
  },
  {
    slug: "kaos-event-komunitas",
    title: "Sablon Manual untuk Kaos Event & Komunitas",
    eyebrow: "Untuk panitia, komunitas, kampus, dan acara",
    shortDescription:
      "Sablon manual untuk kaos panitia, reuni, komunitas, kampus, acara kantor, dan kebutuhan promosi.",
    description:
      "Sampaikan jumlah, desain, tanggal pakai, dan lokasi. Admin Orplyn mengecek bahan, teknik manual, minimum order, serta estimasi produksi sebelum harga dan jadwal dikonfirmasi.",
    image: "/images/hero-sablon.webp",
    imageAlt: "Hasil sablon penuh warna pada kaos hitam produksi Orplyn",
    idealFor: [
      "Event dan kepanitiaan",
      "Komunitas dan klub",
      "Kampus, sekolah, dan organisasi",
      "Acara kantor dan promosi",
    ],
    capabilities: [
      "Tanggal pakai dicatat saat meminta estimasi",
      "Kaos custom dengan desain sendiri",
      "Pilihan bahan 20s, 24s, dan 30s",
      "Konsultasi teknik sesuai desain dan jumlah",
    ],
    methods: ["Plastisol", "Rubber / pasta", "Discharge", "High density", "Efek khusus"],
    gallery: [
      "/images/hero-sablon.webp",
      "/images/sablon-pasta.jpg",
      "/images/sablon-discharge.jpg",
    ],
    quoteProductId: "sablon-manual-plastisol",
    defaultLane: "batch",
    defaultUseCase: "Event / komunitas",
    orderFacts: [
      "Sablon manual 1 warna minimum 12 pcs",
      "Desain lebih dari 1 warna minimum 24 pcs",
      "Perhitungan grosir manual mulai 100 pcs",
      "Estimasi produksi normal sekitar 3-7 hari kerja",
    ],
  },
  {
    slug: "kaos-polos",
    title: "Kaos Polos Satuan & Grosir",
    eyebrow: "Siap dipakai atau dilanjutkan ke sablon",
    shortDescription:
      "Kaos polos mulai 1 pcs, dengan perhitungan grosir mulai 6 pcs dan pilihan bahan 20s, 24s, atau 30s.",
    description:
      "Pilih kaos polos berdasarkan bahan, warna, ukuran, dan jumlah. Ketersediaan stok tetap dikonfirmasi admin sebelum pembayaran.",
    image: "/images/kaos-polos-warna.jpg",
    imageAlt: "Pilihan warna kaos polos yang tersedia di Orplyn",
    idealFor: [
      "Kebutuhan personal",
      "Event dan komunitas",
      "Basis produksi sablon",
      "Vendor atau reseller",
    ],
    capabilities: [
      "Minimum order 1 pcs",
      "Perhitungan grosir mulai 6 pcs",
      "Bahan 20s, 24s, dan 30s",
      "Ukuran normal S-XL",
    ],
    methods: ["20s", "24s", "30s", "Sablon custom", "Pickup Ciputat"],
    gallery: [
      "/images/kaos-polos-warna.jpg",
      "/images/hero-sablon.webp",
      "/images/sablon-pasta.jpg",
    ],
    quoteProductId: "kaos-polos",
    defaultLane: "single",
    orderFacts: [
      "Minimum order 1 pcs",
      "Perhitungan grosir mulai 6 pcs",
      "Estimasi produksi sekitar 2 hari",
    ],
  },
  {
    slug: "produksi-clothing-brand",
    title: "Produksi Clothing Brand",
    eyebrow: "Teknik mengikuti karakter desain",
    shortDescription:
      "Pilihan teknik sablon untuk rilisan brand, merchandise, dan produksi berulang.",
    description:
      "Bahas desain, bahan, jumlah, dan karakter hasil yang diinginkan sebelum memilih teknik digital, manual, atau efek khusus.",
    image: "/images/sablon-puff.jpg",
    imageAlt: "Detail sablon puff timbul produksi Orplyn",
    idealFor: [
      "Clothing brand lokal",
      "Merchandise kreator dan musisi",
      "Koleksi kapsul",
      "Produksi desain berulang",
    ],
    capabilities: [
      "Pengecekan desain sebelum produksi",
      "Pilihan efek dan karakter tinta",
      "Detail cetak untuk desain kompleks",
      "Sampel berbayar sebelum produksi massal",
    ],
    methods: [
      "Plastisol",
      "Discharge",
      "Puff",
      "High Density",
      "Foil",
      "Glitter",
      "Bludru",
    ],
    gallery: [
      "/images/sablon-puff.jpg",
      "/images/sablon-discharge.jpg",
      "/images/sablon-bludru.jpg",
    ],
    quoteProductId: "sablon-manual-plastisol",
    defaultLane: "batch",
    defaultUseCase: "Clothing brand",
    orderFacts: [
      "Sablon manual minimum 12 pcs",
      "Special ink minimum 12 pcs",
      "Estimasi produksi sekitar 3-7 hari",
    ],
  },
  {
    slug: "bordir-seragam",
    title: "Bordir & Seragam",
    eyebrow: "Identitas tim yang rapi",
    shortDescription:
      "Bordir nama, logo, emblem, kemeja kerja, seragam organisasi, dan apparel tim.",
    description:
      "Bordir dan seragam untuk kebutuhan kantor, sekolah, komunitas, organisasi, dan tim lapangan.",
    image: "/images/bordir-seragam.jpg",
    imageAlt: "Kemeja seragam putih dengan bordir hijau produksi Orplyn",
    idealFor: [
      "Seragam kantor dan tim",
      "Kemeja organisasi",
      "Sekolah dan komunitas",
      "Nama, logo, dan emblem",
    ],
    capabilities: [
      "Bordir nama personal",
      "Logo dan identitas organisasi",
      "Penempatan dada dan lengan",
      "Produksi seragam dalam satu kebutuhan",
    ],
    methods: ["Bordir komputer", "Emblem", "Patch", "Aplikasi pada kemeja"],
    gallery: [
      "/images/bordir-seragam.jpg",
      "/images/bordir-kemeja.jpg",
      "/images/sablon-bludru.jpg",
    ],
    quoteProductId: "bordir-seragam",
    defaultLane: "batch",
    orderFacts: [
      "Minimum order 6 pcs",
      "Perhitungan grosir mulai 100 pcs",
      "Estimasi produksi sekitar 3-7 hari",
    ],
  },
  {
    slug: "jersey-custom",
    title: "Jersey Custom",
    eyebrow: "Untuk tim yang punya identitas",
    shortDescription:
      "Jersey komunitas dan olahraga dengan desain, warna, nama, dan nomor custom.",
    description:
      "Produksi jersey untuk tim dan komunitas dengan detail nama, nomor, logo, dan pola yang bisa disesuaikan.",
    image: "/images/jersey-custom.jpg",
    imageAlt: "Set jersey hijau putih custom produksi Orplyn",
    idealFor: [
      "Tim futsal dan sepak bola",
      "Komunitas olahraga",
      "Turnamen dan event",
      "Jersey supporter",
    ],
    capabilities: [
      "Nama dan nomor custom",
      "Logo tim dan sponsor",
      "Warna dan pola sesuai identitas",
      "Atasan atau set jersey",
    ],
    methods: ["Fullprint", "Sublimasi", "Nama dan nomor", "Aplikasi logo"],
    gallery: [
      "/images/jersey-custom.jpg",
      "/images/sablon-ukuran-besar.jpg",
      "/images/hero-sablon.webp",
    ],
    quoteProductId: "jersey-custom",
    defaultLane: "batch",
    defaultUseCase: "Tim olahraga",
    orderFacts: [
      "Minimum order 6 pcs",
      "Perhitungan grosir mulai 100 pcs",
      "Estimasi produksi sekitar 3-7 hari",
    ],
  },
  {
    slug: "totebag-merchandise",
    title: "Totebag & Merchandise",
    eyebrow: "Merchandise untuk event dan promosi",
    shortDescription:
      "Totebag dan merchandise untuk promosi, seminar, event, hampers, dan kebutuhan organisasi.",
    description:
      "Bahas bahan, warna, ukuran, desain, dan jumlah untuk menyiapkan totebag atau merchandise sesuai kebutuhan acara.",
    image: "/images/totebag-custom.jpg",
    imageAlt: "Totebag oranye custom produksi Orplyn",
    idealFor: [
      "Seminar dan workshop",
      "Goodiebag perusahaan",
      "Merchandise brand",
      "Hampers dan kampanye",
    ],
    capabilities: [
      "Pilihan warna totebag",
      "Aplikasi logo atau desain",
      "Produksi untuk event",
      "Konsultasi ukuran dan teknik",
    ],
    methods: ["Sablon", "DTF", "Bordir", "Aplikasi desain"],
    gallery: [
      "/images/totebag-custom.jpg",
      "/images/proses-sablon.jpg",
      "/images/bordir-seragam.jpg",
    ],
    quoteProductId: "totebag-merchandise",
    defaultLane: "batch",
    defaultUseCase: "Event / komunitas",
    orderFacts: [
      "Minimum order 12 pcs",
      "Perhitungan grosir mulai 100 pcs",
      "Estimasi produksi sekitar 3-7 hari",
    ],
  },
];

export const primaryServiceSlugs = [
  "kaos-event-komunitas",
  "sablon-dtf-satuan",
  "kaos-polos",
];

export const primaryServices = primaryServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

export const secondaryServices = services.filter(
  (service) => !primaryServiceSlugs.includes(service.slug),
);

export const portfolio = [
  {
    image: "/images/hero-sablon.webp",
    title: "Sablon warna penuh",
    category: "Kaos custom",
  },
  {
    image: "/images/bordir-seragam.jpg",
    title: "Bordir identitas tim",
    category: "Seragam",
  },
  {
    image: "/images/sablon-puff.jpg",
    title: "Detail sablon puff timbul",
    category: "Efek sablon",
  },
  {
    image: "/images/jersey-custom.jpg",
    title: "Jersey tim custom",
    category: "Jersey",
  },
  {
    image: "/images/sablon-discharge.jpg",
    title: "Sablon discharge",
    category: "Sablon manual",
  },
  {
    image: "/images/proses-sablon.jpg",
    title: "Proses produksi di workshop",
    category: "Proses produksi",
  },
  {
    image: "/images/bordir-kemeja.jpg",
    title: "Kemeja bordir custom",
    category: "Bordir",
  },
  {
    image: "/images/totebag-custom.jpg",
    title: "Totebag warna custom",
    category: "Merchandise",
  },
  {
    image: "/images/sablon-pasta.jpg",
    title: "Sablon multiwarna",
    category: "Kaos custom",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
