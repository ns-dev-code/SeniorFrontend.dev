'use client';

import { useBookmarks } from '@/hooks/use-bookmarks';
import { QuestionCard } from '@/components/ui/QuestionCard';
import { Question } from '@/lib/types/content';
import Link from 'next/link';

export function BookmarksView({ allQuestions }: { allQuestions: Question[] }) {
  const { bookmarks, isLoaded } = useBookmarks();

  if (!isLoaded) {
    return <div className="py-20 text-center text-ink/40">Loading your library...</div>;
  }

  const savedQuestions = allQuestions.filter(q => bookmarks.includes(q.id));

  if (savedQuestions.length === 0) {
    return (
      <div className="py-24 text-center border border-dashed border-black/5 rounded-lg bg-zinc-50/50">
        <div className="mx-auto w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4 text-ink/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-ink mb-1">No bookmarks yet</h3>
        <p className="text-ink/40 max-w-sm mx-auto mb-6">
          Save questions you want to review later. They will appear here.
        </p>
        <Link 
          href="/topics" 
          className="inline-flex items-center justify-center px-4 py-2 bg-ink text-white text-sm font-medium rounded-md hover:bg-ink/90 transition-colors"
        >
          Browse Topics
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
         <span className="text-sm text-ink/40 font-mono uppercase tracking-wider">
            {savedQuestions.length} {savedQuestions.length === 1 ? 'Question' : 'Questions'} Saved
         </span>
      </div>
      {savedQuestions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
}
