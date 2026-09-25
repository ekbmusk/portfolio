import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/hackalem", destination: "/hackalem/index.html" }];
  },
};

export default nextConfig;
