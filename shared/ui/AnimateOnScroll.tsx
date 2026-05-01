"use client";

import {
  useEffect,
  useRef,
  useReducer,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";
import { twMerge } from "tailwind-merge";

// --- Singleton Intersection Observer for High Performance ---
type ObserverCallback = (isIntersecting: boolean) => void;
let observer: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, ObserverCallback>();

function getObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = observerCallbacks.get(entry.target);
            if (callback) {
              callback(true);
            }
          } else {
            const callback = observerCallbacks.get(entry.target);
            if (callback) {
              callback(false);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "50px",
      },
    );
  }
  return observer;
}

function observeElement(element: Element, callback: ObserverCallback) {
  const obs = getObserver();
  if (obs) {
    observerCallbacks.set(element, callback);
    obs.observe(element);
  } else {
    // Fallback if IntersectionObserver isn't supported (e.g. older browsers)
    requestAnimationFrame(() => callback(true));
  }
}

function unobserveElement(element: Element) {
  const obs = getObserver();
  if (obs) {
    obs.unobserve(element);
    observerCallbacks.delete(element);
  }
}

// --- Component Props & Types ---

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
 * High-performance scroll animation wrapper using native IntersectionObserver.
 * Uses a singleton observer pattern, ensuring minimal memory usage even with 100s of elements.
 * Fully supports SEO (visible in DOM, polymorphic tags) and accessibility (respects reduced-motion).
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

  type State = { mounted: boolean; isInView: boolean; hasAnimated: boolean };
  type Action =
    | { type: "MOUNT" }
    | { type: "ENTER_VIEW" }
    | { type: "EXIT_VIEW" }
    | { type: "ANIMATION_DONE" };

  const [state, dispatch] = useReducer(
    (prev: State, action: Action): State => {
      switch (action.type) {
        case "MOUNT":
          return { ...prev, mounted: true };
        case "ENTER_VIEW":
          return { ...prev, isInView: true };
        case "EXIT_VIEW":
          return { ...prev, isInView: false };
        case "ANIMATION_DONE":
          return { ...prev, hasAnimated: true };
      }
    },
    { mounted: false, isInView: false, hasAnimated: false },
  );

  const { mounted, isInView, hasAnimated } = state;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      dispatch({ type: "MOUNT" });
    });

    const el = ref.current;
    if (!el) return () => cancelAnimationFrame(frame);

    observeElement(el, (visible) => {
      if (visible) {
        dispatch({ type: "ENTER_VIEW" });
        if (!repeat) {
          unobserveElement(el);
          setTimeout(
            () => dispatch({ type: "ANIMATION_DONE" }),
            duration + delay,
          );
        }
      } else if (repeat) {
        dispatch({ type: "EXIT_VIEW" });
      }
    });

    return () => {
      unobserveElement(el);
      cancelAnimationFrame(frame);
    };
  }, [delay, duration, repeat]);

  const Component = as || "div";

  // motion-reduce overrides are handled via global CSS, so we don't need motion-reduce utilities here.
  // We add 'will-change' to hardware accelerate the animation while it's running.
  const baseClasses = twMerge(
    "transition-all ease-out animate-on-scroll",
    !hasAnimated && !isInView
      ? "will-change-transform will-change-opacity"
      : "",
  );

  const hiddenClasses: Record<AnimationType, string> = {
    "fade-up": "opacity-0 translate-y-12",
    "fade-down": "opacity-0 -translate-y-12",
    "fade-in": "opacity-0",
    "zoom-in": "opacity-0 scale-95",
    "zoom-out": "opacity-0 scale-105",
    "fade-left": "opacity-0 translate-x-12",
    "fade-right": "opacity-0 -translate-x-12",
    "blur-in": "opacity-0 blur-md scale-95",
  };

  const visibleClasses: Record<AnimationType, string> = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-down": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "zoom-in": "opacity-100 scale-100",
    "zoom-out": "opacity-100 scale-100",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
    "blur-in": "opacity-100 blur-0 scale-100",
  };

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...props["style"],
      }}
      className={twMerge(
        baseClasses,
        isInView || !mounted
          ? visibleClasses[animation]
          : hiddenClasses[animation],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
