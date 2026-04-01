import info from "@/data/info.json";

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-dark-border">
      {/* Top CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-text-muted text-sm tracking-wider uppercase mb-4">
          Start Focusing
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6">
          지금, <span className="gradient-text">집중</span>을 시작하세요
        </h2>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent2 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          이용하기
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Footer Links */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-black text-xs">
                T
              </div>
              <span className="text-text-primary font-bold text-sm">타임스터디카페</span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed">
              {info.description}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-4">
              바로가기
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "#about", label: "소개" },
                { href: "#facility", label: "시설안내" },
                { href: "#pricing", label: "가격표" },
                { href: "#location", label: "오시는 길" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-4">
              연락처
            </h4>
            <div className="space-y-2.5 text-sm text-text-secondary">
              <p>{info.address}</p>
              <a href={`tel:${info.phone}`} className="block hover:text-accent transition-colors">
                {info.phone}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-4">
              운영시간
            </h4>
            <div className="space-y-2.5 text-sm text-text-secondary">
              <p>평일 {info.operatingHours.weekday}</p>
              <p>주말 {info.operatingHours.weekend}</p>
              <p>공휴일 {info.operatingHours.holiday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {info.fullName}
          </p>
          <div className="flex gap-4">
            {info.sns.instagram && (
              <a href={info.sns.instagram} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors text-xs">
                Instagram
              </a>
            )}
            {info.sns.kakao && (
              <a href={info.sns.kakao} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors text-xs">
                KakaoTalk
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
