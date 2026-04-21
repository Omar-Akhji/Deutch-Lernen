export interface Thema {
  text?: string | undefined;
  id: string;
  label: string;
  cat: string;
  pro?: string[] | undefined;
  con?: string[] | undefined;
  txt?: boolean | undefined;
  sampleText?: string | undefined;
}

export type ThemaCategory =
  | "all"
  | "essen"
  | "tech"
  | "gesellschaft"
  | "bildung"
  | "gesundheit"
  | "freizeit"
  | "umwelt"
  | "arbeit";
