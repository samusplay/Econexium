import { FaWhatsapp } from "react-icons/fa";
import { MdSupportAgent, MdVerifiedUser } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white px-5 pt-28 pb-24 md:pt-32 md:pb-32"
    >
      {/* Halos de color de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(76,175,80,0.08), transparent 45%), radial-gradient(circle at 85% 75%, rgba(10,79,163,0.10), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#EAF6EA] px-4 py-1.5 text-sm font-semibold text-verde-osc">
          <span className="h-2 w-2 rounded-full bg-verde" />
          Movilidad eléctrica en Colombia
        </div>

        {/* Titular */}
        <h1 className="font-display text-4xl font-black leading-[1.08] text-gris md:text-5xl lg:text-5xl">
          ¿Tienes <span className="text-azul">vehículo eléctrico</span> y quieres{" "}
          <span className="text-verde">cargarlo</span> en casa o empresa?
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gris-claro md:text-xl">
          Diseñamos e instalamos soluciones de carga eléctrica{" "}
          <strong className="text-gris">
            seguras, eficientes y adaptadas a tu espacio.
          </strong>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Corregido: Se agregó la etiqueta <a */}
          <a
            href="https://wa.me/573057829807"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-azul px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-azul-osc"
          >
            <FaWhatsapp className="text-xl" />
            Cotiza por WhatsApp
          </a>

          {/* Corregido: Se agregó la etiqueta <a */}
          <a
            href="#servicios"
            className="inline-flex items-center rounded-full border-2 border-border-soft px-7 py-4 text-base font-semibold text-gris transition-colors hover:border-azul hover:text-azul"
          >
            Ver servicios
          </a>
        </div>

        {/* ═══════════════════════════════════════════════════
            👇 AQUÍ VA LA FOTO DEL HERO
            Cuando ECONEXIUM envíe la imagen real:
            1. Guárdala en:  /public/hero-instalacion.jpg
            2. Agrega arriba del archivo:  import Image from "next/image";
            3. Descomenta este bloque:

            <div className="relative mx-auto mt-14 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/hero-instalacion.jpg"
                alt="Técnico de ECONEXIUM instalando un cargador para vehículo eléctrico"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            ═══════════════════════════════════════════════════ */}

        {/* Franja de confianza */}
        <div className="mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border-soft pt-7">
          <div className="flex items-center gap-2.5 text-sm font-medium text-gris-claro">
            <MdVerifiedUser className="text-xl text-verde" />
            Póliza de cumplimiento
          </div>
          <div className="flex items-center gap-2.5 text-sm font-medium text-gris-claro">
            <MdSupportAgent className="text-xl text-azul" />
            Soporte técnico
          </div>
        </div>
      </div>
    </section>
  );
}