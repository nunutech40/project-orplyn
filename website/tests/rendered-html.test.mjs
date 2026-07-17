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
  assert.match(html, /Jasa Sablon Kaos &amp; Apparel Custom di Ciputat/i);
  assert.match(html, /Kaos custom yang siap dipakai, dijual, dan dibanggakan/i);
  assert.match(html, /Kirim brief ke WhatsApp/i);
  assert.match(html, /\/brand\/orplyn-horizontal-white\.png/i);
  assert.match(html, /"logo":"http:\/\/localhost:3010\/brand\/orplyn-monogram-black\.png"/i);
  assert.match(html, /"@type":"LocalBusiness"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3010\/"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Codex is working/i);
});

test("server-renders an indexable service landing page", async () => {
  const response = await render("/layanan/produksi-clothing-brand");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Produksi Clothing Brand di Ciputat/i);
  assert.match(html, /<h1>Produksi Clothing Brand<\/h1>/i);
  assert.match(html, /"@type":"Service"/i);
  assert.match(html, /MULAI DARI BRIEF/i);
  assert.match(
    html,
    /rel="canonical" href="http:\/\/localhost:3010\/layanan\/produksi-clothing-brand"/i,
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
  assert.match(robots, /Sitemap: http:\/\/localhost:3010\/sitemap.xml/i);
  assert.match(sitemap, /http:\/\/localhost:3010\/portfolio/i);
  assert.match(sitemap, /http:\/\/localhost:3010\/layanan\/jersey-custom/i);
  assert.match(await llmsResponse.text(), /Orplyn is an apparel and print studio/i);
});
