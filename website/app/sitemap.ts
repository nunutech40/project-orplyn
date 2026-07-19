import type { MetadataRoute } from "next";
import { primaryServices, secondaryServices, siteUrl } from "./lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/kontak`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/kebijakan-privasi`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...[...primaryServices, ...secondaryServices].map((service) => ({
      url: `${siteUrl}/layanan/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority:
        service.slug === "kaos-event-komunitas"
          ? 0.9
          : primaryServices.includes(service)
            ? 0.8
            : 0.7,
    })),
  ];
}
