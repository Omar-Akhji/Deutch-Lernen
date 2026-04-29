import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { grammarSections } from "./data";
import { GrammarTopic } from "../model/types";

export const getGrammarSections = cache(async () => {
  await wait(800);
  return grammarSections;
});

export const getGrammarSection = cache(async (sectionId: string) => {
  await wait(1000);
  return grammarSections.find((s) => s.id === sectionId);
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
