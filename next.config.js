/** @type {import('next').NextConfig} */
const nextConfig = {
    
    trailingSlash: true,
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "image.tmdb.org/t/p/w500/",
          },
        ],
      },
      basePath: '',
}

module.exports = nextConfig
