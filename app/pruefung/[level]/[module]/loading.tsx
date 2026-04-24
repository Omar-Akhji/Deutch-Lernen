import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches ModuleStudyView:
 * Hero (glass variant, stats with icons)
 * → Parts (badge + h2 + description + points pill)
 * → "Struktur-Checkliste & Redemittel" container (glass card, divide-y rows)
 * → Wortschatz & Konnektoren grid (3 columns)
 * → ThemenSection integration
 */
export default function ModuleStudyLoading() {
  return (
    <div className="space-y-12 pbe-20">
      {/* Hero — glass variant, stats with icons */}
      <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 shadow-2xl md:p-12">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Skeleton className="h-10 w-24 rounded-full bg-white/10" />
          </div>
          <Skeleton className="mx-auto mb-2 h-10 w-80 bg-white/8" />
          <Skeleton className="mx-auto h-6 w-64 bg-white/5" />
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded bg-white/5" />
              <Skeleton className="h-6 w-20 bg-white/5" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded bg-white/5" />
              <Skeleton className="h-6 w-20 bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* Exam Parts — Header + Struktur-Checkliste */}
        {Array.from({ length: 3 }).map((_, partIdx) => (
          <section key={partIdx} className="space-y-8">
            {/* Part Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-16 rounded-lg bg-white/10" />
                  <Skeleton className="h-8 w-48 bg-white/8" />
                </div>
                <Skeleton className="h-5 w-96 bg-white/5" />
              </div>
              <Skeleton className="h-10 w-24 rounded-full bg-white/5" />
            </div>

            {/* Checklist Box — matches PhraseGroupCard containers */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="h-0.75 flex-1 rounded-full bg-white/10" />
                <Skeleton className="h-4 w-32 bg-white/5" />
                <div className="h-0.75 flex-1 rounded-full bg-white/10" />
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="border-b border-white/10 bg-white/5 px-6 py-3">
                  <Skeleton className="h-5 w-56 bg-white/10" />
                </div>
                <div className="divide-y divide-white/10">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-4"
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
            </div>
          </section>
        ))}

        {/* Global Vocabulary Section */}
        <section className="border-t border-white/10 pt-16">
          <div className="mb-8 flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full bg-white/10" />
            <Skeleton className="h-8 w-64 bg-white/8" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-4 w-32 bg-white/5" />
                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-14 rounded-2xl border border-white/10 bg-white/5"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics Integration Section */}
        <section className="border-t border-white/10 pt-12">
          <div className="mb-10">
            <Skeleton className="mb-2 h-10 w-96 bg-white/10" />
            <Skeleton className="h-6 w-full max-w-2xl bg-white/5" />
          </div>
          {/* ThemenSection Skeleton Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
