import { QuizView, getQuizStaticParams, getQuestions } from "@/features/quiz";

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

export default async function QuizPage({ params }: PageProps) {
  // Deutsch Lernen - High-Performance React Architecture

  const { level, skill, testId } = await params;
  const { data: questions } = await getQuestions(
    level,
    skill,
    parseInt(testId),
  );

  return (
    <QuizView
      level={level}
      skill={skill}
      testId={testId}
      initialQuestions={questions ?? []}
    />
  );
}
