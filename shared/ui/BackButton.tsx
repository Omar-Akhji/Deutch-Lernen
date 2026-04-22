"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="bs-10 is-10 hover:-translate-is-1 tablet:bs-auto tablet:is-auto inline-flex cursor-pointer items-center justify-center rounded-full border border-(--glass-border) bg-card text-sm font-semibold text-text transition-all duration-200 hover:bg-white/10 tablet:px-6 tablet:py-2 tablet:text-base"
      onClick={() => router.back()}
      aria-label="Zurück"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      <span className="hidden tablet:inline">Zurück</span>
    </button>
  );
}
