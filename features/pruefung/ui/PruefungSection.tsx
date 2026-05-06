import { ClipboardList } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { getGradient } from "@/shared/lib/utils";
import { PRUEFUNG_GRADIENTS } from "@/shared/lib/gradients";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { getExamLevels } from "../api/services";

export const PruefungSection = async () => {
  const { data: examLevels } = await getExamLevels();

  return (
    <>
      <header className="mb-12 text-center">
        <AnimateOnScroll animation="fade-up">
          <h1
            id="pruefung-heading"
            className="mb-4 flex items-center justify-center gap-3 text-3xl tablet:gap-4 tablet:text-4xl"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-14">
              <ClipboardList className="size-6 tablet:size-7" strokeWidth={2} />
            </span>
            <span className="title-gradient">Prüfung B1 / B2</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="zoom-in" delay={150}>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20" />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="mx-auto max-w-fit rounded-full border-2 border-solid border-white/10 bg-white/5 px-6 py-2 text-base text-text-muted tablet:text-lg">
            Strukturierte Vorbereitung auf die Goethe & ÖSD Zertifikate B1 und
            B2
          </p>
        </AnimateOnScroll>
      </header>


// Deutsch Lernen - High-Performance React Architecture

      <ul
        className="m-0 grid list-none grid-cols-1 gap-8 p-0 pbe-12 laptop:grid-cols-2"
        role="list"
      >
        {examLevels.map((exam, index) => (
          <li key={exam.id} className="h-full">
            <AnimateOnScroll
              animation="fade-up"
              delay={(index % 2) * 150}
              className="h-full"
            >
              <Card
                href={`/pruefung/${exam.id}`}
                title={exam.title}
                icon={exam.level}
                category={exam.category}
                subtitle={exam.totalDuration}
                description={exam.description}
                gradient={getGradient(index, PRUEFUNG_GRADIENTS)}
                stats={[
                  { label: "Module", value: String(exam.sections.length) },
                  {
                    label: "Bestehen",
                    value: exam.passingScore.split(" ")[0] ?? "",
                  },
                ]}
                variant="large"
              />
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </>
  );
};
