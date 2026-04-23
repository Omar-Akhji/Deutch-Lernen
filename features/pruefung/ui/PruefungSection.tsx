import { ClipboardList } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { getGradient } from "@/shared/lib/utils";
import { PRUEFUNG_GRADIENTS } from "@/shared/lib/gradients";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { getExamLevels } from "../api/services";

export const PruefungSection = async () => {
  const examLevels = await getExamLevels();

  return (
    <section className="py-8" aria-labelledby="pruefung-heading">
      <header className="mb-12 text-center">
        <AnimateOnScroll animation="fade-up">
          <h1
            id="pruefung-heading"
            className="mb-6 flex items-center justify-center gap-4 text-4xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm">
              <ClipboardList size={30} strokeWidth={2} />
            </span>
            <span className="title-gradient">Prüfung B1 / B2</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="m-0 text-lg text-text-muted">
            Strukturierte Vorbereitung auf die Goethe & ÖSD Zertifikate B1 und
            B2
          </p>
        </AnimateOnScroll>
      </header>

      <ul
        className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 p-0"
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
    </section>
  );
};
