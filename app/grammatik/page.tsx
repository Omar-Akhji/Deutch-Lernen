import type { Metadata } from "next";
import { GrammarSectionCards } from "@/features/grammar";

export const metadata: Metadata = {
  title: "Grammatik | Deutsch Lernen",
  description:
    "Deutsche Grammatik lernen - Verben, Nomen, Präpositionen, Satzstrukturen. Übersichtliche Erklärungen für alle Niveaus.",
};

export default function GrammatikPage() {
  return (
    <main className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <GrammarSectionCards sectionId="verben" />
      <GrammarSectionCards sectionId="nomen" />
      <GrammarSectionCards sectionId="praepositionen" />
      <GrammarSectionCards sectionId="satz" />
      <GrammarSectionCards sectionId="adverbien" />
      <GrammarSectionCards sectionId="partikeln" />
    </main>
  );
}
