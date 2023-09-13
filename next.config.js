/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
}

module.exports = nextConfig
