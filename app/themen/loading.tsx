import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches ThemenSection:
 * Header (centered badge + title + description)
 * → Category Navigation bar (rounded-2xl pill)
 * → Sections (circle icon border-3 heading + card grid)
 * → Blue-ish tip box at bottom
 */
export default function ThemenLoading() {
  return (
    <div className="min-h-screen space-y-16 py-8">
      {/* Header — centered */}
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <div className="flex justify-center">
          <Skeleton className="h-10 w-96 bg-white/10" />
        </div>
        <Skeleton className="mx-auto h-6 w-full bg-white/5" />
      </div>

      {/* Category Navigation Bar */}
      <div className="rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-4 shadow-xl backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-32 rounded-full bg-white/5" />
          ))}
        </div>
      </div>

      {/* Content — Sections × Grid */}
      <div className="space-y-24">
        {Array.from({ length: 3 }).map((_, sectionIdx) => (
          <section key={sectionIdx}>
            <div className="mb-10 flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full border-3 border-white/10 bg-white/5" />
              <div>
                <Skeleton className="mb-1 h-7 w-48 bg-white/8" />
                <Skeleton className="h-4 w-32 bg-white/5" />
              </div>
            </div>

            {/* Card grid — matches ThemaCard shape */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  {/* Category badge + title */}
                  <div className="mb-4">
                    <Skeleton className="mb-2 h-5 w-20 rounded-full bg-white/10" />
                    <Skeleton className="h-6 w-3/4 bg-white/8" />
                  </div>
                  {/* Tabs */}
                  <div className="mb-4 flex gap-1 rounded-full bg-black/20 p-1">
                    <Skeleton className="h-8 flex-1 rounded-full bg-white/5" />
                    <Skeleton className="h-8 flex-1 rounded-full bg-white/5" />
                  </div>
                  {/* Content list */}
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="flex gap-3">
                        <Skeleton className="mt-1 h-1.5 w-1.5 rounded-full bg-white/10" />
                        <Skeleton className="h-4 w-full bg-white/5" />
                      </div>
                    ))}
                  </div>
                  {/* Bottom footer */}
                  <div className="mt-6 flex justify-end border-t border-white/5 pt-4">
                    <Skeleton className="h-3 w-32 bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Blue tip box */}
      <div className="mt-20 rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-900/20 to-purple-900/20 p-8 backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full border-3 border-white/10 bg-white/10" />
          <Skeleton className="h-8 w-64 bg-white/10" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
