import type { Metadata } from "next";
import { PruefungSection } from "@/features/pruefung";

export const metadata: Metadata = {
  title: "Prüfungstraining | Deutsch Lernen",
  description:
    "B1/B2 Prüfungsvorbereitung - Modelltests, Lesen, Hören, Schreiben, Sprechen. Trainiere für deine Deutschprüfung.",
};

export default function PruefungPage() {
  return (
    <main className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <PruefungSection />
    </main>
  );
}
