import {
  ModelTestsView,
  getExamLevels,
  getModelTests,
} from "@/features/pruefung";

interface PageProps {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  const { data: levels } = await getExamLevels();
  return levels.map((level) => ({
    level: level.id,
  }));
}

export default async function ModelTestsPage({ params }: PageProps) {
  const { level } = await params;
  const { data: modelTests } = await getModelTests(level);

  return <ModelTestsView level={level} initialModelTests={modelTests} />;
}
