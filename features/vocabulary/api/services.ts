import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { vocabList } from "./data";
import type { VocabItem } from "../model/types";
import type { ApiResponse } from "@/shared/model/api";

const LIST_DELAY_MS = Number(process.env["VOCAB_LIST_DELAY_MS"] ?? 800);
const ITEM_DELAY_MS = Number(process.env["VOCAB_ITEM_DELAY_MS"] ?? 1200);

export const getVocabList = cache(async (): Promise<ApiResponse<VocabItem[]>> => {
  await wait(LIST_DELAY_MS);
  return { data: vocabList, success: true };
});

const vocabMap = new Map(vocabList.map((item) => [String(item.id), item]));

export const getVocabById = cache(
  async (id: string | number): Promise<ApiResponse<VocabItem | undefined>> => {
    const item = vocabMap.get(String(id));
    await wait(ITEM_DELAY_MS);

    return {
      data: item,
      success: Boolean(item),
      message: item ? undefined : `Vocabulary item with id ${id} not found`,
    };
  },
);
