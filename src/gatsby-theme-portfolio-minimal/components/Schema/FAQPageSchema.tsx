import React from "react";

export function FAQPageSchema(): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "A psicoterapia online é tão eficaz quanto a presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Diversos estudos científicos, incluindo uma meta-análise publicada no Journal of Affective Disorders (2020), demonstram que a psicoterapia online apresenta eficácia equivalente à presencial para ansiedade, depressão e perturbações de humor. A modalidade online é reconhecida pela Ordem dos Psicólogos Portugueses (OPP) e pela American Psychological Association (APA) como uma forma válida e segura de acompanhamento psicológico.",
        },
      },
      {
        "@type": "Question",
        name: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicológica baseada em evidências científicas, desenvolvida por Aaron T. Beck nos anos 1960. Trabalha a relação entre pensamentos, emoções e comportamentos, ajudando a identificar padrões de pensamento disfuncionais e a desenvolver estratégias para substituí-los. É reconhecida pela APA como tratamento de primeira linha para ansiedade, depressão, PHDA, fobias e outras perturbações emocionais.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo dura uma sessão de psicoterapia online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As sessões têm duração padrão de 50 minutos, realizadas por videochamada. Existe também uma sessão introdutória gratuita de 15 minutos, sem compromisso, para que possa conhecer a abordagem terapêutica e esclarecer dúvidas antes de iniciar o processo terapêutico.",
        },
      },
      {
        "@type": "Question",
        name: "As sessões de psicoterapia online são confidenciais?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Toda a informação partilhada em contexto terapêutico é protegida pelo sigilo profissional, nos termos do Código Deontológico da Ordem dos Psicólogos Portugueses (OPP). As sessões decorrem em ambiente seguro e confidencial. O sigilo profissional só pode ser quebrado nos casos expressamente previstos na lei.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a primeira consulta de psicologia online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O processo começa com uma videochamada introdutória gratuita de 15 minutos, pensada para que possa conhecer a psicóloga e o formato do atendimento online sem compromisso. Após essa apresentação, as sessões de psicoterapia têm 50 minutos e são construídas de forma colaborativa, com avaliação inicial das necessidades e objetivos de cada pessoa, respeitando sempre o ritmo individual.",
        },
      },
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
