import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface GrammarTableProps {
  caption?: string;
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
}

const CellContent = ({
  content,
}: {
  content: string | { text: string; highlight?: boolean };
}) => {
  const text = typeof content === "string" ? content : content.text;
  const isHighlighted = typeof content !== "string" && content.highlight;

  // Parse bolding (**text**) and primary highlight (*text*)
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <span className={isHighlighted ? "font-medium text-yellow" : ""}>
      {parts.map((part) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={part} className="font-bold text-yellow">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={part} className="font-medium text-yellow">
              {part.slice(1, -1)}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
};

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
                {data.headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 font-semibold tracking-widest text-orange/80"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.rows.map((row) => {
                const rowKey = row
                  .map((cell) => (typeof cell === "string" ? cell : cell.text))
                  .join("|");
                return (
                  <tr
                    key={rowKey}
                    className="transition-colors hover:bg-white/5"
                  >
                    {row.map((cell, j) => {
                      const cellText =
                        typeof cell === "string" ? cell : cell.text;
                      return (
                        <td
                          key={cellText}
                          className={`px-6 py-4 ${j === 0 ? "font-medium text-orange" : "text-white/90"}`}
                        >
                          <CellContent content={cell} />
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
