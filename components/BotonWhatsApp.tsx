"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mensaje = "Hola ECONEXIUM, quiero información sobre instalación de cargadores.";
  const url = `https://wa.me/573057829807?text=${encodeURIComponent(mensaje)}`;

  const clases = visible
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-4 opacity-0";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-105 ${clases}`}
    >
      <FaWhatsapp className="text-3xl text-white" />
    </a>
  );
}