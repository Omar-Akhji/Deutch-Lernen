import { Skeleton } from "@/components/ui/skeleton";

export default function GrammatikDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl p-8 md:p-12">
          <Skeleton className="absolute inset-0 rounded-3xl bg-white/5" />
          <div className="relative max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-24 rounded-full bg-white/8" />
            </div>
            <Skeleton className="h-10 w-80 bg-white/8" />
            <Skeleton className="h-6 w-64 bg-white/8" />
            <div className="mt-8 flex gap-8">
              <Skeleton className="h-8 w-24 rounded-full bg-white/8" />
              <Skeleton className="h-8 w-20 bg-white/8" />
            </div>
          </div>
        </div>

        {/* Table skeleton */}
        <section className="mb-8">
          <div className="overflow-x-auto rounded-xl border border-(--glass-border) bg-white/3 p-4">
            <div className="space-y-0">
              {/* Table header */}
              <div className="flex gap-4 border-b border-(--glass-border) pb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-5 w-1/4 bg-white/5" />
                ))}
              </div>
              {/* Table rows */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-b border-white/5 py-4"
                >
                  <Skeleton className="h-5 w-1/4 bg-white/8" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                  <Skeleton className="h-5 w-1/4 bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content blocks skeleton */}
        <section className="mb-8">
          <div className="flex flex-col gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <article
                key={i}
                className="rounded-2xl border-l-[3px] border-white/10 bg-white/3 p-6"
              >
                <Skeleton className="mb-4 h-6 w-48 bg-white/8" />
                <div className="space-y-2 pl-6">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-4 w-5/6 bg-white/5" />
                  <Skeleton className="h-4 w-4/6 bg-white/5" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Subtopics skeleton */}
        <section className="mb-12">
          <Skeleton className="mb-8 h-8 w-48 bg-white/5" />
          <div className="grid gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-(--glass-border)"
              >
                <div className="flex items-center gap-4 p-5">
                  <Skeleton className="h-7 w-16 rounded-md bg-white/8" />
                  <Skeleton className="h-7 w-56 bg-white/8" />
                </div>
                <div className="space-y-4 p-6">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-4 w-3/4 bg-white/5" />
                  <div className="overflow-x-auto rounded-xl border border-(--glass-border) bg-white/3 p-4">
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
