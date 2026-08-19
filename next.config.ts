import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.155"],
  output: "standalone",
};

export default nextConfig;