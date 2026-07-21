import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdSupportAgent, MdVerifiedUser } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src="/hero-instalacion.jpg"
        alt="Vehículo eléctrico conectado a un punto de carga"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 md:px-5 md:py-28">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
          {/* Eyebrow */}
         

          {/* Titular */}
          <h1
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
           className="font-display text-3xl font-black leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Carga tu vehículo eléctrico en{" "}
            <span className="text-verde">casa o empresa</span>
          </h1>

          {/* Subtítulo */}
          

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
            {/* Corregido: Se agregó la etiqueta <a */}
            <a
              href="https://wa.me/573057829807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-verde px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-7 sm:py-4 sm:text-base"
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              Cotiza por WhatsApp
            </a>

            {/* Corregido: Se agregó la etiqueta <a */}
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:px-7 sm:py-4 sm:text-base"
            >
              Ver servicios
            </a>
          </div>

          {/* Franja de confianza */}
          <div
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
          className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/25 pt-5 md:mt-9 md:pt-6">
            <div className="flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <MdVerifiedUser className="text-base text-verde sm:text-xl" />
              Póliza de cumplimiento
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <MdSupportAgent className="text-base text-verde sm:text-xl" />
              Soporte técnico
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}