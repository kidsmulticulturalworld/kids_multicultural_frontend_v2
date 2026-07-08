import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/sanity/env";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/studio/", "/api/", "/checkout", "/cart"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
