import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic } from "@/lib/topics";
import { getQuestions } from "@/lib/content";
import { QuestionCard } from "@/components/ui/QuestionCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   // In a real app we would get all topics here, but for now we rely on dynamic rendering or just standard behaviour.
   // Since this is static export compatible, we can list them if needed, but standard dynamic route is fine for dev.
   return [];
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) {
    notFound();
  }

  const questions = getQuestions(slug);

  return (
    <div className="space-y-12 py-12">
      <header>
        <Link href="/topics" className="text-sm font-medium text-accent hover:underline mb-4 inline-block">
          ← All Topics
        </Link>
        <h1 className="text-3xl font-semibold mb-2 text-ink">{topic.title}</h1>
        <p className="text-ink/60 max-w-xl leading-relaxed">
          {topic.description}
        </p>
      </header>

      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center border border-dashed border-black/10 rounded-lg">
          <p className="text-ink/40">No questions available for this topic yet.</p>
        </div>
      )}
    </div>
  );
}
