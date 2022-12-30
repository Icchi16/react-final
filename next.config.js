/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/radios",
        destination: `${process.env.BASE_API}`,
      },
    ];
  },
};

