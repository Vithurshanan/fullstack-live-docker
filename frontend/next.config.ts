/** @type {import('next').NextConfig} */
const nextConfig = {
  output: `standalone`,
  eslint: {
    // Disable ESLint checks during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
