import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { AboutSection } from "../gatsby-theme-portfolio-minimal/components/About";
import { PersonSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Sobre Mim"
        description="Conheça a formação e experiência clínica da psicóloga Emanuelle Fehr em Terapia Cognitivo-Comportamental e acompanhamento psicológico online."
        noIndex={false}
      />
      <PersonSchema
        name="Emanuelle Fehr"
        description="Psicóloga clínica com Mestrado pela Universidade de Coimbra, especialista em TCC, ACT e Terapia de Esquemas. Atendimento online em português."
      />
      <Page>
        <AboutSection sectionId="hero" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
