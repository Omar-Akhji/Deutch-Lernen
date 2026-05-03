import { CardSkeleton, PageHeaderSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function GrammatikLoading() {
  return (
    <main className="min-h-screen">
      <PageHeaderSkeleton />
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
        {["g1", "g2", "g3", "g4"].map((id) => (
          <li key={id} className="h-full">
            <CardSkeleton />
          </li>
        ))}
      </ul>
    </main>
  );
}
