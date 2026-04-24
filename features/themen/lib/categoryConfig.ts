/** Category → color mapping. Single source of truth for themen styling. */
export const THEMEN_CATEGORY_COLORS: Record<string, string> = {
  essen: "orange-500",
  tech: "blue-500",
  gesellschaft: "purple-500",
  bildung: "emerald-500",
  gesundheit: "red-500",
  freizeit: "pink-500",
  umwelt: "green-500",
  arbeit: "cyan-500",
};

export const getCategoryClasses = (cat: string): string => {
  const color = THEMEN_CATEGORY_COLORS[cat] ?? "slate-500";
  return `text-${color} bg-${color}/10`;
};
