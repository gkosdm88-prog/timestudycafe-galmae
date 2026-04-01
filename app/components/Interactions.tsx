"use client";

import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

/* ════════════════════════════════════════════
   1. ScrollReveal — 스크롤 시 등장 (GPU 가속)
   ════════════════════════════════════════════ */
export function ScrollReveal({
  children, className = "", delay = 0,
  direction = "up", distance = 50, duration = 0.9, once = true,
}: {
  children: ReactNode; className?: string; delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; duration?: number; once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); if (once) obs.unobserve(el); } else if (!once) setVisible(false); },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const t: Record<string, string> = {
    up: `translate3d(0,${distance}px,0)`, down: `translate3d(0,-${distance}px,0)`,
    left: `translate3d(${distance}px,0,0)`, right: `translate3d(-${distance}px,0,0)`, none: "none",
  };

  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate3d(0,0,0)" : t[direction],
      transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      willChange: "opacity, transform",
    }}>
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════
   2. TiltCard — 3D 기울기 + 빛 반사 + 테두리 글로우
   ════════════════════════════════════════════ */
export function TiltCard({
  children, className = "", intensity = 12, glowColor = "99,102,241",
}: {
  children: ReactNode; className?: string; intensity?: number; glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02,1.02,1.02)`;
      el.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(${glowColor},0.08)`;
      const shine = el.querySelector<HTMLElement>(".tilt-shine");
      if (shine) shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 50%)`;
      const border = el.querySelector<HTMLElement>(".tilt-border");
      if (border) border.style.opacity = "1";
    });
  }, [intensity, glowColor]);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)";
    el.style.boxShadow = "none";
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) shine.style.background = "transparent";
    const border = el.querySelector<HTMLElement>(".tilt-border");
    if (border) border.style.opacity = "0";
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.03,0.98,0.52,0.99), box-shadow 0.4s ease", transformStyle: "preserve-3d" }}>
      <div className="tilt-shine absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-all duration-300" />
      <div className="tilt-border absolute -inset-px rounded-[inherit] pointer-events-none z-0 opacity-0 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, rgba(${glowColor},0.3), transparent 50%, rgba(${glowColor},0.1))` }} />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/* ════════════════════════════════════════════
   3. Counter — 스프링 물리 카운트업
   ════════════════════════════════════════════ */
export function Counter({
  value, suffix = "", prefix = "", className = "",
}: {
  value: number; suffix?: string; prefix?: string; className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0; let velocity = 0;
    const stiffness = 0.04; const damping = 0.85;
    const animate = () => {
      const force = (value - current) * stiffness;
      velocity = (velocity + force) * damping;
      current += velocity;
      if (Math.abs(value - current) < 0.5 && Math.abs(velocity) < 0.1) { setDisplay(value); return; }
      setDisplay(Math.round(current));
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}

/* ════════════════════════════════════════════
   4. MagneticButton — 마그네틱 호버
   ════════════════════════════════════════════ */
export function MagneticButton({
  children, className = "", href, strength = 0.35,
}: {
  children: ReactNode; className?: string; href?: string; strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const raf = useRef(0);

  const handleMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
    });
  }, [strength]);

  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);

  return (
    <a ref={ref} href={href} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.03,0.98,0.52,0.99)" }}>{children}</a>
  );
}

/* ════════════════════════════════════════════
   5. CursorFollower — 고성능 커서
   ════════════════════════════════════════════ */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0, scale = 1, targetScale = 1;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const animate = () => {
      dx += (mx - dx) * 0.25; dy += (my - dy) * 0.25;
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      scale += (targetScale - scale) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 3}px,${dy - 3}px,0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 20}px,${ry - 20}px,0) scale(${scale})`;
      requestAnimationFrame(animate);
    };

    const onOver = () => { targetScale = 1.8; };
    const onOut = () => { targetScale = 1; };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    const observe = () => {
      document.querySelectorAll("a, button, [role=button], .magnetic").forEach((el) => {
        el.addEventListener("mouseenter", onOver);
        el.addEventListener("mouseleave", onOut);
      });
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { window.removeEventListener("mousemove", onMove); mo.disconnect(); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" style={{ willChange: "transform" }} />
      <div ref={ringRef} className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[9998] mix-blend-difference" style={{ willChange: "transform" }} />
    </>
  );
}

/* ════════════════════════════════════════════
   6. ScrollProgress — 스크롤 진행률 바
   ════════════════════════════════════════════ */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!barRef.current) return;
        const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        barRef.current.style.width = `${p}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
      <div ref={barRef} className="h-full bg-gradient-to-r from-accent via-accent2 to-accent" style={{ width: 0, willChange: "width" }} />
    </div>
  );
}

