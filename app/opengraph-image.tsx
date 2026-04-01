import { ImageResponse } from "next/og";

export const alt = "타임스터디카페 구리갈매점 | 몰입의 공간";
export const size = {
  width: 1200,
  height: 630,
};
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            color: "#3b82f6",
            letterSpacing: "6px",
            marginBottom: "24px",
            fontWeight: 600,
          }}
        >
          PREMIUM STUDY CAFE
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            fontWeight: 900,
            color: "#f5f5f5",
            marginBottom: "8px",
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#3b82f6" }}>몰입</span>
          <span>의 공간</span>
        </div>

        {/* Cafe name */}
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            fontWeight: 600,
            color: "#a0a0a0",
            marginBottom: "16px",
          }}
        >
          타임스터디카페 구리갈매점
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#3b82f6",
            borderRadius: "2px",
            marginBottom: "20px",
          }}
        />

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            color: "#666666",
          }}
        >
          집중할 수 있는 나만의 공간
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
