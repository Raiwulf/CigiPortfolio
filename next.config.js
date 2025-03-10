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
  // Replace 'your-username' with your actual GitHub username
  // and 'portfolio' with your repository name
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  // Remove these comments and uncomment the lines above when you know your repository name
};

module.exports = withNextIntl(nextConfig); 