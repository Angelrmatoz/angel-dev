import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,


  webpack: (config, { dev }) => {
    if (dev && config && typeof config === "object") {
      // @ts-ignore - watchOptions existe en la configuración de Webpack
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
