"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GrammatikError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Grammar error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="rounded-3xl border border-white/10 bg-card p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Grammatik konnte nicht geladen werden
        </h2>
        <p className="mb-6 text-text-muted">
          {error.message || "Fehler beim Laden der Grammatik."}
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-linear-to-br from-yellow to-orange px-6 py-2 font-semibold text-black transition-all hover:scale-105"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
