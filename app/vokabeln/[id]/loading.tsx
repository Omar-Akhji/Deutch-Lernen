import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches VokabelnDetailPage:
 * Hero (glass variant, centered) with badge + title + desc + stats
 * → 2 sections each with gradient header + topic card grid
 */
export default function VokabelnDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero — glass variant */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Skeleton className="h-10 w-28 rounded-full bg-white/10" />
            </div>
            <Skeleton className="mx-auto mb-2 h-10 w-80 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-64 bg-white/5" />
            <div className="mt-8 flex justify-center gap-8">
              <Skeleton className="h-8 w-28 rounded-full bg-white/10" />
              <Skeleton className="h-8 w-20 bg-white/5" />
            </div>
          </div>
        </div>

        {/* Sections → gradient header + topic cards */}
        <div className="grid gap-12">
          {Array.from({ length: 2 }).map((_, sectionIndex) => (
            <section key={sectionIndex}>
              {/* Gradient section header */}
              <div className="mb-8 flex flex-col items-start gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-8 w-48 bg-white/10" />
                <Skeleton className="h-7 w-24 rounded-full bg-white/10" />
              </div>

              {/* Topic cards grid — matches Link cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-(--glass-border) bg-card p-5"
                  >
                    <Skeleton className="mb-2 h-6 w-3/4 bg-white/8" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-3.5 w-3.5 bg-white/5" />
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
