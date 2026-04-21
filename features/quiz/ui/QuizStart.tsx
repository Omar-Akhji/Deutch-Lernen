"use client";

import { ClipboardList } from "lucide-react";

interface QuizStartProps {
  title: string;
  description: string;
  questionCount: number;
  duration: number;
  onStart: () => void;
}

export const QuizStart = ({
  title,
  description,
  questionCount,
  duration,
  onStart,
}: QuizStartProps) => {
  return (
    <div className="mx-auto px-8 pbs-8 pbe-8 text-center max-inline-lg">
      {/* Exam badge */}
      <div className="mx-auto mbe-6 inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-4 pbs-1.5 pbe-1.5 text-sm font-medium text-yellow">
        <ClipboardList size={16} /> Goethe-Zertifikat
      </div>

      <h2 className="mbe-3 text-3xl font-bold text-shadow-sm">{title}</h2>
      <p className="mbe-8 text-base leading-relaxed text-mist-500">
        {description}
      </p>

      {/* Exam info cards */}
      <div className="mbe-8 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-mist-900/50 px-4 pbs-4 pbe-4 shadow-sm">
          <div className="text-2xl font-bold text-yellow">{questionCount}</div>
          <div className="text-xs tracking-wider text-mist-500 uppercase">
            Aufgaben
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-mist-900/50 px-4 pbs-4 pbe-4 shadow-sm">
          <div className="text-2xl font-bold text-yellow">{duration}</div>
          <div className="text-xs tracking-wider text-mist-500 uppercase">
            Minuten (Prüfung)
          </div>
        </div>
      </div>

      <button
        className="cursor-pointer rounded-full bg-linear-to-r from-yellow to-orange px-8 pbs-4 pbe-4 text-lg font-bold text-black shadow-xl shadow-yellow/20 transition-all inline-full hover:scale-[1.02] hover:brightness-110"
        onClick={onStart}
      >
        Prüfung Starten
      </button>
    </div>
  );
};
