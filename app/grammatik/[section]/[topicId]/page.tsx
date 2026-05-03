import { BookOpen, Languages } from "lucide-react";
import {
  getGrammarSections,
  getGrammarSection,
  getGrammarTopic,
} from "@/features/grammar";
import { Hero } from "@/shared/ui/Hero";
import { BackButton } from "@/shared/ui/BackButton";
import { getGradient } from "@/shared/lib/utils";
import { GrammarTable } from "@/features/grammar/ui/GrammarTable";
import { GrammarContentBlocks } from "@/features/grammar/ui/GrammarContentBlocks";

interface PageProps {
  params: Promise<{
    section: string;
    topicId: string;
  }>;
}

export async function generateStaticParams() {
  const sections = await getGrammarSections();
  return sections.flatMap((section) =>
    section.topics.map((topic) => ({
      section: section.id,
      topicId: topic.id,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { section, topicId } = await params;
  const currentTopic = await getGrammarTopic(section, topicId);

  return {
    title:
      currentTopic ? `${currentTopic.title} - Grammatik` : "Grammatik Thema",
    description: currentTopic?.description || "Lerne deutsche Grammatik.",
  };
}

export default async function GrammatikDetailPage({ params }: PageProps) {
  const { section, topicId } = await params;

  const [currentSection, currentTopic] = await Promise.all([
    getGrammarSection(section),
    getGrammarTopic(section, topicId),
  ]);

  if (!currentTopic || !currentSection) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Thema nicht gefunden</h1>
        <p className="mb-8 text-text-muted">
          Das gewünschte Grammatikthema existiert nicht.
        </p>
        <BackButton />
      </div>
    );
  }

  return (
    <div
      key="grammar-detail-v2-forced-spacing"
      className="relative min-h-screen py-8"
    >
      <main>
        <Hero
          title={currentTopic.title}
          description={currentTopic.description}
          category={currentTopic.category}
          stats={[
            {
              label: "Thema",
              value: (
                <span className="rounded-full border border-yellow/30 bg-yellow/10 px-3 py-1 text-sm font-medium text-yellow">
                  {currentTopic.number}
                </span>
              ),
            },
            { label: "Niveau", value: "B1", icon: <Languages size={18} /> },
          ]}
        />

        {/* Main Table */}
        {currentTopic.hasTable && currentTopic.tableData ?
          <section className="mb-16">
            <GrammarTable data={currentTopic.tableData} />
          </section>
        : null}

        {/* Main Content */}
        {currentTopic.content || currentTopic.usage ?
          <section className="mb-16">
            <GrammarContentBlocks
              blocks={currentTopic.content || []}
              usage={currentTopic.usage}
            />
          </section>
        : null}

        {/* Subtopics */}
        {currentTopic.subtopics ?
          <section className="mb-16">
            <h2 className="mb-12 flex items-center gap-3 text-xl font-bold text-text tablet:gap-4 tablet:text-2xl">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12">
                <BookOpen className="size-5 tablet:size-6" strokeWidth={2} />
              </span>
              Unterthemen
            </h2>
            <div className="grid gap-10">
              {currentTopic.subtopics.map((subtopic, index) => (
                <article
                  key={subtopic.id}
                  className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card"
                >
                  <header
                    className="flex flex-row items-center gap-4 p-5"
                    style={{
                      background: getGradient(
                        index + 1,
                        currentSection.gradients,
                      ),
                    }}
                  >
                    <span className="rounded-md bg-white/20 px-2.5 py-1 text-xs font-bold text-white">
                      {subtopic.number}
                    </span>
                    <h3 className="m-0 text-lg text-white tablet:text-xl">
                      {subtopic.title}
                    </h3>
                  </header>
                  <div className="p-6">
                    <p className="m-0 mb-8 leading-relaxed text-text-muted">
                      {subtopic.description}
                    </p>

                    {subtopic.hasTable && subtopic.tableData ?
                      <div className="mb-12">
                        <GrammarTable data={subtopic.tableData} />
                      </div>
                    : null}

                    {subtopic.content || subtopic.usage || subtopic.tips ?
                      <GrammarContentBlocks
                        blocks={subtopic.content || []}
                        usage={subtopic.usage}
                        tips={subtopic.tips}
                      />
                    : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        : null}

        {/* Topic-level Tips (at the bottom, after all subtopics) */}
        {currentTopic.tips ?
          <section className="mb-16">
            <GrammarContentBlocks blocks={[]} tips={currentTopic.tips} />
          </section>
        : null}
      </main>
    </div>
  );
}
