import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.3:3000",
    "e3b4-196-191-61-230.ngrok-free.app",
    "192.168.43.177:3000",
    "192.168.43.177"
  ],
};

export default nextConfig;
