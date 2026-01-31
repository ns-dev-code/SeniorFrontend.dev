"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Activity, Repeat, Package, BookOpen, Zap, Eye } from "lucide-react";
import { getAllTopics } from "@/lib/topics";

const iconMap = {
  'react': Layers,
  'performance': Activity,
  'nextjs': Zap,
  'accessibility': Eye,
  'javascript': Repeat,
  'system-design': Package
};

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight mb-4">The Curriculum</h1>
        <p className="text-xl text-ink-subtle max-w-2xl leading-relaxed">
          Structured learning paths designed to fill the gaps in your senior engineering knowledge base.
        </p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((topic, index) => {
          const Icon = iconMap[topic.slug as keyof typeof iconMap] || BookOpen;
          
          return (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={`/topic/${topic.slug}`}
                className="bento-card block group h-full hover:no-underline"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-react-blue/5 rounded-lg flex items-center justify-center text-react-blue group-hover:bg-react-blue group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold font-mono text-ink/30 uppercase tracking-widest">
                    MODULE 0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-react-blue transition-colors">
                  {topic.title}
                </h3>
                <p className="text-ink-subtle leading-relaxed mb-8">
                  {topic.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-react-blue group-hover:translate-x-1 transition-transform">
                  Start Learning <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
