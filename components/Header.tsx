"use client";

import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "border-b border-border-soft shadow-sm" : ""
          }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${scrolled ? "h-20" : "h-24 md:h-28"
            }`}
        >
          <Link href="/" aria-label="ECONEXIUM inicio">
            <Logo
              variante="completo"
              ancho={112}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-[72px] md:h-[92px]"
                }`}
            />
          </Link>

          <Link
            href="#contacto"
            className={`rounded-full bg-azul font-semibold text-white transition-all duration-300 hover:bg-azul-osc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul ${scrolled ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base md:px-8 md:py-4"
              }`}
          >
            Cotizar
          </Link>
        </div>
      </header>

      <div className="h-24 md:h-28" aria-hidden="true" />
    </>
  );
}