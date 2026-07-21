import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
   <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
      </main>
    </>
  );
}
