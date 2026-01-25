import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      // Add remote image domains here as needed
    ],
  },
};

export default nextConfig;
