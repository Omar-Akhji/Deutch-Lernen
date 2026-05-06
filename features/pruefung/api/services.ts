import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { examLevels, redemittelData } from "./data";
import type { ExamLevel, RedemittelCategory } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

export const getExamLevels = cache(
  async (): Promise<ApiResponse<ExamLevel[]>> => {
    const start = Date.now();
    await wait(800);
    return {
      data: examLevels,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

const examMap = new Map(examLevels.map((e) => [e.id, e]));

export const getExamLevel = cache(
  async (id: string): Promise<ApiResponse<ExamLevel | undefined>> => {
    const start = Date.now();
    const exam = examMap.get(id.toLowerCase());
    await wait(1200);

    return {
      data: exam,
      success: !!exam,
      message: exam ? undefined : "Exam level not found",
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

export const getRedemittel = cache(
  async (level: string): Promise<ApiResponse<RedemittelCategory>> => {
    const start = Date.now();
    const lvl = level.toLowerCase();
    const data = lvl === "b1" ? redemittelData.b1 : redemittelData.b2;
    await wait(1000);

    return {
      data,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

export const getModelTests = cache(
  async (level: string): Promise<ApiResponse<number[]>> => {
    const start = Date.now();
    const lvl = level.toLowerCase();
    const tests = lvl === "b1" ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1];
    await wait(1200);

    return {
      data: tests,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);
