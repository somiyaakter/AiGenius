import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Vercel build e ESLint ignore korbe
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript errors o ignore korbe (optional)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
