/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/website',
  output: 'export',
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
