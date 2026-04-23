"use client";

import { useRouter } from "next/navigation";
import { getQuestions } from "../api/services";
import { QuizStart } from "./QuizStart";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";
import { useQuiz } from "../lib/useQuiz";

interface QuizViewProps {
  level: string;
  skill: string;
  testId: string;
}

export default function QuizView({ level, skill, testId }: QuizViewProps) {
  const router = useRouter();

  const questions = getQuestions(level, skill, parseInt(testId));

  const {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    startQuiz,
    handleAnswer,
  } = useQuiz(questions);

  const goBack = () => {
    router.push(`/pruefung/${level}/modelltests`);
  };

  // Determine if this question starts a new Teil
  const prevQuestion =
    currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1] : null;
  const isNewTeil =
    currentQuestion?.teil !== undefined &&
    (!prevQuestion || prevQuestion.teil !== currentQuestion.teil);

  // Carry context forward: find the most recent context in the same Teil
  let activeContext: string | undefined;
  if (
    currentQuestion &&
    !currentQuestion.context &&
    currentQuestion.teil !== undefined
  ) {
    for (let i = currentQuestionIndex - 1; i >= 0; i--) {
      const q = questions[i];
      if (q && q.teil === currentQuestion.teil && q.context) {
        activeContext = q.context;
        break;
      }
    }
  }

  // Build a skill-specific title
  const skillTitles: Record<string, string> = {
    lesen: "Lesen",
    hoeren: "Hören",
    schreiben: "Schreiben",
    sprechen: "Sprechen",
  };
  const skillTitle = skillTitles[skill] || skill;

  if (!questions.length) {
    return (
      <div className="py-12 text-center">
        <p>Keine Fragen gefunden.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 cursor-pointer rounded-full text-yellow hover:underline"
        >
          Zurück
        </button>
      </div>
    );
  }
  const getDuration = () => {
    if (skill === "lesen") return 65;
    if (skill === "hoeren") return 40;
    return 60;
  };

  return (
    <div className="relative min-h-screen py-8">
      <div className="relative z-10 flex min-h-125 w-full flex-col rounded-3xl border border-white/10 bg-card px-8 py-8 shadow-2xl backdrop-blur-xl transition-all duration-300">
        <header className="mb-8 flex items-center justify-between border-b border-white/20 pb-4">
          <h1 className="text-xl font-bold text-shadow-sm">
            {skillTitle} – Modelltest {testId} ({level.toUpperCase()})
          </h1>
        </header>

        <div className="flex flex-1 flex-col justify-center">
          {!isStarted ? (
            <QuizStart
              title={`${skillTitle} – Übungsprüfung ${testId}`}
              description={`Goethe / ÖSD Zertifikat ${level.toUpperCase()} – ${skillTitle}. Bearbeiten Sie die Aufgaben wie in der echten Prüfung.`}
              questionCount={questions.length}
              duration={getDuration()}
              onStart={startQuiz}
            />
          ) : !isFinished && currentQuestion ? (
            <QuizQuestion
              key={currentQuestionIndex}
              question={currentQuestion}
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
              onAnswer={handleAnswer}
              activeContext={activeContext}
              isNewTeil={isNewTeil}
              skill={skill}
            />
          ) : (
            <QuizResult
              score={score}
              total={questions.length}
              onRestart={startQuiz}
              onExit={goBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
