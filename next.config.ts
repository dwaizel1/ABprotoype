import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-v2",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/our-approach",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
