"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackButton } from "./BackButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === "/vokabeln" && (pathname === "/vokabeln" || pathname === "/"))
      return true;
    return pathname.startsWith(path) && path !== "/";
  };

  useGSAP(
    () => {
      const activeLink = navRef.current?.querySelector(
        'a[aria-current="page"]',
      ) as HTMLElement;

      if (activeLink && indicatorRef.current) {
        // Smoothly animate the indicator to the active link's position and width
        gsap.to(indicatorRef.current, {
          x: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,
        });
      }
    },
    { dependencies: [pathname], scope: navRef },
  );

  return (
    <header className="relative mbe-4" role="banner">
      <div className="relative mx-auto flex items-center justify-between px-2 pbs-2 pbe-2 max-inline-300 min-block-17.5 mobile:px-8 mobile:pbs-8 mobile:pbe-8 mobile:min-block-25">
        {/* Left Side: Back Button */}
        <div className="shrink-0">
          {(
            pathname !== "/vokabeln" &&
            pathname !== "/grammatik" &&
            pathname !== "/pruefung" &&
            pathname !== "/"
          ) ?
            <BackButton />
          : null}
        </div>

        {/* Right Side: Navigation Menu */}
        <nav
          ref={navRef}
          className="relative inline-flex flex-wrap justify-center gap-1 rounded-full border border-(--glass-border) bg-card px-1.5 pbs-1.5 pbe-1.5 backdrop-blur-(--glass-blur) mobile:gap-2 mobile:px-2 mobile:pbs-2 mobile:pbe-2"
          aria-label="Main navigation"
        >
          {/* Sliding Indicator */}
          <div
            ref={indicatorRef}
            className="absolute inset-y-1.5 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/20 mobile:inset-y-2"
            style={{ pointerEvents: "none" }}
          />

          {[
            { href: "/vokabeln", label: "Vokabeln" },
            { href: "/grammatik", label: "Grammatik" },
            { href: "/pruefung", label: "Prüfung" },
          ].map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative z-10 rounded-full px-4 pbs-1.5 pbe-1.5 text-sm font-semibold transition-colors duration-200 tablet:px-6 tablet:pbs-2 tablet:pbe-2 tablet:text-base ${
                  active ? "text-black" : "text-mist-500 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
