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

interface AnimateOnScrollProperties<T extends ElementType> {
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
  ...properties
}: AnimateOnScrollProperties<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AnimateOnScrollProperties<T>>) {
  const reference = useRef<Element>(null);

  useGSAP(
    () => {
      const element = reference.current;
      if (!element) return;

      // Initial state set via GSAP instead of hardcoded CSS class
      // This ensures that if JS is disabled, the element is visible by default (SEO friendly)
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      const fromVariables: gsap.TweenVars = {
        opacity: 0,
        visibility: "visible",
      };
      const toVariables: gsap.TweenVars = {
        opacity: 1,
        clearProps: "filter,willChange", // Clean up performance hints after animation
      };

      switch (animation) {
        case "fade-up": {
          fromVariables.y = 48;

          // Deutsch Lernen - High-Performance React Architecture

          toVariables.y = 0;
          break;
        }
        case "fade-down": {
          fromVariables.y = -48;
          toVariables.y = 0;
          break;
        }
        case "zoom-in": {
          fromVariables.scale = 0.95;
          toVariables.scale = 1;
          break;
        }
        case "zoom-out": {
          fromVariables.scale = 1.05;
          toVariables.scale = 1;
          break;
        }
        case "fade-left": {
          fromVariables.x = 48;
          toVariables.x = 0;
          break;
        }
        case "fade-right": {
          fromVariables.x = -48;
          toVariables.x = 0;
          break;
        }
        case "blur-in": {
          fromVariables.filter = "blur(12px)";
          fromVariables.scale = 0.95;
          toVariables.scale = 1;
          break;
        }
      }

      gsap.fromTo(element, fromVariables, {
        ...toVariables,
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "power3.out",
        onStart: () => {
          // Hint GPU for heavy animations
          gsap.set(element, { willChange: "transform, opacity, filter" });
        },
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions:
            repeat ? "play none none reverse" : "play none none none",
          once: !repeat,
        },
      });
    },
    { scope: reference },
  );

  const Component = as || "div";

  return (
    <Component
      ref={reference as React.RefObject<HTMLDivElement>}
      className={twMerge("animate-on-scroll", className)}
      {...properties}
    >
      {children}
    </Component>
  );
}
