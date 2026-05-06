"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function QuizError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

// Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...props}
      title="Quiz konnte nicht geladen werden"
      errorLabel="Quiz error"
      fallbackMessage="Fehler beim Laden des Quiz."
    />
  );
}
