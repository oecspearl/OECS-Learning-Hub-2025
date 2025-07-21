/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable external packages for server components
  serverExternalPackages: ['@supabase/supabase-js'],
  // Disable static generation for dynamic routes
  trailingSlash: false,
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
  // Enable standalone output for better performance
  output: 'standalone',
  // Optimize images
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig 