/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.mp4$/,
        use: ["file-loader?name=videos/[name].[ext]"],
      }
    );

    return config;
  },
};

module.exports = nextConfig;
