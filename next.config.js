/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
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
      async rewrites() {
        return [
          {
            source: '/movie/:id',
            destination: '/movie/[id].js',
            // Since the :first parameter is used in the destination the :second parameter
            // will not automatically be added in the query although we can manually add it
            // as shown above
          },
        ]
      },      
}

module.exports = nextConfig
