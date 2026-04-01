"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", label: "홈" },
  { href: "#about", label: "소개" },
  { href: "#facility", label: "시설" },
  { href: "#pricing", label: "가격" },
  { href: "#notice", label: "공지" },
  { href: "#location", label: "위치" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-black text-sm">
            T
          </div>
          <span className="text-text-primary font-bold text-base tracking-tight hidden sm:inline">
            스터디카페 타임
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-[13px] font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-3 px-5 py-2 rounded-full text-[13px] font-semibold bg-accent text-white hover:bg-accent-light transition-all duration-300"
          >
            이용하기
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
          aria-label="메뉴"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass border-t border-white/5 px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
