import { Skeleton } from "./Skeleton";

/**
 * Standard Card Skeleton that matches CardBody structure
 * (Gradient figure + category badge + subtitle + title + description + stats row)
 */
export function CardSkeleton({
  variant = "default",
}: {
  variant?: "default" | "large";
}) {
  return (
    <article className="h-full">
      <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4 shadow-xl ring-1 ring-black/5">
        {/* Gradient figure area */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl">
          <Skeleton className="h-full w-full bg-white/5" />
        </div>

        <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
          {/* Category badge + subtitle */}
          <div className="mb-3 flex items-center gap-2">
            <Skeleton className="h-7 w-20 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-16 bg-white/5" />
          </div>

          {/* Title */}
          <Skeleton
            className={`mb-2 ${variant === "large" ? "h-8" : "h-7"} w-3/4 bg-white/8`}
          />

          {/* Description lines */}
          <Skeleton className="mb-1 h-4 w-full bg-white/5" />
          <Skeleton className="mb-4 h-4 w-2/3 bg-white/5" />

          {/* Stats row if large variant */}
          {variant === "large" && (
            <div className="mt-auto flex gap-8 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-1">
                <Skeleton className="h-7 w-12 bg-white/10" />
                <Skeleton className="h-3 w-16 bg-white/5" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="h-7 w-12 bg-white/10" />
                <Skeleton className="h-3 w-16 bg-white/5" />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Centered Hero Skeleton used in dynamic detail pages
 */
export function HeroSkeleton() {
  return (
    <div className="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl md:p-12">
      <div className="flex flex-col items-center">
        {/* Category Badge Placeholder */}
        <div className="mbe-4">
          <Skeleton className="h-10 w-28 rounded-full bg-white/10" />
        </div>

        {/* Title Placeholder */}
        <Skeleton className="mbe-4 h-10 w-3/4 bg-white/15 md:h-12" />

        {/* Description Placeholder */}
        <Skeleton className="h-6 w-full bg-white/5 md:w-2/3" />

        {/* Stats Row */}
        <div className="mbs-8 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-24 bg-white/10" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-20 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Section Header (Circle Icon + Title)
 */
export function SectionHeaderSkeleton() {
  return (
    <div className="mb-8 flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full border-[3px] border-white/10 bg-white/5" />
      <Skeleton className="h-8 w-52 bg-white/8" />
    </div>
  );
}

/**
 * Vocabulary Table Skeleton (3 columns)
 */
export function TableSkeleton({
  rows = 8,
  columns = 3,
  noWrapper = false,
}: {
  rows?: number;
  columns?: number;
  noWrapper?: boolean;
}) {
  const content = (
    <div className="w-full border-collapse">
      {/* Header Row */}
      <div className="flex border-b border-white/10 px-2 py-2 @md:px-4 @md:py-3">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton
            key={i}
            className={`h-4 flex-1 bg-white/10 ${i > 0 ? "ml-4" : ""}`}
          />
        ))}
      </div>
      {/* Body Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex border-b border-white/5 px-2 py-3 @md:px-4 @md:py-4"
        >
          {Array.from({ length: columns }).map((_, j) => (
            <Skeleton
              key={j}
              className={`h-6 flex-1 bg-white/5 ${j > 0 ? "ml-4" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );

  if (noWrapper) {
    return <div className="overflow-x-auto">{content}</div>;
  }

  return (
    <div className="@container overflow-hidden rounded-3xl border border-white/10 bg-card">
      <div className="overflow-x-auto px-4 py-4">{content}</div>
    </div>
  );
}

export function SectionCardSkeleton() {
  return (
    <div className="mbe-16">
      <div className="mbe-8 flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
        <Skeleton className="h-8 w-48 bg-white/10" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
