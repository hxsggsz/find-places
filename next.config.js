/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.pexels.com', 'lh5.googleusercontent.com'],
  },
}

module.exports = nextConfig