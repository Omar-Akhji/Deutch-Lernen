import { Card } from "@/shared/ui/Card";
import { getGradient } from "@/shared/lib/utils";
import { getGrammarSection } from "../api/services";
import {
  BookOpen,
  FileText,
  Link,
  LayoutList,
  Clock,
  MessageCircle,
  LucideIcon,
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
  const section = await getGrammarSection(sectionId);

  if (!section) return null;

  const IconComponent = section.icon ? ICON_MAP[section.icon] : null;

  return (
    <section className="mbe-16" aria-labelledby={`${sectionId}-heading`}>
      <h2
        id={`${sectionId}-heading`}
        className="mbe-8 flex items-center gap-3 text-3xl text-text text-shadow-sm"
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm"
          aria-hidden="true"
        >
          {IconComponent ? <IconComponent size={24} strokeWidth={2} /> : null}
        </span>
        {section.title}
      </h2>

      <ul
        className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-0"
        role="list"
      >
        {section.topics.map((topic, index) => (
          <li key={topic.id}>
            <Card
              href={`/grammatik/${sectionId}/${topic.id}`}
              title={topic.title}
              category={topic.number}
              subtitle={topic.category}
              description={topic.description}
              gradient={getGradient(index, section.gradients)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
