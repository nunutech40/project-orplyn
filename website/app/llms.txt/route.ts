const llmsText = `# Orplyn

Orplyn is a custom T-shirt printing and blank T-shirt business in Ciputat, Tangerang Selatan, Indonesia.

## Primary order paths

- DTF custom T-shirts from 1 piece; normal production estimate is around 2 days
- Blank T-shirts from 1 piece, with wholesale pricing from 6 pieces; normal estimate is around 2 days
- Event and community T-shirt production, with manual or plastisol printing from 12 pieces; normal estimate is around 3-7 days

Other production options include special ink, embroidery and uniforms, custom jerseys, full-print apparel, tote bags, and merchandise. Final schedules depend on artwork, quantity, material stock, and the production queue.

## Location and contact

Address: Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419, Indonesia
Instagram: https://www.instagram.com/orplyn.id/
Google Maps: https://maps.app.goo.gl/CF2yTrHvkHe8d6cRA
WhatsApp sales: +62 823-1757-9311
Admin hours: Monday-Saturday, 08:00-19:00 WIB
Workshop hours: 08:00-17:00 WIB

For price and production estimates, visitors should submit the short order brief on the website. The brief opens a WhatsApp conversation with a lead ID, order path, product, quantity, use case, deadline, design status, delivery location, and acquisition source.
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
