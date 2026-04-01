import type { Metadata } from "next";
import pricing from "@/data/pricing.json";

export const metadata: Metadata = {
  title: "이용안내 | 타임스터디카페 구리갈매점",
  description: "타임스터디카페 구리갈매점의 이용 요금 및 이용 규칙을 안내합니다.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">이용안내</h1>
          <p className="text-gray-300">합리적인 가격으로 집중할 수 있는 공간을 이용하세요</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Hourly */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
            시간권
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pricing.hourly.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-accent hover:shadow-md transition-all"
              >
                <p className="text-text-light text-sm mb-1">{item.name}</p>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Period */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
            기간권
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pricing.period.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-accent hover:shadow-md transition-all"
              >
                <p className="text-lg font-semibold mb-1">{item.name}</p>
                <p className="text-3xl font-bold text-accent mb-2">{item.price}</p>
                <p className="text-text-light text-sm">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locker */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
            사물함
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            {pricing.locker.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-accent hover:shadow-md transition-all"
              >
                <p className="text-text-light text-sm mb-1">{item.name}</p>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
            이용 규칙
          </h2>
          <div className="bg-surface rounded-xl p-6">
            <ul className="space-y-3">
              {pricing.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-text-light">
                  <span className="text-accent font-bold mt-0.5">{i + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
