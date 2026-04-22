import type { Metadata } from "next";
import { VocabularySection } from "@/features/vocabulary";

export const metadata: Metadata = {
  title: "Vokabeln | Deutsch Lernen",
  description:
    "Deutsche Vokabeln lernen - Familie, Zahlen, Farben, Tiere und mehr. Interaktive Wortschatzübungen für Anfänger.",
};

export default function VokabelnPage() {
  return (
    <main className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <h1 className="sr-only">Vokabeln Übersicht</h1>
      <VocabularySection />
    </main>
  );
}
