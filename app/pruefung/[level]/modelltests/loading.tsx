import {
  HeroSkeleton,
  SectionHeaderSkeleton,
  CardSkeleton,
} from "@/shared/ui/SkeletonLayouts";
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
          {Array.from({ length: 4 }).map((_, sectionIndex) => (
            <section key={sectionIndex}>
              <SectionHeaderSkeleton />

              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
