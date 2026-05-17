import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExamLevel, getExamLevels, getRedemittel } from "@/features/pruefung";
import { ModuleStudyView } from "@/features/pruefung/ui/ModuleStudyView";
import { getThemen } from "@/features/themen/api/services";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface PageProperties {
  params: Promise<{ level: string; module: string }>;
}

export async function generateStaticParams() {
  const { data: levels } = await getExamLevels();
  const modules = ["sprechen", "schreiben"];

  const parameters: { level: string; module: string }[] = [];

  for (const level of levels) {
    for (const moduleName of modules) {
      parameters.push({ level: level.id, module: moduleName });
    }
  }

  return parameters;
}

export async function generateMetadata({ params }: PageProperties): Promise<Metadata> {
  const { level, module: moduleName } = await params;
  const { data: currentExam } = await getExamLevel(level);

  // Deutsch Lernen - High-Performance React Architecture

  if (!currentExam) return { title: "Nicht gefunden" };

  const moduleTitle = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  return {
    title: `${currentExam.level} ${moduleTitle} - Vorbereitung`,
    description: `Struktur-Checkliste und Themen für den ${moduleTitle}-Teil der ${currentExam.level} Prüfung.`,
  };
}

export default async function ModulePage({ params }: PageProperties) {
  const { level, module: moduleName } = await params;

  if (moduleName !== "sprechen" && moduleName !== "schreiben") {
    notFound();
  }

  const [examResponse, redemittelResponse, themenResponse] = await Promise.all([
    getExamLevel(level),
    getRedemittel(level),
    getThemen(),
  ]);

  const currentExam = examResponse.data;
  const redemittel = redemittelResponse.data;
  const themen = themenResponse.data;

  if (!currentExam) notFound();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <ModuleStudyView
        level={level}
        module={moduleName as "sprechen" | "schreiben"}
        examData={currentExam}
        redemittel={redemittel}
        initialThemen={themen}
      />
    </AnimateOnScroll>
  );
}
