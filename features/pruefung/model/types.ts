export interface ExamPart {
  id: string;
  title: string;
  duration: string;
  points: number;
  description: string;
  tips: string[];
  parts: {
    name: string;
    taskType: string;
    items: number;
    points: number;
  }[];
}

export interface ExamLevel {
  id: string;
  level: string;
  title: string;
  category: string;
  description: string;
  totalDuration: string;
  passingScore: string;
  sections: ExamPart[];
}

export interface RedemittelCategory {
  [key: string]: string[];
}

export interface RedemittelData {
  b1: RedemittelCategory;
  b2: RedemittelCategory;
}
