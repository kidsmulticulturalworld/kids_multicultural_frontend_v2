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
  title: {
    default: "Kids Multicultural World - Raising Global Stars",
    template: "%s | Kids Multicultural World",
  },
  description:
    "KMW is an international youth academy celebrating diversity through fashion, media, and the arts — helping kids grow in confidence, culture, and creativity.",
  keywords: [
    "kids",
    "multicultural",
    "diversity",
    "youth academy",
    "fashion",
    "arts",
    "culture",
    "children programs",
  ],
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
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
