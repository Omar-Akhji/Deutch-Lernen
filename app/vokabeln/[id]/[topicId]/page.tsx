import {
  getVocabById,
  getVocabList,
  VocabularyTable,
  FamilyTree,
} from "@/features/vocabulary";
import { BackButton } from "@/shared/ui/BackButton";
import { Hero } from "@/shared/ui/Hero";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";

interface PageProps {
  params: Promise<{
    id: string;
    topicId: string;
  }>;
}

export async function generateStaticParams() {
  const vocabList = await getVocabList();
  return vocabList.flatMap((item) =>
    (item.sections || []).flatMap((section) =>
      section.topics.map((topic) => ({
        id: String(item.id),
        topicId: topic.id,
      })),
    ),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { id, topicId } = await params;
  const item = await getVocabById(id);

  // Use O(1) lookup
  const topicMap = new Map(
    item?.sections?.flatMap((s) => s.topics.map((t) => [t.id, t])) || [],
  );
  const topic = topicMap.get(topicId);

  return {
    title: topic ? `${topic.title} - ${item?.german}` : "Vokabel Thema",
    description: `Lerne Vokabeln zum Thema ${topic?.title || ""}.`,
  };
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { id, topicId } = await params;
  const item = await getVocabById(id);

  // Build a topic map once for O(1) lookups
  const topicMap = new Map(
    item?.sections?.flatMap((s) =>
      s.topics.map((t) => [t.id, { topic: t, section: s }]),
    ) || [],
  );

  const { topic, section } = topicMap.get(topicId) || {};

  if (!item || !topic) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Thema nicht gefunden</h1>
        <BackButton />
      </div>
    );
  }

  const isFamilyTree = topicId === "stammbaum" && topic.familyTree;

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <Hero
          key={`topic-${topic.id}`}
          title={topic.title}
          description={section?.title || item.german}
          category={item.category}
        />

        {isFamilyTree ?
          <>
            {/* Family Tree Section */}
            <AnimateOnScroll
              as="section"
              animation="fade-up"
              className="mt-8 rounded-3xl border border-(--glass-border) bg-card p-8 shadow-sm"
            >
              <FamilyTree members={topic.familyTree!} />
            </AnimateOnScroll>

            {/* Separate Vocabulary Table Section */}
            <AnimateOnScroll
              as="section"
              animation="fade-up"
              delay={200}
              className="mt-8"
            >
              <VocabularyTable words={topic.words || []} />
            </AnimateOnScroll>
          </>
        : topic.words && topic.words.length > 0 ?
          <AnimateOnScroll as="section" animation="fade-up" className="mt-8">
            <VocabularyTable words={topic.words} />
          </AnimateOnScroll>
        : <AnimateOnScroll
            as="section"
            animation="fade-up"
            className="mt-8 rounded-3xl border border-(--glass-border) bg-card p-8 shadow-sm"
          >
            <div className="text-center text-text-muted">
              <p>Noch keine Vokabeln für {topic.title} eingetragen.</p>
            </div>
          </AnimateOnScroll>
        }
      </main>
    </div>
  );
}
