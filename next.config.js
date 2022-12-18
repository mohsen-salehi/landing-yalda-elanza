/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  redirects() {
    return [
      {
        source: '/',
        destination: '/yalda',
        permanent: true,
      }
    ]
  }
}