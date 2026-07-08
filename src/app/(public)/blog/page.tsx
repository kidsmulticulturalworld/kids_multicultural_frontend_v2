import type { Metadata } from "next";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogPostGrid from "@/components/sections/blog/BlogPostGrid";
import { getSiteUrl } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { BlogPostListItem } from "@/sanity/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, tips, and cultural sparks from Kids Multicultural World — for families raising confident, creative kids.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Kids Multicultural World",
    description:
      "Stories, tips, and cultural sparks from Kids Multicultural World — for families raising confident, creative kids.",
    url: "/blog",
    type: "website",
    siteName: "Kids Multicultural World",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Kids Multicultural World",
    description:
      "Stories, tips, and cultural sparks from Kids Multicultural World — for families raising confident, creative kids.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

async function getPosts(): Promise<BlogPostListItem[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }

  try {
    return await sanityFetch<BlogPostListItem[]>({
      query: POSTS_QUERY,
      tags: ["post"],
      revalidate: 60,
    });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const siteUrl = getSiteUrl();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Kids Multicultural World Blog",
    description:
      "Stories, tips, and cultural sparks from Kids Multicultural World.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Kids Multicultural World",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <BlogHero />
      <BlogPostGrid posts={posts} />
    </>
  );
}
