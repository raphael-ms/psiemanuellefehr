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
import { LocalBusinessSchema, PersonSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";

export default function IndexPage() {
  return (
    <>
      <Seo title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr" noIndex={false} />
      <LocalBusinessSchema 
        name="Emanuelle Fehr - Psicóloga"
        description="Serviços de psicoterapia online com especialização em Terapia Cognitivo-Comportamental para ansiedade, depressão, TDAH e autoestima"
        url="https://psimanufehr.com"
      />
      <PersonSchema 
        name="Emanuelle Fehr"
        url="https://psimanufehr.com"
        description="Psicóloga especialista em Terapia Cognitivo-Comportamental"
      />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="sobre" heading="Formação Profissional" />
        <TestimonialSection sectionId="depoimentos" heading="Depoimentos" />
        <ProjectsSection sectionId="servicos" heading="Serviços" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page >
    </>
  );
}
