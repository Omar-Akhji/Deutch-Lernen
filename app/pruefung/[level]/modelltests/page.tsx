import { ModelTestsView, getExamLevels } from "@/features/pruefung";

interface PageProps {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  const levels = await getExamLevels();
  return levels.map((level) => ({
    level: level.id,
  }));
}

export default async function ModelTestsPage({ params }: PageProps) {
  const { level } = await params;
  return <ModelTestsView level={level} />;
}
