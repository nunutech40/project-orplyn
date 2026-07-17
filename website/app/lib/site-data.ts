export const WHATSAPP_PLACEHOLDER = "6280000000000";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3010"
).replace(/\/+$/, "");

export const business = {
  name: "Orplyn",
  longName: "ORPLYN | Apparel & Print Studio",
  descriptor: "Kaos Polos & Sablon Custom",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    WHATSAPP_PLACEHOLDER,
  instagram: "https://www.instagram.com/orplyn.id/",
  maps: "https://maps.app.goo.gl/CF2yTrHvkHe8d6cRA",
  address:
    "Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419",
};

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
};

export const services: Service[] = [
  {
    slug: "kaos-event-komunitas",
    title: "Kaos Event & Komunitas",
    eyebrow: "Untuk acara yang harus kompak",
    shortDescription:
      "Kaos panitia, reuni, komunitas, kampus, gathering, dan kebutuhan promosi.",
    description:
      "Dari bahan kaos sampai teknik cetak, Orplyn membantu menyiapkan produksi yang sesuai desain, kebutuhan acara, dan jumlah pesanan.",
    image: "/images/hero-sablon.jpg",
    imageAlt: "Hasil sablon full color pada kaos hitam produksi Orplyn",
    idealFor: [
      "Event dan kepanitiaan",
      "Komunitas dan klub",
      "Kampus, sekolah, dan organisasi",
      "Gathering kantor dan promosi",
    ],
    capabilities: [
      "Kaos custom dengan desain sendiri",
      "Pilihan warna dan bahan kaos",
      "Cetak depan, belakang, atau detail tambahan",
      "Konsultasi teknik sesuai artwork",
    ],
    methods: ["DTF", "Plastisol", "Discharge", "Rubber", "Fullprint"],
    gallery: [
      "/images/hero-sablon.jpg",
      "/images/sablon-pasta.jpg",
      "/images/sablon-discharge.jpg",
    ],
  },
  {
    slug: "produksi-clothing-brand",
    title: "Produksi Clothing Brand",
    eyebrow: "Detail yang membedakan koleksi",
    shortDescription:
      "Pilihan teknik sablon untuk rilisan brand, merchandise, dan produksi berulang.",
    description:
      "Eksplorasi karakter desain dengan teknik manual maupun digital, dari warna solid sampai efek timbul dan tekstur khusus.",
    image: "/images/sablon-puff.jpg",
    imageAlt: "Detail sablon puff timbul produksi Orplyn",
    idealFor: [
      "Clothing brand lokal",
      "Merchandise kreator dan musisi",
      "Koleksi kapsul",
      "Produksi desain berulang",
    ],
    capabilities: [
      "Pengecekan artwork sebelum produksi",
      "Pilihan efek dan karakter tinta",
      "Detail cetak untuk desain kompleks",
      "Produksi pada beragam jenis bahan",
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
  },
  {
    slug: "bordir-seragam",
    title: "Bordir & Seragam",
    eyebrow: "Rapi untuk identitas tim",
    shortDescription:
      "Bordir nama, logo, emblem, kemeja kerja, seragam organisasi, dan apparel tim.",
    description:
      "Bordir membantu identitas organisasi terlihat rapi dan tahan dipakai. Cocok untuk kebutuhan kerja, sekolah, komunitas, dan tim lapangan.",
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
  },
  {
    slug: "jersey-custom",
    title: "Jersey Custom",
    eyebrow: "Untuk tim yang punya identitas",
    shortDescription:
      "Jersey komunitas dan olahraga dengan desain, warna, nama, dan nomor custom.",
    description:
      "Produksi jersey untuk tim dan komunitas dengan visual yang bisa disesuaikan, termasuk detail nama, nomor, logo, dan pola kain.",
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
    methods: ["Fullprint", "Sublimasi", "Emboss", "Aplikasi logo"],
    gallery: [
      "/images/jersey-custom.jpg",
      "/images/sablon-ukuran-besar.jpg",
      "/images/hero-sablon.jpg",
    ],
  },
  {
    slug: "totebag-merchandise",
    title: "Totebag & Merchandise",
    eyebrow: "Bawa brand ke mana-mana",
    shortDescription:
      "Totebag dan goodiebag untuk promosi, seminar, event, hampers, dan merchandise.",
    description:
      "Totebag dapat disiapkan untuk kebutuhan merchandise, campaign, seminar, dan event dengan pilihan warna serta aplikasi desain.",
    image: "/images/totebag-custom.jpg",
    imageAlt: "Totebag oranye custom produksi Orplyn",
    idealFor: [
      "Seminar dan workshop",
      "Goodiebag perusahaan",
      "Merchandise brand",
      "Hampers dan campaign",
    ],
    capabilities: [
      "Pilihan warna totebag",
      "Aplikasi logo atau artwork",
      "Produksi untuk event",
      "Konsultasi ukuran dan teknik",
    ],
    methods: ["Sablon", "DTF", "Emboss", "Bordir"],
    gallery: [
      "/images/totebag-custom.jpg",
      "/images/proses-sablon.jpg",
      "/images/bordir-seragam.jpg",
    ],
  },
  {
    slug: "kaos-polos",
    title: "Kaos Polos",
    eyebrow: "Basis yang tepat untuk produksi",
    shortDescription:
      "Kaos polos beragam warna untuk dipakai langsung atau dilanjutkan ke proses sablon.",
    description:
      "Pilih kaos polos sesuai kebutuhan warna, ukuran, dan rencana produksi. Ketersediaan bahan dapat dikonsultasikan sebelum order.",
    image: "/images/kaos-polos-warna.jpg",
    imageAlt: "Pilihan warna kaos polos yang tersedia di Orplyn",
    idealFor: [
      "Kebutuhan event",
      "Stok komunitas",
      "Basis produksi sablon",
      "Kebutuhan apparel harian",
    ],
    capabilities: [
      "Pilihan warna beragam",
      "Konsultasi ukuran",
      "Bisa dilanjutkan ke sablon",
      "Pickup dari lokasi Ciputat",
    ],
    methods: ["Kaos polos", "Sablon custom", "Bordir", "Packing"],
    gallery: [
      "/images/kaos-polos-warna.jpg",
      "/images/hero-sablon.jpg",
      "/images/sablon-pasta.jpg",
    ],
  },
];

export const portfolio = [
  {
    image: "/images/hero-sablon.jpg",
    title: "Full color screen print",
    category: "Kaos custom",
  },
  {
    image: "/images/bordir-seragam.jpg",
    title: "Bordir identitas tim",
    category: "Seragam",
  },
  {
    image: "/images/sablon-puff.jpg",
    title: "Detail puff timbul",
    category: "Special ink",
  },
  {
    image: "/images/jersey-custom.jpg",
    title: "Jersey tim custom",
    category: "Jersey",
  },
  {
    image: "/images/sablon-discharge.jpg",
    title: "Discharge print",
    category: "Manual print",
  },
  {
    image: "/images/proses-sablon.jpg",
    title: "Proses produksi di workshop",
    category: "Behind the print",
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
    title: "Multi-color print",
    category: "Kaos custom",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
