import type { Metadata } from "next";
import {
  Clock,
  CheckCircle2,
  FileEdit,
  ClipboardList,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { getExamLevels, getExamLevel } from "@/features/pruefung";
import { Hero } from "@/shared/ui/Hero";
import { BackButton } from "@/shared/ui/BackButton";
import { getGradient } from "@/shared/lib/utilities";
import { PRUEFUNG_GRADIENTS } from "@/shared/lib/gradients";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface PageProperties {
  params: Promise<{
    level: string;
  }>;
}

export async function generateStaticParams() {
  const { data: levels } = await getExamLevels();
  return (levels ?? []).map((level) => ({
    level: level.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProperties): Promise<Metadata> {
  const { level } = await params;
  const { data: currentExam } = await getExamLevel(level);

  return {
    title: currentExam ? `${currentExam.title} - Prüfung` : "Prüfungsstufe",
    description:
      currentExam?.description || "Bereite dich auf deine Deutschprüfung vor.",
  };
}

export default async function PruefungDetailPage({ params }: PageProperties) {
  const { level } = await params;

  const { data: currentExam } = await getExamLevel(level);

  if (!currentExam) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Prüfung nicht gefunden</h1>
        <p className="mb-8 text-text-muted">
          Die gewünschte Prüfungsstufe existiert nicht.
        </p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <Hero
          key="hero-clean-v2"
          title={currentExam.title}
          description={currentExam.description}
          category={currentExam.level}
          variant="glass"
          stats={[
            {
              label: "Dauer",
              value: currentExam.totalDuration,
              icon: <Clock size={18} />,
            },
            {
              label: "Bestehen",
              value: currentExam.passingScore,
              icon: <CheckCircle2 size={18} />,
            },
          ]}
        />

        {/* Start Quiz Button */}
        <div className="mb-12 flex justify-center">
          <AnimateOnScroll animation="fade-up" delay={400}>
            <Link
              href={`/pruefung/${level}/modelltests`}
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xl font-bold text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
            >
              <FileEdit className="text-yellow" size={24} />
              Modelltests Starten
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Prüfungsstruktur */}
        <section className="mb-12">
          <AnimateOnScroll animation="fade-right">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-semibold text-text tablet:gap-4 tablet:text-[1.75rem]">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12">
                <ClipboardList
                  className="size-5 tablet:size-6"
                  strokeWidth={2}
                />
              </span>
              Prüfungsstruktur
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6">
            {currentExam.sections.map((section, index) => (
              <AnimateOnScroll
                key={section.id}
                // Deutsch Lernen - High-Performance React Architecture

                animation="fade-up"
                delay={index * 100}
              >
                <article className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card">
                  <div
                    className="flex flex-col items-start gap-4 p-5 md:flex-row md:items-center md:justify-between"
                    style={{
                      background: getGradient(index, PRUEFUNG_GRADIENTS),
                    }}
                  >
                    <h3 className="m-0 text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-white/90">
                      <span>{section.duration}</span>
                      <span>{section.points} Punkte</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-text-muted">
                      {section.description}
                    </p>
                    <table className="mb-4 w-full border-collapse text-sm">
                      <caption className="sr-only">
                        Prüfungsstruktur Übersicht
                      </caption>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Teil
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Aufgabentyp
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Items
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Punkte
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.parts.map((part) => (
                          <tr key={part.name}>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.name}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.taskType}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.items}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-6 flex flex-col gap-6">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h4 className="m-0 mb-3 flex items-center gap-2 text-sm font-semibold text-text">
                          <Lightbulb size={16} className="text-yellow" /> Tipps
                        </h4>
                        <ul className="m-0 list-disc space-y-1 pl-5">
                          {section.tips.map((tip) => (
                            <li key={tip} className="text-sm text-text-muted">
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(section.id.includes("sprechen") ||
                        section.id.includes("schreiben")) && (
                        <Link
                          href={`/pruefung/${level}/${
                            section.id.split("-")[1]
                          }`}
                          className="group md:is-auto flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-8 py-3.5 font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all inline-full hover:scale-[1.02] hover:brightness-110 active:scale-95 md:self-start"
                        >
                          <MessageCircle
                            size={20}
                            className="transition-transform group-hover:rotate-12"
                          />
                          Lernmodus öffnen
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
