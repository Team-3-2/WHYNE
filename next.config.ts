import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            configFile: "./svgr.config.js",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
