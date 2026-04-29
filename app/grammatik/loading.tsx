import { CardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function GrammatikLoading() {
  return (
    <main className="min-h-screen">
      <section className="py-4">
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="h-full">
              <CardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
