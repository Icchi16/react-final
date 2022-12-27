/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/radios",
        destination: `${process.env.BASE_API}`,
      },
    ];
  },
};
