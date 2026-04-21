import { grammarSections } from "./data";
import { GrammarTopic } from "../model/types";
import { cache } from "react";

export const getGrammarSections = cache(async () => {
  "use cache";
  return grammarSections;
});

export const getGrammarSection = cache(async (sectionId: string) => {
  "use cache";
  return grammarSections.find((s) => s.id === sectionId);
});

export const getGrammarTopic = cache(
  async (
    sectionId: string,
    topicId: string,
  ): Promise<GrammarTopic | undefined> => {
    "use cache";
    const section = await getGrammarSection(sectionId);
    return section?.topics.find((t) => t.id === topicId);
  },
);
