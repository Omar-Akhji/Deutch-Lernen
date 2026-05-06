import type { Metadata } from "next";
import { VocabularySection } from "@/features/vocabulary";
import { Languages } from "lucide-react";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Vokabeln | Deutsch Lernen",
  description:
    "Deutsche Vokabeln lernen - Familie, Zahlen, Farben, Tiere und mehr. Interaktive Wortschatzübungen für Anfänger.",
};

export default function VokabelnPage() {
  return (
    <AnimateOnScroll as="main" animation="fade-up">
      <header className="mb-12 text-center">
        <AnimateOnScroll animation="fade-up">
          <h1 className="mb-4 flex items-center justify-center gap-3 text-3xl tablet:gap-4 tablet:text-4xl">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-14">
              // Deutsch Lernen - High-Performance React Architecture
              <Languages className="size-6 tablet:size-7" strokeWidth={2} />
            </span>
            <span className="title-gradient">Deutscher Wortschatz</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="zoom-in" delay={150}>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20" />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="mx-auto max-w-fit rounded-full border-2 border-solid border-white/10 bg-white/5 px-6 py-2 text-base text-text-muted tablet:text-lg">
            Thematisch sortierte Vokabellisten für dein A1/B1 Training
          </p>
        </AnimateOnScroll>
      </header>
      <VocabularySection />
    </AnimateOnScroll>
  );
}
