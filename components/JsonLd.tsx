export default function JsonLd() {
  const datos = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: "ECONEXIUM",
    description:
      "Instalación de cargadores para vehículos eléctricos en hogares, edificios y empresas.",
    url: "https://econexium.com.co",
    telephone: "+573057829807",
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    sameAs: ["https://instagram.com/econexium"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  );
}