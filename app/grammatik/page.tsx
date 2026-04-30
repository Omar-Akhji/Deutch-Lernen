import type { Metadata } from "next";
import { GrammarSectionCards } from "@/features/grammar";

export const metadata: Metadata = {
  title: "Grammatik | Deutsch Lernen",
  description:
    "Deutsche Grammatik lernen - Verben, Nomen, Präpositionen, Satzstrukturen. Übersichtliche Erklärungen für alle Niveaus.",
};

import { Suspense } from "react";
import { SectionCardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function GrammatikPage() {
  return (
    <main>
      <h1 className="sr-only">Grammatik Übersicht</h1>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="verben" />
      </Suspense>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="nomen" />
      </Suspense>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="praepositionen" />
      </Suspense>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="satz" />
      </Suspense>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="adverbien" />
      </Suspense>
      <Suspense fallback={<SectionCardSkeleton />}>
        <GrammarSectionCards sectionId="partikeln" />
      </Suspense>
    </main>
  );
}
