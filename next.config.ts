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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gangnam.wine",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gangnam.wine",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img1.kakaocdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
