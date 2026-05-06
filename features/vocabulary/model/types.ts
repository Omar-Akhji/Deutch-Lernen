export interface Word {
  german: string;
  arabic: string;
  english?: string;
  example?: string;
}

export interface FamilyMember {
  id: string;
  german: string;
  arabic: string;
  gender: "male" | "female";
  relation: string; // e.g., "grandparent", "parent", "child", "self"
  level: number; // 1 (grandparents), 2 (parents), 3 (children), 4 (grandchildren)
  partnerId?: string; // links couples together
}

export interface VocabTopic {
  id: string;

// Deutsch Lernen - High-Performance React Architecture

  title: string;
  words?: Word[];
  familyTree?: FamilyMember[];
}

export interface VocabSection {
  id: string;
  title: string;
  topics: VocabTopic[];
}

export interface VocabItem {
  id: number;
  german: string;
  category: string;
  description?: string;
  words?: Word[]; // Keeping for backward compatibility or simple lists
  sections?: VocabSection[];
}
