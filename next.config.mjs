/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://admin-rul9.onrender.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
