"use client";

import { useState, useRef, useEffect } from "react";
import type { Question } from "../model/types";
import {
  TeilHeader,
  ContextCard,
  AnswerOptions,
  AdDetailDialog,
} from "./QuizQuestionParts";

interface QuizQuestionProperties {
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
  isExample?: boolean;
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
  isExample,
}: QuizQuestionProperties) => {
  const [selectedAd, setSelectedAd] = useState<{
    letter: string;
    content: string;
  } | null>(null);
  const dialogReference = useRef<HTMLDialogElement>(null);

  // Sync dialog state (Portfolio Pattern)
  useEffect(() => {
    const dialog = dialogReference.current;
    if (!dialog) return;
    if (selectedAd !== null && !dialog.open) {
      dialog.showModal();
    } else if (selectedAd === null && dialog.open) {
      dialog.close();
    }
  }, [selectedAd]);

  const displayContext = question.context || activeContext;

  const contextLabel =
    skill === "hoeren" ? "Sie hören:"
    : skill === "lesen" ? "Lesen Sie den Text:"
    : "Text:";

  const isRichtigFalsch =
    question.options?.length === 2 &&
    question.options[0] === "Richtig" &&
    question.options[1] === "Falsch";

  // Deutsch Lernen - High-Performance React Architecture

  const isJaNein =
    question.options?.length === 2 &&
    question.options[0] === "Ja" &&
    question.options[1] === "Nein";
  const isABC =
    question.options?.length === 3 &&
    question.options[0] === "a" &&
    question.options[1] === "b" &&
    question.options[2] === "c";

  const isCompactRow = !!(isRichtigFalsch || isJaNein || (isTableRow && isABC));
  const cleanedQuestionText = question.question.replace(/^\d+\.\s*/, "");

  return (
    <article
      className={`mx-auto w-full animate-fade-in ${isTableRow ? "" : "space-y-6"}`}
    >
      {isNewTeil && !isTableRow ?
        <TeilHeader
          teil={question.teil}
          teilTitle={question.teilTitle}
          teilInstruction={question.teilInstruction}
        />
      : null}

      {displayContext && !isTableRow ?
        <div className="relative">
          <ContextCard
            context={displayContext}
            contextLabel={contextLabel}
            question={question}
            skill={skill}
            onSelectAd={setSelectedAd}
          />
        </div>
      : null}

      {hideQuestionBody ? null : (
        <div
          className={
            isTableRow ? "w-full" : (
              "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-all hover:bg-zinc-900/60"
            )
          }
        >
          <div className={isTableRow ? "px-4 py-3 lg:px-5" : "p-4 lg:p-5"}>
            {isExample ?
              <div className="mb-4 flex items-center justify-between border-b border-yellow/10 pb-3">
                <span className="text-[10px] font-bold tracking-widest text-yellow uppercase tablet:text-xs">
                  Beispiel
                </span>
                {!isTableRow && (
                  <span className="text-[10px] text-yellow/50 italic">
                    Vorgegebenes Beispiel
                  </span>
                )}
              </div>
            : null}
            <AnswerOptions
              options={question.options}
              selectedAnswer={selectedAnswer}
              onAnswer={onAnswer}
              currentStep={currentStep}
              questionText={cleanedQuestionText}
              questionType={question.type}
              isCompact={isCompactRow}
              isTableRow={isTableRow}
            />
          </div>
        </div>
      )}

      <AdDetailDialog
        dialogRef={dialogReference}
        selectedAd={selectedAd}
        onClose={() => setSelectedAd(null)}
      />
    </article>
  );
};
