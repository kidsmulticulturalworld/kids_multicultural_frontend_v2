import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 15+ treats localhost and 127.0.0.1 as different origins and blocks
  // cross-origin RSC/HMR in dev unless listed here — otherwise the page hangs
  // with no client network requests when you use the "other" host.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  devIndicators: false,
  reactCompiler: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kidsmulticulturalworld.pythonanywhere.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kidsmulticulturalworld.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kidsmulticulturalworld.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
