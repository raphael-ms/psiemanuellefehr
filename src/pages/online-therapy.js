import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { OnlineTherapy } from "../gatsby-theme-portfolio-minimal/components/OnlineTherapy";

export default function IndexPage() {
  return (
    <>
      <Seo title="Psicóloga Online | Terapia Cognitivo-Comportamental | Emanuelle Fehr | Psicoterapia Online" noIndex={false} />
      <Page>
        <OnlineTherapy sectionId="sobre" heading="Psicoterapia Online" />
      </Page >
    </>
  );
}
