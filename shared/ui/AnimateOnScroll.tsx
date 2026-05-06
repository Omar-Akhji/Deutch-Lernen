"use client";

import { type ElementType, type ComponentPropsWithoutRef, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "@/shared/lib/gsap";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "zoom-in"
  | "zoom-out"
  | "fade-left"
  | "fade-right"
  | "blur-in";

interface AnimateOnScrollProps<T extends ElementType> {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  as?: T;
  repeat?: boolean;
}

/**
 * High-performance scroll animation wrapper using GSAP ScrollTrigger.
 * Optimized for SEO (progressive enhancement) and performance (GPU acceleration).
 */
export function AnimateOnScroll<T extends ElementType = "div">({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  as,
  repeat = false,
  ...props
}: AnimateOnScrollProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AnimateOnScrollProps<T>>) {
  const ref = useRef<Element>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Initial state set via GSAP instead of hardcoded CSS class
      // This ensures that if JS is disabled, the element is visible by default (SEO friendly)
      gsap.set(el, { opacity: 0, visibility: "hidden" });

      const fromVars: gsap.TweenVars = { opacity: 0, visibility: "visible" };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        clearProps: "filter,willChange", // Clean up performance hints after animation
      };

      switch (animation) {
        case "fade-up":
          fromVars.y = 48;
          toVars.y = 0;
          break;
        case "fade-down":
          fromVars.y = -48;
          toVars.y = 0;
          break;
        case "zoom-in":
          fromVars.scale = 0.95;
          toVars.scale = 1;
          break;
        case "zoom-out":
          fromVars.scale = 1.05;
          toVars.scale = 1;
          break;
        case "fade-left":
          fromVars.x = 48;
          toVars.x = 0;
          break;
        case "fade-right":
          fromVars.x = -48;
          toVars.x = 0;
          break;
        case "blur-in":
          fromVars.filter = "blur(12px)";
          fromVars.scale = 0.95;
          toVars.scale = 1;
          break;
      }

      gsap.fromTo(el, fromVars, {
        ...toVars,
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "power3.out",
        onStart: () => {
          // Hint GPU for heavy animations
          gsap.set(el, { willChange: "transform, opacity, filter" });
        },
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions:
            repeat ? "play none none reverse" : "play none none none",
          once: !repeat,
        },
      });
    },
    { scope: ref },
  );

  const Component = as || "div";

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={twMerge("animate-on-scroll", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
