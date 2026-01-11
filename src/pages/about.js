import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { AboutSection } from "../gatsby-theme-portfolio-minimal/components/About";

export default function IndexPage() {
  return (
    <>
      <Seo title="Emanuelle Fehr . Psicoterapia Online - Sobre Mim" noIndex={false} />
      <Page useSplashScreenAnimation>
        <AboutSection sectionId="hero" />
      </Page >
    </>
  );
}
