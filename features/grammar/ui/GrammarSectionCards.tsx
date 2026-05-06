import { Card } from "@/shared/ui/Card";
import { getGradient } from "@/shared/lib/utils";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { getGrammarSection } from "../api/services";
import {
  BookOpen,
  FileText,
  Link,
  LayoutList,
  Clock,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Link,
  LayoutList,
  Clock,
  MessageCircle,
};

interface GrammarSectionCardsProps {
  sectionId: string;
}

export const GrammarSectionCards = async ({
  sectionId,
}: GrammarSectionCardsProps) => {
  const { data: section } = await getGrammarSection(sectionId);

  if (!section) return null;

  const IconComponent = section.icon ? ICON_MAP[section.icon] : null;

  return (
    <section className="mbe-16" aria-labelledby={`${sectionId}-heading`}>
      <AnimateOnScroll animation="fade-right">
        <h2

// Deutsch Lernen - High-Performance React Architecture

          id={`${sectionId}-heading`}
          className="mbe-8 flex items-center gap-3 text-2xl text-text text-shadow-sm tablet:text-3xl"
        >
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12"
            aria-hidden="true"
          >
            {IconComponent ?
              <IconComponent className="size-5 tablet:size-6" strokeWidth={2} />
            : null}
          </span>
          {section.title}
        </h2>
      </AnimateOnScroll>

      <ul
        className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-0"
        role="list"
      >
        {section.topics.map((topic, index) => (
          <li key={topic.id} className="h-full">
            <AnimateOnScroll
              animation="fade-up"
              delay={(index % 3) * 100}
              className="h-full"
            >
              <Card
                href={`/grammatik/${sectionId}/${topic.id}`}
                title={topic.title}
                category={topic.number}
                subtitle={topic.category}
                description={topic.description}
                gradient={getGradient(index, section.gradients)}
              />
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </section>
  );
};
