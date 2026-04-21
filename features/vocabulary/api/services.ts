import { cache } from "react";
import { vocabList } from "./data";

export const getVocabList = cache(async () => {
  "use cache";
  return vocabList;
});

export const getVocabById = cache(async (id: string | number) => {
  "use cache";
  return vocabList.find((item) => item.id === Number(id));
});
