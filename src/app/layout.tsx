import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kidsmulticulturalworld.org",
  ),
  title: {
    default: "Kids Multicultural World - Raising Global Stars",
    template: "%s | Kids Multicultural World",
  },
  description:
    "Kids Multicultural World Academy develops children ages 0–17 into confident leaders and responsible global citizens through structured talent development, cultural education, international fashion festivals, media platforms, and mentorship.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kids Multicultural World",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
