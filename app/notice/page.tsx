import type { Metadata } from "next";
import Link from "next/link";
import notices from "@/data/notices.json";

export const metadata: Metadata = {
  title: "공지사항 | 타임스터디카페 구리갈매점",
  description: "타임스터디카페 구리갈매점의 공지사항과 이벤트 소식을 확인하세요.",
};

export default function NoticePage() {
  const sorted = [...notices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">공지사항</h1>
          <p className="text-gray-300">최신 소식과 이벤트를 확인하세요</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {sorted.map((notice) => (
            <Link
              key={notice.id}
              href={`/notice/${notice.id}`}
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {notice.pinned && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-accent/10 text-accent">
                        고정
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                        notice.category === "이벤트"
                          ? "bg-red-50 text-red-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg truncate">{notice.title}</h3>
                </div>
                <time className="text-text-light text-sm shrink-0">{notice.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
