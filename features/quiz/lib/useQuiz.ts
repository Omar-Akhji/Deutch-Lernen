"use client";

import { useState } from "react";
import { Question } from "../model/types";

export function useQuiz(questions: Question[]) {
  const [isStarted, setIsStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(string | string[])[]>([]);

  const currentQuestionIndex = userAnswers.length;
  const isFinished = isStarted && currentQuestionIndex >= questions.length;

  const currentQuestion = questions[currentQuestionIndex] ?? questions[0];
  const progress = isFinished
    ? 100
    : ((currentQuestionIndex + 1) / questions.length) * 100;

  const score = userAnswers.reduce((acc, answer, index) => {
    const question = questions[index];
    if (!question) return acc;

    const correct = question.correctAnswer;
    let isCorrect = false;

    if (Array.isArray(answer) && Array.isArray(correct)) {
      isCorrect = JSON.stringify(answer) === JSON.stringify(correct);
    } else {
      isCorrect = answer === correct;
    }

    return isCorrect ? acc + 1 : acc;
  }, 0);

  const startQuiz = () => {
    setIsStarted(true);
    setUserAnswers([]);
  };

  const handleAnswer = (answer: string | string[]) => {
    setUserAnswers((prev) => [...prev, answer]);
  };

  return {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    progress,
    startQuiz,
    handleAnswer,
  };
}
