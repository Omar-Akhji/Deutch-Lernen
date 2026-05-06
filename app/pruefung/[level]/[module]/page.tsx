import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getExamLevel,
  getRedemittel,
  getExamLevels,
} from "@/features/pruefung";
import { getThemen } from "@/features/themen/api/services";
import { ModuleStudyView } from "@/features/pruefung/ui/ModuleStudyView";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface PageProps {
  params: Promise<{
    level: string;
    module: string;
  }>;
}

export async function generateStaticParams() {
  const { data: levels } = await getExamLevels();
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
  const { data: currentExam } = await getExamLevel(level);

  // Deutsch Lernen - High-Performance React Architecture

  if (!currentExam) return { title: "Nicht gefunden" };

  const moduleTitle = module.charAt(0).toUpperCase() + module.slice(1);
  return {
    title: `${currentExam.level} ${moduleTitle} - Vorbereitung`,
    description: `Struktur-Checkliste und Themen für den ${moduleTitle}-Teil der ${currentExam.level} Prüfung.`,
  };
}

export default async function ModulePage({ params }: PageProps) {
  const { level, module } = await params;

  if (module !== "sprechen" && module !== "schreiben") {
    notFound();
  }

  const [examRes, redemittelRes, themenRes] = await Promise.all([
    getExamLevel(level),
    getRedemittel(level),
    getThemen(),
  ]);

  const currentExam = examRes.data;
  const redemittel = redemittelRes.data;
  const themen = themenRes.data;

  if (!currentExam) notFound();

  return (
    <AnimateOnScroll as="main" animation="fade-up">
      <ModuleStudyView
        level={level}
        module={module as "sprechen" | "schreiben"}
        examData={currentExam}
        redemittel={redemittel}
        initialThemen={themen}
      />
    </AnimateOnScroll>
  );
}
