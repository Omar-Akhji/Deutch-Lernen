import { VocabularySection } from "@/features/vocabulary";

export default function Home() {
  return (
    <main
      className="min-h-screen animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="sr-only">
          Deutsch Lernen - Deine Plattform zum Deutschlernen
        </h1>
        <VocabularySection />
      </div>
    </main>
  );
}
