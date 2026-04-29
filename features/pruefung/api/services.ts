import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { examLevels, redemittelData } from "./data";
import { ExamLevel, RedemittelCategory } from "../model/types";

export const getExamLevels = cache(async (): Promise<ExamLevel[]> => {
  await wait(800);
  return examLevels;
});

export const getExamLevel = cache(
  async (id: string): Promise<ExamLevel | undefined> => {
    await wait(1200);
    return examLevels.find((e) => e.id === id.toLowerCase());
  },
);

export const getRedemittel = cache(
  async (level: string): Promise<RedemittelCategory> => {
    await wait(1000);
    return level.toLowerCase() === "b1" ? redemittelData.b1 : redemittelData.b2;
  },
);
export const getModelTests = cache(async (level: string): Promise<number[]> => {
  await wait(1200);
  if (level.toLowerCase() === "b1") {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  return [1];
});
