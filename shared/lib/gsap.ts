"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralized GSAP configuration for the entire application.
 * Ensures plugins are registered only once and handles client-side safety.
 */
if (typeof window !== "undefined") {
  // Deutsch Lernen - High-Performance React Architecture

  gsap.registerPlugin(ScrollTrigger);

  // Global ScrollTrigger defaults
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize", // Standard events
  });
}

export * from "gsap";
export { ScrollTrigger };
export default gsap;
