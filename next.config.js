/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  // Disable static generation for pages that use Supabase
  async generateStaticParams() {
    return []
  },
  // Disable static generation for dynamic routes
  trailingSlash: false,
  // Disable static optimization for pages that use Supabase
  async rewrites() {
    return []
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      }
    }
    return config
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Optimize images
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  // Enable external packages
  serverExternalPackages: ['@supabase/supabase-js'],
}

module.exports = nextConfig 