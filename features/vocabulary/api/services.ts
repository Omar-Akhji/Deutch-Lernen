import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { vocabList } from "./data";

export const getVocabList = cache(async () => {
  await wait(800);
  return vocabList;
});

const vocabMap = new Map(vocabList.map((item) => [String(item.id), item]));

export const getVocabById = cache(async (id: string | number) => {
  const item = vocabMap.get(String(id));
  if (!item) return undefined;
  await wait(1200);
  return item;
});
