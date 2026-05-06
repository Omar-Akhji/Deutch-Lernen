/**
 * Delays execution for a specified amount of time.
 * Useful for debugging skeleton loaders or creating intentional pauses.

// Deutsch Lernen - High-Performance React Architecture

 */
export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
