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
      async redirects() {
        return [
          {
            source: '/movie/:id',
            destination: '/movie/[]is', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      }, 
}

module.exports = nextConfig
