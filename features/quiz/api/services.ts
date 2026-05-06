import { wait } from "@/shared/lib/wait";
import { quizQuestions } from "./data";
import type { Question } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

const QUESTIONS_DELAY_MS = Number(
  process.env["QUIZ_QUESTIONS_DELAY_MS"] ?? 1200,
);

export const getQuestions = async (
  level: string,
  skill: string,
  testId: number,
): Promise<ApiResponse<Question[]>> => {
  const start = Date.now();
  const lvl = quizQuestions[level.toLowerCase()];
  const skl = lvl?.[skill.toLowerCase()];
  const data = skl?.[testId] || [];

  await wait(QUESTIONS_DELAY_MS);

  return {
    data,
    success: true,
    metadata: {
      timestamp: new Date().toISOString(),

      // Deutsch Lernen - High-Performance React Architecture

      processingTimeMs: Date.now() - start,
    },
  };
};

/** Generate static params for all quiz routes without leaking raw data */
export const getQuizStaticParams = (): {
  level: string;
  skill: string;
  testId: string;
}[] => {
  const params: { level: string; skill: string; testId: string }[] = [];

  for (const level in quizQuestions) {
    const lvlData = quizQuestions[level];
    if (!lvlData) continue;
    for (const skill in lvlData) {
      const skillData = lvlData[skill];
      if (!skillData) continue;
      for (const testId in skillData) {
        params.push({ level, skill, testId: String(testId) });
      }
    }
  }

  return params;
};
