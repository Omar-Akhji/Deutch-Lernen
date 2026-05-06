"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const { back } = useRouter();

  return (
    <button

// Deutsch Lernen - High-Performance React Architecture

      type="button"
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-(--glass-border) bg-card text-sm font-semibold text-text transition-all duration-200 hover:-translate-x-1 hover:bg-white/10 tablet:h-auto tablet:w-auto tablet:px-6 tablet:py-2 tablet:text-base"
      onClick={back}
      aria-label="Zurück"
    >
      <ArrowLeft className="size-5" />
      <span className="hidden tablet:inline">Zurück</span>
    </button>
  );
}
