import { Skeleton } from "@/shared/ui/Skeleton";

/**
 * Matches TopicDetailPage:
 * Hero (glass variant) with badge + title + description
 * → VocabularyTable (glass container with 3-column table)
 */
export default function TopicDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        {/* Hero — glass variant */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-(--glass-border) p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Skeleton className="h-10 w-28 rounded-full bg-white/10" />
            </div>
            <Skeleton className="mx-auto mb-2 h-10 w-72 bg-white/8" />
            <Skeleton className="mx-auto h-6 w-48 bg-white/5" />
          </div>
        </div>

        {/* VocabularyTable — matches @container glass card with 3-col table */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-(--glass-border) bg-card backdrop-blur-(--glass-blur)">
            {/* Table header */}
            <div className="flex border-b border-(--glass-border) bg-white/5 px-6 py-4">
              <Skeleton className="h-4 w-1/4 bg-white/5" />
              <Skeleton className="h-4 w-1/4 bg-white/5" />
              <Skeleton className="h-4 w-1/3 bg-white/5" />
            </div>
            {/* Table rows */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex border-b border-white/5 px-6 py-4">
                <Skeleton className="h-5 w-1/4 bg-white/8" />
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
