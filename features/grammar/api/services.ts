import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { grammarSections } from "./data";
import type { GrammarTopic } from "../model/types";

export const getGrammarSections = cache(async () => {
  await wait(800);
  return grammarSections;
});

const grammarMap = new Map(grammarSections.map((s) => [s.id, s]));

export const getGrammarSection = cache(async (sectionId: string) => {
  const section = grammarMap.get(sectionId);
  if (!section) return undefined;
  await wait(1000);
  return section;
});

export const getGrammarTopic = cache(
  async (
    sectionId: string,
    topicId: string,
  ): Promise<GrammarTopic | undefined> => {
    const section = await getGrammarSection(sectionId);
    return section?.topics.find((t) => t.id === topicId);
  },
);
