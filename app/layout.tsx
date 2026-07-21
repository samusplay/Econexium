import BotonWhatsApp from "@/components/BotonWhatsApp";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
//Agregar dominio
export const metadata: Metadata = {
  metadataBase: new URL("https://econexium.com"),
  title: "ECONEXIUM | Instalación de cargadores para vehículos eléctricos",
  description:
    "Diseñamos e instalamos soluciones de carga eléctrica seguras, eficientes y adaptadas a tu espacio. Hogares, edificios residenciales y empresas en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        {children}
        <Footer />
        <BotonWhatsApp />
      </body>
    </html>
  );
}