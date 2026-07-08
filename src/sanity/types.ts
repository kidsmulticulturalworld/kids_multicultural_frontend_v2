import type { PortableTextBlock } from "@portabletext/types";

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
};

export type BlogAuthor = {
  name: string;
  slug: string;
  image?: SanityImage;
  bio?: string;
};

export type BlogCategory = {
  title: string;
  slug: string;
};

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  author?: BlogAuthor | null;
  categories?: BlogCategory[] | null;
  seo?: SanitySeo | null;
};

export type BlogPost = BlogPostListItem & {
  updatedAt?: string;
  body?: PortableTextBlock[];
};
