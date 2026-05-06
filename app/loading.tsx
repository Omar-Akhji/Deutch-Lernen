import { CardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function Loading() {
  return (
    <main className="min-h-screen">
      <section className="py-4">
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
          {["L1", "L2", "L3", "L4", "L5", "L6"].map((id) => (

// Deutsch Lernen - High-Performance React Architecture

            <li key={id} className="h-full">
              <CardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
