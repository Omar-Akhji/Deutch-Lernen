import { Metadata } from "next";
import { ThemenSection } from "@/features/themen/ui/ThemenSection";

export const metadata: Metadata = {
  title: "B1 Themen - Deutsch Lernen",
  description:
    "58 B1 Sprechen und Schreiben Themen mit Pro- und Contra-Argumenten zur Prüfungsvorbereitung.",
};

export default function ThemenPage() {
  return (
    <main className="animate-fade-in">
      <ThemenSection />
    </main>
  );
}
