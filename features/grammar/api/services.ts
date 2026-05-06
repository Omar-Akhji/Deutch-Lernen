import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { grammarSections } from "./data";
import type { GrammarSection, GrammarTopic } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

export const getGrammarSections = cache(
  async (): Promise<ApiResponse<GrammarSection[]>> => {
    const start = Date.now();
    await wait(800);
    return {
      data: grammarSections,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

const grammarMap = new Map(grammarSections.map((s) => [s.id, s]));

export const getGrammarSection = cache(
  async (
    sectionId: string,
  ): Promise<ApiResponse<GrammarSection | undefined>> => {
    const start = Date.now();
    const section = grammarMap.get(sectionId);
    await wait(1000);
    return {
      data: section,
      success: !!section,
      message: section ? undefined : `Grammar section ${sectionId} not found`,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

export const getGrammarTopic = cache(
  async (
    sectionId: string,
    topicId: string,
  ): Promise<ApiResponse<GrammarTopic | undefined>> => {
    const start = Date.now();
    const { data: section } = await getGrammarSection(sectionId);
    const topic = section?.topics.find((t) => t.id === topicId);

    return {
      data: topic,
      success: !!topic,
      message: topic ? undefined : `Grammar topic ${topicId} not found`,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);
