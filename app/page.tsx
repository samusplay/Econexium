import Certifica from "@/components/Certifica";
import Contacto from "@/components/Contacto";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Sectores from "@/components/Sectores";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
   <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Sectores />
        <Certifica />
        <Contacto />
      </main>
    </>
  );
}
