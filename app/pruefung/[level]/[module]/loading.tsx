import { HeroSkeleton } from "@/shared/ui/SkeletonLayouts";
import { Skeleton } from "@/shared/ui/Skeleton";

export default function ModuleStudyLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main className="space-y-12 pb-20">
        <HeroSkeleton />

        <div className="space-y-16">
          {/* Exam Parts */}
          {Array.from({ length: 3 }).map((_, partIdx) => (
            <section key={partIdx} className="space-y-8">
              {/* Part Header */}
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-16 rounded-lg bg-white/10" />
                    <Skeleton className="h-8 w-48 bg-white/8" />
                  </div>
                  <Skeleton className="h-5 w-96 max-w-full bg-white/5" />
                </div>
                <Skeleton className="h-10 w-24 rounded-full bg-white/5" />
              </div>

              {/* Structure Checkbox Card */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                  <Skeleton className="h-6 w-48 bg-white/10" />
                </div>
                <div className="divide-y divide-white/10">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-5"
                    >
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-6 w-6 rounded-full bg-white/10" />
                        <Skeleton className="h-5 w-64 bg-white/5" />
                      </div>
                      <Skeleton className="h-5 w-5 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Topics Integration Section */}
          <section className="border-t border-white/10 pt-12">
            <div className="mb-10">
              <Skeleton className="mb-2 h-10 w-80 bg-white/10" />
              <Skeleton className="h-6 w-full max-w-2xl bg-white/5" />
            </div>
            {/* ThemenSection Skeleton Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-48 rounded-2xl border border-white/10 bg-white/5 shadow-md"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
