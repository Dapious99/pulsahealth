import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // static export for GitHub Pages
    images: {
        unoptimized: true, // required for static export
    },
    trailingSlash: true,
};

export default nextConfig;
