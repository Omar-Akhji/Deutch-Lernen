import { Skeleton } from "@/shared/ui/Skeleton";
import { CardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function PruefungLoading() {
  return (
    <main className="min-h-screen">
      <section className="py-8">
        {/* Header — matches PruefungSection header */}
        <header className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Skeleton className="h-14 w-14 rounded-full border-[3px] border-white/10 bg-white/10" />
            <Skeleton className="h-10 w-56 bg-white/8" />
          </div>
          <Skeleton className="mx-auto h-6 w-96 max-w-full bg-white/5" />
        </header>

        {/* Large exam cards */}
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 p-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i} className="h-full">
              <CardSkeleton variant="large" />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
