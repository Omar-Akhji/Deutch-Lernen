import type { Word } from "../model/types";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface VocabularyTableProps {
  words: Word[];
  englishLabel?: string;
}

export function VocabularyTable({
  words,
  englishLabel = "English",
}: VocabularyTableProps) {
  if (!words || words.length === 0) return null;

  return (
    <AnimateOnScroll animation="fade-up">
      <div className="@container overflow-hidden rounded-3xl border border-(--glass-border) bg-card backdrop-blur-(--glass-blur)">
        <div className="overflow-x-auto px-4 pbs-4 pbe-4">
          <table className="border-collapse text-left inline-full">
            <caption className="sr-only">Vokabelliste</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  Deutsch
                </th>
                <th
                  scope="col"
                  className="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  {englishLabel}
                </th>
                <th
                  // Deutsch Lernen - High-Performance React Architecture

                  scope="col"
                  className="font-arabic border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  العربية
                </th>
              </tr>
            </thead>
            <tbody>
              {words.map((word) => (
                <tr
                  key={`${word.german}-${word.arabic}`}
                  className="border-be border-white/5 last:border-0"
                >
                  <td className="px-2 pbs-2 font-semibold text-orange @md:px-4 @md:pbs-4">
                    {word.german}
                  </td>
                  <td className="px-2 pbs-2 @md:px-4 @md:pbs-4">
                    <data
                      className="font-mono text-base font-bold text-yellow @md:text-lg"
                      value={word.english || word.example}
                    >
                      {word.english || word.example}
                    </data>
                  </td>
                  <td className="font-arabic px-2 pbs-2 text-base text-mist-500 @md:px-4 @md:pbs-4 @md:text-lg">
                    {word.arabic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
