import type { IconType } from "react-icons";
import { MdChatBubbleOutline, MdElectricBolt, MdSearch, MdSupportAgent } from "react-icons/md";

type Paso = {
  numero: string;
  icono: IconType;
  titulo: string;
  descripcion: string;
};

const pasos: Paso[] = [
  {
    numero: "01",
    icono: MdChatBubbleOutline,
    titulo: "Nos contactas",
    descripcion:
      "Nos cuentas qué vehículo tienes y dónde quieres cargarlo. Sin compromiso.",
  },
  {
    numero: "02",
    icono: MdSearch,
    titulo: "Visita técnica",
    descripcion:
      "Revisamos tu instalación eléctrica y definimos el cargador que te conviene.",
  },
  {
    numero: "03",
    icono: MdElectricBolt,
    titulo: "Instalación",
    descripcion:
      "Instalamos y dejamos el punto de carga funcionando y probado el mismo día.",
  },
  {
    numero: "04",
    icono: MdSupportAgent,
    titulo: "Soporte continuo",
    descripcion:
      "Quedamos disponibles para mantenimiento y cualquier duda que te surja.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="bg-white px-5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-verde">
            Cómo trabajamos
          </span>
          <h2 className="font-display mt-3 text-3xl font-black text-gris md:text-4xl lg:text-5xl">
            De la consulta a la carga en 4 pasos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gris-claro">
            Sabes exactamente qué esperar en cada etapa, sin sorpresas ni costos
            ocultos.
          </p>
        </div>

        {/* Pasos */}
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Línea conectora (solo desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-border-soft lg:block"
          />

          {pasos.map(({ numero, icono: Icono, titulo, descripcion }) => (
            <li key={numero} className="relative">
              {/* Círculo con icono */}
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-border-soft bg-white">
                <Icono className="text-2xl text-azul" />
              </div>

              <span className="font-display text-sm font-bold tracking-widest text-verde">
                {numero}
              </span>

              <h3 className="font-display mt-1.5 text-lg font-bold text-gris">
                {titulo}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-gris-claro">
                {descripcion}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}