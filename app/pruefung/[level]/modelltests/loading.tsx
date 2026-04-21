import { Skeleton } from "@/components/ui/skeleton";

export default function ModelTestsLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 md:p-12">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-36 rounded-full bg-white/8" />
            <Skeleton className="mx-auto h-10 w-64 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-80 bg-white/8" />
            <div className="mt-8 flex justify-center gap-8">
              <Skeleton className="h-6 w-24 bg-white/5" />
              <Skeleton className="h-6 w-24 bg-white/5" />
            </div>
          </div>
        </div>

        {/* Back link skeleton */}
        <div className="mt-8 mb-12 flex justify-center">
          <Skeleton className="h-10 w-52 rounded-full bg-white/5" />
        </div>

        {/* Skill sections skeleton */}
        <div className="grid gap-12">
          {Array.from({ length: 4 }).map((_, sectionIndex) => (
            <section key={sectionIndex}>
              {/* Skill heading */}
              <div className="mb-6 flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded bg-white/5" />
                <Skeleton className="h-8 w-28 bg-white/5" />
              </div>

              {/* Test cards */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <article key={i} className="h-full">
                    <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4">
                      <Skeleton className="aspect-video w-full rounded-2xl bg-white/5" />
                      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                        <div className="mb-3 flex items-center gap-2">
                          <Skeleton className="h-4 w-16 bg-white/5" />
                        </div>
                        <Skeleton className="mb-2 h-6 w-3/4 bg-white/5" />
                        <Skeleton className="h-4 w-full bg-white/5" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
