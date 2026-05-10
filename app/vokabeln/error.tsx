"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function VokabelnError(properties: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...properties}
      title="Vokabeln konnten nicht geladen werden"
      errorLabel="Vocabulary error"
      fallbackMessage="Fehler beim Laden der Vokabeln."
    />
  );
}
