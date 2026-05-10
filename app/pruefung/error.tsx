"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function PruefungError(properties: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...properties}
      title="Prüfung konnte nicht geladen werden"
      errorLabel="Exam error"
      fallbackMessage="Fehler beim Laden der Prüfung."
    />
  );
}
