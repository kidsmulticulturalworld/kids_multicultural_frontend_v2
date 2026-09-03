import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/client";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

const staticRoutes = [
  "",
  "/about",
  "/classes",
  "/classes/register",
  "/magazine",
  "/blog",
  "/shop",
  "/kids",
  "/gallery",
  "/events",
  "/terms",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.6,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const posts = await sanityFetch<{ slug: string }[]>({
        query: POST_SLUGS_QUERY,
        tags: ["post"],
        revalidate: 3600,
      });

      blogEntries = posts.map((post) => ({
        url: `${siteUrl}/blog/${encodeURIComponent(post.slug)}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    } catch {
      blogEntries = [];
    }
  }

  return [...staticEntries, ...blogEntries];
}
