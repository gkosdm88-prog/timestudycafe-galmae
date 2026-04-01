import type { Metadata } from "next";
import info from "@/data/info.json";

export const metadata: Metadata = {
  title: "오시는 길 | 타임스터디카페 구리갈매점",
  description: "타임스터디카페 구리갈매점 위치와 교통 안내입니다.",
};

export default function LocationPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">오시는 길</h1>
          <p className="text-gray-300">타임스터디카페 구리갈매점 위치를 안내합니다</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src={`https://map.kakao.com/link/map/${info.fullName},${info.coordinates.lat},${info.coordinates.lng}`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              title="카카오맵"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                주소
              </h2>
              <p className="text-text-light">
                {info.address} {info.addressDetail}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                연락처
              </h2>
              <a
                href={`tel:${info.phone}`}
                className="text-accent font-semibold text-lg hover:underline"
              >
                {info.phone}
              </a>
            </div>

            {/* Transportation */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                교통 안내
              </h2>
              <div className="space-y-3 text-text-light text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                    지하철
                  </span>
                  <span>{info.transportation.subway}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                    버스
                  </span>
                  <span>{info.transportation.bus}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                    주차
                  </span>
                  <span>{info.transportation.parking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
