import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { AboutSection } from "../gatsby-theme-portfolio-minimal/components/About";
import { PersonSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Sobre Mim"
        description="Conheça a formação e experiência clínica da psicóloga Emanuelle Fehr em Terapia Cognitivo-Comportamental e acompanhamento psicológico online."
        noIndex={false}
      />
      <PersonSchema 
        name="Emanuelle Fehr"
        url="https://www.psimanufehr.com/about"
        description="Psicóloga com formação em Terapia Cognitivo-Comportamental. Especialista em ansiedade, depressão, TDAH e desenvolvimento pessoal."
      />
      <Page>
        <AboutSection sectionId="hero" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
