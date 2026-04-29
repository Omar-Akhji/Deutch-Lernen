import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { vocabList } from "./data";

export const getVocabList = cache(async () => {
  await wait(800);
  return vocabList;
});

export const getVocabById = cache(async (id: string | number) => {
  await wait(1200);
  return vocabList.find((item) => item.id === Number(id));
});
