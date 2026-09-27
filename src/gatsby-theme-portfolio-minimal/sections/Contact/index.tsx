import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Contact/data";
import { AnimatedSection } from "../../components/AnimatedComponents";
import { motion } from "framer-motion";
// @ts-ignore
import * as classes from "./style.module.css";

const WHATSAPP_URL =
  "https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&app_absent=0";

export function ContactSection(props: Readonly<PageSection>): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allContactJson.sections[0];

  return (
    <Section
      anchor={props.sectionId}
      heading={props.heading}
      additionalClasses={[classes.Contact]}
    >
      <AnimatedSection direction="up" delay={0.2}>
        {data.description && (
          <p className={classes.Description}>{data.description}</p>
        )}

        <div className={classes.Card}>
          {data.image.src && (
            <GatsbyImage
              className={classes.Avatar}
              image={data.image.src.childImageSharp.gatsbyImageData}
              alt={data.image.alt || `Profile ${data.name}`}
            />
          )}

          <div className={classes.Details}>
            <div className={classes.Info}>
              <p className={classes.Name}>{data.name}</p>

              <div className={classes.Methods}>
                <a href={`mailto:${data.email}`}>{data.email}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  +351 910 809 408
                </a>
              </div>
            </div>

            <motion.a
              className={classes.Cta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Agende pelo WhatsApp
            </motion.a>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
