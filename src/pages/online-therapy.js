import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { OnlineTherapy } from "../gatsby-theme-portfolio-minimal/components/OnlineTherapy";
import { LocalBusinessSchema, PersonSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";

export default function IndexPage() {
  return (
    <>
      <Seo title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Psicoterapia Online" noIndex={false} />
      <LocalBusinessSchema 
        name="Psicoterapia Online - Emanuelle Fehr"
        description="Serviços de psicoterapia online com Terapia Cognitivo-Comportamental para tratamento de ansiedade, depressão, TDAH e questões emocionais"
        url="https://psimanufehr.com/online-therapy"
      />
      <PersonSchema 
        name="Emanuelle Fehr"
        url="https://psimanufehr.com/online-therapy"
        description="Psicóloga especialista em Terapia Cognitivo-Comportamental. Oferece sessões de psicoterapia online."
      />
      <Page>
        <OnlineTherapy sectionId="sobre" heading="Psicoterapia Online" />
      </Page >
    </>
  );
}
