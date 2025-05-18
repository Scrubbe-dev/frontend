/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
    loader: 'custom',
    loaderFile: './Imageloader.js',
  },
  output: 'export'
};

export default nextConfig;
