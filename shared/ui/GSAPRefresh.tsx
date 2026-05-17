"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ScrollTrigger } from "@/shared/lib/gsap";

/**
 * Utility component to refresh ScrollTrigger on route changes.
 * Essential for Next.js App Router as page transitions don't trigger a full reload,
 * often leading to incorrect scroll trigger positions if the new page has a different height.
 */
function GsapRefreshInner() {
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  useEffect(() => {
    // Small timeout to allow the DOM to settle and images/layouts to calculate
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParameters]);

  return null;
}

export function GsapRefresh() {
  return (
    <Suspense fallback={null}>
      <GsapRefreshInner />
    </Suspense>
  );
}
