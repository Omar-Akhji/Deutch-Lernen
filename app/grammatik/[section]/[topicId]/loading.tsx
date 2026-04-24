import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches GrammatikDetailPage:
 * Hero (glass border, centered badge + title + desc + stats)
 * → Grammar table
 * → Content blocks
 * → Subtopics with gradient headers + embedded tables
 */
export default function GrammatikDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero — matches Hero component (glass variant, centered) */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Skeleton className="h-10 w-24 rounded-full bg-white/10" />
            </div>
            <Skeleton className="mx-auto mb-2 h-10 w-80 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-64 bg-white/5" />
            <div className="mt-8 flex justify-center gap-8">
              <Skeleton className="h-8 w-24 rounded-full bg-white/5" />
              <Skeleton className="h-8 w-20 bg-white/5" />
            </div>
          </div>
        </div>

        {/* Grammar table — matches GrammarTable */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4">
              <Skeleton className="h-6 w-48 bg-white/8" />
            </div>
            <div className="overflow-x-auto">
              {/* Table header */}
              <div className="flex gap-0 bg-white/5 px-6 py-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-1/4 bg-white/5" />
                ))}
              </div>
              {/* Table rows */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-0 border-t border-white/5 px-6 py-4"
                >
                  <Skeleton className="h-5 w-1/4 bg-white/10" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content blocks — matches GrammarContentBlocks */}
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-7 w-48 bg-white/10" />
                <div className="grid gap-3">
                  {Array.from({ length: 3 }).map((_, j) => (
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

        {/* Subtopics — matches article with gradient header */}
        <section className="mb-16">
          <div className="mb-12 flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
            <Skeleton className="h-8 w-40 bg-white/8" />
          </div>
          <div className="grid gap-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card"
              >
                {/* Gradient header */}
                <div className="flex items-center gap-4 p-5">
                  <Skeleton className="h-7 w-16 rounded-md bg-white/20" />
                  <Skeleton className="h-7 w-56 bg-white/15" />
                </div>
                {/* Content */}
                <div className="space-y-4 p-6">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-4 w-3/4 bg-white/5" />
                  {/* Embedded table */}
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex gap-4 border-b border-white/5 py-3"
                      >
                        <Skeleton className="h-5 w-1/3 bg-white/5" />
                        <Skeleton className="h-5 w-1/3 bg-white/5" />
                        <Skeleton className="h-5 w-1/3 bg-white/5" />
                      </div>
                    ))}
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
