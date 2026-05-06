"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

// Deutsch Lernen - High-Performance React Architecture

  return (
    <ErrorView
      {...props}
      title="Etwas ist schiefgelaufen"
      errorLabel="Application error"
    />
  );
}
