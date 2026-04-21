"use client";

import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenLine,
  MessageSquare,
  BarChart,
  Puzzle,
  LucideIcon,
} from "lucide-react";
import { Hero } from "@/shared/ui/Hero";
import { Card } from "@/shared/ui/Card";

interface ModelTestsViewProps {
  level: string;
}

interface Skill {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  {
    id: "lesen",
    title: "Lesen",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "hoeren",
    title: "Hören",
    icon: Headphones,
    color: "from-emerald-500 to-green-400",
  },
  {
    id: "schreiben",
    title: "Schreiben",
    icon: PenLine,
    color: "from-orange-500 to-red-400",
  },
  {
    id: "sprechen",
    title: "Sprechen",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-400",
  },
];

const modelTests = [1, 2, 3];

export default function ModelTestsView({ level }: ModelTestsViewProps) {
  const stats = [
    {
      label: "Niveau",
      value: level.toUpperCase(),
      icon: <BarChart size={18} />,
    },
    { label: "Module", value: "4", icon: <Puzzle size={18} /> },
  ];

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <Hero
          title={`Modelltests ${level.toUpperCase()}`}
          description="Wähle einen Fertigkeitsbereich und einen Modelltest aus."
          category="Prüfungsvorbereitung"
          variant="glass"
          stats={stats}
        />

        <div className="mt-8 mb-12 flex justify-center">
          <Link
            href={`/pruefung/${level}`}
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm transition-colors hover:bg-white/10"
          >
            <span>←</span> Zurück zur Übersicht
          </Link>
        </div>

        <div className="grid gap-12">
          {skills.map((skill) => (
            <section key={skill.id}>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                <skill.icon size={32} className="text-white" />
                <span className="text-white">{skill.title}</span>
              </h2>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {modelTests.map((testId) => (
                  <Card
                    key={`${skill.id}-${testId}`}
                    title={`Modelltest ${testId}`}
                    subtitle="Übung"
                    description={`Vollständiger ${skill.title}-Teil für das ${level.toUpperCase()}-Zertifikat.`}
                    href={`/quiz/${level}/${skill.id}/${testId}`}
                    gradient={`bg-linear-to-br ${skill.color}`}
                    variant="default"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
