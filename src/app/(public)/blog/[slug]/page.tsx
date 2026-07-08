import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";
import { getSiteUrl } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/client";
import { getSanityImageUrl } from "@/sanity/lib/image";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { BlogPost } from "@/sanity/types";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string): Promise<BlogPost | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }

  try {
    return await sanityFetch<BlogPost | null>({
      query: POST_BY_SLUG_QUERY,
      params: { slug },
      tags: ["post", `post:${slug}`],
      revalidate: 60,
    });
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }

  try {
    const posts = await sanityFetch<{ slug: string }[]>({
      query: POST_SLUGS_QUERY,
      tags: ["post"],
      revalidate: false,
    });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description =
    post.seo?.metaDescription ||
    post.excerpt ||
    `Read ${post.title} on the Kids Multicultural World blog.`;
  const ogImage = getSanityImageUrl(
    post.seo?.ogImage ?? post.mainImage,
    1200,
  );
  const canonical = `/blog/${post.slug}`;
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonical}`,
      type: "article",
      siteName: "Kids Multicultural World",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: post.seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

function formatDate(value?: string) {
  if (!value) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = getSanityImageUrl(post.mainImage, 1400);
  const date = formatDate(post.publishedAt);

  return (
    <article className="bg-white">
      <BlogJsonLd post={post} />

      <header className="relative overflow-hidden bg-header">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 105, 180, 0.2) 0%, transparent 75%)",
          }}
        />
        <div className="relative z-10 max-w-[800px] mx-auto px-5 md:px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Link
            href="/blog"
            className="inline-block text-sm text-white/70 hover:text-white mb-6 transition-colors"
          >
            ← Back to blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="text-xs tracking-wide uppercase text-white/60"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
            {post.author?.name && <span>By {post.author.name}</span>}
            {date && (
              <>
                {post.author?.name && <span aria-hidden="true">·</span>}
                <time dateTime={post.publishedAt}>{date}</time>
              </>
            )}
          </div>
        </div>
      </header>

      {imageUrl && (
        <div className="max-w-[960px] mx-auto px-5 md:px-6 -mt-6 md:-mt-8 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
        </div>
      )}

      <div className="max-w-[800px] mx-auto px-5 md:px-6 py-10 md:py-14">
        {post.excerpt && (
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-enroll pl-4">
            {post.excerpt}
          </p>
        )}

        {post.body && post.body.length > 0 ? (
          <PortableTextRenderer value={post.body} />
        ) : (
          <p className="text-gray-500">This post has no content yet.</p>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-enroll font-medium hover:underline"
          >
            ← More stories
          </Link>
        </div>
      </div>
    </article>
  );
}
