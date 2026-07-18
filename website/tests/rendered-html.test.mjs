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

test("server-renders the Orplyn lead funnel", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="id">/i);
  assert.match(html, /Jasa Sablon Kaos Custom Ciputat/i);
  assert.match(
    html,
    /Jasa sablon kaos custom di Ciputat, dari satuan sampai produksi batch/i,
  );
  assert.match(html, /DTF MULAI 1 PCS/i);
  assert.match(html, /TIGA KEBUTUHAN UTAMA/i);
  assert.match(html, /Kirim brief ke WhatsApp/i);
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
  assert.match(html, /MULAI DARI BRIEF/i);
  assert.match(
    html,
    /rel="canonical" href="http:\/\/localhost:3010\/layanan\/sablon-dtf-satuan"/i,
  );
});

test("applies the product MOQ to a batch landing page", async () => {
  const response = await render("/layanan/kaos-event-komunitas");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /checked="" value="batch"/i);
  assert.match(html, /value="sablon-manual-plastisol"/i);
  assert.match(html, /value="12-23 pcs"/i);
  assert.doesNotMatch(html, /value="1 pcs"/i);
  assert.doesNotMatch(html, /value="2-5 pcs"/i);
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
  assert.match(html, /Data brief dipakai untuk menanggapi kebutuhan order/i);
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
  assert.match(await llmsResponse.text(), /DTF custom T-shirts from 1 piece/i);
});
