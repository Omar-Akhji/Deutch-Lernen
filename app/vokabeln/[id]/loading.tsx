import {
  HeroSkeleton,
  SectionHeaderSkeleton,
  TableSkeleton,
} from "@/shared/ui/SkeletonLayouts";
import { Skeleton } from "@/shared/ui/Skeleton";

export default function VokabelnDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />

        {/* Main Table */}
        <section className="mb-16">
          <TableSkeleton rows={6} />
        </section>

        {/* Content Blocks */}
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-7 w-48 bg-white/10" />
                <div className="grid gap-3">
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-r-xl border-l-[6px] border-yellow bg-white/5 p-4"
                    >
                      <Skeleton className="h-5 w-full bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subtopics */}
        <section className="mb-16">
          <SectionHeaderSkeleton />

          <div className="grid gap-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                {/* Header placeholder */}
                <div className="flex items-center gap-4 bg-white/5 p-5">
                  <Skeleton className="h-7 w-12 bg-white/20" />
                  <Skeleton className="h-7 w-48 bg-white/15" />
                </div>

                <div className="p-6">
                  <Skeleton className="mb-8 h-4 w-full bg-white/5" />
                  <TableSkeleton rows={3} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
