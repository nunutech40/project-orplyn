import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function getWhatsAppMessages(html) {
  return [...html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/gi)].map(
    ([, href]) => {
      const encodedMessage = href.replaceAll("&amp;", "&").split("?text=")[1] || "";
      return decodeURIComponent(encodedMessage);
    },
  );
}

test("server-renders the Orplyn lead funnel", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="id">/i);
  assert.match(html, /Sablon Manual Kaos Event &amp; Komunitas Ciputat/i);
  assert.match(
    html,
    /<h1>Sablon manual untuk kaos event &amp; komunitas\.<\/h1>/i,
  );
  assert.match(html, /Kirim desain, jumlah, dan tanggal pakai langsung ke Aulia/i);
  assert.match(html, /Minta estimasi sablon manual/i);
  assert.match(html, /Chat order satuan/i);
  assert.match(html, /Lihat hasil produksi Orplyn/i);
  assert.match(html, /LANGSUNG CHAT AULIA/i);
  assert.match(html, /DTF MULAI 1 PCS/i);
  assert.match(html, /Mulai dari kebutuhan acaramu/i);
  assert.match(html, /Tidak perlu mengisi form di website/i);
  assert.match(html, /href="\/kontak#quote"/i);
  assert.doesNotMatch(html, /id="quote-product-full"/i);
  assert.doesNotMatch(html, /id="quote-quantity-full"/i);

  const whatsappMessages = getWhatsAppMessages(html);
  assert.ok(whatsappMessages.length >= 4, "homepage should render direct WhatsApp links");
  assert.ok(
    whatsappMessages.some((message) =>
      message.includes("kaos untuk event / produksi batch"),
    ),
    "homepage should include the event/batch WhatsApp template",
  );
  assert.ok(
    whatsappMessages.some((message) =>
      message.includes("pesanan satuan / test print"),
    ),
    "homepage should include the single-order WhatsApp template",
  );
  assert.ok(
    whatsappMessages.some((message) => message.includes("Tanggal dipakai:")),
    "event template should ask for the event date",
  );
  const primaryServicesStart = html.indexOf("service-feature");
  const primaryServicesEnd = html.indexOf("</section>", primaryServicesStart);
  const primaryServicesHtml = html.slice(primaryServicesStart, primaryServicesEnd);
  assert.ok(
    primaryServicesHtml.indexOf("Sablon Manual untuk Kaos Event &amp; Komunitas") <
      primaryServicesHtml.indexOf("Sablon DTF &amp; Kaos Custom Satuan"),
    "event/community should be the dominant offer before supporting offers",
  );
  assert.match(html, /id="bukti-pesanan"/i);
  assert.match(html, /Pesanan kaos Hari Kartini di Ciputat/i);
  assert.match(html, /Contoh hasil warna sablon plastisol/i);
  assert.match(html, /Lihat bukti satu per satu, tanpa dipotong/i);
  assert.match(html, /ulasan-google-hari-kartini-redacted\.jpeg/i);
  assert.doesNotMatch(html, /Lorem ipsum|Customer A|testimoni segera hadir/i);
  assert.match(html, /0823-1757-9311/i);
  assert.match(html, /\/brand\/orplyn-horizontal-white\.png/i);
  assert.match(html, /"logo":"http:\/\/localhost:3010\/brand\/orplyn-monogram-black\.png"/i);
  assert.match(html, /"@type":"LocalBusiness"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3010\/"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Codex is working/i);
});

test("server-renders a high-intent DTF service landing page", async () => {
  const response = await render("/layanan/sablon-dtf-satuan");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Sablon DTF &amp; Kaos Custom Satuan di Ciputat/i);
  assert.match(html, /<h1>Sablon DTF &amp; Kaos Custom Satuan<\/h1>/i);
  assert.match(html, /"@type":"Service"/i);
  assert.match(html, /Minimum order 1 pcs/i);
  assert.match(html, /PANDUAN ORDER/i);
  assert.match(html, /Chat order satuan/i);
  assert.match(html, /LANJUT KE WHATSAPP/i);
  const whatsappMessages = getWhatsAppMessages(html);
  assert.ok(
    whatsappMessages.some((message) =>
      message.includes("Mau dibuat: Sablon DTF & Kaos Custom Satuan"),
    ),
  );
  assert.match(
    html,
    /rel="canonical" href="http:\/\/localhost:3010\/layanan\/sablon-dtf-satuan"/i,
  );
});

test("applies the product MOQ to a batch landing page", async () => {
  const response = await render("/layanan/kaos-event-komunitas");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<h1>Sablon Manual untuk Kaos Event &amp; Komunitas<\/h1>/i);
  assert.match(html, /Sampaikan jumlah, desain, tanggal pakai, dan lokasi/i);
  assert.match(html, /Chat order batch/i);
  assert.doesNotMatch(html, /id="quote-product-compact"/i);
  const whatsappMessages = getWhatsAppMessages(html);
  assert.ok(
    whatsappMessages.some((message) =>
      message.includes("Mau dibuat: Sablon Manual untuk Kaos Event & Komunitas"),
    ),
  );
  assert.ok(
    whatsappMessages.some((message) => message.includes("Perkiraan jumlah:")),
  );
  assert.match(html, /id="bukti-pesanan"/i);
  assert.match(html, /Pesanan kaos Hari Kartini di Ciputat/i);
});

