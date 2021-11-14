/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
    ],
  },
}

module.exports = nextConfig
