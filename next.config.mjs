/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Generate a self-contained server for hosting providers (helps Amplify SSR)
  output: 'standalone',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
