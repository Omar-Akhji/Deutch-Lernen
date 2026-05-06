"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function PruefungError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...props}
      title="Prüfung konnte nicht geladen werden"
      errorLabel="Exam error"
      fallbackMessage="Fehler beim Laden der Prüfung."
    />
  );
}
