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
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm border-b border-border-soft" : ""
          }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="ECONEXIUM inicio">
             <Logo variante="horizontal" ancho={190} />
          </Link>

          <Link
            href="#contacto"
            className="rounded-full bg-azul px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-azul-osc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
          >
            Cotizar
          </Link>
        </div>
      </header>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}