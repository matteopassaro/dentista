import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0b3d6d 0%, #1769aa 45%, #e8f4fc 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 28, marginTop: 20, maxWidth: 880, opacity: 0.95 }}>
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            padding: "12px 28px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: 12,
          }}
        >
          Odontoiatria · Bari
        </div>
      </div>
    ),
    { ...size },
  );
}
