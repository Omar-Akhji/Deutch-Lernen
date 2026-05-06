"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function GrammatikError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...props}
      title="Grammatik konnte nicht geladen werden"
      errorLabel="Grammar error"
      fallbackMessage="Fehler beim Laden der Grammatik."
    />
  );
}
