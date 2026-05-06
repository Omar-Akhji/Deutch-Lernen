import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { vocabList } from "./data";
import type { VocabItem } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

export const getVocabList = cache(
  async (): Promise<ApiResponse<VocabItem[]>> => {
    const start = Date.now();
    await wait(800);
    return {
      data: vocabList,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);

const vocabMap = new Map(vocabList.map((item) => [String(item.id), item]));

export const getVocabById = cache(
  async (id: string | number): Promise<ApiResponse<VocabItem | undefined>> => {
    const start = Date.now();
    const item = vocabMap.get(String(id));
    await wait(1200);

    return {
      data: item,
      success: !!item,
      message: item ? undefined : `Vocabulary item with id ${id} not found`,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);
