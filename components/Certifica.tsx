import type { IconType } from "react-icons";
import {
    MdDesignServices,
    MdHandshake,
    MdSupportAgent,
    MdTrendingDown,
    MdVerifiedUser,
} from "react-icons/md";

type Garantia = {
  icono: IconType;
  titulo: string;
  descripcion: string;
};

const garantias: Garantia[] = [
  {
    icono: MdVerifiedUser,
    titulo: "Póliza de cumplimiento",
    descripcion:
      "Respaldo formal del trabajo contratado. No dependes de una promesa verbal.",
  },
  {
    icono: MdTrendingDown,
    titulo: "Optimización de consumo",
    descripcion:
      "Configuramos la carga para que tu recibo de energía no se dispare.",
  },
  {
    icono: MdHandshake,
    titulo: "Acompañamiento completo",
    descripcion:
      "Estamos contigo desde la primera visita hasta que el cargador queda operando.",
  },
  {
    icono: MdDesignServices,
    titulo: "Diseño a la medida",
    descripcion:
      "Cada espacio es distinto. Adaptamos la solución a tu red y a tu vehículo.",
  },
  {
    icono: MdSupportAgent,
    titulo: "Soporte técnico",
    descripcion:
      "Si algo falla después de instalado, respondemos. No desaparecemos.",
  },
];

export default function Certifica() {
  return (
    <section id="certifica" className="relative overflow-hidden bg-azul px-5 py-24 md:py-28">
      {/* Textura sutil de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#8FD494]">
            Nuestro respaldo
          </span>
          <h2 className="font-display mt-3 text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Por qué confiar en ECONEXIUM
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Trabajo eléctrico serio necesita respaldo serio. Esto es lo que
            certificamos en cada instalación.
          </p>
        </div>

        {/* Garantías */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {garantias.map(({ icono: Icono, titulo, descripcion }) => (
            <li
              key={titulo}
              className="flex h-full gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/12"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-verde/20">
                <Icono className="text-xl text-[#8FD494]" />
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-white">
                  {titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}