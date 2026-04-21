import { Skeleton } from "@/components/ui/skeleton";

export default function TopicDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl p-8 md:p-12">
          <Skeleton className="absolute inset-0 rounded-3xl bg-white/5" />
          <div className="relative max-w-3xl space-y-4">
            <Skeleton className="h-10 w-28 rounded-full bg-white/8" />
            <Skeleton className="h-10 w-72 bg-white/8" />
            <Skeleton className="h-6 w-48 bg-white/8" />
          </div>
        </div>

        {/* Content skeleton - vocabulary table */}
        <section className="mt-8 rounded-3xl border border-(--glass-border) p-8">
          <div className="space-y-4">
            {/* Table header */}
            <div className="flex gap-4 border-b border-(--glass-border) pb-4">
              <Skeleton className="h-5 w-1/4 bg-white/5" />
              <Skeleton className="h-5 w-1/4 bg-white/5" />
              <Skeleton className="h-5 w-1/3 bg-white/5" />
            </div>
            {/* Table rows */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex gap-4 border-b border-white/5 py-3">
                <Skeleton className="h-5 w-1/4 bg-white/5" />
                <Skeleton className="h-5 w-1/4 bg-white/5" />
                <Skeleton className="h-5 w-1/3 bg-white/5" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
