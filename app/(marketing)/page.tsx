"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, BookOpen, Globe, Terminal, Shield, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-react-blue/20">
      {/* 1. TRUE FULL-WIDTH IMMERSIVE HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Dynamic Background Elements - Truly Full Width */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />
        <div className="absolute top-0 left-0 w-full h-full light-beam" />
        
        <div className="relative z-10 w-full px-6 py-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-react-blue/5 border border-react-blue/10 text-[11px] font-extrabold tracking-[0.4em] text-react-blue mb-12 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-react-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-react-blue"></span>
            </span>
            Professional Tier Preparation
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "circOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-ink mb-12 leading-tight"
          >
            Stop Memorizing.<br />
            <span className="text-react-blue italic">Start Engineering.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-ink-subtle max-w-2xl mb-16 leading-relaxed font-normal"
          >
            The deep-dive curriculum designed for engineers preparing for Senior, Staff, and Principal roles. Master the internal mechanics, not just the assembly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full bg-react-blue hover:bg-react-blue/90 h-14 md:h-16 !px-10 md:!px-12 text-base md:text-lg font-bold !text-white shadow-md shadow-react-blue/20 transition-all hover:scale-105 active:scale-95">
              <Link href="/topics" className="flex items-center gap-3">
                Start Learning <ArrowRight className="size-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 md:h-16 !px-10 md:!px-12 text-base md:text-lg font-bold border-border hover:bg-canvas-subtle transition-all active:scale-95">
              <Link href="/about" className="text-ink">
                Read the Manifesto
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. ADVANCED TRUE FULL-WIDTH BENTO GRID */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border bg-canvas-subtle/30 overflow-visible">
        <div className="w-full">
          <div className="mb-20 px-4">
            <h2 className="text-[11px] font-bold tracking-[0.5em] text-ink/30 uppercase mb-4">The Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-ink max-w-3xl">Built for absolute signal.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto">
            {/* Massive Main Feature */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-8 flex flex-col justify-between bento-card glass-border relative overflow-hidden group p-8 md:p-14"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-react-blue/5 blur-[120px] group-hover:bg-react-blue/10 transition-colors" />
              <div className="relative z-10">
                <Terminal className="text-react-blue mb-10" size={32} />
                <h4 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Zero Tutorials. Just Internals.</h4>
                <p className="text-ink-subtle text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                  We assume you're an expert. We explain how the reconciler manages fiber trees and the trade-offs of concurrent mode, skipping the "how to use" basics.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10 relative z-10">
                <span className="px-4 py-1 rounded-full bg-border/50 text-[9px] font-bold text-ink/50 font-mono tracking-widest uppercase">INTERNALS_FIRST</span>
                <span className="px-4 py-1 rounded-full bg-border/50 text-[9px] font-bold text-ink/50 font-mono tracking-widest uppercase">SENIOR_EXPECTATIONS</span>
              </div>
            </motion.div>

            {/* Accent Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="md:col-span-6 lg:col-span-4 flex flex-col justify-between bento-card glass-border bg-react-blue shadow-lg shadow-react-blue/10 text-white border-none group p-8 md:p-14"
            >
              <Cpu size={32} />
              <div>
                <h4 className="text-xl md:text-3xl font-bold mb-4 tracking-tight">Systems Thinking</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                  Build the high-level intuition needed to architect systems that last. Moving beyond trivia into architectural mastery.
                </p>
                <Link href="/topics" className="text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Explore curriculum <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Split Pillar Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="md:col-span-12 flex flex-col md:flex-row justify-between bento-card glass-border group p-8 md:p-14 gap-12"
            >
               <div className="flex-1 space-y-6">
                 <Shield className="text-react-blue" size={32} />
                 <h4 className="text-xl md:text-3xl font-bold tracking-tight">Professional Proofing</h4>
                 <p className="text-ink-subtle text-sm md:text-base leading-relaxed">
                   Content tuned specifically for the bars at FAANG and startups like Stripe, Linear, and Vercel.
                 </p>
               </div>
               <div className="w-px bg-border hidden md:block" />
               <div className="flex-1 space-y-6">
                 <Layers className="text-react-blue" size={32} />
                 <h4 className="text-xl md:text-3xl font-bold tracking-tight">System Refactoring</h4>
                 <p className="text-ink-subtle text-sm md:text-base leading-relaxed">
                   Learn how to articulate the refactoring of a legacy monolith into a modern, observable micro-frontend architecture.
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA SECTION (Immersive Full Width) */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden bg-white border-b border-border">
         <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(circle_at_center,var(--color-react-blue-subtle)_0%,transparent_70%)] opacity-30" />
         <div className="relative z-10 w-full text-center">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-ink mb-12 leading-tight">Ready?</h2>
           <Button asChild size="lg" className="rounded-full bg-react-blue hover:bg-react-blue/90 h-14 md:h-16 !px-10 md:!px-14 text-base md:text-lg font-bold !text-white shadow-lg shadow-react-blue/30 transition-all hover:scale-110 active:scale-95">
            <Link href="/topics">
              Explore Curriculum
            </Link>
          </Button>
         </div>
      </section>

      {/* Truly Full Width Footer */}
      <footer className="py-16 border-t border-border px-12 md:px-24">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.4em] text-ink/20">
          <span>© 2026 SeniorFrontend.dev</span>
          <div className="flex gap-12">
            <Link href="/about" className="hover:text-ink transition-colors">Manifesto</Link>
            <Link href="/topics" className="hover:text-ink transition-colors">Curriculum</Link>
            <Link href="/bookmarks" className="hover:text-ink transition-colors">Library</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
