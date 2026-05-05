import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { examLevels, redemittelData } from "./data";
import type { ExamLevel, RedemittelCategory } from "../model/types";

export const getExamLevels = cache(async (): Promise<ExamLevel[]> => {
  await wait(800);
  return examLevels;
});

const examMap = new Map(examLevels.map((e) => [e.id, e]));

export const getExamLevel = cache(
  async (id: string): Promise<ExamLevel | undefined> => {
    const exam = examMap.get(id.toLowerCase());
    if (!exam) return undefined;
    await wait(1200);
    return exam;
  },
);

export const getRedemittel = cache(
  async (level: string): Promise<RedemittelCategory> => {
    const lvl = level.toLowerCase();
    const data = lvl === "b1" ? redemittelData.b1 : redemittelData.b2;
    await wait(1000);
    return data;
  },
);

export const getModelTests = cache(async (level: string): Promise<number[]> => {
  const lvl = level.toLowerCase();
  const tests = lvl === "b1" ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1];
  await wait(1200);
  return tests;
});
