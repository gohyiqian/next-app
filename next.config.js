/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  // output: "standalone",

  // redirect does not work for static export
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: process.env.NEXT_PUBLIC_BASE_PATH,
  //       basePath: false,
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
