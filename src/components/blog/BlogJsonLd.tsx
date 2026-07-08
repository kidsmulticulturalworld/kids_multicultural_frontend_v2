import type { BlogPost } from "@/sanity/types";
import { getSiteUrl } from "@/sanity/env";
import { getSanityImageUrl } from "@/sanity/lib/image";

export function BlogJsonLd({ post }: { post: BlogPost }) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/${post.slug}`;
  const image =
    getSanityImageUrl(post.seo?.ogImage ?? post.mainImage, 1200) || undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    image: image ? [image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : {
          "@type": "Organization",
          name: "Kids Multicultural World",
        },
    publisher: {
      "@type": "Organization",
      name: "Kids Multicultural World",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
