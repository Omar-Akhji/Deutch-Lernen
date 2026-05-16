import { HeroSkeleton, SectionHeaderSkeleton, CardSkeleton } from "@/shared/ui/SkeletonLayouts";
import { Skeleton } from "@/shared/ui/Skeleton";

export default function ModelTestsLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />
        {/* Back link */}
        <div className="mt-8 mb-12 flex justify-center">
          <Skeleton className="h-10 w-52 rounded-full bg-white/5" />
        </div>
        {/* Skill sections */}
        <div className="grid gap-12">
          {["sk-1", "sk-2", "sk-3", "sk-4"].map((secId) => (
            <section key={secId}>
              <SectionHeaderSkeleton />

              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {["c1", "c2", "c3"].map((cardId) => (
                  <CardSkeleton key={cardId} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
