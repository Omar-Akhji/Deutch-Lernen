"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function GrammatikError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorView
      {...props}
      title="Grammatik konnte nicht geladen werden"
      errorLabel="Grammar error"
      fallbackMessage="Fehler beim Laden der Grammatik."
    />
  );
}
