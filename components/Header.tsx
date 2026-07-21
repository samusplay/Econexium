"use client";

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
            <svg width="40" height="32" viewBox="0 0 42 34" fill="none" aria-hidden="true">
              <path d="M11 2H31L40 17L31 32H11L2 17Z" stroke="#545454" strokeWidth="2.5" fill="white" />
              <rect x="12" y="16" width="3.2" height="8" rx="1" fill="#4CAF50" />
              <rect x="17" y="13" width="3.2" height="11" rx="1" fill="#4CAF50" />
              <rect x="22" y="11" width="3.2" height="13" rx="1" fill="#4CAF50" />
              <rect x="27" y="13" width="3.2" height="11" rx="1" fill="#4CAF50" />
            </svg>
            <span className="font-display text-xl font-extrabold tracking-tight">
              <span className="text-verde">ECO</span>
              <span className="text-azul">NEXIUM</span>
            </span>
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