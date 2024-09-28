/** @type {import('next').NextConfig} */

const nextConfig = {
  // Remove appDir if it's not recognized in your current version
  experimental: {
    // appDir: true, // Uncomment this only if you are sure it's valid in your version
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
