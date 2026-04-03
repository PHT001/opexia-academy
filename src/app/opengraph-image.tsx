import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OpexIA Academy — Lance ton agence IA et génère 10K€/mois";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(160deg, #1A1A2E 0%, #16162A 50%, #0F0F1E 100%)",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 23, 68, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.1)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#ffffff" }}>Opex</span>
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#FF1744" }}>IA</span>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginLeft: "12px" }}>Academy</span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          Lance ton agence IA
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#FF1744",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          de 0 à 10K€/mois
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          22 modules · 85 leçons · Formation 100% pratique
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #FF1744, #D50000, #FF1744)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
