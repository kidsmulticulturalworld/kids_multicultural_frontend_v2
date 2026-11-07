import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kids Multicultural World",
    short_name: "KMW",
    description:
      "Kids Multicultural World Academy develops children ages 0–17 into confident leaders and responsible global citizens.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1F3F66",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
