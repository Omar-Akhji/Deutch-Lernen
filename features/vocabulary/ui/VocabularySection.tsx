import { CardWithModal } from "@/shared/ui/CardWithModal";
import { getGradient } from "@/shared/lib/utils";
import { VOCAB_GRADIENTS } from "@/shared/lib/gradients";
import { getVocabList } from "../api/services";

export const VocabularySection = async () => {
  const vocabList = await getVocabList();

  return (
    <section className="py-4" aria-labelledby="vocab-heading">
      <h2 id="vocab-heading" className="sr-only">
        Vocabulary Topics
      </h2>
      <ul
        className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4"
        role="list"
      >
        {vocabList.map((item) => {
          // Extract section/topic titles for modal preview
          const previewTitles =
            item.sections?.flatMap((section) =>
              section.topics.map((topic) => topic.title),
            ) ?? [];

          return (
            <li key={item.id}>
              <CardWithModal
                href={`/vokabeln/${item.id}`}
                title={item.german}
                category={item.category}
                description={item.description}
                subtitle="Deutsch A1"
                gradient={getGradient(item.id, VOCAB_GRADIENTS)}
                previewTitles={previewTitles}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
