export type Difficulty = 'senior' | 'staff';

export interface CodeSnippet {
  title: string;
  code: string;
  explanation: string;
  language?: string;
}

export interface Question {
  id: string;
  topicSlug: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  quickAnswer: string;
  deepAnswer: string; // Markdown body
  codeSnippets: CodeSnippet[];
  tags: string[];
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
}
