/**
 * Delays execution for a specified amount of time.
 * Useful for debugging skeleton loaders or creating intentional pauses.
 */
export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
