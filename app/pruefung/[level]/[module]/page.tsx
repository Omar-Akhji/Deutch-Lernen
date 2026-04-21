import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getExamLevel,
  getRedemittel,
  getExamLevels,
} from "@/features/pruefung";
import { ModuleStudyView } from "@/features/pruefung/ui/ModuleStudyView";

interface PageProps {
  params: Promise<{
    level: string;
    module: string;
  }>;
}

export async function generateStaticParams() {
  const levels = await getExamLevels();
  const modules = ["sprechen", "schreiben"];

  const params: { level: string; module: string }[] = [];

  levels.forEach((level) => {
    modules.forEach((module) => {
      params.push({ level: level.id, module });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { level, module } = await params;
  const currentExam = await getExamLevel(level);

  if (!currentExam) return { title: "Nicht gefunden" };

  const moduleTitle = module.charAt(0).toUpperCase() + module.slice(1);
  return {
    title: `${currentExam.level} ${moduleTitle} - Vorbereitung`,
    description: `Redemittel und Themen für den ${moduleTitle}-Teil der ${currentExam.level} Prüfung.`,
  };
}

export default async function ModulePage({ params }: PageProps) {
  const { level, module } = await params;

  if (module !== "sprechen" && module !== "schreiben") {
    notFound();
  }

  const [currentExam, redemittel] = await Promise.all([
    getExamLevel(level),
    getRedemittel(level),
  ]);

  if (!currentExam) notFound();

  return (
    <main className="animate-fade-in">
      <ModuleStudyView
        level={level}
        module={module as "sprechen" | "schreiben"}
        examData={currentExam}
        redemittel={redemittel}
      />
    </main>
  );
}
