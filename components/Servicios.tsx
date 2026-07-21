import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { MdApartment, MdBuild, MdEngineering, MdHome } from "react-icons/md";

type Servicio = {
  icono: IconType;
  titulo: string;
  descripcion: string;
  acento: "verde" | "azul";
  mensaje: string;
};

const servicios: Servicio[] = [
  {
    icono: MdHome,
    titulo: "Cargadores residenciales",
    descripcion:
      "Instalamos tu punto de carga en casa, revisando primero que tu instalación eléctrica lo soporte.",
    acento: "verde",
    mensaje: "Hola, quiero instalar un cargador en mi casa.",
  },
  {
    icono: MdApartment,
    titulo: "Empresas y parqueaderos",
    descripcion:
      "Soluciones para flotas, edificios y estacionamientos, con capacidad para varios vehículos a la vez.",
    acento: "azul",
    mensaje: "Hola, necesito cargadores para mi empresa o parqueadero.",
  },
  {
    icono: MdEngineering,
    titulo: "Asesoría y revisión eléctrica",
    descripcion:
      "Evaluamos tu red antes de instalar: capacidad, protecciones y qué cargador te conviene.",
    acento: "verde",
    mensaje: "Hola, quiero una asesoría técnica para mi instalación.",
  },
  {
    icono: MdBuild,
    titulo: "Mantenimiento y soporte",
    descripcion:
      "Revisiones periódicas y atención cuando algo falla, para que tu cargador no te deje tirado.",
    acento: "azul",
    mensaje: "Hola, necesito mantenimiento para mi cargador.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-surface-alt px-5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-verde">
            Qué hacemos
          </span>
          <h2 className="font-display mt-3 text-3xl font-black text-gris md:text-4xl lg:text-5xl">
            Nos encargamos de todo el proceso
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gris-claro">
            Desde la revisión de tu instalación hasta el soporte posterior, con
            respaldo técnico en cada paso.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(({ icono: Icono, titulo, descripcion, acento, mensaje }) => {
            const esVerde = acento === "verde";
            return (
              <article
                key={titulo}
                className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                    esVerde ? "bg-[#EAF6EA]" : "bg-[#E7EEF7]"
                  }`}
                >
                  <Icono
                    className={`text-2xl ${esVerde ? "text-verde" : "text-azul"}`}
                  />
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-gris">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}