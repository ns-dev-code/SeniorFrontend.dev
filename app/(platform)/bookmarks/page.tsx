import { getAllQuestions } from "@/lib/content";
import { BookmarksView } from "@/components/features/BookmarksView";

export default function BookmarksPage() {
  const allQuestions = getAllQuestions();

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 space-y-12">
      <header>
        <div className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 mb-4 uppercase font-bold">Personal Library</div>
        <h1 className="text-4xl font-bold mb-4 text-black tracking-tight">
          Saved for Review
        </h1>
        <p className="text-zinc-500 text-lg">
          Your personal collection of deep-dive questions for spaced repetition and interview prep.
        </p>
      </header>
      
      <div className="border-t border-zinc-100 pt-12">
        <BookmarksView allQuestions={allQuestions} />
      </div>
    </div>
  );
}
