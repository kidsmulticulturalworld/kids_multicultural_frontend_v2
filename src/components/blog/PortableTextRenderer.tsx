import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl text-text-heading mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-text-heading mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-text-heading mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg text-text-body leading-relaxed mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-enroll pl-4 my-6 text-lg italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5 space-y-2 text-text-body">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2 text-text-body">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      const blank = Boolean(value?.blank);
      if (!href) return <>{children}</>;
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-enroll font-medium underline underline-offset-2 hover:text-primary"
          {...(blank || isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value)?.width(1200).auto("format").url();
      if (!url) return null;
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={url}
              alt={value?.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
          {value?.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