/* ════════════════════════════════════════════
   7. MouseGradient — 마우스 따라다니는 그라디언트
   ════════════════════════════════════════════ */
export function MouseGradient({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let mx = 0.5, my = 0.5;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        mx = (e.clientX - rect.left) / rect.width;
        my = (e.clientY - rect.top) / rect.height;
        el.style.background = `radial-gradient(800px circle at ${mx * 100}% ${my * 100}%, rgba(99,102,241,0.12), rgba(6,182,212,0.06) 40%, transparent 70%)`;
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className={`absolute inset-0 pointer-events-auto ${className}`} style={{ willChange: "background" }} />;
}

/* ════════════════════════════════════════════
   8. TextScramble — 글리치 텍스트 효과
   ════════════════════════════════════════════ */
export function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = text.length * 3;
    const animate = () => {
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * text.length);
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") { result += " "; continue; }
        result += i < revealed ? text[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(result);
      frame++;
      if (frame <= totalFrames) requestAnimationFrame(animate);
      else setDisplay(text);
    };
    requestAnimationFrame(animate);
  }, [started, text, chars]);

  return <span ref={ref} className={className}>{display}</span>;
}

/* ════════════════════════════════════════════
   9. TypeWriter — 타이핑 효과 (최적화)
   ════════════════════════════════════════════ */
export function TypeWriter({
  words, className = "", speed = 80, pause = 2500,
}: {
  words: string[]; className?: string; speed?: number; pause?: number;
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const w = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setIsDeleting(true), pause);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length === 0) { setIsDeleting(false); setWordIndex((p) => (p + 1) % words.length); }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return <span className={className}>{text}<span className="animate-pulse text-accent">|</span></span>;
}

/* ════════════════════════════════════════════
   10. Particles — 파티클 배경
   ════════════════════════════════════════════ */
export function Particles({ count = 50, className = "" }: { count?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.3 + 0.1,
    }));

    let mouseX = -1000, mouseY = -1000;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left; mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", onMove);

    let running = true;
    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        // Mouse repulsion
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.02;
          p.vx += dx * force; p.vy += dy * force;
        }
        p.vx *= 0.99; p.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      }

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => { running = false; window.removeEventListener("resize", resize); canvas.removeEventListener("mousemove", onMove); };
  }, [count]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-auto ${className}`} style={{ willChange: "transform" }} />;
}

/* ════════════════════════════════════════════
   11. GradientBorder — 애니메이션 그라디언트 보더
   ════════════════════════════════════════════ */
export function GradientBorder({
  children, className = "", borderWidth = 1, active = false,
}: {
  children: ReactNode; className?: string; borderWidth?: number; active?: boolean;
}) {
  return (
    <div className={`relative group ${className}`}>
      <div
        className={`absolute -inset-[${borderWidth}px] rounded-[inherit] transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{
          background: "conic-gradient(from 0deg, #6366f1, #06b6d4, #6366f1, #06b6d4, #6366f1)",
          animation: "spin 4s linear infinite",
          borderRadius: "inherit",
        }}
      />
      <div className="relative bg-dark-card rounded-[inherit] z-[1]">{children}</div>
    </div>
  );
}

/* ════════════════════════════════════════════
   12. SplitText — 한글자씩 나타나는 텍스트
   ════════════════════════════════════════════ */
export function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} style={{
          display: "inline-block",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(100%) scale(0.5)",
          transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s`,
          whiteSpace: char === " " ? "pre" : undefined,
        }}>
          {char}
        </span>
      ))}
    </span>
  );
}
