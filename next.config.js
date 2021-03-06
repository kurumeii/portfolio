/**
 * @type {import('next').NextConfig}
 */
const {withPlaiceholder} = require('@plaiceholder/next')
const nextConfig = withPlaiceholder({
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'tailwindui.com',
      'images.unsplash.com',
      'static.wikia.nocookie.net',
      'user-images.strikinglycdn.com',
      'images.microcms-assets.io',
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
      'cdn.discordapp.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    }
    return config
  },
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
})

module.exports = nextConfig
