import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "./lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowIndexing
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: allowIndexing ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
