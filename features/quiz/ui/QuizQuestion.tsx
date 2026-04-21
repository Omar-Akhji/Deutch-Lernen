"use client";

import { Question } from "../model/types";

interface QuizQuestionProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onAnswer: (answer: string) => void;
  /** Context carried forward from the previous question in the same Teil */
  activeContext?: string | undefined;
  /** Whether this question starts a new Teil (show header) */
  isNewTeil?: boolean | undefined;
  /** The skill being tested (lesen, hoeren, etc.) */
  skill?: string | undefined;
}

export const QuizQuestion = ({
  question,
  currentStep,
  totalSteps,
  onAnswer,
  activeContext,
  isNewTeil,
  skill,
}: QuizQuestionProps) => {
  const displayContext = question.context || activeContext;

  // Skill-specific context label
  const contextLabel =
    skill === "hoeren"
      ? "Sie hören:"
      : skill === "lesen"
        ? "Lesen Sie den Text:"
        : "Text:";

  // Determine the answer style based on question options
  const isRichtigFalsch =
    question.options?.length === 2 &&
    question.options[0] === "Richtig" &&
    question.options[1] === "Falsch";
  const isJaNein =
    question.options?.length === 2 &&
    question.options[0] === "Ja" &&
    question.options[1] === "Nein";
  const isTwoOption = isRichtigFalsch || isJaNein;

  return (
    <div className="mx-auto inline-full max-inline-2xl">
      {/* Teil Header (shown when entering a new Teil) */}
      {isNewTeil && question.teilTitle && (
        <div className="mbe-6 rounded-2xl border-2 border-yellow/40 bg-linear-to-r from-yellow/10 to-orange/10 px-5 pbs-5 pbe-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 min-h-10 w-10 min-w-10 flex-none items-center justify-center rounded-full bg-yellow/20 text-lg font-bold text-yellow">
              {question.teil}
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">
                {question.teilTitle}
              </h2>
              {question.teilInstruction && (
                <p className="mbs-1 text-sm leading-relaxed text-mist-500 italic">
                  {question.teilInstruction}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="mbe-4 flex items-center justify-between text-sm opacity-80">
        <span className="rounded-full border border-white/20 bg-white/5 px-3 pbs-1 pbe-1">
          Aufgabe {currentStep} von {totalSteps}
        </span>
        <div className="bs-2 is-32 overflow-hidden rounded-full bg-white/20">
          <div
            className="bs-full bg-linear-to-r from-yellow to-orange transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Context Text */}
      {displayContext && (
        <div className="mbe-6 rounded-xl border border-white/10 bg-white/5 px-5 pbs-5 pbe-5 text-left">
          <h4 className="mbe-2 text-xs font-semibold tracking-wider text-yellow/80 uppercase">
            {contextLabel}
          </h4>
          <p className="text-base leading-relaxed whitespace-pre-line text-white/90">
            {displayContext}
          </p>
        </div>
      )}

      {/* Question */}
      <h3 className="mbe-6 flex items-center justify-center text-center text-xl font-semibold min-block-16">
        {question.question}
      </h3>

      {/* Options */}
      {question.type === "matching" ? (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {question.options?.map((option) => (
            <button
              key={option}
              className="group hover:translate-bs-0.5 flex aspect-square cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-bold text-white transition-all hover:border-yellow hover:bg-yellow/10 starting:scale-95 starting:opacity-0"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div
          className={
            isTwoOption ? "grid grid-cols-2 gap-4" : "flex flex-col gap-3"
          }
        >
          {question.options?.map((option, index) => (
            <button
              key={option}
              className={`starting:translate-is-4 group hover:translate-bs-0.5 flex cursor-pointer items-center rounded-full border border-white/10 bg-white/5 px-3 pbs-3 pbe-3 text-left text-white transition-all inline-full hover:border-yellow hover:bg-yellow/10 starting:opacity-0 ${
                isTwoOption ? "justify-center text-center" : ""
              }`}
              onClick={() => onAnswer(option)}
            >
              {!isTwoOption && (
                <span className="mis-4 flex flex-none items-center justify-center rounded-full border border-white/50 text-sm transition-colors block-8 inline-8 min-block-8 min-inline-8 group-hover:bg-white group-hover:text-black">
                  {String.fromCharCode(65 + index)}
                </span>
              )}
              <span className={`text-lg ${isTwoOption ? "font-semibold" : ""}`}>
                {option}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
