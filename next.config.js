/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/products",
        destination: `${process.env.BASE_API / products}`,
      },
    ];
  },
};
