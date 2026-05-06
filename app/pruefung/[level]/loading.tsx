import {
  HeroSkeleton,
  SectionHeaderSkeleton,
  TableSkeleton,
} from "@/shared/ui/SkeletonLayouts";
import { Skeleton } from "@/shared/ui/Skeleton";

export default function PruefungDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />

        {/* CTA button */}
        <div className="mb-12 flex justify-center">
          <Skeleton className="h-14 w-64 rounded-full bg-white/5" />
        </div>

        {/* Prüfungsstruktur */}
        <section className="mb-12">
          <SectionHeaderSkeleton />

          <div className="grid gap-6">
            {["mod-1", "mod-2", "mod-3", "mod-4"].map((modId) => (
              <article
                key={modId}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                {/* Header placeholder */}
                <div className="flex flex-col items-start gap-4 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
                  <Skeleton className="h-7 w-32 bg-white/15" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-20 bg-white/10" />
                    <Skeleton className="h-5 w-24 bg-white/10" />
                  </div>
                </div>

                <div className="p-6">
                  <Skeleton className="mb-4 h-4 w-full bg-white/5" />
                  <TableSkeleton rows={3} columns={4} noWrapper />

                  <div className="mt-6 flex flex-col gap-6">
                    {/* Tips box */}
                    <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
                      <Skeleton className="h-4 w-20 bg-white/8" />
                      <Skeleton className="h-3 w-full bg-white/5" />
                      <Skeleton className="h-3 w-4/5 bg-white/5" />
                    </div>
                    {/* Button */}
                    <Skeleton className="h-12 w-56 rounded-full bg-white/10 md:self-start" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
