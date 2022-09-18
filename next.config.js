/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static-images.ifood.com.br"]
  },
  compiler: {
    emotion: true
  },
}

module.exports = nextConfig



