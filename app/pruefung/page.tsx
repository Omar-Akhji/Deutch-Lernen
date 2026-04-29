import type { Metadata } from "next";
import { PruefungSection } from "@/features/pruefung";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Prüfungstraining | Deutsch Lernen",
  description:
    "B1/B2 Prüfungsvorbereitung - Modelltests, Lesen, Hören, Schreiben, Sprechen. Trainiere für deine Deutschprüfung.",
};

export default function PruefungPage() {
  return (
    <AnimateOnScroll as="main" animation="fade-up">
      <PruefungSection />
    </AnimateOnScroll>
  );
}
