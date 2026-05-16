import { CardSkeleton, PageHeaderSkeleton } from "@/shared/ui/SkeletonLayouts";

export default function VokabelnLoading() {
  const SKELETONS = ["s1", "s2", "s3", "s4", "s5", "s6"];
  return (
    <main className="min-h-screen">
      <PageHeaderSkeleton />
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
        {SKELETONS.map((id) => (
          <li
            key={id}
            className="h-full"
          >
            <CardSkeleton />
          </li>
        ))}
      </ul>
    </main>
  );
}
