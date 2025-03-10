const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co'],
  },
  output: 'export',
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: '/CigiPortfolio',
  assetPrefix: '/CigiPortfolio/',
};

module.exports = withNextIntl(nextConfig); 