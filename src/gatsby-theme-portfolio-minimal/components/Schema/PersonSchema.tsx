import React from "react";

interface PersonSchemaProps {
  name?: string;
  url?: string;
  image?: string;
  description?: string;
  sameAs?: string[];
}

export function PersonSchema(props: Readonly<PersonSchemaProps>): React.ReactElement {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: props.name || "Emanuelle Fehr",
    url: props.url || "https://psimanufehr.com",
    ...(props.image && { image: props.image }),
    description: props.description || "Psicóloga especialista em Terapia Cognitivo-Comportamental",
    jobTitle: "Psicóloga",
    knowsAbout: ["Psicologia Clínica", "Terapia Cognitivo-Comportamental", "Ansiedade", "Depressão", "TDAH"],
    ...(props.sameAs && { sameAs: props.sameAs }),
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
