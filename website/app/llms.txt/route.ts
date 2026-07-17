const llmsText = `# Orplyn

Orplyn is an apparel and print studio in Ciputat, Tangerang Selatan, Indonesia.

## Main services

- Custom T-shirts for events, communities, campuses, offices, and promotions
- Clothing brand production with DTF and manual screen printing
- Plastisol, discharge, rubber, puff, high-density, foil, glitter, and velvet effects
- Computer embroidery for uniforms, shirts, names, logos, emblems, and patches
- Custom jerseys with names, numbers, logos, and full-print designs
- Custom tote bags, merchandise, and blank T-shirts

## Location and contact

Address: Jl. Legoso Sel. II No.43, Pisangan, Ciputat Timur, Tangerang Selatan, Banten 15419, Indonesia
Instagram: https://www.instagram.com/orplyn.id/
Google Maps: https://maps.app.goo.gl/CF2yTrHvkHe8d6cRA

For price and production estimates, visitors should submit the short order brief on the website. The brief opens a WhatsApp conversation with the selected product, quantity, deadline, and design status.
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
