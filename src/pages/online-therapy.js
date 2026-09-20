import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { OnlineTherapy } from "../gatsby-theme-portfolio-minimal/components/OnlineTherapy";
import { LocalBusinessSchema, PersonSchema, FAQPageSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

export default function OnlineTherapyPage() {
  return (
    <>
      <Seo
        title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Psicoterapia Online"
        description="Psicoterapia online com abordagem TCC, ACT e Terapia do Esquema. Sessões por videochamada com acolhimento, ética e acompanhamento personalizado."
        noIndex={false}
      />
      <LocalBusinessSchema
        name="Psicoterapia Online - Emanuelle Fehr"
        description="Serviços de psicoterapia online com Terapia Cognitivo-Comportamental para tratamento de ansiedade, depressão, PHDA e questões emocionais."
        url="https://www.psimanufehr.com/online-therapy"
        telephone="+351910809408"
        email="emanuelle.fehr@mail.com"
      />
      <PersonSchema
        name="Emanuelle Fehr"
        description="Psicóloga especialista em Terapia Cognitivo-Comportamental. Oferece sessões de psicoterapia online."
      />
      <FAQPageSchema />
      <Page>
        <OnlineTherapy sectionId="sobre" heading="Psicoterapia Online" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
