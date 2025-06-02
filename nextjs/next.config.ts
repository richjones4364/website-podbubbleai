/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
      unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  };
  
  export default nextConfig;
  