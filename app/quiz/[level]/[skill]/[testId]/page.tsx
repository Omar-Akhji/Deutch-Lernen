import { QuizView, getQuizStaticParams } from "@/features/quiz";
import { Suspense } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";

interface PageProps {
  params: Promise<{
    level: string;
    skill: string;
    testId: string;
  }>;
}

export async function generateStaticParams() {
  return getQuizStaticParams();
}

function QuizSkeleton() {
  return (
    <div className="relative min-h-screen py-8">
      <div className="flex min-h-125 w-full flex-col rounded-3xl border border-white/10 bg-card p-8 shadow-2xl backdrop-blur-xl">
        <header className="mb-8 flex items-center justify-between border-b border-white/20 pb-4">
          <Skeleton className="h-7 w-56 bg-white/5" />
        </header>

        <div className="flex flex-1 flex-col items-center justify-center space-y-6">
          <Skeleton className="h-10 w-72 bg-white/5" />
          <Skeleton className="h-5 w-96 bg-white/5" />
          <div className="mt-4 w-full max-w-md space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full rounded-xl bg-white/5" />
            ))}
          </div>
          <Skeleton className="mt-6 h-12 w-48 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default async function QuizPage({ params }: PageProps) {
  const { level, skill, testId } = await params;
  return (
    <Suspense fallback={<QuizSkeleton />}>
      <QuizView level={level} skill={skill} testId={testId} />
    </Suspense>
  );
}
