"use client";

import { PartyPopper, Sparkles, ThumbsUp, Zap } from "lucide-react";

interface QuizResultProps {
  score: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}

export const QuizResult = ({
  score,
  total,
  onRestart,
  onExit,
}: QuizResultProps) => {
  const percentage = Math.round((score / total) * 100);

  const getResultMessage = () => {
    if (percentage === 100)
      return (
        <span className="flex items-center justify-center gap-2">
          Perfekt! <PartyPopper className="text-yellow" size={24} />
        </span>
      );
    if (percentage >= 80)
      return (
        <span className="flex items-center justify-center gap-2">
          Sehr gut gemacht! <Sparkles className="text-yellow" size={24} />
        </span>
      );
    if (percentage >= 60)
      return (
        <span className="flex items-center justify-center gap-2">
          Gut! <ThumbsUp className="text-yellow" size={24} />
        </span>
      );
    return (
      <span className="flex items-center justify-center gap-2">
        Weiter üben! <Zap className="text-yellow" size={24} />
      </span>
    );
  };

  return (
    <div className="px-8 py-8 text-center">
      <h2 className="mb-2 text-3xl font-bold text-shadow-sm">Ergebnis</h2>
      <div className="mb-8 text-xl opacity-90">{getResultMessage()}</div>

      {/* Score Circle */}
      <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#f1c40f"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={440}
            strokeDashoffset={440 - (440 * percentage) / 100}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-s-0 inset-bs-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-shadow-sm">
            {percentage}%
          </span>
          <span className="text-sm opacity-70">
            {score} / {total}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          className="cursor-pointer rounded-full border border-white/40 px-6 py-2 transition-colors hover:bg-white/10"
          onClick={onExit}
        >
          Beenden
        </button>
        <button
          className="cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange px-8 py-3 font-semibold text-black shadow-xl shadow-yellow/20 transition-all hover:scale-105 hover:brightness-110"
          onClick={onRestart}
        >
          Nochmal
        </button>
      </div>
    </div>
  );
};
