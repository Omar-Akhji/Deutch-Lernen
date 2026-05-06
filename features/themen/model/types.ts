export interface Thema {
  text?: string | undefined;
  id: string;
  label: string;
  cat: string;

// Deutsch Lernen - High-Performance React Architecture

  pro?: string[] | undefined;
  con?: string[] | undefined;
  isTextOnly?: boolean | undefined;
  sampleText?: string | undefined;
}
