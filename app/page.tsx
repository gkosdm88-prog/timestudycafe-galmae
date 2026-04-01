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
      {/* ═══════════════ HERO ═══════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent3/3 blur-[80px] animate-float" style={{ animationDelay: "-1.5s" }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="relative text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary text-xs font-medium">현재 이용 가능</span>
          </div>

          {/* Title */}
          <h1 className="fade-up stagger-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            <span className="gradient-text">몰입</span>
            <span className="text-text-primary">의</span>
            <br />
            <span className="text-text-primary">공간</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-up stagger-2 text-text-secondary text-base md:text-lg max-w-lg mx-auto mb-4 leading-relaxed font-light">
            {info.description}
          </p>
          <p className="fade-up stagger-3 text-text-muted text-sm mb-12 tracking-wide">
            구리 &middot; 갈매 &middot; 별내
          </p>

          {/* CTA */}
          <div className="fade-up stagger-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent2 text-white font-semibold rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">이용하기</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dark-border text-text-secondary rounded-2xl hover:bg-white/5 hover:border-dark-border-hover transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              둘러보기
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-5 h-8 rounded-full border border-dark-border flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-text-muted animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="relative py-6 border-y border-dark-border overflow-hidden bg-dark-light">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(null).map((_, j) => (
            <div key={j} className="flex items-center">
              {["FOCUS", "STUDY", "GROWTH", "CONCENTRATION", "SUCCESS", "MOTIVATION"].map((word, i) => (
                <span key={`${j}-${i}`} className="mx-8 text-sm font-bold text-text-muted/30 tracking-[0.3em]">
                  {word} <span className="text-accent/30">&#9670;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="relative py-28 md:py-40 noise">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-border" />
            <span className="text-[11px] text-text-muted font-mono tracking-widest uppercase">01 / About</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-border" />
          </div>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-20 tracking-tight">
            누구를 위한<br /><span className="gradient-text">공간</span>인가요?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "📚", title: "수험생", desc: "시험 준비에 집중이 필요한 분", stat: "No.1" },
              { emoji: "💼", title: "직장인", desc: "퇴근 후 자기계발을 원하는 분", stat: "인기" },
              { emoji: "✍️", title: "취준생", desc: "취업 준비에 몰입하고 싶은 분", stat: "추천" },
              { emoji: "👨‍💻", title: "프리랜서", desc: "조용한 작업 공간이 필요한 분", stat: "NEW" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`fade-up stagger-${i + 1} group relative bg-dark-card border border-dark-border rounded-3xl p-8 hover:border-dark-border-hover transition-all duration-500 card-shine glow-hover`}
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold text-accent/60 tracking-wider">{item.stat}</span>
                </div>
                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {item.emoji}
                </div>
                <h3 className="text-text-primary font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-20 border-y border-dark-border bg-dark-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24h", label: "운영 준비", sub: "최대 이용시간" },
              { value: "100+", label: "좌석 수", sub: "넉넉한 공간" },
              { value: "5min", label: "역에서 도보", sub: "갈매역 기준" },
              { value: "FREE", label: "음료 제공", sub: "커피 & 차" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-6">
                <p className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</p>
                <p className="text-text-primary text-sm font-semibold mb-1">{stat.label}</p>
                <p className="text-text-muted text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FACILITY ═══════════════ */}
      <section id="facility" className="relative py-28 md:py-40 noise">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-border" />
            <span className="text-[11px] text-text-muted font-mono tracking-widest uppercase">02 / Facilities</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-border" />
          </div>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-6 tracking-tight">
            최적의 <span className="gradient-text">학습 환경</span>
          </h2>
          <p className="text-center text-text-muted mb-20 max-w-md mx-auto">
            집중력을 극대화하기 위한 모든 것을 갖추었습니다
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.facilities.map((facility, i) => (
              <div
                key={facility.name}
                className={`group relative bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 hover:border-dark-border-hover transition-all duration-500 card-shine glow-hover ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-accent/40 font-mono text-xs font-bold">0{i + 1}</span>
                  <div className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-text-primary font-bold text-lg md:text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {facility.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.images.map((image, i) => (
              <div
                key={i}
                className="group relative bg-dark-card border border-dark-border rounded-2xl aspect-[4/3] overflow-hidden hover:border-dark-border-hover transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-text-muted/20 group-hover:text-accent/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="absolute bottom-3 left-3 z-20 text-xs text-text-muted font-medium">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="relative py-28 md:py-40 bg-dark-light noise">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-border" />
            <span className="text-[11px] text-text-muted font-mono tracking-widest uppercase">03 / Pricing</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-border" />
          </div>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-6 tracking-tight">
            합리적인 <span className="gradient-text">가격</span>
          </h2>
          <p className="text-center text-text-muted mb-20 max-w-md mx-auto">
            필요한 만큼, 원하는 방식으로 이용하세요
          </p>

          {/* Period - Featured */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {pricing.period.map((item, i) => (
              <div
                key={item.name}
                className={`group relative rounded-3xl p-8 text-center transition-all duration-500 card-shine ${
                  i === 2
                    ? "bg-gradient-to-b from-accent/10 to-dark-card border-2 border-accent/30 glow-accent"
                    : "bg-dark-card border border-dark-border hover:border-dark-border-hover glow-hover"
                }`}
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-accent to-accent2 text-white text-[11px] font-bold tracking-wider uppercase">
                      Best Value
                    </span>
                  </div>
                )}
                <p className="text-text-muted text-sm font-medium mb-4">{item.name}</p>
                <p className="text-4xl md:text-5xl font-black text-text-primary mb-3 tracking-tight">
                  {item.price}
                </p>
                <p className="text-text-muted text-sm mb-6">{item.note}</p>
                <div className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  i === 2
                    ? "bg-accent text-white"
                    : "bg-dark border border-dark-border text-text-secondary group-hover:border-accent/30 group-hover:text-accent"
                }`}>
                  선택하기
                </div>
              </div>
            ))}
          </div>

          {/* Hourly */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-accent" />
              시간권
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {pricing.hourly.map((item) => (
                <div
                  key={item.name}
                  className="bg-dark-card border border-dark-border rounded-2xl py-4 px-3 text-center hover:border-dark-border-hover transition-all group card-shine"
                >
                  <p className="text-text-muted text-xs mb-1">{item.name}</p>
                  <p className="text-text-primary font-bold group-hover:text-accent transition-colors">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Locker + Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-3xl p-6">
              <h3 className="text-sm font-semibold text-text-secondary mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-accent" />
                사물함
              </h3>
              {pricing.locker.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-3">
                  <span className="text-text-muted text-sm">{item.name}</span>
                  <span className="text-text-primary font-bold">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-dark-card border border-dark-border rounded-3xl p-6">
              <h3 className="text-sm font-semibold text-text-secondary mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-accent" />
                이용 규칙
              </h3>
              <ul className="space-y-2.5">
                {pricing.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-accent/50 font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                    <span className="text-text-muted">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ NOTICE ═══════════════ */}
      <section id="notice" className="relative py-28 md:py-40 noise">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-border" />
            <span className="text-[11px] text-text-muted font-mono tracking-widest uppercase">04 / Notice</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-border" />
          </div>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-20 tracking-tight">
            <span className="gradient-text">소식</span>
          </h2>

          <div className="space-y-3">
            {recentNotices.map((notice, i) => (
              <a
                key={notice.id}
                href={`/notice/${notice.id}`}
                className="group flex items-center gap-4 bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-dark-border-hover transition-all duration-300 card-shine"
              >
                <span className="text-accent/30 font-mono text-xs font-bold shrink-0">0{i + 1}</span>
                <div className="flex-1 min-w-0 flex items-center gap-3">
                  <span
                    className={`shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                      notice.category === "이벤트"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className="text-text-primary text-sm font-medium truncate group-hover:text-accent transition-colors duration-300">
                    {notice.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <time className="text-text-muted text-xs hidden sm:block">{notice.date}</time>
                  <svg className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCATION ═══════════════ */}
      <section id="location" className="relative py-28 md:py-40 bg-dark-light noise">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-border" />
            <span className="text-[11px] text-text-muted font-mono tracking-widest uppercase">05 / Location</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-border" />
          </div>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-20 tracking-tight">
            오시는 <span className="gradient-text">길</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Map */}
            <div className="lg:col-span-3 bg-dark-card border border-dark-border rounded-3xl overflow-hidden">
              <iframe
                src={`https://map.kakao.com/link/map/${info.fullName},${info.coordinates.lat},${info.coordinates.lng}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                title="카카오맵"
              />
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-3">
              {[
                {
                  label: "주소",
                  value: `${info.address} ${info.addressDetail}`,
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  ),
                },
                {
                  label: "연락처",
                  value: info.phone,
                  href: `tel:${info.phone}`,
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="bg-dark-card border border-dark-border rounded-2xl p-5 card-shine">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-text-primary font-medium hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-primary font-medium text-sm">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="bg-dark-card border border-dark-border rounded-2xl p-5 card-shine">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">운영시간</span>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "평일", time: info.operatingHours.weekday },
                    { day: "주말", time: info.operatingHours.weekend },
                    { day: "공휴일", time: info.operatingHours.holiday },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-text-muted">{h.day}</span>
                      <span className="text-text-primary font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-2xl p-5 card-shine">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">교통</span>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold">지하철</span>
                    <span className="text-text-muted">{info.transportation.subway}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold">버스</span>
                    <span className="text-text-muted">{info.transportation.bus}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 px-1.5 py-0.5 rounded bg-zinc-500/10 text-zinc-400 text-[10px] font-bold">주차</span>
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
