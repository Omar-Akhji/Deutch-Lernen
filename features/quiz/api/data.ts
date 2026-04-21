import { QuizData } from "../model/types";
import { b1Lesen1, b1Lesen2, b1Lesen3 } from "./b1-lesen-data";
import { b1Hoeren1, b1Hoeren2, b1Hoeren3 } from "./b1-hoeren-data";

export const quizQuestions: QuizData = {
  b1: {
    lesen: {
      1: b1Lesen1,
      2: b1Lesen2,
      3: b1Lesen3,
    },
    hoeren: {
      1: b1Hoeren1,
      2: b1Hoeren2,
      3: b1Hoeren3,
    },
    schreiben: {
      1: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Schreiben - Modelltest 1: Aufgabe 1",
          context: "Schreiben Sie eine E-Mail...",
          options: ["Erledigt"],
          correctAnswer: "Erledigt",
        },
      ],
    },
    sprechen: {
      1: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Sprechen - Modelltest 1: Teil 1",
          context: "Stellen Sie sich vor...",
          options: ["Erledigt"],
          correctAnswer: "Erledigt",
        },
      ],
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
