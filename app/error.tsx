"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function Error(properties: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...properties}
      title="Etwas ist schiefgelaufen"
      errorLabel="Application error"
    />
  );
}
