import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const enlaces = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#proceso", texto: "Cómo trabajamos" },
  { href: "#sectores", texto: "Dónde instalamos" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="bg-[#3A3A3A] px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_auto]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="38" height="30" viewBox="0 0 42 34" fill="none" aria-hidden="true">
                <path d="M11 2H31L40 17L31 32H11L2 17Z" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                <rect x="12" y="16" width="3.2" height="8" rx="1" fill="#4CAF50" />
                <rect x="17" y="13" width="3.2" height="11" rx="1" fill="#4CAF50" />
                <rect x="22" y="11" width="3.2" height="13" rx="1" fill="#4CAF50" />
                <rect x="27" y="13" width="3.2" height="11" rx="1" fill="#4CAF50" />
              </svg>
              <span className="font-display text-lg font-extrabold tracking-tight">
                <span className="text-verde">ECO</span>
                <span className="text-white">NEXIUM</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Instalación de cargadores para vehículos eléctricos en hogares,
              edificios y empresas.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Secciones del sitio">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-white/40">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {enlaces.map(({ href, texto }) => (
                <li key={href}>
                  {/* Corregido: Se agregó la etiqueta <a */}
                  <a
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-verde"
                  >
                    {texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-white/40">
              Escríbenos
            </p>
            
            {/* Corregido: Se agregó la etiqueta <a */}
            <a
              href="https://wa.me/573057829807"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-4 block text-xl font-bold text-white transition-colors hover:text-verde"
            >
              +57 305 782 9807
            </a>

            <div className="mt-5 flex gap-3">
              {/* Corregido: Se agregó la etiqueta <a */}
              <a
                href="https://wa.me/573057829807"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escríbenos por WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 transition-colors hover:border-verde hover:bg-verde/10"
              >
                <FaWhatsapp className="text-base text-white/80" />
              </a>
              
              {/* Corregido: Se agregó la etiqueta <a */}
              <a
                href="https://instagram.com/econexium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 transition-colors hover:border-verde hover:bg-verde/10"
              >
                <FaInstagram className="text-base text-white/80" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {año} ECONEXIUM. Todos los derechos reservados.</p>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  );
}