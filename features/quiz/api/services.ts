import { wait } from "@/shared/lib/wait";
import { quizQuestions } from "./data";
import { Question } from "../model/types";

export const getQuestions = async (
  level: string,
  skill: string,
  testId: number,
): Promise<Question[]> => {
  await wait(1200);
  const lvl = quizQuestions[level.toLowerCase()];
  if (!lvl) return [];

  const skl = lvl[skill.toLowerCase()];
  if (!skl) return [];

  return skl[testId] || [];
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
