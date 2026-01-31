'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Question } from '@/lib/types/content';
import { cn } from '@/lib/utils';
import { useBookmarks } from '@/hooks/use-bookmarks';
import { CodeSnippet } from "./CodeSnippet";
import { MermaidDiagram } from './MermaidDiagram';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function QuestionCard({ question }: { question: Question }) {
  const [showDeepAnswer, setShowDeepAnswer] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(question.id);

  return (
    <div 
      className="group block glass rounded-lg transition-all duration-300 hover:shadow-md hover:border-accent/20 scroll-mt-24"
      id={question.id}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={cn(
              "text-[10px] px-2 py-0.5 rounded-full border uppercase tracking-widest font-semibold",
              question.difficulty === 'senior' 
                ? "bg-stone-50 text-stone-600 border-stone-200" 
                : "bg-zinc-50 text-zinc-600 border-zinc-200"
            )}>
              {question.difficulty}
            </span>
            {question.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] text-ink/40 uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(question.id);
            }}
            className="text-ink/20 hover:text-accent transition-colors"
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark question"}
          >
            {bookmarked ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            )}
          </button>
        </div>
        
        <h3 className="text-xl font-medium text-ink mb-4 leading-tight font-serif">
          {question.title}
        </h3>
        
        {/* Quick Answer - "What you say" */}
        <div className="mb-8">
          <p className="text-[10px] items-center gap-1.5 inline-flex font-semibold tracking-widest text-ink/40 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
            The Interview Answer
          </p>
          <div className="text-lg text-ink leading-relaxed font-sans pl-4 border-l-2 border-accent/20">
            {question.quickAnswer}
          </div>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-6 pt-6 border-t border-black/5">
          <button 
            onClick={() => setShowDeepAnswer(!showDeepAnswer)}
            className={cn(
              "text-sm font-medium transition-colors hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-sm px-1 -ml-1",
              showDeepAnswer ? "text-accent" : "text-ink/40"
            )}
          >
            {showDeepAnswer ? 'Hide Deep Answer' : 'Read Deep Answer'}
          </button>

          {question.codeSnippets.length > 0 && (
            <button 
              onClick={() => setShowCode(!showCode)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-sm px-1",
                showCode ? "text-accent" : "text-ink/40"
              )}
            >
              {showCode ? 'Hide Code' : 'View Code'}
            </button>
          )}
        </div>
      </div>

      {/* Deep Answer Content - "What you think" */}
      {showDeepAnswer && (
        <div className="px-6 sm:px-8 pb-8 pt-6 bg-stone-50/50 border-t border-black/5 animate-in fade-in slide-in-from-top-1 duration-300">
          <p className="text-[10px] items-center gap-1.5 inline-flex font-semibold tracking-widest text-ink/40 uppercase mb-6">
            <span className="text-sm">⚡</span>
            Internal Mental Model
          </p>
          <div className="prose prose-stone prose-p:leading-loose prose-headings:font-medium prose-headings:text-ink prose-a:text-accent max-w-none text-ink/90">
            <ReactMarkdown
              components={{
                code({ inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  const language = match ? match[1] : null;
                  
                  return !inline && language ? (
                    <SyntaxHighlighter
                      style={oneLight}
                      language={language}
                      PreTag="div"
                      customStyle={{
                        margin: '1.5rem 0',
                        borderRadius: '0.5rem',
                        fontSize: '13.5px',
                        backgroundColor: '#f9fafb',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {question.deepAnswer}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Code Snippets Content */}
      {showCode && question.codeSnippets.length > 0 && (
        <div className="border-t border-black/5 bg-zinc-50/50 px-6 sm:px-8 pb-8 pt-6 animate-in fade-in slide-in-from-top-1 duration-300">
          <p className="text-[10px] items-center gap-1.5 inline-flex font-semibold tracking-widest text-ink/40 uppercase mb-2">
            <span className="text-sm">code</span>
            Implementation Details
          </p>
          <div className="space-y-6">
            {question.codeSnippets.map((snippet, idx) => (
              <CodeSnippet key={idx} snippet={snippet} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
