/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/radios",
        destination: `http://de1.api.radio-browser.info/json/`,
      },
    ];
  },
  env: {
    BASE_API: "http://de1.api.radio-browser.info/json/",
  },
};

export default nextConfig;
