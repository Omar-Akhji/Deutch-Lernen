/**
 * Standard generic interface for all API responses.
 * Provides a consistent structure for data, errors, and metadata.
 */
export interface ApiError {
  code: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string | undefined;
  error?: ApiError | undefined;
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
