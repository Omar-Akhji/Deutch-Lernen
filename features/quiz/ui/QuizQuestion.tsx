"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
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
  const [selectedAd, setSelectedAd] = useState<{
    letter: string;
    content: string;
  } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sync dialog state (Portfolio Pattern)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedAd !== null && !dialog.open) {
      dialog.showModal();
    } else if (selectedAd === null && dialog.open) {
      dialog.close();
    }
  }, [selectedAd]);

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
  const isABC =
    question.options?.length === 3 &&
    question.options[0] === "a" &&
    question.options[1] === "b" &&
    question.options[2] === "c";

  const isCompactRow = isRichtigFalsch || isJaNein || (isTableRow && isABC);

  // Strip leading number and dot from the question text to prevent duplication
  const cleanedQuestionText = question.question.replace(/^\d+\.\s*/, "");

  return (
    <article
      className={`mx-auto w-full animate-fade-in ${isTableRow ? "" : "space-y-6"}`}
    >
      {/* Teil Header - Only show if not in a table row */}
      {isNewTeil && !isTableRow && (
        <header className="mb-6 border-b-2 border-yellow/30 pb-2">
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
        </header>
      )}

      {/* Context Text - Premium Glass Card or Ad Cards for Teil 3 */}
      {displayContext && !isTableRow && (
        <div className="relative">
          {skill === "lesen" && question.teil === 3 ? (
            <div className="space-y-6">
              {/* Instructions */}
              <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-xs font-medium text-white/50 italic">
                {displayContext.split(/\n[a-j]\)/)[0]}
              </div>

              {/* Ads Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {displayContext
                  .split(/\n(?=[a-j]\))/)
                  .slice(1)
                  .map((ad) => {
                    const letter = ad.match(/^([a-j])\)/)?.[1];
                    const content = ad.replace(/^[a-j]\)\s*/, "");
                    if (!letter) return null;

                    return (
                      <button
                        key={letter}
                        type="button"
                        onClick={() => setSelectedAd({ letter, content })}
                        className="group relative min-h-30 cursor-pointer rounded-lg border border-white/10 bg-slate-900/40 p-5 pt-9 text-left text-white/90 shadow-lg transition-all hover:bg-slate-800/60 focus:ring-2 focus:ring-yellow/50 focus:outline-hidden active:scale-95"
                      >
                        <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-yellow px-2.5 py-1 text-[10px] font-black text-black uppercase shadow-sm">
                          {letter}
                        </div>
                        <p className="font-serif text-sm leading-relaxed text-white/80">
                          {content}
                        </p>
                        {/* Decorative texture */}
                        <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]" />
                      </button>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 shadow-lg backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.02]" />
              <div className="relative p-5">
                <div className="mb-3 flex items-center gap-3">
                  <h4 className="text-[9px] font-black tracking-[0.3em] text-yellow/60 uppercase">
                    {contextLabel}
                  </h4>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <p className="mb-4 font-serif text-sm leading-relaxed whitespace-pre-line text-white/80">
                  {displayContext}
                </p>
                {/* Audio Player if URL exists */}
                {question.audioUrl && (
                  <div className="flex justify-center">
                    <audio
                      controls
                      className="h-10 w-full max-w-md rounded-full bg-slate-800/50 accent-yellow"
                    >
                      <source src={question.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>
          )}
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
            {isCompactRow ? (
              /* Horizontal Layout - Compact Table Look for R/F or A/B/C */
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
      {/* Ad Detail Modal - Ultimate Portfolio Aesthetic */}
      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto flex h-max max-h-[90vh] w-max max-w-[min(90vw,32rem)] scale-95 flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-slate-950 p-0 text-white opacity-0 shadow-2xl transition-[opacity,transform,overlay,display] duration-250 ease-in-out [scrollbar-width:none] backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:transition-[background-color,backdrop-filter,overlay,display] backdrop:duration-250 open:scale-100 open:opacity-100 starting:open:scale-95 starting:open:opacity-0"
        onClose={() => setSelectedAd(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setSelectedAd(null);
        }}
      >
        {selectedAd && (
          <div className="relative p-6 md:p-8">
            {/* Close Button (Portfolio Style) */}
            <button
              className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white/10 bg-slate-900 text-white/40 transition-colors hover:text-yellow"
              onClick={() => setSelectedAd(null)}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Compact Identifier Badge */}
            <div className="mb-6 flex justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/10 bg-linear-to-br from-yellow/10 to-orange/10 shadow-lg shadow-yellow/5">
                <span className="bg-linear-to-br from-yellow to-orange bg-clip-text text-xl font-black text-transparent uppercase">
                  {selectedAd.letter}
                </span>
              </div>
            </div>

            {/* Ad Content Body */}
            <p className="font-serif text-lg leading-relaxed font-light text-white/90">
              {selectedAd.content}
            </p>

            {/* Footer Action (Portfolio Style) */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setSelectedAd(null)}
                className="w-full cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange py-3 text-sm font-bold text-black transition-all hover:brightness-110 active:scale-95"
              >
                Verstanden
              </button>
            </div>

            {/* Decorative paper texture */}
            <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]" />
          </div>
        )}
      </dialog>
    </article>
  );
};
