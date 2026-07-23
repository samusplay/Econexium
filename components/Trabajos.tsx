import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type Trabajo = {
  id: string;
  paso: string;
  etiqueta: string;
  titulo: string;
  descripcion: string;
  dato?: { valor: string; detalle: string };
  imagen: string;
  alt: string;
  posicion: string;
  lugar: string;
};

const trabajos: Trabajo[] = [
  {
    id: "adecuacion",
    paso: "01",
    etiqueta: "Adecuación eléctrica",
    titulo: "Primero preparamos tu instalación",
    descripcion:
      "Intervenimos el tablero y montamos la protección dedicada para el cargador. Nuestro equipo trabaja con casco, guantes dieléctricos y herramienta certificada.",
    imagen: "/trabajos/Instalacion1.jpeg",
    alt: "Técnicos de ECONEXIUM interviniendo un tablero eléctrico con equipo de protección",
    posicion: "object-center",
    lugar: "Bogotá · Instalación residencial",
  },
  {
    id: "puesta-marcha",
    paso: "02",
    etiqueta: "Puesta en marcha",
    titulo: "Probamos que cargue como debe",
    descripcion:
      "No entregamos hasta verificar corriente, voltaje y temperatura en operación real, con el vehículo conectado.",
    dato: { valor: "32 A · 6,1 kW", detalle: "medidos en esta instalación" },
    imagen: "/trabajos/medidor.jpeg",
    alt: "Pantalla del cargador mostrando 32 amperios y 6.1 kW durante una carga",
    posicion: "object-top",
    lugar: "Bogotá · Verificación en sitio",
  },
  {
    id: "resultado",
    paso: "03",
    etiqueta: "Instalación terminada",
    titulo: "Tu carro carga en tu propio garaje",
    descripcion:
      "Conectas al llegar y amaneces con la batería llena. Sin filas, sin desviarte a una estación, sin depender de nadie más.",
    imagen: "/trabajos/carro-cargando.jpg",
    alt: "Vehículo eléctrico conectado al cargador en el garaje de una vivienda en Bogotá",
    posicion: "object-center",
    lugar: "Bogotá · Vivienda unifamiliar",
  },
];

export default function Trabajos() {
  return (
    <section id="trabajos" className="bg-surface-alt px-5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-verde">
            Trabajos reales
          </span>
          <h2 className="font-display mt-3 text-3xl font-black text-gris md:text-4xl lg:text-5xl">
            Así queda una instalación nuestra
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gris-claro">
            Fotos de instalaciones que hemos realizado en Bogotá, no imágenes de
            catálogo.
          </p>
        </div>

        {/* Bloques alternados */}
        <ol className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {trabajos.map((trabajo, i) => (
            <li
              key={trabajo.id}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              {/* Imagen */}
              <figure className={`m-0 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg sm:h-96">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${trabajo.posicion}`}
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs uppercase tracking-wide text-gris-claro">
                  {trabajo.lugar}
                </figcaption>
              </figure>

              {/* Texto */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-black leading-none text-verde/25">
                    {trabajo.paso}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest text-verde">
                    {trabajo.etiqueta}
                  </span>
                </div>

                <h3 className="font-display mt-4 text-2xl font-black leading-tight text-gris md:text-3xl">
                  {trabajo.titulo}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-gris-claro">
                  {trabajo.descripcion}
                </p>

                {trabajo.dato && (
                  <div className="mt-7 inline-flex flex-col rounded-2xl border-l-4 border-verde bg-white px-6 py-4">
                    <span className="font-display text-2xl font-black text-azul">
                      {trabajo.dato.valor}
                    </span>
                    <span className="mt-0.5 text-sm text-gris-claro">
                      {trabajo.dato.detalle}
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Cierre */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/573057829807?text=Hola%2C%20quiero%20cotizar%20la%20instalaci%C3%B3n%20de%20un%20cargador."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-azul px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-azul-osc"
          >
            <FaWhatsapp className="text-xl" />
            Cotiza tu instalación
          </a>
        </div>
      </div>
    </section>
  );
}