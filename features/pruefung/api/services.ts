import { cache } from "react";
import { examLevels, redemittelData } from "./data";
import { ExamLevel, RedemittelCategory } from "../model/types";

export const getExamLevels = cache(async (): Promise<ExamLevel[]> => {
  "use cache";
  return examLevels;
});

export const getExamLevel = cache(
  async (id: string): Promise<ExamLevel | undefined> => {
    "use cache";
    return examLevels.find((e) => e.id === id.toLowerCase());
  },
);

export const getRedemittel = cache(
  async (level: string): Promise<RedemittelCategory> => {
    "use cache";
    return level.toLowerCase() === "b1" ? redemittelData.b1 : redemittelData.b2;
  },
);
