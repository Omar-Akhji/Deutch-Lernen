"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function GrammatikError(properties: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...properties}
      title="Grammatik konnte nicht geladen werden"
      errorLabel="Grammar error"
      fallbackMessage="Fehler beim Laden der Grammatik."
    />
  );
}
