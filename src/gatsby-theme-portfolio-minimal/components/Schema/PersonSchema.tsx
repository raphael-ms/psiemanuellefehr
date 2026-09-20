import React from "react";

interface PersonSchemaProps {
  name?: string;
  url?: string;
  image?: string;
  description?: string;
  sameAs?: string[];
}

export function PersonSchema(props: Readonly<PersonSchemaProps>): React.ReactElement {
  const siteUrl = "https://www.psimanufehr.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: props.name || "Emanuelle Fehr",
    url: siteUrl,
    image: props.image || `${siteUrl}/static/fdb7067cc61cb75afa15c2736f638818/67c6e/emanuelle-about.avif`,
    description: props.description || "Psicóloga clínica especialista em Terapia Cognitivo-Comportamental, ACT e Terapia de Esquemas. Atendimento online em português.",
    jobTitle: "Psicóloga Clínica",
    knowsAbout: [
      "Psicologia Clínica",
      "Terapia Cognitivo-Comportamental",
      "ACT – Terapia de Aceitação e Compromisso",
      "Terapia do Esquema",
      "Psicologia Intercultural",
      "Ansiedade",
      "Depressão",
      "PHDA",
      "Autoestima",
      "Neurodiversidade",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Ordem dos Psicólogos Portugueses",
        identifier: "27145",
        recognizedBy: {
          "@type": "Organization",
          name: "Ordem dos Psicólogos Portugueses",
          url: "https://www.ordemdospsicologos.pt",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Entidade Reguladora da Saúde",
        identifier: "E173632",
        recognizedBy: {
          "@type": "Organization",
          name: "Entidade Reguladora da Saúde",
          url: "https://www.ers.pt",
        },
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidade de Coimbra",
        url: "https://www.uc.pt",
      },
      {
        "@type": "EducationalOrganization",
        name: "CRIAP – Centro de Referência e Investigação em Psicologia",
      },
    ],
    sameAs: props.sameAs || [
      "https://www.instagram.com/manufehr/",
    ],
    worksFor: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
