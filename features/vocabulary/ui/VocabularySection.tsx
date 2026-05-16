import { CardWithModal } from "@/shared/ui/CardWithModal";
import { AnimateOnScroll } from "@/shared/ui/AnimateOnScroll";
import { getGradient } from "@/shared/lib/utilities";
import { VOCAB_GRADIENTS } from "@/shared/lib/gradients";
import { getVocabList } from "../api/services";

export const VocabularySection = async () => {
  const { data: vocabList } = await getVocabList();

  return (
    <section
      className="py-4"
      aria-labelledby="vocab-heading"
    >
      <h2
        id="vocab-heading"
        className="sr-only"
      >
        Vocabulary Topics
      </h2>
      <ul
        className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4"
        role="list"
      >
        {(vocabList ?? []).map((item, index) => {
          // Extract section/topic titles for modal preview
          const previewTitles =
            item.sections?.flatMap((section) => section.topics.map((topic) => topic.title)) ?? [];

          // Deutsch Lernen - High-Performance React Architecture

          return (
            <li
              key={item.id}
              className="h-full"
            >
              <AnimateOnScroll
                animation="fade-up"
                delay={(index % 4) * 100}
                className="h-full"
              >
                <CardWithModal
                  href={`/vokabeln/${item.id}`}
                  title={item.german}
                  category={item.category}
                  description={item.description}
                  subtitle="Deutsch A1"
                  gradient={getGradient(item.id, VOCAB_GRADIENTS)}
                  previewTitles={previewTitles}
                />
              </AnimateOnScroll>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
