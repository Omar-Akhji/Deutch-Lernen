import type { Question } from "../model/types";
import { assignTeile, B1_HOEREN_TEILE } from "../lib/examStructure";

export const b1Hoeren5: Question[] = assignTeile(
  [
    {
      id: 18,
      type: "multiple-choice",
      question: "Hören Modelltest 5 (Bitte Audio & Text extrahieren)",
      context: `...`,
      options: ["Richtig", "Falsch"],
      correctAnswer: "Richtig",
      teil: 1,
    },
  ],
  B1_HOEREN_TEILE,
);
