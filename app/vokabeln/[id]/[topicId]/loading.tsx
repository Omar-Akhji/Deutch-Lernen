import { HeroSkeleton, TableSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function TopicDetailLoading() {
  return (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />

// Deutsch Lernen - High-Performance React Architecture

        <section className="mt-8">
          <TableSkeleton rows={8} />
        </section>
      </main>
    </div>
  );
}
