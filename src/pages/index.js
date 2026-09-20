import React from "react";
import {
  AboutSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { ContactSection } from "../gatsby-theme-portfolio-minimal/sections/Contact";
import { ProjectsSection } from "../gatsby-theme-portfolio-minimal/sections/Projects";
import { TestimonialSection } from "../gatsby-theme-portfolio-minimal/sections/Testimonials";
import { LocalBusinessSchema, PersonSchema, WebSiteSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr"
        description="Psicóloga clínica com atendimento online em português. Terapia Cognitivo-Comportamental para ansiedade, depressão, autoestima e relacionamentos."
        noIndex={false}
      />
      <WebSiteSchema />
      <LocalBusinessSchema
        name="Emanuelle Fehr - Psicóloga"
        description="Serviços de psicoterapia online com especialização em Terapia Cognitivo-Comportamental para ansiedade, depressão, PHDA e autoestima."
        url="https://www.psimanufehr.com"
        telephone="+351910809408"
        email="emanuelle.fehr@mail.com"
      />
      <PersonSchema
        name="Emanuelle Fehr"
        description="Psicóloga clínica especialista em Terapia Cognitivo-Comportamental, ACT e Terapia de Esquemas. Atendimento online em português."
      />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="sobre" heading="Formação Profissional" />
        <TestimonialSection sectionId="depoimentos" heading="Depoimentos" />
        <ProjectsSection sectionId="servicos" heading="Serviços" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
