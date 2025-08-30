import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <- this disables ESLint errors during production builds
  },
  // other config options can go here
};

export default nextConfig;
