'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Code, X } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border transition-all">
        <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 lg:px-24">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-react-blue rounded-xl flex items-center justify-center text-white transition-all group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-react-blue/20">
                <Code size={22} />
              </div>
              <span className="font-bold text-xl tracking-tighter hidden sm:inline-block">
                SeniorFrontend<span className="text-react-blue">.dev</span>
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-2">
              <NavLink href="/topics" active={pathname.startsWith('/topic')}>
                Curriculum
              </NavLink>
              <NavLink href="/bookmarks" active={pathname === '/bookmarks'}>
                Library
              </NavLink>
              <NavLink href="/about" active={pathname === '/about'}>
                Manifesto
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/topics" 
              className="hidden sm:inline-flex px-10 py-3 bg-react-blue !text-white rounded-full text-sm font-bold shadow-lg shadow-react-blue/20 hover:scale-105 transition-all outline-none"
            >
              Start Learning
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-ink hover:bg-canvas-subtle rounded-md"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 bg-react-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-react-blue/20">
                  <Code size={22} />
                </div>
                <span className="font-bold text-lg tracking-tighter">
                  SeniorFrontend<span className="text-react-blue">.dev</span>
                </span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-canvas-subtle rounded-md"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-widest text-ink/40 uppercase mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <MobileNavLink href="/topics" onClick={() => setMobileMenuOpen(false)}>
                    Curriculum
                  </MobileNavLink>
                  <MobileNavLink href="/bookmarks" onClick={() => setMobileMenuOpen(false)}>
                    Library
                  </MobileNavLink>
                  <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
                    Manifesto
                  </MobileNavLink>
                </div>
              </div>

              {/* Sidebar Content */}
              <div onClick={() => setMobileMenuOpen(false)}>
                <Sidebar />
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-border">
                <Link 
                  href="/topics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-6 py-4 bg-react-blue text-white text-center rounded-full text-sm font-bold shadow-lg shadow-react-blue/20"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className={cn(
        "px-6 py-2 text-sm font-bold transition-all tracking-tight",
        active 
          ? "text-react-blue bg-react-blue/5 rounded-full" 
          : "text-ink/50 hover:text-ink hover:bg-canvas-subtle rounded-full"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-sm font-medium text-ink hover:bg-canvas-subtle rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
