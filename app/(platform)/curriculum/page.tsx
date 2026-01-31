import { getQuestions } from "@/lib/content";
import Link from "next/link";

export default function CurriculumPage() {
  const reactQuestions = getQuestions("react");
  const perfQuestions = getQuestions("performance");
  const allQuestions = [...reactQuestions, ...perfQuestions];

  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <header className="mb-20">
        <h1 className="text-4xl font-bold mb-4 text-black tracking-tight">
          Complete Curriculum
        </h1>
        <p className="text-zinc-500 text-lg">
          The full signal. 50+ questions covering architecture, performance, and language internals.
        </p>
      </header>
      
      <div className="space-y-0 border-t border-zinc-100">
        {allQuestions.map((q) => (
          <Link
            key={q.id}
            href={`/topic/${q.topicSlug}#${q.id}`}
            className="group block py-8 border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors -mx-6 px-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {q.topicSlug}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-zinc-200" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {q.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-black transition-colors">
                  {q.title}
                </h3>
              </div>
              
              <div className="flex items-center text-[10px] font-bold text-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                View Deep Dive
                <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
