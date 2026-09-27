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
import { InstagramReels } from "../gatsby-theme-portfolio-minimal/components/InstagramReels";
import { IntroVideo } from "../gatsby-theme-portfolio-minimal/components/IntroVideo";
import { LocalBusinessSchema, PersonSchema, WebSiteSchema, FAQPageSchema } from "../gatsby-theme-portfolio-minimal/components/Schema";
import { FloatingWhatsAppButton } from "../gatsby-theme-portfolio-minimal/components/FloatingWhatsAppButton";

const trustBarStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem 2rem",
  justifyContent: "center",
  padding: "1.25rem 2rem",
  borderTop: "1px solid var(--secondary-color)",
  borderBottom: "1px solid var(--secondary-color)",
  backgroundColor: "var(--tertiary-color)",
  margin: "5rem 0",
};

const trustItemStyle = {
  fontSize: "0.95rem",
  fontWeight: "500",
  color: "var(--subtext-color)",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const expatCalloutStyle = {
  textAlign: "center",
  margin: "3rem auto",
  maxWidth: "38rem",
  padding: "0 1.5rem",
};

const expatHeadingStyle = {
  fontFamily: "var(--heading-font)",
  fontSize: "1.35rem",
  fontWeight: "500",
  color: "var(--primary-color)",
  lineHeight: "1.35",
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
          <a href="https://www.ordemdospsicologos.pt/pt/publico/verificar-cedula" target="_blank" rel="noopener noreferrer" style={{...trustItemStyle, textDecoration: "none"}}>Registada na OPP nº 27145</a>
          <a href="https://www.ers.pt" target="_blank" rel="noopener noreferrer" style={{...trustItemStyle, textDecoration: "none"}}>ERS E173632</a>
          <span style={trustItemStyle}>Universidade de Coimbra</span>
          <span style={trustItemStyle}>Sessão introdutória gratuita</span>
          <span style={trustItemStyle}>Confidencialidade garantida</span>
          <span style={trustItemStyle}>Aderente ao cheque-psicólogo</span>
        </div>

        <IntroVideo sectionId="apresentacao" heading="Conheça a Emanuelle" />

        <AboutSection sectionId="sobre" heading="Formação Profissional" />

        {/* Expat callout — surfaces international differentiator */}
        <div style={expatCalloutStyle}>
          <p style={expatHeadingStyle}>Para portugueses e brasileiros, onde quer que a vida vos tenha levado.</p>
        </div>

        <TestimonialSection sectionId="depoimentos" heading="Depoimentos" />
        <ProjectsSection sectionId="servicos" heading="Serviços" />
        <InstagramReels sectionId="instagram" heading="No Instagram" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
      <FloatingWhatsAppButton />
    </>
  );
}
