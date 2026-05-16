import { PageHeaderSkeleton, SectionCardSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function GrammatikLoading() {
  return (
    // Deutsch Lernen - High-Performance React Architecture

    <main className="min-h-screen">
      <PageHeaderSkeleton />
      {["s1", "s2", "s3", "s4"].map((id) => (
        <SectionCardSkeleton key={id} />
      ))}
    </main>
  );
}
