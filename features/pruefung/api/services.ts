import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { examLevels, redemittelData } from "./data";
import type { ExamLevel, RedemittelCategory } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

const LEVELS_DELAY_MS = Number(process.env.EXAM_LEVELS_DELAY_MS ?? 800);
const LEVEL_DELAY_MS = Number(process.env.EXAM_LEVEL_DELAY_MS ?? 1200);
const REDEMITTEL_DELAY_MS = Number(process.env.REDEMITTEL_DELAY_MS ?? 1000);
const TESTS_DELAY_MS = Number(process.env.MODEL_TESTS_DELAY_MS ?? 1200);

export const getExamLevels = cache(
  async (): Promise<ApiResponse<ExamLevel[]>> => {
    const start = Date.now();
    await wait(LEVELS_DELAY_MS);
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
    await wait(LEVEL_DELAY_MS);

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
    await wait(REDEMITTEL_DELAY_MS);

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
    await wait(TESTS_DELAY_MS);

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
