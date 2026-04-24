import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches PruefungDetailPage:
 * Hero (glass variant, centered) → CTA button
 * → Prüfungsstruktur (4 section articles with gradient header + table + tips)
 * → Redemittel grid (4 category cards with phrase lists)
 */
export default function PruefungDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero — glass variant, centered */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Skeleton className="h-10 w-24 rounded-full bg-white/10" />
            </div>
            <Skeleton className="mx-auto mb-2 h-10 w-72 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-96 bg-white/5" />
            <div className="mt-8 flex justify-center gap-8">
              <Skeleton className="h-6 w-28 bg-white/5" />
              <Skeleton className="h-6 w-28 bg-white/5" />
            </div>
          </div>
        </div>

        {/* CTA button — matches Link styled as rounded-full */}
        <div className="mb-12 flex justify-center">
          <Skeleton className="h-14 w-64 rounded-full bg-white/5" />
        </div>

        {/* Prüfungsstruktur — matches section heading + 4 exam section articles */}
        <section className="mb-12">
          <div className="mb-8 flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
            <Skeleton className="h-8 w-52 bg-white/8" />
          </div>
          <div className="grid gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card"
              >
                {/* Gradient header */}
                <div className="flex items-center justify-between p-5">
                  <Skeleton className="h-7 w-32 bg-white/15" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-20 bg-white/10" />
                    <Skeleton className="h-5 w-24 bg-white/10" />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  {/* Table */}
                  <div className="space-y-0">
                    <div className="flex gap-4 border-b border-(--glass-border) pb-3">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <Skeleton key={j} className="h-4 w-1/4 bg-white/5" />
                      ))}
                    </div>
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="flex gap-4 py-2">
                        {Array.from({ length: 4 }).map((_, k) => (
                          <Skeleton key={k} className="h-4 w-1/4 bg-white/5" />
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Tips box */}
                  <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
                    <Skeleton className="h-4 w-20 bg-white/8" />
                    <Skeleton className="h-3 w-full bg-white/5" />
                    <Skeleton className="h-3 w-4/5 bg-white/5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Redemittel — matches grid of category cards */}
        <section className="mb-12">
          <div className="mb-8 flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
            <Skeleton className="h-8 w-36 bg-white/8" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="rounded-2xl border border-(--glass-border) bg-card p-6"
              >
                <Skeleton className="mb-4 h-5 w-32 bg-white/10" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Skeleton className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/10" />
                      <Skeleton className="h-4 w-full bg-white/5" />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
