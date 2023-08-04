/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
};

module.exports = nextConfig;
