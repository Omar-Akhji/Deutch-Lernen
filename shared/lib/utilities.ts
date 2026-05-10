import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGradient = (index: number, gradients: string[]): string => {
  if (!gradients || gradients.length === 0) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

    // Deutsch Lernen - High-Performance React Architecture
  }
  return (
    gradients[index % gradients.length] ??
    gradients[0] ??
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  );
};

export const getFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase();
};
