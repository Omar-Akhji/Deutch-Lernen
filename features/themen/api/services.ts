import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { themenData } from "./data";

export const getThemen = cache(async () => {
  await wait(1200);
  return themenData;
});
