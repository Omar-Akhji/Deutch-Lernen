"use client";

import { useState } from "react";
import type { Question } from "../model/types";

export function useQuiz(questions: Question[]) {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(string | string[] | null)[]>(
    new Array(questions.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex] ?? questions[0];
  const progress =
    isFinished ? 100 : (
      (userAnswers.filter((a) => a !== null).length / questions.length) * 100
    );

  const score = userAnswers.reduce((acc, answer, index) => {
    if (answer === null) return acc;
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
    setIsFinished(false);
    setUserAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (answer: string | string[], index?: number) => {
    const targetIndex = index ?? currentQuestionIndex;
    setUserAnswers((prev) => {
      const next = [...prev];
      next[targetIndex] = answer;
      return next;
    });

    // For sequential mode, auto-advance if no index was provided
    if (index === undefined && targetIndex < questions.length - 1) {
      setCurrentQuestionIndex(targetIndex + 1);
    } else if (index === undefined && targetIndex === questions.length - 1) {
      setIsFinished(true);
    }
  };

  const jumpToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  return {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    progress,
    userAnswers,
    startQuiz,
    handleAnswer,
    jumpToQuestion,
    finishQuiz,
  };
}
