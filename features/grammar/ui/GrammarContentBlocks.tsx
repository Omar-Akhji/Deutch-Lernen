import { Lightbulb } from "lucide-react";
import { GrammarSectionContent } from "../model/types";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface GrammarContentBlocksProps {
  blocks: GrammarSectionContent[];
  usage?: { speaker: string; text: string }[] | undefined;
  tips?: string[] | undefined;
}

const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <span>
      {parts.map((part) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={part} className="font-bold text-yellow">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </span>
  );
};

const ContentItem = ({
  item,
}: {
  item: string | { text: string; highlight?: boolean };
}) => {
  const text = typeof item === "string" ? item : item.text;
  return <FormattedText text={text} />;
};

export const GrammarContentBlocks = ({
  blocks,
  usage,
  tips,
}: GrammarContentBlocksProps) => {
  return (
    <div className="flex flex-col gap-8">
      {usage && (
        <AnimateOnScroll animation="fade-up">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow">Gebrauch</h3>
            <div className="space-y-4 rounded-3xl border border-yellow/10 bg-white/3 p-6 backdrop-blur-md">
              {usage.map((dialogue) => (
                <div
                  key={`${dialogue.speaker}-${dialogue.text}`}
                  className="flex gap-4"
                >
                  <div className="bs-10 is-10 flex shrink-0 items-center justify-center rounded-full bg-yellow/20 text-sm font-bold text-yellow">
                    {dialogue.speaker}
                  </div>
                  <div className="rounded-2xl rounded-ss-none bg-white/5 px-4 py-2 text-white/90">
                    <ContentItem item={dialogue.text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      )}

      {blocks.map((block, blockIdx) => (
        <AnimateOnScroll
          key={block.title}
          animation="fade-up"
          delay={blockIdx * 100}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow">{block.title}</h3>
            <div className="grid gap-3">
              {block.items.map((item) => {
                const text = typeof item === "string" ? item : item.text;
                return (
                  <div
                    key={text}
                    className="rounded-ie-xl border-is-6px hover:translate-s-1 border-yellow bg-white/5 p-4 text-white/90 backdrop-blur-sm transition-all hover:bg-white/8"
                    style={{
                      borderStartStartRadius: 0,
                      borderEndStartRadius: 0,
                    }}
                  >
                    <ContentItem item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      ))}

      {tips && (
        <AnimateOnScroll animation="zoom-in" delay={200}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange">Tipps</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-2 rounded-xl border border-orange/20 bg-orange/5 p-4 text-orange brightness-125"
                >
                  <Lightbulb className="shrink-0" size={18} />
                  <ContentItem item={tip} />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      )}
    </div>
  );
};
