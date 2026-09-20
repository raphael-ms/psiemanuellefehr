import React from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
}

export function LocalBusinessSchema(props: Readonly<LocalBusinessSchemaProps>): React.ReactElement {
  const siteUrl = "https://www.psimanufehr.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: props.name || "Emanuelle Fehr - Psicóloga",
    description: props.description || "Serviços de psicoterapia online com especialização em Terapia Cognitivo-Comportamental para ansiedade, depressão, PHDA e autoestima.",
    url: siteUrl,
    telephone: props.telephone || "+351910809408",
    email: props.email || "emanuelle.fehr@mail.com",
    priceRange: "€€",
    medicalSpecialty: "https://schema.org/Psychiatric",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/emanuelle-fehr-profile.avif`,
      width: 400,
      height: 400,
    },
    image: `${siteUrl}/emanuelle-fehr-profile.avif`,
    areaServed: [
      { "@type": "Country", "name": "Portugal" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "Denmark" },
      { "@type": "Country", "name": "Switzerland" },
    ],
    availableService: [
      { "@type": "MedicalTherapy", "name": "Terapia Cognitivo-Comportamental (TCC)" },
      { "@type": "MedicalTherapy", "name": "ACT – Terapia de Aceitação e Compromisso" },
      { "@type": "MedicalTherapy", "name": "Terapia do Esquema" },
      { "@type": "MedicalTherapy", "name": "Psicologia Intercultural" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      url: "https://api.whatsapp.com/message/X7NOGR2DKCOYP1",
    },
    sameAs: [
      "https://www.instagram.com/manufehr/",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Entidade Reguladora da Saúde",
      identifier: "E173632",
      recognizedBy: {
        "@type": "Organization",
        name: "Entidade Reguladora da Saúde (ERS)",
        url: "https://www.ers.pt",
      },
    },
    founder: { "@id": `${siteUrl}/#person` },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
