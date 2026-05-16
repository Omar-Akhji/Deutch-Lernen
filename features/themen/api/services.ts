import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { themenData } from "./data";
import type { ApiResponse } from "@/shared/model/api";

const THEMEN_DELAY_MS = Number(process.env["THEMEN_DELAY_MS"] ?? 1200);

export const getThemen = cache(async (): Promise<ApiResponse<typeof themenData>> => {
  await wait(THEMEN_DELAY_MS);
  return { data: themenData, success: true };
});
