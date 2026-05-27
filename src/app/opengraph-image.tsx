import { ImageResponse } from "next/og";

export const alt = "Halal Guide MX — Muslim-Friendly Riviera Maya Travel Guide";
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
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #072A30 0%, #0D3F47 55%, #16535D 100%)",
          color: "#FCF9F2",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top row: logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg viewBox="0 0 100 100" width="92" height="92" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 12C30 12 22 25 22 42C22 55 30 66 50 86C70 66 78 55 78 42C78 25 70 12 50 12Z"
              fill="#FCF9F2"
              stroke="#C15C3D"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M48 36C53 36 57 40 56.5 46C56 51 51 54 45.5 52.5C49 51 50.5 47 49.5 43C48.5 39 45 37 42 38C44 36.5 46 36 48 36Z"
              fill="#072A30"
            />
            <path
              d="M55 41L56 38.5L57 41L59.5 41.5L57 42.5L58 45L55.5 43.5L53 45L54 42.5L51.5 41.5L55 41Z"
              fill="#C15C3D"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#FCF9F2",
              }}
            >
              Halal Guide
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#C15C3D",
                marginTop: 6,
              }}
            >
              MX • Riviera Maya
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#02C39A",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ width: 44, height: 2, background: "#C15C3D", display: "block" }} />
            <span>Quintana Roo&apos;s Premier Halal Travel Resource</span>
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#FCF9F2",
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The honest guide for</span>
            <span style={{ color: "#C15C3D" }}>Muslim travelers</span>
            <span>in the Riviera Maya.</span>
          </div>
        </div>

        {/* Bottom row: location chips */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {["Cancún", "Playa del Carmen", "Tulum"].map((city) => (
            <div
              key={city}
              style={{
                fontSize: 22,
                fontWeight: 700,
                padding: "12px 24px",
                border: "1.5px solid rgba(252, 249, 242, 0.35)",
                borderRadius: 999,
                color: "#FCF9F2",
                background: "rgba(252, 249, 242, 0.06)",
              }}
            >
              {city}
            </div>
          ))}
          <div
            style={{
              marginLeft: "auto",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(252, 249, 242, 0.6)",
            }}
          >
            halalguidemx.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
