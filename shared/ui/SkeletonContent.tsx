"use client";

import type React from "react";
import { LoadingProvider } from "./AnimateOnScroll";

interface SkeletonContentProps {
  isLoading: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode;
  skeletonClassName?: string;
  contentClassName?: string;
  fadeOutDuration?: number; // Duration for skeleton to fade out (ms)
}

export function SkeletonContent({
  isLoading,
  skeleton,
  children,
  skeletonClassName = "",
  contentClassName = "",
  fadeOutDuration = 300,
}: SkeletonContentProps) {
  return (
    <LoadingProvider isLoading={isLoading}>
      <div className={`relative ${contentClassName}`}>
        {/* Skeleton Layer - Fades out when loading completes */}
        <div
          className={`transition-opacity ${skeletonClassName} ${
            isLoading
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{
            transitionDuration: `${fadeOutDuration}ms`,
          }}
        >
          {skeleton}
        </div>

        {/* Content Layer - Fades in after skeleton fades out */}
        <div
          className={`transition-opacity ${
            !isLoading
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{
            transitionDuration: `${fadeOutDuration}ms`,
          }}
        >
          {children}
        </div>
      </div>
    </LoadingProvider>
  );
}

export { useLoadingState } from "./AnimateOnScroll";
