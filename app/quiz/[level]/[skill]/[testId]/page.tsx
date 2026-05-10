import { QuizView, getQuizStaticParams, getQuestions } from "@/features/quiz";

interface PageProperties {
  params: Promise<{
    level: string;
    skill: string;
    testId: string;
  }>;
}

export async function generateStaticParams() {
  return getQuizStaticParams();
}

export default async function QuizPage({ params }: PageProperties) {
  // Deutsch Lernen - High-Performance React Architecture

  const { level, skill, testId } = await params;
  const { data: questions } = await getQuestions(
    level,
    skill,
    Number.parseInt(testId),
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
