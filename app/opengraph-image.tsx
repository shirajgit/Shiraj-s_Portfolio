// app/opengraph-image.tsx
// Auto-generated branded social-share card (also used for Twitter).
import { ImageResponse } from "next/og";
import { siteConfig } from "./site.config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(1000px 500px at 78% 18%, rgba(250,204,21,0.18), transparent 60%), radial-gradient(800px 500px at 15% 95%, rgba(249,115,22,0.14), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: monogram + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0a0a0a",
              border: "2px solid rgba(250,204,21,0.4)",
              fontSize: "60px",
              fontWeight: 900,
              color: "#facc15",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "30px", fontWeight: 700, color: "#e5e7eb" }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: "22px", color: "#9ca3af" }}>
              {siteConfig.company}
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#ffffff" }}>Building real&nbsp;</span>
            <span style={{ color: "#facc15" }}>products.</span>
          </div>
          <div style={{ fontSize: "34px", color: "#cbd5e1", maxWidth: "900px" }}>
            {`${siteConfig.role} · MERN · Next.js · React Native · IoT`}
          </div>
        </div>

        {/* bottom row: url + accent */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "26px", color: "#9ca3af" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 30px",
              borderRadius: "999px",
              background: "#facc15",
              color: "#000000",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            Open to work
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
