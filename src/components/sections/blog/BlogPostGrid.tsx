import Image from "next/image";
import Link from "next/link";
import { getSanityImageUrl } from "@/sanity/lib/image";
import type { BlogPostListItem } from "@/sanity/types";

function formatDate(value?: string) {
  if (!value) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function BlogPostGrid({ posts }: { posts: BlogPostListItem[] }) {
  if (posts.length === 0) {
    return (
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10 text-center">
          <p className="text-sm text-gray-500">
            New stories are on the way. Check back soon — or visit our{" "}
            <Link href="/magazine" className="text-enroll font-medium hover:underline">
              magazines
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => {
            const imageUrl = getSanityImageUrl(post.mainImage, 800);
            const date = formatDate(post.publishedAt);

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-gray-100 overflow-hidden transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-header/10 text-header/40 text-sm">
                      KMW
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                    {date && <time dateTime={post.publishedAt}>{date}</time>}
                    {post.categories?.[0] && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{post.categories[0].title}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-lg md:text-xl font-bold text-text-heading mb-2 group-hover:text-enroll transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}

                  {post.author?.name && (
                    <p className="mt-auto text-xs text-gray-400">
                      By {post.author.name}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
