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
    slug: 'frontend-architecture',
    title: 'Frontend Architecture',
    description: 'Feature-based patterns, scaling teams, and avoiding architecture rot.'
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    description: 'REST vs GraphQL, error handling, caching, and API contracts.'
  },
  {
    slug: 'testing',
    title: 'Testing Strategies',
    description: 'Unit, integration, E2E testing, and avoiding flaky tests.'
  },
  {
    slug: 'cicd',
    title: 'CI/CD & DevOps',
    description: 'Fast pipelines, deployment strategies, and zero-downtime releases.'
  },
  {
    slug: 'analytics',
    title: 'Analytics & Personalization',
    description: 'GA4, event tracking, A/B testing, and consent management.'
  },
  {
    slug: 'leadership',
    title: 'Leadership & Behavior',
    description: 'Senior ownership, mentoring, conflict resolution, and influence.'
  },
  {
    slug: 'performance-rapid',
    title: 'Performance Quick-Fire',
    description: 'Rapid answers on CWV, LCP, INP, CLS, and optimization tactics.'
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
