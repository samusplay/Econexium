import Certifica from "@/components/Certifica";
import Contacto from "@/components/Contacto";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Servicios from "@/components/Servicios";
import Trabajos from "@/components/Trabajos";

export default function Home() {
  return (
   <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Trabajos/>
        <Certifica />
        <Contacto />
      </main>
    </>
  );
}
