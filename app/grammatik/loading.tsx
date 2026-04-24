import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches GrammarSectionCards shape:
 * 6 sections × (icon-circle + heading, then 3 cards per section)
 * Each card = gradient figure + category badge + subtitle + title + description
 */
export default function GrammatikLoading() {
  return (
    <main>
      {Array.from({ length: 6 }).map((_, sectionIndex) => (
        <section key={sectionIndex} className="mb-16">
          {/* Section heading: circle icon + title */}
          <div className="mb-8 flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
            <Skeleton className="h-9 w-44 bg-white/8" />
          </div>

          {/* Card grid */}
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="h-full">
                <article className="h-full">
                  <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4 shadow-xl ring-1 ring-black/5">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl">
                      <Skeleton className="h-full w-full bg-white/5" />
                    </div>

                    <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                      <div className="mb-3 flex items-center gap-2">
                        <Skeleton className="h-7 w-14 rounded-full bg-white/10" />
                        <Skeleton className="h-4 w-20 bg-white/5" />
                      </div>
                      <Skeleton className="mb-2 h-6 w-3/4 bg-white/8" />
                      <Skeleton className="mb-1 h-4 w-full bg-white/5" />
                      <Skeleton className="h-4 w-1/2 bg-white/5" />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
