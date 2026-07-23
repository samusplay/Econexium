import Image from "next/image";

type Props = {
  /** "isotipo" = solo el hexágono · "completo" = hexágono + ECONEXIUM */
  variante?: "isotipo" | "completo"| "horizontal";
  /** Ancho en píxeles. El alto se calcula solo para no deformar el logo. */
  ancho?: number;
  className?: string;
  /** true cuando va sobre un fondo oscuro o una foto */
  sobreFondoOscuro?: boolean;
};

const RATIOS = {
  isotipo: 883 / 571,
  completo: 898 / 802,
  horizontal: 648 / 100,
} as const;

const RUTAS = {
  isotipo: "/logo-econexium.svg",
  completo: "/logo-econexium-completo.svg",
  horizontal: "/logo-econexium-horizontal.svg",
} as const;

export default function Logo({
  variante = "isotipo",
  ancho = 54,
  className = "",
  sobreFondoOscuro = false,
}: Props) {
  const alto = Math.round(ancho / RATIOS[variante]);

  const imagen = (
    <Image
      src={RUTAS[variante]}
      alt="ECONEXIUM"
      width={ancho}
      height={alto}
      priority
      className={sobreFondoOscuro ? "" : className}
    />
  );

  // Sobre fondos oscuros el logo va en un contenedor blanco:
  // es la forma correcta de usarlo sin alterar sus colores.
  if (sobreFondoOscuro) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 ${className}`}
      >
        {imagen}
      </span>
    );
  }

  return imagen;
}