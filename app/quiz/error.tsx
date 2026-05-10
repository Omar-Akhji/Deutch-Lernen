"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function QuizError(properties: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...properties}
      title="Quiz konnte nicht geladen werden"
      errorLabel="Quiz error"
      fallbackMessage="Fehler beim Laden des Quiz."
    />
  );
}
