import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-v2",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
