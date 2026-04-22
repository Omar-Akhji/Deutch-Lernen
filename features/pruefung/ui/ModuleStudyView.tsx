"use client";

import { ExamLevel, RedemittelCategory, PhraseGroup } from "../model/types";
import { Hero } from "@/shared/ui/Hero";
import { Clock, CheckCircle2, MessageCircle, ChevronDown } from "lucide-react";
import { ThemenSection } from "@/features/themen/ui/ThemenSection";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { CopyButton } from "@/shared/ui/CopyButton";
import { useState } from "react";

interface ModuleStudyViewProps {
  level: string;
  module: "sprechen" | "schreiben";
  examData: ExamLevel;
  redemittel: RedemittelCategory;
}

export function ModuleStudyView({
  level,
  module,
  examData,
  redemittel,
}: ModuleStudyViewProps) {
  const section = examData.sections.find(
    (s) => s.id === `${level.toLowerCase()}-${module}`,
  );

  if (!section) return <div>Modul nicht gefunden</div>;

  // Filter redemittel for this module
  const filteredRedemittel = Object.entries(redemittel).filter(([category]) => {
    const cat = category.toLowerCase();
    const isVocab =
      cat.includes("konnektoren") ||
      cat.includes("zeitausdrücke") ||
      cat.includes("wortschatz");

    if (module === "sprechen") {
      return cat.includes("sprechen") || isVocab;
    } else {
      return cat.includes("schreiben") || isVocab;
    }
  });

  return (
    <div className="space-y-12 pbe-20">
      <Hero
        title={`${examData.level} ${section.title}`}
        description={section.description}
        category="Lernmodus"
        variant="glass"
        stats={[
          {
            label: "Dauer",
            value: section.duration,
            icon: <Clock size={18} />,
          },
          {
            label: "Punkte",
            value: `${section.points} Pkt.`,
            icon: <CheckCircle2 size={18} />,
          },
        ]}
      />

      <div className="space-y-16">
        {section.parts.map((part) => {
          const partNum = part.name.match(/\d+/)?.[0];
          const partRedemittel = filteredRedemittel.filter(([category]) =>
            category
              .toLowerCase()
              .includes(`${section.title.toLowerCase()} ${partNum}`),
          );

          return (
            <section key={part.name} className="relative space-y-8">
              <AnimateOnScroll animation="fade-right">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
                        {part.name}
                      </span>
                      <h2 className="text-3xl font-bold text-white">
                        {part.taskType}
                      </h2>
                    </div>
                    {part.description && (
                      <p className="text-slate-400">{part.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                      <CheckCircle2 size={16} className="text-amber-400" />
                      {part.points} Pkt.
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <div className="space-y-12">
                {partRedemittel.map(([category, groups], idx) => (
                  <AnimateOnScroll
                    key={category}
                    animation="fade-up"
                    delay={idx * 100}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="h-0.75 flex-1 rounded-full bg-white/10" />
                        <h3 className="text-sm font-black tracking-[0.2em] text-slate-500 uppercase">
                          {category.split(":").pop()?.trim()}
                        </h3>
                        <div className="h-0.75 flex-1 rounded-full bg-white/10" />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                          <h3 className="flex items-center gap-2 text-sm font-bold tracking-widest text-amber-400 uppercase">
                            <CheckCircle2
                              size={16}
                              className="text-amber-400"
                            />
                            Struktur-Checkliste & Redemittel
                          </h3>
                        </div>
                        <div className="divide-y divide-white/10">
                          {groups
                            .flatMap((group) => {
                              if (
                                group.phrases.some((p) => typeof p !== "string")
                              ) {
                                return group.phrases
                                  .map((p) => {
                                    if (typeof p === "string") return null;
                                    return {
                                      ...p,
                                      label: `${group.label}: ${p.label}`,
                                    };
                                  })
                                  .filter(Boolean) as PhraseGroup[];
                              }
                              return [group];
                            })
                            .map((group, groupIdx) => (
                              <PhraseGroupCard
                                key={groupIdx}
                                group={group}
                                isChecklistItem
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          );
        })}

        {/* Global Vocabulary / Connectors */}
        {filteredRedemittel.some(
          ([cat]) =>
            cat.toLowerCase().includes("konnektoren") ||
            cat.toLowerCase().includes("zeitausdrücke") ||
            cat.toLowerCase().includes("wortschatz"),
        ) && (
          <section className="border-t border-white/10 pt-16">
            <AnimateOnScroll animation="fade-right">
              <h2 className="mbe-8 flex items-center gap-3 text-2xl font-bold text-white">
                <MessageCircle className="text-amber-400" size={24} />
                Wortschatz & Konnektoren
              </h2>
            </AnimateOnScroll>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRedemittel
                .filter(
                  ([cat]) =>
                    cat.toLowerCase().includes("konnektoren") ||
                    cat.toLowerCase().includes("zeitausdrücke") ||
                    cat.toLowerCase().includes("wortschatz"),
                )
                .map(([category, groups], idx) => (
                  <AnimateOnScroll
                    key={category}
                    animation="fade-up"
                    delay={idx * 100}
                  >
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                        {category}
                      </h4>
                      <div className="space-y-4">
                        {groups.map((group, gIdx) => (
                          <PhraseGroupCard key={gIdx} group={group} />
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
            </div>
          </section>
        )}
      </div>

      {/* Topics Integration */}
      <section className="border-t border-white/10 pt-12">
        <div className="mb-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-2 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
              Sprechen & Schreiben Themen
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="max-w-2xl text-lg text-slate-400">
              Meistere die 58 wichtigsten Prüfungsthemen mit pro/kontra
              Argumenten und gezieltem Wortschatz.
            </p>
          </AnimateOnScroll>
        </div>
        <ThemenSection isEmbedded />
      </section>
    </div>
  );
}

function PhraseGroupCard({
  group,
  isChecklistItem = false,
}: {
  group: PhraseGroup;
  isChecklistItem?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group transition-all duration-300 ${
        isChecklistItem
          ? "bg-transparent"
          : "overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      {/* Header - Always Visible */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors select-none focus:outline-none ${
          isChecklistItem
            ? "hover:bg-white/5 focus-visible:bg-white/10"
            : "hover:bg-white/5 focus-visible:bg-white/10"
        }`}
      >
        <div className="flex items-center gap-4">
          {group.label.match(/\d+/) && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/20 text-xs font-black text-amber-400 backdrop-blur-md">
              {group.label.match(/\d+/)?.[0]}
            </span>
          )}
          <h4
            className={`text-lg font-bold transition-colors ${
              isChecklistItem
                ? "text-slate-200 group-hover:text-amber-400"
                : "text-white group-hover:text-amber-400"
            }`}
          >
            {group.label.replace(/^.*?\d+\s*[·–:]\s*/, "")}
          </h4>
          {group.badge && (
            <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-400 uppercase">
              {group.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown
              size={20}
              className={
                isChecklistItem ? "text-amber-400/50" : "text-white/30"
              }
            />
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`p-6 ${
            isChecklistItem
              ? "border-t border-white/10 bg-white/2"
              : "border-t border-white/5 bg-black/20"
          }`}
        >
          <RenderPhrases phrases={group.phrases} />
        </div>
      </div>
    </div>
  );
}

function RenderPhrases({ phrases }: { phrases: (string | PhraseGroup)[] }) {
  return (
    <div className="divide-y divide-white/5 overflow-hidden rounded-xl border border-white/5 bg-black/20">
      {phrases.map((item, idx) => {
        if (typeof item === "string") {
          return (
            <div
              key={idx}
              className="group/item flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/3"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/30 transition-colors group-hover/item:bg-amber-400" />
                </div>
                <p className="text-[15px] leading-relaxed text-slate-300 transition-colors group-hover/item:text-white">
                  {item}
                </p>
              </div>
              <div
                className="opacity-0 transition-opacity group-hover/item:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                <CopyButton
                  text={item}
                  className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
