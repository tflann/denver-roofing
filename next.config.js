/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig 