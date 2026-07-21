import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type Sector = {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  mensaje: string;
};

const sectores: Sector[] = [
  {
    id: "hogares",
    titulo: "Hogares",
    descripcion:
      "Carga tu vehículo de noche en tu propio garaje y sal cada mañana con la batería llena.",
    imagen: "/sector-hogar.jpg", // ← revisa el nombre real en /public
    mensaje: "Hola, quiero un cargador para mi casa.",
  },
  {
    id: "edificios",
    titulo: "Edificios residenciales",
    descripcion:
      "Instalaciones para parqueaderos comunales, con medición individual por apartamento.",
    imagen: "/Cargadores.jpg",
    mensaje: "Hola, soy de un conjunto residencial y necesito información.",
  },
  {
    id: "empresas",
    titulo: "Empresas",
    descripcion:
      "Puntos de carga para flotas corporativas y para los vehículos de tus colaboradores.",
    imagen: "/Cargando.jpg",
    mensaje: "Hola, necesito cargadores para mi empresa.",
  },
];

export default function Sectores() {
  return (
    <section id="sectores" className="bg-surface-alt px-5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-verde">
            Dónde instalamos
          </span>
          <h2 className="font-display mt-3 text-3xl font-black text-gris md:text-4xl lg:text-5xl">
            Un punto de carga para cada espacio
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gris-claro">
            Adaptamos la solución al lugar, sea una casa, un conjunto o una
            operación con varios vehículos.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {sectores.map(({ id, titulo, descripcion, imagen, mensaje }) => (
            <article
              key={id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imagen}
                  alt={`Cargador instalado en ${titulo.toLowerCase()}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-gris">
                  {titulo}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-gris-claro">
                  {descripcion}
                </p>

                {/* Corregido: Se agregó la etiqueta <a */}
                <a
                  href={`https://wa.me/573057829807?text=${encodeURIComponent(mensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-azul transition-colors hover:text-azul-osc"
                >
                  <FaWhatsapp className="text-base" />
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}