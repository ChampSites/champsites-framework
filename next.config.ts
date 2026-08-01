import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "placeholder.com" },
      { protocol: "https", hostname: "example.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      {protocol: "https", hostname: "images.jdmagicbox.com"}
    ],
  },
};

export default nextConfig;
