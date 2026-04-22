"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "zoom-in" | "fade-left" | "fade-right";
  delay?: number;
}

/**
 * High-performance scroll animation wrapper using native IntersectionObserver.
 * Replaces heavy libraries while keeping server components intact via children prop passing.
 */
export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      requestAnimationFrame(() => setIsInView(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Once it intersects, trigger the animation and disconnect to save memory
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "50px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const baseClasses = "transition-all duration-700 ease-out";

  const hiddenClasses = {
    "fade-up": "opacity-0 translate-y-12",
    "fade-in": "opacity-0",
    "zoom-in": "opacity-0 scale-95",
    "fade-left": "opacity-0 translate-x-12",
    "fade-right": "opacity-0 -translate-x-12",
  };

  const visibleClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "zoom-in": "opacity-100 scale-100",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={twMerge(
        baseClasses,
        isInView ? visibleClasses[animation] : hiddenClasses[animation],
        className,
      )}
    >
      {children}
    </div>
  );
}
