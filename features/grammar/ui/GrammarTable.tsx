import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { ContentItem } from "./FormattedText";

interface GrammarTableProps {
  caption?: string;
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
}

export const GrammarTable = ({ data }: { data: GrammarTableProps }) => {
  return (
    <AnimateOnScroll animation="fade-up">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
        {data.caption && (
          <div className="border-be border-white/10 bg-white/5 px-6 py-4">
            <h3 className="text-lg font-medium text-yellow text-shadow-sm">
              {data.caption}
            </h3>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base">
            <thead className="bg-white/5 text-xs text-white/60 uppercase">
              <tr>
                {data.headers.map((header, index) => (
                  <th
                    key={`header-${index}`}
                    className="px-6 py-4 font-semibold tracking-widest text-orange/80"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.rows.map((row, i) => {
                return (
                  <tr
                    key={`row-${i}`}
                    className="transition-colors hover:bg-white/5"
                  >
                    {row.map((cell, j) => {
                      return (
                        <td
                          key={`cell-${i}-${j}`}
                          className={`px-6 py-4 ${j === 0 ? "font-medium text-orange" : "text-white/90"}`}
                        >
                          <ContentItem content={cell} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AnimateOnScroll>
  );
};
