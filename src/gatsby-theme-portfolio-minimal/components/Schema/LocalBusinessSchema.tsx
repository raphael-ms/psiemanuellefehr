import React from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
}

export function LocalBusinessSchema(props: Readonly<LocalBusinessSchemaProps>): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": props.url,
    name: props.name || "Emanuelle Fehr - Psicóloga",
    description: props.description || "Serviços de psicoterapia online com especialização em Terapia Cognitivo-Comportamental",
    url: props.url || "https://psimanufehr.com",
    ...(props.telephone && { telephone: props.telephone }),
    ...(props.email && { email: props.email }),
    priceRange: "$",
    areaServed: "BR",
    serviceType: ["Psicoterapia", "Terapia Cognitivo-Comportamental", "Aconselhamento Psicológico"],
    knowsAbout: ["Ansiedade", "Depressão", "TDAH", "Autoestima", "Relacionamentos", "Stress"],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
