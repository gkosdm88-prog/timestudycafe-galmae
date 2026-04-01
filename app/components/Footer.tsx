import info from "@/data/info.json";

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent font-bold text-lg">TIME</span>
              <span className="text-text-primary font-light text-lg">STUDY CAFE</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {info.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              빠른가기
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
                  className="block text-text-muted text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              연락처
            </h4>
            <div className="space-y-2.5 text-sm text-text-muted">
              <p>{info.address} {info.addressDetail}</p>
              <p>
                Tel.{" "}
                <a href={`tel:${info.phone}`} className="text-accent hover:underline">
                  {info.phone}
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                {info.sns.instagram && (
                  <a
                    href={info.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {info.sns.kakao && (
                  <a
                    href={info.sns.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    KakaoTalk
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {info.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
