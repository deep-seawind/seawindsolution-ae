import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com'
      },
      {
        protocol: 'https',
        hostname: 'www.softmaxai.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com'
      },
      {
        protocol: 'https',
        hostname: 'capacity.com'
      },
      {
        protocol: 'https',
        hostname: 'theblue.ai'
      }
    ]
  }
};

export default nextConfig;
