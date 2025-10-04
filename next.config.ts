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
            replaceAttrValues: {
              "#101318": "currentColor",
            },
          },
        },
      ],
    });

    return config;
  },
  images: {
    remotePatterns: [new URL("https://upload.wikimedia.org/**")],
  },
};

export default nextConfig;
