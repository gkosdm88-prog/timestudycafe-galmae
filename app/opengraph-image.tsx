import { ImageResponse } from "next/og";

export const alt = "구리갈매 스터디카페 타임 | 몰입의 공간";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          position: "relative",
        }}
      >
        {/* Background orbs */}
        <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", top: "20%", left: "20%" }} />
        <div style={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", bottom: "20%", right: "20%" }} />

        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", marginBottom: "32px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
          <span style={{ fontSize: "14px", color: "#a1a1aa" }}>Premium Study Cafe</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", fontSize: "88px", fontWeight: 900, letterSpacing: "-4px", marginBottom: "16px" }}>
          <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", backgroundClip: "text", color: "transparent" }}>몰입</span>
          <span style={{ color: "#fafafa" }}>의 공간</span>
        </div>

        {/* Cafe name */}
        <div style={{ display: "flex", fontSize: "28px", fontWeight: 600, color: "#a1a1aa", marginBottom: "20px" }}>
          구리갈매 스터디카페 타임
        </div>

        {/* Divider */}
        <div style={{ width: "60px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #6366f1, #06b6d4)", marginBottom: "20px" }} />

        {/* Description */}
        <div style={{ display: "flex", fontSize: "18px", color: "#52525b" }}>
          집중할 수 있는 나만의 공간
        </div>

        {/* Bottom gradient line */}
        <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "3px", background: "linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)" }} />
      </div>
    ),
    { ...size }
  );
}
