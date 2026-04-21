import { Skeleton } from "@/components/ui/skeleton";

export default function PruefungDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 md:p-12">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-24 rounded-full bg-white/8" />
            <Skeleton className="mx-auto h-10 w-72 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-96 bg-white/8" />
            <div className="mt-8 flex justify-center gap-8">
              <Skeleton className="h-6 w-28 bg-white/5" />
              <Skeleton className="h-6 w-28 bg-white/5" />
            </div>
          </div>
        </div>

        {/* Start button skeleton */}
        <div className="mb-12 flex justify-center">
          <Skeleton className="h-14 w-64 rounded-full bg-white/5" />
        </div>

        {/* Pruefungsstruktur skeleton */}
        <section className="mb-12">
          <Skeleton className="mb-8 h-8 w-56 bg-white/5" />
          <div className="grid gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-(--glass-border)"
              >
                <div className="flex items-center justify-between p-5">
                  <Skeleton className="h-7 w-32 bg-white/8" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-20 bg-white/8" />
                    <Skeleton className="h-5 w-24 bg-white/8" />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  {/* Table */}
                  <div className="space-y-3">
                    <div className="flex gap-4 border-b border-(--glass-border) pb-3">
                      <Skeleton className="h-4 w-1/4 bg-white/5" />
                      <Skeleton className="h-4 w-1/4 bg-white/5" />
                      <Skeleton className="h-4 w-1/4 bg-white/5" />
                      <Skeleton className="h-4 w-1/4 bg-white/5" />
                    </div>
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="flex gap-4 py-2">
                        <Skeleton className="h-4 w-1/4 bg-white/5" />
                        <Skeleton className="h-4 w-1/4 bg-white/5" />
                        <Skeleton className="h-4 w-1/4 bg-white/5" />
                        <Skeleton className="h-4 w-1/4 bg-white/5" />
                      </div>
                    ))}
                  </div>
                  {/* Tips */}
                  <div className="space-y-2 rounded-xl bg-white/5 p-4">
                    <Skeleton className="h-4 w-20 bg-white/8" />
                    <Skeleton className="h-3 w-full bg-white/5" />
                    <Skeleton className="h-3 w-4/5 bg-white/5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Redemittel skeleton */}
        <section className="mb-12">
          <Skeleton className="mb-8 h-8 w-40 bg-white/5" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="space-y-4 rounded-2xl border border-(--glass-border) p-6"
              >
                <Skeleton className="h-5 w-32 bg-white/8" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton
                      key={j}
                      className="h-4 w-full border-b border-(--glass-border) bg-white/5"
                    />
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
