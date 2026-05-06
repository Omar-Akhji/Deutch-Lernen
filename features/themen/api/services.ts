import { cache } from "react";
import { wait } from "@/shared/lib/wait";
import { themenData } from "./data";
import type { ApiResponse } from "@/shared/model/api";

export const getThemen = cache(
  async (): Promise<ApiResponse<typeof themenData>> => {
    const start = Date.now();
    await wait(1200);
    return {
      data: themenData,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
        processingTimeMs: Date.now() - start,
      },
    };
  },
);
