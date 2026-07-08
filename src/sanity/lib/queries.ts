import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{ name, "slug": slug.current, image },
    "categories": categories[]->{ title, "slug": slug.current },
    seo
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    mainImage,
    body,
    "author": author->{
      name,
      "slug": slug.current,
      image,
      bio
    },
    "categories": categories[]->{ title, "slug": slug.current },
    seo
  }
`);
