import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-canvas/80 supports-[backdrop-filter]:bg-canvas/60 border-b border-black/5">
      <div className="max-w-2xl mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
        <Link 
          href="/" 
          className="text-sm font-medium tracking-wide text-ink hover:text-ink/70 transition-colors"
        >
          SeniorFrontend.dev
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Manifesto
          </Link>
          <Link 
            href="/signin" 
            className="text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
