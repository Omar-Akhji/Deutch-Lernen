"use client";

import { ErrorView } from "@/shared/ui/ErrorView";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorView
      {...props}
      title="Etwas ist schiefgelaufen"
      errorLabel="Application error"
    />
  );
}
