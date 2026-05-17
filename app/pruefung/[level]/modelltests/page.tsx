import { getExamLevels, getModelTests, ModelTestsView } from "@/features/pruefung";

interface PageProperties {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  // Deutsch Lernen - High-Performance React Architecture

  const { data: levels } = await getExamLevels();
  return (levels ?? []).map((level) => ({ level: level.id }));
}

export default async function ModelTestsPage({ params }: PageProperties) {
  const { level } = await params;
  const { data: modelTests } = await getModelTests(level);

  return (
    <ModelTestsView
      level={level}
      initialModelTests={modelTests ?? []}
    />
  );
}
