"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Activity, Repeat, Package, BookOpen, Zap, Eye, FolderTree, Plug, TestTube, Workflow, BarChart3, Users, Gauge, Flame } from "lucide-react";
import { getAllTopics } from "@/lib/topics";

const iconMap = {
  'react': Layers,
  'performance': Activity,
  'nextjs': Zap,
  'accessibility': Eye,
  'frontend-architecture': FolderTree,
  'api-integration': Plug,
  'testing': TestTube,
  'cicd': Workflow,
  'analytics': BarChart3,
  'leadership': Users,
  'performance-rapid': Gauge,
  'javascript': Repeat,
  'system-design': Package
};

// Categorize topics
const deepDiveSlugs = ['react', 'nextjs', 'performance', 'accessibility'];
const rapidFireSlugs = ['frontend-architecture', 'api-integration', 'testing', 'cicd', 'analytics', 'leadership', 'performance-rapid'];

export default function TopicsPage() {
  const allTopics = getAllTopics();
  const deepDiveTopics = allTopics.filter(t => deepDiveSlugs.includes(t.slug));
  const rapidFireTopics = allTopics.filter(t => rapidFireSlugs.includes(t.slug));

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight mb-4">The Curriculum</h1>
        <p className="text-xl text-ink-subtle max-w-2xl leading-relaxed">
          Structured learning paths designed to fill the gaps in your senior engineering knowledge base.
        </p>
      </header>

      {/* Deep-Dive Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-react-blue" size={24} />
          <h2 className="text-2xl font-bold tracking-tight">Deep-Dive Topics</h2>
        </div>
        <p className="text-ink-subtle mb-8 leading-relaxed">
          Comprehensive explanations with war stories, real-world scenarios, and detailed technical depth.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {deepDiveTopics.map((topic, index) => {
            const Icon = iconMap[topic.slug as keyof typeof iconMap] || BookOpen;
            
            return (
              <TopicCard key={topic.slug} topic={topic} Icon={Icon} index={index} />
            );
          })}
        </div>
      </section>

      {/* Rapid-Fire Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Flame className="text-orange-500" size={24} />
          <h2 className="text-2xl font-bold tracking-tight">Rapid-Fire Questions 🔥</h2>
        </div>
        <p className="text-ink-subtle mb-8 leading-relaxed">
          Quick 3-4 line answers perfect for last-minute revision and interview prep.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {rapidFireTopics.map((topic, index) => {
            const Icon = iconMap[topic.slug as keyof typeof iconMap] || BookOpen;
            
            return (
              <TopicCard key={topic.slug} topic={topic} Icon={Icon} index={index} isRapidFire />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function TopicCard({ topic, Icon, index, isRapidFire = false }: { topic: any; Icon: any; index: number; isRapidFire?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link 
        href={`/topic/${topic.slug}`}
        className="bento-card block group h-full hover:no-underline"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
            isRapidFire 
              ? 'bg-orange-500/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white' 
              : 'bg-react-blue/5 text-react-blue group-hover:bg-react-blue group-hover:text-white'
          }`}>
            <Icon size={20} />
          </div>
          <span className="text-xs font-bold font-mono text-ink/30 uppercase tracking-widest">
            {isRapidFire ? '🔥 RAPID' : `MODULE 0${index + 1}`}
          </span>
        </div>
        
        <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors ${
          isRapidFire ? 'group-hover:text-orange-500' : 'group-hover:text-react-blue'
        }`}>
          {topic.title}
        </h3>
        <p className="text-ink-subtle leading-relaxed mb-8">
          {topic.description}
        </p>
        
        <div className={`flex items-center text-sm font-bold transition-transform group-hover:translate-x-1 ${
          isRapidFire ? 'text-orange-500' : 'text-react-blue'
        }`}>
          Start Learning <ArrowRight className="ml-2" size={16} />
        </div>
      </Link>
    </motion.div>
  );
}
