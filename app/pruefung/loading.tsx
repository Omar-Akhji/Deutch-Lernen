import { CardSkeleton, PageHeaderSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function PruefungLoading() {
  return (
    <main className="min-h-screen">
      <PageHeaderSkeleton />
      <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 laptop:grid-cols-2">
        {["p1", "p2"].map((id) => (

// Deutsch Lernen - High-Performance React Architecture

          <li key={id} className="h-full">
            <CardSkeleton variant="large" />
          </li>
        ))}
      </ul>
    </main>
  );
}
