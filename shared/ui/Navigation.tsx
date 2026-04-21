"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackButton } from "./BackButton";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/vokabeln" && (pathname === "/vokabeln" || pathname === "/"))
      return true;
    return pathname.startsWith(path) && path !== "/";
  };

  return (
    <header className="relative mbe-4 animate-fade-in" role="banner">
      <div className="relative mx-auto flex items-center justify-between px-2 pbs-2 pbe-2 max-inline-300 min-block-17.5 mobile:px-8 mobile:pbs-8 mobile:pbe-8 mobile:min-block-25">
        {/* Left Side: Back Button */}
        <div className="shrink-0">
          {pathname !== "/vokabeln" &&
            pathname !== "/grammatik" &&
            pathname !== "/pruefung" &&
            pathname !== "/" && <BackButton />}
        </div>

        {/* Right Side: Navigation Menu */}
        <nav
          className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-(--glass-border) bg-card px-1.5 pbs-1.5 pbe-1.5 backdrop-blur-(--glass-blur) mobile:gap-2 mobile:px-2 mobile:pbs-2 mobile:pbe-2"
          aria-label="Main navigation"
        >
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
                className={`rounded-full px-4 pbs-1.5 pbe-1.5 text-sm font-semibold transition-all duration-200 tablet:px-6 tablet:pbs-2 tablet:pbe-2 tablet:text-base ${
                  active
                    ? "bg-linear-to-br from-yellow to-orange text-black shadow-lg shadow-yellow/20"
                    : "text-mist-500 hover:bg-white/5 hover:text-white"
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
