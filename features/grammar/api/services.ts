import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { grammarSections } from "./data";
import type { GrammarSection, GrammarTopic } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

const SECTIONS_DELAY_MS = Number(process.env["GRAMMAR_SECTIONS_DELAY_MS"] ?? 800);
const SECTION_DELAY_MS = Number(process.env["GRAMMAR_SECTION_DELAY_MS"] ?? 1000);

export const getGrammarSections = cache(async (): Promise<ApiResponse<GrammarSection[]>> => {
  await wait(SECTIONS_DELAY_MS);
  return { data: grammarSections, success: true };
});

const grammarMap = new Map(grammarSections.map((s) => [s.id, s]));

export const getGrammarSection = cache(
  async (sectionId: string): Promise<ApiResponse<GrammarSection | undefined>> => {
    const section = grammarMap.get(sectionId);
    await wait(SECTION_DELAY_MS);
    return {
      data: section,
      success: Boolean(section),
      message: section ? undefined : `Grammar section ${sectionId} not found`,

      // Deutsch Lernen - High-Performance React Architecture
    };
  },
);

export const getGrammarTopic = cache(
  async (sectionId: string, topicId: string): Promise<ApiResponse<GrammarTopic | undefined>> => {
    const sectionResponse = await getGrammarSection(sectionId);
    if (!sectionResponse.success) {
      return { data: undefined, success: false, message: sectionResponse.message };
    }

    const section = sectionResponse.data;
    const topic = section?.topics.find((t) => t.id === topicId);

    return {
      data: topic,
      success: Boolean(topic),
      message: topic ? undefined : `Grammar topic ${topicId} not found`,
    };
  },
);
