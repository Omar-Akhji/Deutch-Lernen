import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="py-4">
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <article className="h-full">
                  <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4">
                    {/* Card image area */}
                    <Skeleton className="aspect-video w-full rounded-2xl bg-white/5" />

                    <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                      {/* Category badge + subtitle */}
                      <div className="mb-3 flex items-center gap-2">
                        <Skeleton className="h-6 w-20 rounded-full bg-white/5" />
                        <Skeleton className="h-4 w-16 bg-white/5" />
                      </div>

                      {/* Title */}
                      <Skeleton className="mb-2 h-6 w-3/4 bg-white/5" />

                      {/* Description */}
                      <Skeleton className="mb-1 h-4 w-full bg-white/5" />
                      <Skeleton className="h-4 w-2/3 bg-white/5" />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
