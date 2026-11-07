import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  cacheComponents: true,
  images: { minimumCacheTTL: 86400 },
  turbopack: { root: process.cwd() },
};
export default nextConfig;
