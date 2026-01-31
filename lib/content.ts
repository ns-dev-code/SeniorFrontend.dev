import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Question, CodeSnippet, Difficulty } from './types/content';

const contentDirectory = path.join(process.cwd(), 'content/questions');

export function getQuestions(topicSlug: string): Question[] {
  const topicPath = path.join(contentDirectory, topicSlug);
  
  if (!fs.existsSync(topicPath)) {
    return [];
  }

  const files = fs.readdirSync(topicPath);

  return files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(topicPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      topicSlug,
      slug,
      title: data.title,
      difficulty: data.difficulty as Difficulty,
      quickAnswer: data.quickAnswer,
      deepAnswer: content, // The body is the deep answer
      codeSnippets: data.codeSnippets || [],
      tags: data.tags || [],
    };
  });
}

export function getAllQuestions(): Question[] {
  const topics = fs.readdirSync(contentDirectory);
  
  // Get all questions from all topics
  const allQuestions = topics.flatMap(topicSlug => {
      // Skip .DS_Store or files that aren't directories if any
      if (topicSlug.startsWith('.')) return [];
      
      return getQuestions(topicSlug);
  });
  
  return allQuestions;
}
