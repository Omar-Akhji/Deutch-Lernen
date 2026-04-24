import { Skeleton } from "@/shared/ui/Skeleton";

export default function VokabelnDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl p-8 md:p-12">
          <Skeleton className="absolute inset-0 rounded-3xl bg-white/5" />
          <div className="relative max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-28 rounded-full bg-white/8" />
            </div>
            <Skeleton className="h-10 w-80 bg-white/8" />
            <Skeleton className="h-6 w-64 bg-white/8" />
            <div className="mt-8 flex gap-8">
              <Skeleton className="h-8 w-28 rounded-full bg-white/8" />
              <Skeleton className="h-8 w-20 bg-white/8" />
            </div>
          </div>
        </div>

        {/* Sections skeleton */}
        <div className="grid gap-12">
          {Array.from({ length: 2 }).map((_, sectionIndex) => (
            <section key={sectionIndex}>
              {/* Section header */}
              <div className="mb-8 flex flex-col items-start gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-8 w-48 bg-white/5" />
                <Skeleton className="h-7 w-24 rounded-full bg-white/5" />
              </div>

              {/* Topic cards grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-(--glass-border) p-5"
                  >
                    <Skeleton className="mb-2 h-6 w-3/4 bg-white/5" />
                    <Skeleton className="h-4 w-32 bg-white/5" />
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
