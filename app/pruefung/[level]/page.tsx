import {
  Clock,
  CheckCircle2,
  FileEdit,
  ClipboardList,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import {
  getExamLevels,
  getExamLevel,
  getRedemittel,
} from "@/features/pruefung";
import { Hero } from "@/shared/ui/Hero";
import { BackButton } from "@/shared/ui/BackButton";
import { getGradient } from "@/shared/lib/utils";
import { PRUEFUNG_GRADIENTS } from "@/shared/lib/gradients";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export async function generateStaticParams() {
  const levels = await getExamLevels();
  return levels.map((level) => ({
    level: level.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { level } = await params;
  const currentExam = await getExamLevel(level);

  return {
    title: currentExam ? `${currentExam.title} - Prüfung` : "Prüfungsstufe",
    description:
      currentExam?.description || "Bereite dich auf deine Deutschprüfung vor.",
  };
}

export default async function PruefungDetailPage({ params }: PageProps) {
  const { level } = await params;

  const [currentExam, redemittel] = await Promise.all([
    getExamLevel(level),
    getRedemittel(level),
  ]);

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
          <Link
            href={`/pruefung/${level}/modelltests`}
            className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xl font-bold text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
          >
            <FileEdit className="text-yellow" size={24} />
            Modelltests Starten
          </Link>
        </div>

        {/* Prüfungsstruktur */}
        <section className="mb-12">
          <h2 className="mb-8 flex items-center gap-4 text-[1.75rem] font-bold text-text">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm">
              <ClipboardList size={24} strokeWidth={2} />
            </span>
            Prüfungsstruktur
          </h2>
          <div className="grid gap-6">
            {currentExam.sections.map((section, index) => (
              <article
                key={section.id}
                className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card"
              >
                <div
                  className="flex flex-col items-start gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  style={{ background: getGradient(index, PRUEFUNG_GRADIENTS) }}
                >
                  <h3 className="m-0 text-xl font-bold text-white">
                    {section.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-white/90">
                    <span>{section.duration}</span>
                    <span>{section.points} Punkte</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-text-muted">{section.description}</p>
                  <table className="mb-4 w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3">
                          Teil
                        </th>
                        <th className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3">
                          Aufgabentyp
                        </th>
                        <th className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3">
                          Items
                        </th>
                        <th className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3">
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
                  <div className="mt-6 flex flex-col gap-4 md:flex-row">
                    <div className="flex-1 rounded-xl bg-white/5 p-4">
                      <h4 className="m-0 mb-3 flex items-center gap-2 text-sm text-text">
                        <Lightbulb size={16} className="text-yellow" /> Tipps
                      </h4>
                      <ul className="m-0 pl-5">
                        {section.tips.map((tip) => (
                          <li
                            key={tip}
                            className="mb-1 text-sm text-text-muted"
                          >
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(section.id.includes("sprechen") ||
                      section.id.includes("schreiben")) && (
                      <Link
                        href={`/pruefung/${level}/${section.id.split("-")[1]}`}
                        className="group flex items-center justify-center gap-2 self-start rounded-xl border border-amber-500/20 bg-amber-500/10 px-6 py-4 font-semibold text-amber-500 transition-all hover:bg-amber-500 hover:text-slate-950"
                      >
                        <MessageCircle size={18} />
                        Lernmodus öffnen
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Redemittel */}
        <section className="mb-12">
          <h2 className="mb-8 flex items-center gap-4 text-[1.75rem] font-bold text-text">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm">
              <MessageCircle size={24} strokeWidth={2} />
            </span>
            Redemittel
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {Object.entries(redemittel).map(([category, phrases]) => (
              <article
                key={category}
                className="rounded-2xl border border-(--glass-border) bg-card p-6"
              >
                <h3 className="m-0 mb-4 text-base font-bold text-yellow capitalize">
                  {category}
                </h3>
                <ul className="m-0 list-none p-0">
                  {phrases.map((phrase) => (
                    <li
                      key={phrase}
                      className="border-b border-(--glass-border) py-2 text-sm text-white last:border-b-0"
                    >
                      {phrase}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
