import type { NextConfig } from "next";

const rybbitHost = process.env.NEXT_PUBLIC_RYBBIT_HOST;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "stealth.blr1.digitaloceanspaces.com",
      },
    ],
  },
  async rewrites() {
    if (!rybbitHost) return [];
    return [
      {
        source: "/api/script.js",
        destination: `${rybbitHost}/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `${rybbitHost}/api/track`,
      },
    ];
  },
};

export default nextConfig;

