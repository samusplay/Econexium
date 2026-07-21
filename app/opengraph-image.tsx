import { ImageResponse } from "next/og";

export const alt =
  "ECONEXIUM — Instalamos cargadores para vehículos eléctricos";
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
          backgroundColor: "#0A4FA3",
          padding: 80,
        }}
      >
        {/* Hexágono con barras de carga */}
        <svg width="180" height="146" viewBox="0 0 42 34" fill="none">
          <path
            d="M11 2H31L40 17L31 32H11L2 17Z"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
          />
          <rect x="12" y="16" width="3.4" height="8" rx="1" fill="#4CAF50" />
          <rect x="17.5" y="13" width="3.4" height="11" rx="1" fill="#4CAF50" />
          <rect x="23" y="11" width="3.4" height="13" rx="1" fill="#4CAF50" />
          <rect x="28.5" y="13" width="3.4" height="11" rx="1" fill="#4CAF50" />
        </svg>

        {/* Nombre de marca */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#4CAF50" }}>ECO</span>
          <span style={{ color: "#FFFFFF" }}>NEXIUM</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Instalamos cargadores para vehículos eléctricos
        </div>

        {/* Línea inferior */}
        <div
          style={{
            display: "flex",
            marginTop: 44,
            paddingTop: 26,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Hogares · Edificios · Empresas — Colombia
        </div>
      </div>
    ),
    { ...size }
  );
}