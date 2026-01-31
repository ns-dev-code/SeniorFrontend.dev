'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Star, Package, Activity, Layers, Repeat, Zap, Eye, FolderTree, Plug, TestTube, Workflow, BarChart3, Users, Gauge, Flame } from "lucide-react";

const platformLinks = [
  {
    title: "GET STARTED",
    items: [
      { name: "Curriculum", href: "/topics", icon: BookOpen },
      { name: "Library", href: "/bookmarks", icon: Star },
    ]
  },
  {
    title: "DEEP-DIVE TOPICS",
    items: [
      { name: "React Internals", href: "/topic/react", icon: Layers },
      { name: "Next.js & SSR", href: "/topic/nextjs", icon: Zap },
      { name: "Performance", href: "/topic/performance", icon: Activity },
      { name: "Accessibility", href: "/topic/accessibility", icon: Eye },
    ]
  },
  {
    title: "RAPID-FIRE 🔥",
    items: [
      { name: "Architecture", href: "/topic/frontend-architecture", icon: FolderTree },
      { name: "API Integration", href: "/topic/api-integration", icon: Plug },
      { name: "Testing", href: "/topic/testing", icon: TestTube },
      { name: "CI/CD", href: "/topic/cicd", icon: Workflow },
      { name: "Analytics", href: "/topic/analytics", icon: BarChart3 },
      { name: "Leadership", href: "/topic/leadership", icon: Users },
      { name: "Perf Quick-Fire", href: "/topic/performance-rapid", icon: Gauge },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-8 pr-4">
      {platformLinks.map((section) => (
        <div key={section.title} className="space-y-4">
          <h4 className="px-4 text-[10px] font-bold tracking-[0.2em] text-ink/40 uppercase">
            {section.title}
          </h4>
          <div className="space-y-1">
            {section.items.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              const isRapidFire = section.title === "RAPID-FIRE 🔥";
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 text-sm font-medium transition-all group",
                    active 
                      ? isRapidFire
                        ? "bg-orange-500/10 text-orange-600 rounded-full"
                        : "bg-react-blue-subtle text-react-blue rounded-full" 
                      : "text-ink-subtle hover:bg-canvas-subtle hover:text-ink rounded-full"
                  )}
                >
                  <Icon 
                    size={16} 
                    className={cn(
                      "transition-colors group-hover:text-ink",
                      active 
                        ? isRapidFire ? "text-orange-600" : "text-react-blue" 
                        : "text-ink/40"
                    )} 
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
