import { forwardRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/shared/lib/utilities";

interface GlassCardProperties {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "nav";
  noBlur?: boolean;
  rounded?: "2xl" | "3xl";
}

/**
 * Standardized Glass Aesthetic Container.
 * Uses oklch-based glass variables from globals.css.
 */
export const GlassCard = forwardRef<HTMLElement, GlassCardProperties>(
  (
    {
      children,
      className,
      as: Component = "div",
      noBlur = false,
      rounded = "3xl",
    },
    reference,
  ) => {
    const ComponentTag = Component as ElementType;

    return (
      <ComponentTag
        ref={reference}
        className={cn(
          "overflow-hidden border border-(--glass-border) bg-card shadow-sm",
          rounded === "3xl" ? "rounded-3xl" : "rounded-2xl",
          !noBlur && "backdrop-blur-(--glass-blur)",
          className,
        )}
      >
        {children}
      </ComponentTag>
    );
  },
);

GlassCard.displayName = "GlassCard";
