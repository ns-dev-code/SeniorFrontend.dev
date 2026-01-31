export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-zinc-50/50 py-12 mt-auto">
      <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-ink/40">
        <p>© 2026 SeniorFrontend.dev</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-ink transition-colors">Twitter</a>
          <a href="#" className="hover:text-ink transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
