import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      group: "content",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "content",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
      rows: 3,
      description: "Short summary shown on the blog index and used as fallback meta description.",
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta title",
          type: "string",
          description: "Overrides the page title in search results (≤60 chars recommended).",
          validation: (rule) => rule.max(70),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: "ogImage",
          title: "Open Graph image",
          type: "image",
          description: "Defaults to the main image when empty.",
          options: { hotspot: true },
        }),
        defineField({
          name: "noIndex",
          title: "Hide from search engines",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `by ${author}` : undefined,
        media,
      };
    },
  },
});
