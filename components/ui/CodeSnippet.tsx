'use client';

import { useState } from 'react';
import { CodeSnippet as CodeSnippetType } from '@/lib/types/content';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeSnippet({ snippet }: { snippet: CodeSnippetType }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-black/10 bg-zinc-50 my-6 shadow-sm">
      {/* Header */}
      <div className="px-4 py-2.5 bg-zinc-100/50 border-b border-black/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-red-400/80" />
           <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
           <div className="w-2 h-2 rounded-full bg-green-400/80" />
           <span className="ml-2 text-xs font-mono text-ink/60 font-medium tracking-wide">
             {snippet.title}
           </span>
        </div>
        
        <button 
          onClick={handleCopy}
          className="text-[10px] font-medium tracking-wider uppercase text-ink/40 hover:text-accent transition-colors flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <span className="text-green-600">Copied</span>
              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Copy</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Code Block */}
      <div className="overflow-x-auto bg-white group relative">
        <SyntaxHighlighter 
          language={snippet.language || "javascript"} 
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: '20px',
            fontSize: '13.5px',
            backgroundColor: 'transparent',
          }}
        >
          {snippet.code.trim()}
        </SyntaxHighlighter>
      </div>

      {/* Footer / Explanation */}
      <div className="px-5 py-3.5 bg-zinc-50/80 border-t border-black/5 text-sm text-ink/70 leading-relaxed italic">
        <span className="font-semibold text-accent/80 not-italic mr-1.5">Note:</span>
        {snippet.explanation}
      </div>
    </div>
  );
}
