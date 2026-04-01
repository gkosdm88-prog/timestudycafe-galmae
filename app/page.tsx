import info from "@/data/info.json";
import pricing from "@/data/pricing.json";
import gallery from "@/data/gallery.json";
import notices from "@/data/notices.json";

export default function Home() {
  const recentNotices = [...notices]
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <div>
      {/* ───────── HERO ───────── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            Premium Study Cafe
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">몰입</span>의 공간
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            {info.description}
          </p>
          <p className="text-text-muted text-sm mb-12">
            구리 · 갈매 · 별내 인근 프리미엄 스터디카페
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors"
            >
              이용하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-dark-border text-text-secondary rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              둘러보기
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
          </div>
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              이런 분들을 위해<br />준비했습니다
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { emoji: "📚", title: "수험생", desc: "시험 준비에 집중이 필요한 분" },
              { emoji: "💼", title: "직장인", desc: "퇴근 후 자기계발을 하는 분" },
              { emoji: "✍️", title: "취준생", desc: "취업 준비로 공부가 필요한 분" },
              { emoji: "👨‍💻", title: "프리랜서", desc: "조용한 작업 공간이 필요한 분" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 text-center hover:border-accent/50 transition-all group"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FACILITY ───────── */}
      <section id="facility" className="py-24 md:py-32 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Facilities
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              최적의 학습 환경
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              집중력을 높이기 위한 모든 것을 갖추었습니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.facilities.map((facility, i) => (
              <div
                key={facility.name}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all group"
              >
                <div className="text-accent text-sm font-mono mb-4 opacity-50">
                  0{i + 1}
                </div>
                <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {facility.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          {/* Gallery placeholder */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-text-secondary">내부 모습</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.images.map((image, i) => (
                <div
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-xl aspect-square flex items-center justify-center group hover:border-accent/30 transition-all"
                >
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 mx-auto mb-2 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-text-muted">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PRICING ───────── */}
      <section id="pricing" className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              이용 요금
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              합리적인 가격으로 최상의 학습 환경을 이용하세요
            </p>
          </div>

          {/* Hourly */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              시간권
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {pricing.hourly.map((item) => (
                <div
                  key={item.name}
                  className="bg-dark-card border border-dark-border rounded-xl p-4 text-center hover:border-accent/50 transition-all"
                >
                  <p className="text-text-muted text-sm mb-1">{item.name}</p>
                  <p className="text-text-primary font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Period */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              기간권
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pricing.period.map((item, i) => (
                <div
                  key={item.name}
                  className={`relative bg-dark-card border rounded-2xl p-6 text-center transition-all ${
                    i === 2
                      ? "border-accent shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                      : "border-dark-border hover:border-accent/50"
                  }`}
                >
                  {i === 2 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEST
                    </span>
                  )}
                  <p className="text-text-secondary font-semibold text-lg mb-2">{item.name}</p>
                  <p className="text-3xl font-black text-text-primary mb-2">
                    {item.price}
                  </p>
                  <p className="text-text-muted text-sm">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Locker */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              사물함
            </h3>
            <div className="max-w-xs">
              {pricing.locker.map((item) => (
                <div
                  key={item.name}
                  className="bg-dark-card border border-dark-border rounded-xl p-4 text-center hover:border-accent/50 transition-all"
                >
                  <p className="text-text-muted text-sm mb-1">{item.name}</p>
                  <p className="text-text-primary font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              이용 규칙
            </h3>
            <ul className="space-y-3">
              {pricing.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                  <span className="text-accent font-mono text-xs mt-0.5">0{i + 1}</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── NOTICE ───────── */}
      <section id="notice" className="py-24 md:py-32 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Notice
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              공지사항
            </h2>
          </div>

          <div className="space-y-3">
            {recentNotices.map((notice) => (
              <a
                key={notice.id}
                href={`/notice/${notice.id}`}
                className="flex items-center justify-between gap-4 bg-dark-card border border-dark-border rounded-xl p-5 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {notice.pinned && (
                    <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-accent-dim text-accent">
                      고정
                    </span>
                  )}
                  <span
                    className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                      notice.category === "이벤트"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className="text-text-primary font-medium truncate group-hover:text-accent transition-colors">
                    {notice.title}
                  </span>
                </div>
                <time className="text-text-muted text-sm shrink-0">{notice.date}</time>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── LOCATION ───────── */}
      <section id="location" className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Location
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              오시는 길
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
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

            {/* Details */}
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <h3 className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                  Address
                </h3>
                <p className="text-text-primary font-medium">
                  {info.address} {info.addressDetail}
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <h3 className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                  Contact
                </h3>
                <a
                  href={`tel:${info.phone}`}
                  className="text-text-primary font-medium text-lg hover:text-accent transition-colors"
                >
                  {info.phone}
                </a>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <h3 className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                  Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">평일</span>
                    <span className="text-text-primary font-medium">{info.operatingHours.weekday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">주말</span>
                    <span className="text-text-primary font-medium">{info.operatingHours.weekend}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">공휴일</span>
                    <span className="text-text-primary font-medium">{info.operatingHours.holiday}</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <h3 className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                  Transportation
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                      지하철
                    </span>
                    <span className="text-text-muted">{info.transportation.subway}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                      버스
                    </span>
                    <span className="text-text-muted">{info.transportation.bus}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-500/10 text-gray-400 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                      주차
                    </span>
                    <span className="text-text-muted">{info.transportation.parking}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
