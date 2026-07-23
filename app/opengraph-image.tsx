import { readFileSync } from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

export const alt = "ECONEXIUM — Instalamos cargadores para vehículos eléctricos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = readFileSync(
  join(process.cwd(), "public", "logo-econexium-horizontal.svg")
);
const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

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
          backgroundColor: "#FFFFFF",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={620} height={96} alt="" />

        <div
          style={{
            marginTop: 46,
            fontSize: 40,
            fontWeight: 700,
            color: "#545454",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Instalamos cargadores para vehículos eléctricos
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 26,
            color: "#7A7A7A",
          }}
        >
          Hogares · Edificios · Empresas — Colombia
        </div>

        {/* Franja inferior con los colores de marca */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            width: "100%",
            height: 14,
          }}
        >
          <div style={{ width: "38%", height: "100%", backgroundColor: "#4CAF50" }} />
          <div style={{ width: "62%", height: "100%", backgroundColor: "#0A4FA3" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}