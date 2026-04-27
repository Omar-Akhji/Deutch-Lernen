"use client";

import { Question } from "../model/types";

interface QuizQuestionProps {
  question: Question;
  currentStep: number;
  onAnswer: (answer: string | string[]) => void;
  /** The answer selected by the user (if any) */
  selectedAnswer?: string | string[] | null | undefined;
  /** Context carried forward from the previous question in the same Teil */
  activeContext?: string | undefined;
  /** Whether this question starts a new Teil (show header) */
  isNewTeil?: boolean | undefined;
  /** The skill being tested (lesen, hoeren, etc.) */
  skill?: string | undefined;

  /* Table Layout Flags */
  isTableRow?: boolean;
  hideQuestionBody?: boolean;
}

export const QuizQuestion = ({
  question,
  currentStep,
  onAnswer,
  selectedAnswer,
  activeContext,
  isNewTeil,
  skill,
  isTableRow,
  hideQuestionBody,
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

  // Strip leading number and dot from the question text to prevent duplication
  const cleanedQuestionText = question.question.replace(/^\d+\.\s*/, "");

  return (
    <div
      className={`mx-auto w-full animate-fade-in ${isTableRow ? "" : "space-y-6"}`}
    >
      {/* Teil Header - Only show if not in a table row */}
      {isNewTeil && !isTableRow && (
        <div className="mb-6 border-b-2 border-yellow/30 pb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-yellow">
              Teil {question.teil}
            </span>
            <h2 className="text-sm font-bold tracking-wide text-white/90 uppercase">
              {question.teilTitle || "Modul Lesen"}
            </h2>
          </div>
          {question.teilInstruction && (
            <p className="mt-1 text-xs leading-tight font-medium text-white/40 italic">
              {question.teilInstruction}
            </p>
          )}
        </div>
      )}

      {/* Context Text - Premium Glass Card */}
      {displayContext && !isTableRow && (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 shadow-lg backdrop-blur-md">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.02]" />
          <div className="relative p-5">
            <div className="mb-3 flex items-center gap-3">
              <h4 className="text-[9px] font-black tracking-[0.3em] text-yellow/60 uppercase">
                {contextLabel}
              </h4>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            {/* Audio Player if URL exists */}
            {question.audioUrl && (
              <div className="mb-4 flex justify-center">
                <audio
                  controls
                  className="h-10 w-full max-w-md rounded-full bg-slate-800/50 accent-yellow"
                >
                  <source src={question.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            <p className="font-serif text-sm leading-relaxed whitespace-pre-line text-white/80">
              {displayContext}
            </p>
          </div>
        </div>
      )}

      {/* Question Content */}
      {!hideQuestionBody && (
        <div
          className={
            isTableRow
              ? "w-full"
              : "group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/20 transition-all hover:bg-slate-900/40"
          }
        >
          <div className={isTableRow ? "px-4 py-3 lg:px-5" : "p-4 lg:p-5"}>
            {isTwoOption ? (
              /* Horizontal Layout - Compact Table Look for R/F */
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 items-baseline gap-3">
                  <span className="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
                    {currentStep}.
                  </span>
                  <h3 className="text-sm leading-tight font-bold text-white/90">
                    {cleanedQuestionText}
                  </h3>
                </div>
                <div className="flex flex-none gap-2">
                  {question.options?.map((option) => {
                    const isSelected = selectedAnswer === option;
                    return (
                      <button
                        key={option}
                        onClick={() => onAnswer(option)}
                        className={`${isTableRow ? "min-w-16 py-1.5 text-[9px]" : "min-w-17.5 py-2 text-[10px]"} rounded-full border font-bold tracking-tighter uppercase transition-all ${
                          isSelected
                            ? "border-yellow bg-linear-to-br from-yellow to-orange text-black shadow-lg shadow-yellow/20"
                            : "border-white/10 bg-white/5 text-white/40 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : question.type === "matching" ? (
              /* Card-Group Grid for Matching */
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
                    {currentStep}.
                  </span>
                  <h3 className="text-sm leading-tight font-bold text-white/90">
                    {cleanedQuestionText}
                  </h3>
                </div>
                <div className="grid grid-cols-6 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-11">
                  {question.options?.map((option) => {
                    const isSelected = selectedAnswer === option;
                    return (
                      <button
                        key={option}
                        onClick={() => onAnswer(option)}
                        className={`flex h-10 items-center justify-center text-xs font-black transition-all ${
                          isSelected
                            ? "bg-linear-to-br from-yellow to-orange text-black shadow-inner"
                            : "bg-slate-950/80 text-white/30 hover:bg-slate-800 hover:text-white/80"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Multi-Choice Layout - Standard Scale */
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
                    {currentStep}.
                  </span>
                  <h3 className="text-sm leading-snug font-bold text-white/90">
                    {cleanedQuestionText}
                  </h3>
                </div>
                <div className="grid gap-2">
                  {question.options?.map((option) => {
                    const isSelected = selectedAnswer === option;
                    return (
                      <button
                        key={option}
                        onClick={() => onAnswer(option)}
                        className={`group flex items-center rounded-lg border p-3 text-left transition-all ${
                          isSelected
                            ? "border-yellow/40 bg-linear-to-br from-yellow/10 to-orange/10 text-yellow shadow-md"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <span
                          className={`text-sm ${isSelected ? "font-bold text-white" : "font-medium"}`}
                        >
                          {option.replace(/^[a-c]\)\s+/i, "")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
