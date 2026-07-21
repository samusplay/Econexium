"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const TELEFONO = "573057829807";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarPorWhatsApp = () => {
    const texto = `Hola ECONEXIUM, soy ${nombre || "—"}.
Mi contacto: ${contacto || "—"}
${mensaje || "Quiero información sobre instalación de cargadores."}`;

    window.open(
      `https://wa.me/${TELEFONO}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const listo = nombre.trim() !== "" && contacto.trim() !== "";

  return (
    <section id="contacto" className="bg-white px-5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Izquierda: datos de contacto ---------- */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-verde">
              Hablemos
            </span>
            <h2 className="font-display mt-3 text-3xl font-black leading-tight text-gris md:text-4xl lg:text-5xl">
              Cotiza tu punto de carga
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gris-claro">
              Cuéntanos qué vehículo tienes y dónde quieres instalarlo. Te
              respondemos con una propuesta clara, sin compromiso.
            </p>

            <div className="mt-10 space-y-4">
              {/* Corregido: Se agregó la etiqueta <a */}
              <a
                href={`https://wa.me/${TELEFONO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border-soft p-4 transition-colors hover:border-verde"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF6EA]">
                  <FaWhatsapp className="text-xl text-verde" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gris-claro">
                    WhatsApp
                  </p>
                  <p className="font-display text-lg font-bold text-gris">
                    305 782 9807
                  </p>
                </div>
              </a>

              {/* Corregido: Se agregó la etiqueta <a */}
              <a
                href={`tel:+${TELEFONO}`}
                className="group flex items-center gap-4 rounded-2xl border border-border-soft p-4 transition-colors hover:border-azul"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7EEF7]">
                  <MdPhone className="text-xl text-azul" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gris-claro">
                    Llámanos
                  </p>
                  <p className="font-display text-lg font-bold text-gris">
                    305 782 9807
                  </p>
                </div>
              </a>

              {/* Corregido: Se agregó la etiqueta <a */}
              <a
                href="https://instagram.com/econexium"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border-soft p-4 transition-colors hover:border-azul"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7EEF7]">
                  <FaInstagram className="text-xl text-azul" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gris-claro">
                    Instagram
                  </p>
                  <p className="font-display text-lg font-bold text-gris">
                    @econexium
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ---------- Derecha: formulario ---------- */}
          <div className="rounded-3xl bg-azul p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Escríbenos
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Completa los datos y se abrirá WhatsApp con tu mensaje listo.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#8FD494]"
                />
              </div>

              <div>
                <label
                  htmlFor="contacto"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Teléfono o correo
                </label>
                <input
                  id="contacto"
                  type="text"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                  placeholder="¿Cómo te contactamos?"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#8FD494]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  ¿Qué necesitas?
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Ej: tengo un carro eléctrico y quiero instalar el cargador en el garaje de mi casa."
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#8FD494]"
                />
              </div>

              <button
                type="button"
                onClick={enviarPorWhatsApp}
                disabled={!listo}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-verde py-4 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FaWhatsapp className="text-xl" />
                Enviar por WhatsApp
              </button>

              <p className="text-center text-xs text-white/50">
                Se abrirá WhatsApp con tu mensaje escrito. Solo das enviar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}