test("server-renders the focused event Ads landing with approved contextual proof", async () => {
  const response = await render("/lp/kaos-event-komunitas");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(
    html,
    /<h1>Bikin kaos event tanpa bingung bahan, teknik, dan minimum order\.<\/h1>/i,
  );
  assert.match(
    html,
    /Aulia bantu cek pilihan\s+manual atau DTF, MOQ, serta estimasi sebelum produksi dilanjutkan/i,
  );
  assert.match(html, />Cek kebutuhan &amp; minta estimasi<\/a>/i);
  assert.match(html, /Minimum sablon manual untuk 1 warna/i);
  assert.match(html, /Estimasi produksi normal/i);
  assert.match(
    html,
    /Empat informasi ini cukup untuk membantu Aulia mulai mengecek/i,
  );
  assert.match(
    html,
    /rel="canonical" href="http:\/\/localhost:3010\/lp\/kaos-event-komunitas"/i,
  );
  assert.match(html, /<meta name="robots" content="noindex, follow"/i);

  const whatsappMessages = getWhatsAppMessages(html);
  assert.ok(
    whatsappMessages.length >= 3,
    "Ads landing should repeat one direct WhatsApp action",
  );
  assert.ok(
    whatsappMessages.every((message) =>
      message.includes("kaos untuk event / produksi batch"),
    ),
    "every WhatsApp CTA on the Ads landing should use the event template",
  );
  assert.ok(
    whatsappMessages.every((message) => message.includes("Tanggal dipakai:")),
    "every WhatsApp CTA should ask for the event date",
  );

  assert.doesNotMatch(html, /aria-label="Navigasi utama"/i);
  assert.doesNotMatch(html, /aria-label="Navigasi seluler"/i);
  assert.doesNotMatch(html, /Chat order satuan|Isi brief lengkap|Layanan lain/i);
  assert.match(html, /data-testid="ads-trust-bridge"/i);
  assert.match(html, /Hasil order event yang bisa dilihat konteksnya/i);
  assert.match(html, /Kaos perpisahan BKB PAUD Kartini/i);
  assert.match(html, /Kaos peserta Hari Kartini/i);
  assert.match(html, /Kaos panitia BAGANA/i);
  assert.match(html, /order-event-panitia-bagana-dtf\.jpeg/i);
  assert.match(html, /id="feedback-plastisol"/i);
  assert.match(html, /Feedback pelanggan tentang hasil plastisol/i);
  assert.doesNotMatch(html, /Pesanan kaos Hari Kartini di Ciputat/i);
  assert.doesNotMatch(html, /id="arsip-bukti-event"/i);
  assert.match(html, /Supaya estimasi bisa dicek, siapkan 4 hal ini/i);
  assert.match(html, /Jumlah kaos/i);
  assert.doesNotMatch(html, /Lanjutkan Brief ke WhatsApp/i);
  assert.match(html, /Yang sering ditanyakan sebelum minta estimasi/i);
  assert.match(html, /Minimum ordernya berapa\?/i);
  assert.doesNotMatch(html, /"@type":"FAQPage"/i);
  assert.match(html, /Sablon manual dikerjakan lewat screen/i);
  assert.match(html, /process-manual-squeegee\.jpeg/i);
  assert.match(html, /Boleh datang atau pickup di workshop/i);
  assert.match(html, /Lihat lokasi di Google Maps/i);
  assert.doesNotMatch(
    html,
    /tepat waktu|aman dari drama|garansi|customer a|testimoni segera hadir/i,
  );
});

test("keeps the detailed brief as an optional contact-page path", async () => {
  const response = await render("/kontak");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /OPSIONAL · BRIEF LENGKAP/i);
  assert.match(html, /Chat event \/ batch/i);
  assert.match(html, /Chat order satuan/i);
  assert.match(html, /id="quote-product-compact"/i);
  assert.match(html, /id="quote-quantity-compact"/i);
});

test("keeps local and staging builds out of search indexes", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /<meta name="robots" content="noindex, nofollow"/i);
});

test("server-renders the privacy notice used by the brief form", async () => {
  const response = await render("/kebijakan-privasi");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Data pesanan dipakai untuk menanggapi permintaan estimasi/i);
  assert.match(html, /GCLID, GBRAID, atau WBRAID/i);
  assert.match(
    html,
    /rel="canonical" href="http:\/\/localhost:3010\/kebijakan-privasi"/i,
  );
});

test("publishes crawler discovery files", async () => {
  const robotsResponse = await render("/robots.txt");
  const sitemapResponse = await render("/sitemap.xml");
  const llmsResponse = await render("/llms.txt");

  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);
  assert.equal(llmsResponse.status, 200);
  assert.match(llmsResponse.headers.get("content-type") ?? "", /^text\/plain\b/i);

  const robots = await robotsResponse.text();
  const sitemap = await sitemapResponse.text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Disallow: \/$/im);
  assert.doesNotMatch(robots, /Sitemap:/i);
  assert.match(sitemap, /http:\/\/localhost:3010\/portfolio/i);
  assert.match(sitemap, /http:\/\/localhost:3010\/kebijakan-privasi/i);
  assert.match(sitemap, /http:\/\/localhost:3010\/layanan\/jersey-custom/i);
  assert.doesNotMatch(sitemap, /\/lp\/kaos-event-komunitas/i);
  assert.ok(
    sitemap.indexOf("/layanan/kaos-event-komunitas") <
      sitemap.indexOf("/layanan/sablon-dtf-satuan"),
    "event/community should be the first service URL in the sitemap",
  );
  assert.match(
    sitemap,
    /kaos-event-komunitas<\/loc>[\s\S]*?<priority>0\.9<\/priority>/i,
  );
  const llms = await llmsResponse.text();
  assert.match(llms, /event and community T-shirt production/i);
  assert.match(llms, /DTF custom T-shirts from 1 piece/i);
});
