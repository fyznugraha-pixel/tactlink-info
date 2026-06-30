import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/links",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tactlink.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:lang(en|id|vi|bn|tl)',
        destination: 'https://tactlink.com/links/:lang',
        permanent: true,
        basePath: false,
      },
      {
        source: '/',
        destination: 'https://tactlink.com/links',
        permanent: true,
        basePath: false,
      }
    ];
  }
};

export default nextConfig;
