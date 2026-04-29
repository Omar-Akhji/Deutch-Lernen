import { VocabularySection } from "@/features/vocabulary";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { Suspense } from "react";
import { CardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function Home() {
  return (
    <AnimateOnScroll as="main" className="min-h-screen" animation="fade-up">
      <div className="container mx-auto px-4 py-8">
        <h1 className="sr-only">
          Deutsch Lernen - Deine Plattform zum Deutschlernen
        </h1>
        <Suspense
          fallback={
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <VocabularySection />
        </Suspense>
      </div>
    </AnimateOnScroll>
  );
}
