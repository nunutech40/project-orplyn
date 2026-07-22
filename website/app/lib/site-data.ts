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
    image: "/catalog/dtf/02-hasil-dtf-desain-penuh-warna.jpeg",
    imageAlt: "Hasil DTF desain penuh warna pada kaos produksi Orplyn",
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
      "/catalog/dtf/01-hasil-dtf-planetarium.jpeg",
      "/catalog/dtf/02-hasil-dtf-desain-penuh-warna.jpeg",
      "/catalog/dtf/03-hasil-dtf-gid-reflektif.jpeg",
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
    image: "/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg",
    imageAlt: "Hasil sablon manual pada kaos produksi Orplyn",
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
      "/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg",
      "/catalog/manual/04-hasil-manual-puff-pasta.jpeg",
      "/catalog/manual/06-hasil-discharge.jpeg",
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
    image: "/catalog/kaos-polos/01-kaos-polos-warna.jpeg",
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
      "/catalog/kaos-polos/01-kaos-polos-warna.jpeg",
      "/catalog/kaos-polos/02-kaos-polos-warna-2.jpeg",
      "/catalog/kaos-polos/03-kaos-polos-warna-3.jpeg",
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
    image: "/catalog/manual/04-hasil-manual-puff-pasta.jpeg",
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
      "/catalog/manual/04-hasil-manual-puff-pasta.jpeg",
      "/catalog/manual/05-hasil-manual-pasta-glitter.jpeg",
      "/catalog/manual/06-hasil-discharge.jpeg",
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
    image: "/catalog/totebag/01-totebag-custom.jpeg",
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
      "/catalog/totebag/01-totebag-custom.jpeg",
      "/catalog/totebag/02-totebag-custom-2.jpeg",
      "/catalog/totebag/05-zipper-pouch-custom.jpeg",
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
    image: "/proof/redacted/order-event-perpisahan-bkb-paud-kartini-dtf-faces-redacted.png",
    title: "Perpisahan BKB PAUD Kartini",
    category: "Order event · DTF",
  },
  {
    image: "/catalog/orders/02-order-class-generation-kudus-dtf-glow-reflective-30pcs.jpeg",
    title: "Generation Class",
    category: "Order kelas · DTF efek khusus",
  },
  {
    image: "/proof/redacted/order-event-hari-kartini-bustanul-aulad-dtf-faces-redacted.png",
    title: "Hari Kartini Bustanul Aulad",
    category: "Order sekolah · DTF",
  },
  {
    image: "/catalog/orders/04-order-event-panitia-bagana-jakarta-dtf-1000pcs.jpeg",
    title: "Panitia BAGANA",
    category: "Order panitia · DTF",
  },
  {
    image: "/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg",
    title: "Desain Smoothie Kids",
    category: "Sablon manual",
  },
  {
    image: "/catalog/manual/02-hasil-plastisol-ilustrasi.jpeg",
    title: "Ilustrasi plastisol",
    category: "Sablon manual · plastisol",
  },
  {
    image: "/catalog/manual/03-hasil-plastisol-desain-warna.jpeg",
    title: "Desain warna plastisol",
    category: "Sablon manual · plastisol",
  },
  {
    image: "/catalog/manual/04-hasil-manual-puff-pasta.jpeg",
    title: "Efek puff dan pasta",
    category: "Sablon manual · efek khusus",
  },
  {
    image: "/catalog/manual/05-hasil-manual-pasta-glitter.jpeg",
    title: "Pasta glitter",
    category: "Sablon manual · efek khusus",
  },
  {
    image: "/catalog/manual/06-hasil-discharge.jpeg",
    title: "Hasil discharge",
    category: "Sablon manual · discharge",
  },
  {
    image: "/catalog/dtf/01-hasil-dtf-planetarium.jpeg",
    title: "Desain Planetarium",
    category: "DTF",
  },
  {
    image: "/catalog/dtf/02-hasil-dtf-desain-penuh-warna.jpeg",
    title: "Desain penuh warna",
    category: "DTF",
  },
  {
    image: "/catalog/dtf/03-hasil-dtf-gid-reflektif.jpeg",
    title: "Efek glow dan reflektif",
    category: "DTF · efek khusus",
  },
  {
    image: "/catalog/kaos-polos/01-kaos-polos-warna.jpeg",
    title: "Pilihan kaos polos",
    category: "Kaos polos",
  },
  {
    image: "/catalog/kaos-polos/02-kaos-polos-warna-2.jpeg",
    title: "Kaos polos warna",
    category: "Kaos polos",
  },
  {
    image: "/catalog/kaos-polos/03-kaos-polos-warna-3.jpeg",
    title: "Kaos polos warna lainnya",
    category: "Kaos polos",
  },
  {
    image: "/catalog/kaos-polos/04-kaos-polos-warna-4.jpeg",
    title: "Kaos polos untuk custom",
    category: "Kaos polos",
  },
  {
    image: "/catalog/totebag/01-totebag-custom.jpeg",
    title: "Totebag custom",
    category: "Totebag",
  },
  {
    image: "/catalog/totebag/02-totebag-custom-2.jpeg",
    title: "Totebag custom warna",
    category: "Totebag",
  },
  {
    image: "/catalog/totebag/03-totebag-custom-3.jpeg",
    title: "Totebag merchandise",
    category: "Totebag",
  },
  {
    image: "/catalog/totebag/04-totebag-custom-4.jpeg",
    title: "Totebag untuk kebutuhan acara",
    category: "Totebag",
  },
  {
    image: "/catalog/totebag/05-zipper-pouch-custom.jpeg",
    title: "Zipper pouch custom",
    category: "Merchandise",
  },
  {
    image: "/catalog/process/manual/01-proses-sablon-meja-curing.jpeg",
    title: "Meja curing",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/02-proses-sablon.jpeg",
    title: "Persiapan proses sablon",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/03-proses-sablon.jpeg",
    title: "Pengerjaan sablon manual",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/04-proses-sablon.jpeg",
    title: "Pengerjaan warna pada kaos",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/05-proses-sablon.jpeg",
    title: "Hasil proses di meja sablon",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/10-process-manual-ink-screen-preparation.jpeg",
    title: "Persiapan screen dan tinta",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/11-process-manual-squeegee-application.jpeg",
    title: "Tarik rakel",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/12-process-manual-squeegee-application-detail.jpeg",
    title: "Detail penekanan rakel",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/13-process-manual-large-format-squeegee.jpeg",
    title: "Pengerjaan area cetak",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/14-process-manual-color-layer-application.jpeg",
    title: "Pengerjaan lapisan warna",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/15-process-manual-multilayer-stage.jpeg",
    title: "Tahap beberapa lapisan warna",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/16-process-manual-curing-before-finishing.jpeg",
    title: "Curing sebelum finishing",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/manual/17-process-manual-curing-drying.jpeg",
    title: "Pengeringan hasil sablon",
    category: "Proses sablon manual",
  },
  {
    image: "/catalog/process/other/01-proses-zipper-pouch.jpeg",
    title: "Proses zipper pouch",
    category: "Proses merchandise",
  },
];

export const homepagePortfolio = [
  portfolio[4],
  portfolio[9],
  portfolio[10],
  portfolio[13],
  portfolio[17],
  portfolio[22],
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
