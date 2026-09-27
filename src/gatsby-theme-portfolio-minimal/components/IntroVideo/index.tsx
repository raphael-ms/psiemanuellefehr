import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { AnimatedSection } from "../AnimatedComponents";
// @ts-ignore
import * as classes from "./style.module.css";

const SITE_URL = "https://www.psimanufehr.com";
const VIDEO_PATH = "/emanuelle-fehr-presentation.mp4";
const POSTER_PATH = "/emanuelle-fehr-poster.jpg";
const WHATSAPP_URL =
  "https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&app_absent=0";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Conheça a psicóloga Emanuelle Fehr",
  description:
    "Mensagem de apresentação da psicóloga clínica Emanuelle Fehr, sobre a sua abordagem à psicoterapia online em português.",
  thumbnailUrl: `${SITE_URL}${POSTER_PATH}`,
  contentUrl: `${SITE_URL}${VIDEO_PATH}`,
  uploadDate: "2026-09-27",
  duration: "PT1M",
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export function IntroVideo(props: Readonly<{ sectionId: string; heading?: string }>): React.ReactElement {
  return (
    <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Intro]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <AnimatedSection direction="up" delay={0.15}>
        <div className={classes.Layout}>
          <div className={classes.Frame}>
            <video
              className={classes.Video}
              controls
              preload="none"
              playsInline
              poster={POSTER_PATH}
            >
              <source src={VIDEO_PATH} type="video/mp4" />
              O seu navegador não suporta vídeos.
            </video>
          </div>

          <div className={classes.Copy}>
            <p>
              Antes de marcar, deixo-lhe uma mensagem. Em menos de um minuto
              conto-lhe quem sou e como trabalho, para que se sinta à vontade
              antes da nossa primeira conversa.
            </p>
            <a
              className={classes.Cta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende uma sessão introdutória gratuita
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
