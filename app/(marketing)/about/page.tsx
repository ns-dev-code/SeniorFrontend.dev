export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-6 space-y-24">
      {/* Hero */}
      <header>
        <div className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 mb-4 uppercase font-bold">The Manifesto</div>
        <h1 className="text-5xl font-bold mb-8 text-black tracking-tighter leading-[0.95]">
          Built for the top 1%.
        </h1>
        <p className="text-xl text-zinc-600 leading-relaxed font-normal">
          SeniorFrontend.dev is not a tutorial site. It is a preparation notebook for engineers who have already mastered the syntax and are now mastering the systems.
        </p>
      </header>

      {/* The Problem */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-black tracking-tight">The Professional Gap</h2>
        <div className="space-y-6 text-zinc-600 leading-relaxed">
          <p>
            You've debugged race conditions in production. You've optimized bundle sizes for millions of users. You've architected features that define the product.
          </p>
          <div className="p-8 border border-zinc-100 rounded-xl bg-zinc-50/50 italic font-serif">
            "The technical interview is a translation layer. We help you translate your years of silent intuition into professional, high-signal articulation."
          </div>
          <p>
            Most platforms focus on the "what". We focus on the "how" and the "it depends". The latter is where senior engineering actually happens.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-black tracking-tight">Principles</h2>
        <div className="grid gap-12 sm:grid-cols-2">
          <Principle 
            title="Density" 
            desc="No 500-word intros. We assume you know React. We go straight to the reconciliation and the event loop."
          />
          <Principle 
            title="Tradeoffs" 
            desc="There are no perfect solutions, only trade-offs. We explicitly model these in every answer."
          />
          <Principle 
            title="Spoken Signal" 
            desc="Answers are written exactly how a Lead Engineer expects to hear them in a room."
          />
          <Principle 
            title="Systems First" 
            desc="Code is the implementation detail. The system architecture is the product."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="pt-12 text-center">
        <a
          href="/topics"
          className="inline-block px-10 py-3 bg-black text-white rounded-md text-sm font-bold hover:bg-zinc-800 transition-colors shadow-lg"
        >
          View the Curriculum
        </a>
      </section>
    </div>
  );
}

function Principle({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold tracking-tight text-black uppercase">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
