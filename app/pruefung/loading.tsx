import { Skeleton } from "@/components/ui/skeleton";

export default function PruefungLoading() {
  return (
    <main>
      <section className="py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <Skeleton className="h-10 w-10 rounded bg-white/5" />
            <Skeleton className="h-10 w-64 bg-white/5" />
          </div>
          <Skeleton className="mx-auto h-6 w-96 bg-white/5" />
        </header>

        {/* Exam level cards */}
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 p-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i}>
              <article className="h-full">
                <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4">
                  <Skeleton className="aspect-video w-full rounded-2xl bg-white/5" />

                  <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                    <div className="mb-3 flex items-center gap-2">
                      <Skeleton className="h-6 w-24 rounded-full bg-white/5" />
                      <Skeleton className="h-4 w-20 bg-white/5" />
                    </div>

                    <Skeleton className="mb-2 h-7 w-3/4 bg-white/5" />

                    <Skeleton className="mb-1 h-4 w-full bg-white/5" />
                    <Skeleton className="mb-4 h-4 w-2/3 bg-white/5" />

                    {/* Stats row */}
                    <div className="mt-auto flex gap-8 border-t border-(--glass-border) pt-4">
                      <div className="flex flex-col gap-1">
                        <Skeleton className="h-7 w-12 bg-white/8" />
                        <Skeleton className="h-3 w-16 bg-white/5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Skeleton className="h-7 w-12 bg-white/8" />
                        <Skeleton className="h-3 w-16 bg-white/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
