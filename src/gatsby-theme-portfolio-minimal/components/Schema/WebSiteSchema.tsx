import React from "react";

export function WebSiteSchema(): React.ReactElement {
  const siteUrl = "https://www.psimanufehr.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Emanuelle Fehr - Psicóloga Online",
    description: "Psicoterapia online com Terapia Cognitivo-Comportamental em Portugal e para a diáspora lusófona.",
    inLanguage: "pt-PT",
    publisher: { "@id": `${siteUrl}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
