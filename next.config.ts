import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.155"],
  output: "standalone",
  staticPageGenerationTimeout: 300,
};

export default nextConfig;