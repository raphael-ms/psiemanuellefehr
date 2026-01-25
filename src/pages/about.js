import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { AboutSection } from "../gatsby-theme-portfolio-minimal/components/About";
import { PersonSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";

export default function IndexPage() {
  return (
    <>
      <Seo title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Sobre Mim" noIndex={false} />
      <PersonSchema 
        name="Emanuelle Fehr"
        url="https://psimanufehr.com/about"
        description="Psicóloga com formação em Terapia Cognitivo-Comportamental. Especialista em ansiedade, depressão, TDAH e desenvolvimento pessoal."
      />
      <Page>
        <AboutSection sectionId="hero" />
      </Page >
    </>
  );
}
