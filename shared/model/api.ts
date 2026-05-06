/**
 * Standard generic interface for all API responses.
 * Provides a consistent structure for data, errors, and metadata.
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string | undefined;
  error?:
    | {
        code: string;
        details?: unknown;
      }
    | undefined;
  metadata?:
    | {
        timestamp: string;
        processingTimeMs: number;
        pagination?: {
          total: number;
          page: number;
          limit: number;
          totalPages: number;
        };
      }
    | undefined;
}

/**
 * Type guard to check if a response is successful.
 */
export function isSuccessResponse<T>(
  response: ApiResponse<T>,
): response is ApiResponse<T> & { data: T } {
  return response.success && response.data !== undefined;
}
