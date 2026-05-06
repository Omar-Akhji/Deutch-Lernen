"use client";

import { useRouter } from "next/navigation";
import { QuizStart } from "./QuizStart";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";
import { useQuiz } from "../lib/useQuiz";

// Types
import type { Question } from "../model/types";

interface QuizViewProps {
  level: string;
  skill: string;
  testId: string;
  initialQuestions: Question[];
}

export default function QuizView({
  level,
  skill,
  testId,
  initialQuestions,
}: QuizViewProps) {
  const { push } = useRouter();
  const questions = initialQuestions;

  const {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    userAnswers,
    startQuiz,
    handleAnswer,
    finishQuiz,
  } = useQuiz(questions);

  const goBack = () => {
    push(`/pruefung/${level}/modelltests`);
  };

  const skillTitle =
    {
      lesen: "Lesen",
      hoeren: "Hören",
      schreiben: "Schreiben",
      sprechen: "Sprechen",
    }[skill] || skill;

  if (!questions.length)
    return (
      <div className="py-12 text-center">
        <p>Keine Fragen gefunden.</p>
      </div>
    );

  return (
    <main className="relative min-h-screen py-4">
      <article className="relative z-10 flex w-full flex-col rounded-2xl border border-white/10 bg-card px-4 py-6 shadow-2xl backdrop-blur-xl">
        <header className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
          <h1 className="text-sm font-bold tracking-widest text-white/50 uppercase">
            {skillTitle} – Modelltest {testId}
          </h1>
          <div className="font-mono text-[10px] text-white/30">
            Level: {level.toUpperCase()}
          </div>
        </header>

        <div className="flex flex-1 flex-col">
          {!isStarted ?
            <QuizStart
              title={`${skillTitle} – Übungsprüfung ${testId}`}
              description={`Bereiten Sie sich auf das Goethe/ÖSD Zertifikat ${level.toUpperCase()} vor. Dieses Modul umfasst ${questions.length} Aufgaben.`}
              questionCount={questions.length}
              duration={skill === "lesen" ? 65 : 40}
              onStart={startQuiz}
            />
          : !isFinished ?
            <div className="flex flex-col gap-4">
              {skill === "lesen" || skill === "hoeren" ?
                <div className="flex flex-col gap-6">
                  {/* Grouping Logic for Reading/Listening Table Look */}
                  {Array.from(new Set(questions.map((q) => q.teil))).map(
                    (teilNum, teilIdx) => {
                      const allInTeil = questions.filter(
                        (q) => q.teil === teilNum,
                      );
                      const examples = allInTeil.filter((q) => q.id === 0);
                      const group = allInTeil.filter((q) => q.id !== 0);
                      const firstQuestion = allInTeil[0]!;
                      const firstIdx = questions.indexOf(firstQuestion);
                      const isGroupedTeil =
                        skill === "lesen" ?
                          teilNum === 1 || teilNum === 4
                        : teilNum === 3 || teilNum === 4;

                      // Find Context
                      let activeCtx: string | undefined = firstQuestion.context;
                      if (!activeCtx) {
                        for (let i = firstIdx - 1; i >= 0; i--) {
                          const prevQ = questions[i];
                          if (
                            prevQ &&
                            prevQ.teil === teilNum &&
                            prevQ.context
                          ) {
                            activeCtx = prevQ.context;
                            break;
                          }
                        }
                      }

                      return (
                        <section
                          key={teilNum ?? `teil-${teilIdx}`}
                          className="space-y-8"
                        >
                          <div
                            className={
                              isGroupedTeil ? "space-y-3" : (
                                "flex flex-col gap-1"
                              )
                            }
                          >
                            {/* 1. Header & Context */}
                            <QuizQuestion
                              key={`header-${teilNum}-${firstIdx}`}
                              question={
                                isGroupedTeil ? firstQuestion : (
                                  {
                                    ...firstQuestion,
                                    context: "",
                                    audioUrl: "",
                                  }
                                )
                              }
                              currentStep={firstIdx + 1}
                              onAnswer={() => {}}
                              skill={skill}
                              isNewTeil
                              // Deutsch Lernen - High-Performance React Architecture

                              activeContext={
                                isGroupedTeil ? activeCtx : undefined
                              }
                              hideQuestionBody
                            />

                            {/* 2. Questions */}
                            {isGroupedTeil ?
                              /* Grouped in ONE TABLE (Card) */
                              <div
                                key={`group-${teilNum}`}
                                className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/10"
                              >
                                {examples.length > 0 ?
                                  <div className="border-b border-yellow/20 bg-yellow/5 p-4">
                                    <div className="mb-2 flex items-center justify-between">
                                      <span className="text-[10px] font-bold tracking-widest text-yellow uppercase">
                                        Beispiel
                                      </span>
                                    </div>
                                    <QuizQuestion
                                      question={examples[0]!}
                                      currentStep={0}
                                      onAnswer={() => {}}
                                      skill={skill}
                                      isTableRow
                                      selectedAnswer={
                                        examples[0]!.correctAnswer
                                      }
                                    />
                                  </div>
                                : null}
                                {group.map((q, idx) => (
                                  <div
                                    key={q.id || `q-${idx}`}
                                    className={
                                      idx < group.length - 1 ?
                                        "border-b border-white/5"
                                      : ""
                                    }
                                  >
                                    <QuizQuestion
                                      question={q}
                                      currentStep={q.id}
                                      onAnswer={(ans) =>
                                        handleAnswer(ans, questions.indexOf(q))
                                      }
                                      selectedAnswer={
                                        userAnswers[questions.indexOf(q)]
                                      }
                                      isTableRow
                                      skill={skill}
                                    />
                                  </div>
                                ))}
                              </div>
                            : /* Standard Individual Cards */
                              <div className="space-y-6">
                                {examples.length > 0 ?
                                  <div className="rounded-2xl border border-yellow/20 bg-yellow/5 p-6 shadow-lg">
                                    <div className="mb-4 flex items-center justify-between border-b border-yellow/10 pb-3">
                                      <span className="text-sm font-bold tracking-widest text-yellow uppercase">
                                        Beispiel
                                      </span>
                                      <span className="text-xs text-yellow/50 italic">
                                        Vorgegebenes Beispiel
                                      </span>
                                    </div>
                                    <QuizQuestion
                                      question={examples[0]!}
                                      currentStep={0}
                                      onAnswer={() => {}}
                                      skill={skill}
                                      selectedAnswer={
                                        examples[0]!.correctAnswer
                                      }
                                    />
                                  </div>
                                : null}
                                {group.map((q, idx) => (
                                  <QuizQuestion
                                    key={q.id || `q-${idx}`}
                                    question={q}
                                    currentStep={q.id}
                                    onAnswer={(ans) =>
                                      handleAnswer(ans, questions.indexOf(q))
                                    }
                                    selectedAnswer={
                                      userAnswers[questions.indexOf(q)]
                                    }
                                    skill={skill}
                                  />
                                ))}
                              </div>
                            }
                          </div>

                          {/* Decorative Separator between Teils */}
                          {(
                            questions.indexOf(group[group.length - 1]!) <
                            questions.length - 1
                          ) ?
                            <div
                              key={`sep-${teilNum}`}
                              className="flex justify-center py-10"
                            >
                              <div className="h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20" />
                            </div>
                          : null}
                        </section>
                      );
                    },
                  )}
                  <div className="mt-4 flex justify-center border-t border-white/10 pt-4">
                    <button
                      onClick={finishQuiz}
                      className="rounded border border-yellow/50 bg-yellow/10 px-8 py-2 text-sm font-bold text-yellow transition-all hover:bg-yellow hover:text-black"
                    >
                      Prüfung beenden
                    </button>
                  </div>
                </div>
              : <QuizQuestion
                  question={currentQuestion!}
                  currentStep={currentQuestionIndex + 1}
                  onAnswer={handleAnswer}
                  selectedAnswer={userAnswers[currentQuestionIndex]}
                />
              }
            </div>
          : <QuizResult
              score={score}
              total={questions.length}
              onRestart={startQuiz}
              onExit={goBack}
            />
          }
        </div>
      </article>
    </main>
  );
}
