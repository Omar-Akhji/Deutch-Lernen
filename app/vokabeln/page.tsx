import type { Metadata } from "next";
import { VocabularySection } from "@/features/vocabulary";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Vokabeln | Deutsch Lernen",
  description:
    "Deutsche Vokabeln lernen - Familie, Zahlen, Farben, Tiere und mehr. Interaktive Wortschatzübungen für Anfänger.",
};

export default function VokabelnPage() {
  return (
    <AnimateOnScroll as="main" animation="fade-up">
      <h1 className="sr-only">Vokabeln Übersicht</h1>
      <VocabularySection />
    </AnimateOnScroll>
  );
}
