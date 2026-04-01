import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import notices from "@/data/notices.json";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return notices.map((notice) => ({ id: String(notice.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = notices.find((n) => String(n.id) === id);
  if (!notice) return { title: "공지사항을 찾을 수 없습니다" };
  return {
    title: `${notice.title} | 구리갈매 스터디카페 타임`,
    description: notice.content.slice(0, 100),
  };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = notices.find((n) => String(n.id) === id);

  if (!notice) notFound();

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-dark-light border-b border-dark-border py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/#notice"
            className="inline-flex items-center gap-1 text-text-muted hover:text-accent text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            목록으로
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                notice.category === "이벤트"
                  ? "bg-red-500/10 text-red-400"
                  : "bg-blue-500/10 text-blue-400"
              }`}
            >
              {notice.category}
            </span>
            <time className="text-text-muted text-sm">{notice.date}</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-text-primary">{notice.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-10">
          {notice.content.split("\n").map((line, i) => (
            <p key={i} className={`text-text-secondary leading-relaxed ${line === "" ? "h-4" : "mb-1"}`}>
              {line}
            </p>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#notice"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border text-text-secondary rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
