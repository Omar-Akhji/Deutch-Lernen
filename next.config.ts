import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  // ─── Stable Top-Level ─────────────────────────────────────────────
  reactCompiler: true,
  cacheComponents: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  typedRoutes: true,

  // ─── Turbopack (top-level في Next.js 16) ──────────────────────────
  turbopack: {},

  // ─── Logging ──────────────────────────────────────────────────────
  logging: { serverFunctions: true, browserToTerminal: true },

  // ─── Images ───────────────────────────────────────────────────────
  images: { deviceSizes: [640, 750, 828, 1080, 1200, 1920], minimumCacheTTL: 14_400 },

  // ─── Experimental ─────────────────────────────────────────────────
  experimental: {
    viewTransition: true,
    // optimizePackageImports محذوف — Turbopack يتولاه تلقائياً
    staleTimes: { dynamic: 30, static: 180 },
    prefetchInlining: true,
    turbopackFileSystemCacheForBuild: true,
    typedEnv: true,
  },

  // ─── Security Headers ─────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env["ANALYZE"] === "true" });

export default withBundleAnalyzer(nextConfig);
