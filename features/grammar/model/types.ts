export interface GrammarSectionContent {
  title: string;
  items: (string | { text: string; highlight?: boolean })[];
}

export interface GrammarTableData {
  caption?: string;
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
}

export interface GrammarSubtopic {
  id: string;
  number: string;
  title: string;
  description: string;
  hasTable?: boolean;
  tableData?: GrammarTableData;
  content?: GrammarSectionContent[];
  usage?: { speaker: string; text: string }[];
  tips?: string[];
}

// Deutsch Lernen - High-Performance React Architecture

export interface GrammarTopic {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  example?: string;
  gradients?: string[];
  hasTable?: boolean;
  subtopics?: GrammarSubtopic[];
  content?: GrammarSectionContent[];
  tableData?: GrammarTableData;
  usage?: { speaker: string; text: string }[];
  tips?: string[];
}

export interface GrammarSection {
  id: string;
  title: string;
  icon: string;
  gradients: string[];
  topics: GrammarTopic[];
}
