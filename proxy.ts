import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16.1 Proxy System
 * This replaces middleware.ts for common rewrite/proxy patterns.
 * It is more performant and runs at the network edge boundary.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle /api/external/:path*
  if (pathname.startsWith("/api/external/")) {
    const path = pathname.replace("/api/external/", "");
    return NextResponse.rewrite(
      new URL(
        `https://api.external-service.com/${path}${request.nextUrl.search}`,
        request.url,
      ),
    );
  }

  // Handle /legacy/:path*
  if (pathname.startsWith("/legacy/")) {
    const path = pathname.replace("/legacy/", "");
    return NextResponse.rewrite(
      new URL(
        `https://legacy.example.com/${path}${request.nextUrl.search}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

// Optional: matcher config to limit where the proxy runs
export const config = {
  matcher: ["/api/external/:path*", "/legacy/:path*"],
};
