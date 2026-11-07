import type { Metadata, Viewport } from "next";
import QueryProvider from "@/providers/QueryProvider";
import { getSiteUrl } from "@/sanity/env";
import "./globals.css";

const siteUrl = getSiteUrl();

const description =
  "Kids Multicultural World Academy develops children ages 0–17 into confident leaders and responsible global citizens through structured talent development, cultural education, international fashion festivals, media platforms, and mentorship.";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Kids Multicultural World — Raising Global Stars",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kids Multicultural World",
  title: {
    default: "Kids Multicultural World - Raising Global Stars",
    template: "%s | Kids Multicultural World",
  },
  description,
  keywords: [
    "kids",
    "multicultural",
    "diversity",
    "youth academy",
    "fashion",
    "arts",
    "culture",
    "children programs",
    "kids blog",
  ],
  authors: [{ name: "Kids Multicultural World", url: siteUrl }],
  creator: "Kids Multicultural World",
  publisher: "Kids Multicultural World",
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kids Multicultural World",
    title: "Kids Multicultural World - Raising Global Stars",
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Multicultural World - Raising Global Stars",
    description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3F66",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kids Multicultural World",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
