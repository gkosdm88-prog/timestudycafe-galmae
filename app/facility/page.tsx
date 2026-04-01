import type { Metadata } from "next";
import gallery from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "시설안내 | 구리갈매 스터디카페 타임",
  description: "구리갈매 스터디카페 타임의 시설과 내부 공간을 소개합니다.",
};

const iconMap: Record<string, React.ReactNode> = {
  desk: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  room: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  locker: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  printer: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  ),
  wifi: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
    </svg>
  ),
  coffee: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
};

// Coffee icon fallback
const coffeeIcon = (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h12v10a4 4 0 01-4 4H8a4 4 0 01-4-4V4zm12 4h2a2 2 0 012 2v1a2 2 0 01-2 2h-2M6 1v2M10 1v2M14 1v2" />
  </svg>
);

export default function FacilityPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">시설안내</h1>
          <p className="text-gray-300">쾌적한 환경에서 집중할 수 있는 공간</p>
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
          편의시설
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.facilities.map((facility) => (
            <div
              key={facility.name}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="text-accent mb-4">
                {facility.icon === "coffee" ? coffeeIcon : (iconMap[facility.icon] || coffeeIcon)}
              </div>
              <h3 className="font-bold text-lg mb-2">{facility.name}</h3>
              <p className="text-text-light text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-surface py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
            내부 갤러리
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.images.map((image, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-text-light overflow-hidden"
              >
                <div className="text-center p-8">
                  <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs text-gray-400 mt-1">사진을 준비 중입니다</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
