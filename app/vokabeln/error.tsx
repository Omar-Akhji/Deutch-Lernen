"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function VokabelnError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorView
      {...props}
      title="Vokabeln konnten nicht geladen werden"
      errorLabel="Vocabulary error"
      fallbackMessage="Fehler beim Laden der Vokabeln."
    />
  );
}
