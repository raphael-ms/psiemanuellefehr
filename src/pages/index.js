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
import { LocalBusinessSchema, PersonSchema, WebSiteSchema, FAQPageSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

const trustBarStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem 2rem",
  justifyContent: "center",
  padding: "1rem 2rem",
  borderTop: "1px solid var(--secondary-color)",
  borderBottom: "1px solid var(--secondary-color)",
  backgroundColor: "var(--tertiary-color)",
  margin: "5rem 0",
};

const trustItemStyle = {
  fontSize: "0.75rem",
  fontWeight: "600",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--subtext-color)",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
};

const expatCalloutStyle = {
  textAlign: "center",
  margin: "3rem 0",
};

const expatHeadingStyle = {
  fontSize: "0.8rem",
  fontWeight: "600",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--primary-color)",
  margin: 0,
};

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
      <FAQPageSchema />
      <Page>
        <HeroSection sectionId="hero" />

        {/* Trust bar — credentials at a glance */}
        <div style={trustBarStyle} aria-label="Credenciais profissionais">
          <a href="https://www.ordemdospsicologos.pt/pt/publico/verificar-cedula" target="_blank" rel="noopener noreferrer" style={{...trustItemStyle, textDecoration: "none"}}>✓ OPP Nº 27145</a>
          <a href="https://www.ers.pt" target="_blank" rel="noopener noreferrer" style={{...trustItemStyle, textDecoration: "none"}}>✓ ERS E173632</a>
          <span style={trustItemStyle}>✓ Universidade de Coimbra</span>
          <span style={trustItemStyle}>✓ Sessão introdutória gratuita</span>
          <span style={trustItemStyle}>✓ Confidencialidade garantida</span>
          <span style={trustItemStyle}>✓ Aderente ao cheque psicológo</span>
        </div>

        <AboutSection sectionId="sobre" heading="Formação Profissional" />

        {/* Expat callout — surfaces international differentiator */}
        <div style={expatCalloutStyle}>
          <p style={expatHeadingStyle}>🌍 Para portugueses e brasileiros pelo mundo</p>
        </div>

        <TestimonialSection sectionId="depoimentos" heading="Depoimentos" />
        <ProjectsSection sectionId="servicos" heading="Serviços" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
