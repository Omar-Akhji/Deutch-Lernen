import { ExamLevel, RedemittelCategory } from "../model/types";
import { Hero } from "@/shared/ui/Hero";
import { Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { ThemenSection } from "@/features/themen/ui/ThemenSection";

interface ModuleStudyViewProps {
  level: string;
  module: "sprechen" | "schreiben";
  examData: ExamLevel;
  redemittel: RedemittelCategory;
}

export function ModuleStudyView({
  level,
  module,
  examData,
  redemittel,
}: ModuleStudyViewProps) {
  const section = examData.sections.find(
    (s) => s.id === `${level.toLowerCase()}-${module}`,
  );

  if (!section) return <div>Modul nicht gefunden</div>;

  // Filter redemittel for this module
  const filteredRedemittel = Object.entries(redemittel).filter(([category]) => {
    const cat = category.toLowerCase();
    const isVocab =
      cat.includes("konnektoren") ||
      cat.includes("zeitausdrücke") ||
      cat.includes("wortschatz");

    if (module === "sprechen") {
      return cat.includes("sprechen") || isVocab;
    } else {
      return cat.includes("schreiben") || isVocab;
    }
  });

  return (
    <div className="space-y-12 pbe-20">
      <Hero
        title={`${examData.level} ${section.title}`}
        description={section.description}
        category="Lernmodus"
        variant="glass"
        stats={[
          {
            label: "Dauer",
            value: section.duration,
            icon: <Clock size={18} />,
          },
          {
            label: "Punkte",
            value: `${section.points} Pkt.`,
            icon: <CheckCircle2 size={18} />,
          },
        ]}
      />

      <div className="space-y-8">
        <section>
          <h3 className="mbe-6 flex items-center gap-3 text-2xl font-bold text-white">
            <MessageCircle className="text-amber-400" size={24} />
            Wichtige Redemittel
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredRedemittel.map(([category, phrases]) => (
              <article
                key={category}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <h4 className="mb-3 border-b border-white/10 pb-2 text-sm font-bold tracking-wider text-amber-400 uppercase">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {phrases.map((phrase, idx) => (
                    <li
                      key={idx}
                      className="border-be border-white/5 pbe-2 text-sm text-slate-300 last:border-0 last:pbe-0"
                    >
                      {phrase}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Topics Integration */}
      <section className="border-t border-white/10 pt-12">
        <div className="mb-10">
          <h3 className="mb-2 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-extrabold text-transparent">
            Sprechen & Schreiben Themen
          </h3>
          <p className="text-slate-400">
            Nutze diese 58 Themen, um deine {section.title}-Fertigkeiten zu
            trainieren.
          </p>
        </div>
        <ThemenSection isEmbedded />
      </section>
    </div>
  );
}
