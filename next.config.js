/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  experimental: {},
  output: "standalone",
  images: {
    domains: [
      "st5.depositphotos.com",
      "st.depositphotos.com",
      "st2.depositphotos.com",
      "st4.depositphotos.com",
      "static3.depositphotos.com",
    ],
  },
};

module.exports = nextConfig;
