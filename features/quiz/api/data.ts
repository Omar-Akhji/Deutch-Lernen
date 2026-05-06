import type { QuizData } from "../model/types";
import { b1Lesen1 } from "./b1-lesen-1";
import { b1Lesen2 } from "./b1-lesen-2";
import { b1Lesen3 } from "./b1-lesen-3";
import { b1Lesen4 } from "./b1-lesen-4";
import { b1Lesen5 } from "./b1-lesen-5";
import { b1Lesen6 } from "./b1-lesen-6";
import { b1Lesen7 } from "./b1-lesen-7";
import { b1Lesen8 } from "./b1-lesen-8";
import { b1Lesen9 } from "./b1-lesen-9";
import { b1Hoeren1 } from "./b1-hoeren-1";
import { b1Hoeren2 } from "./b1-hoeren-2";
import { b1Hoeren3 } from "./b1-hoeren-3";
import { b1Hoeren4 } from "./b1-hoeren-4";
import { b1Hoeren5 } from "./b1-hoeren-5";
import { b1Hoeren6 } from "./b1-hoeren-6";
import { b1Hoeren7 } from "./b1-hoeren-7";
import { b1Hoeren8 } from "./b1-hoeren-8";
import { b1Hoeren9 } from "./b1-hoeren-9";
import { b1Schreiben1 } from "./b1-schreiben-1";
import { b1Schreiben2 } from "./b1-schreiben-2";
import { b1Schreiben3 } from "./b1-schreiben-3";
import { b1Schreiben4 } from "./b1-schreiben-4";
import { b1Schreiben5 } from "./b1-schreiben-5";
import { b1Schreiben6 } from "./b1-schreiben-6";
import { b1Schreiben7 } from "./b1-schreiben-7";
import { b1Schreiben8 } from "./b1-schreiben-8";
import { b1Schreiben9 } from "./b1-schreiben-9";
import { b1Sprechen1 } from "./b1-sprechen-1";
import { b1Sprechen2 } from "./b1-sprechen-2";
import { b1Sprechen3 } from "./b1-sprechen-3";
import { b1Sprechen4 } from "./b1-sprechen-4";
import { b1Sprechen5 } from "./b1-sprechen-5";
import { b1Sprechen6 } from "./b1-sprechen-6";
import { b1Sprechen7 } from "./b1-sprechen-7";
import { b1Sprechen8 } from "./b1-sprechen-8";
import { b1Sprechen9 } from "./b1-sprechen-9";

export const quizQuestions: QuizData = {
  b1: {
    lesen: {
      1: b1Lesen1,
      2: b1Lesen2,
      3: b1Lesen3,
      4: b1Lesen4,
      5: b1Lesen5,
      6: b1Lesen6,
      7: b1Lesen7,
      8: b1Lesen8,
      9: b1Lesen9,
    },
    hoeren: {
      1: b1Hoeren1,
      2: b1Hoeren2,
      3: b1Hoeren3,
      4: b1Hoeren4,

// Deutsch Lernen - High-Performance React Architecture

      5: b1Hoeren5,
      6: b1Hoeren6,
      7: b1Hoeren7,
      8: b1Hoeren8,
      9: b1Hoeren9,
    },
    schreiben: {
      1: b1Schreiben1,
      2: b1Schreiben2,
      3: b1Schreiben3,
      4: b1Schreiben4,
      5: b1Schreiben5,
      6: b1Schreiben6,
      7: b1Schreiben7,
      8: b1Schreiben8,
      9: b1Schreiben9,
    },
    sprechen: {
      1: b1Sprechen1,
      2: b1Sprechen2,
      3: b1Sprechen3,
      4: b1Sprechen4,
      5: b1Sprechen5,
      6: b1Sprechen6,
      7: b1Sprechen7,
      8: b1Sprechen8,
      9: b1Sprechen9,
    },
  },
  b2: {
    lesen: {
      1: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Lesen B2 - Modelltest 1: Frage 1",
          options: ["A", "B", "C"],
          correctAnswer: "A",
        },
      ],
    },
    hoeren: {
      1: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Hören B2 - Modelltest 1: Frage 1",
          options: ["A", "B", "C"],
          correctAnswer: "A",
        },
      ],
    },
    schreiben: {},
    sprechen: {},
  },
};
