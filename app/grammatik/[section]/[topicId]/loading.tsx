import { Skeleton } from "@/shared/ui/Skeleton";
import { HeroSkeleton, SectionHeaderSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function GrammatikDetailLoading() {
  const SECTIONS = ["sec-1", "sec-2"];
  const CARDS = ["card-1", "card-2", "card-3"];

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />

        {/* Sections → gradient header + topic cards */}
        <div className="grid gap-12">
          {SECTIONS.map((secId) => (
            <section key={secId}>
              <SectionHeaderSkeleton />
              {/* Topic cards grid — matches Link cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map((cardId) => (
                  <div
                    key={cardId}
                    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-card p-5"
                  >
                    <Skeleton className="mb-2 h-6 w-3/4 bg-white/8" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="size-3.5 bg-white/5" />
                      <Skeleton className="h-4 w-28 bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
