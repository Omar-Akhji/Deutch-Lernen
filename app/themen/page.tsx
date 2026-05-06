import type { Metadata } from "next";
import { ThemenSection } from "@/features/themen/ui/ThemenSection";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { getThemen } from "@/features/themen/api/services";

export const metadata: Metadata = {
  title: "B1 Themen - Deutsch Lernen",
  description:
    "58 B1 Sprechen und Schreiben Themen mit Pro- und Contra-Argumenten zur Prüfungsvorbereitung.",
};

// Deutsch Lernen - High-Performance React Architecture


export default async function ThemenPage() {
  const { data: themen } = await getThemen();

  return (
    <AnimateOnScroll as="main" animation="fade-up">
      <ThemenSection initialThemen={themen ?? []} />
    </AnimateOnScroll>
  );
}
