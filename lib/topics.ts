import { Topic } from './types/content';

export const topics: Topic[] = [
  {
    slug: 'react',
    title: 'React Internals',
    description: 'Deep dives into reconciliation, concurrent mode, and hook mechanics.'
  },
  {
    slug: 'performance',
    title: 'Web Performance',
    description: 'Vitals, metrics, extensive rendering patterns, and browser internls.'
  },
  {
    slug: 'system-design',
    title: 'Frontend System Design',
    description: 'Architecture, state management, and API design for scale.'
  },
  {
    slug: 'nextjs',
    title: 'Next.js & SSR',
    description: 'Server-side rendering, static generation, and enterprise architecture.'
  },
  {
    slug: 'accessibility',
    title: 'Accessibility & Design Systems',
    description: 'WCAG compliance, ARIA, keyboard navigation, and design system patterns.'
  },
  {
    slug: 'javascript',
    title: 'JavaScript Core',
    description: 'Event loop, prototypes, closures, and async patterns.'
  }
];

export function getAllTopics(): Topic[] {
  return topics;
}

export function getTopic(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}
