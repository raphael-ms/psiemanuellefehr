import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Contact/data";
import { AnimatedSection, ScaleOnHover } from "../../components/AnimatedComponents";
import { motion } from "framer-motion";
// @ts-ignore
import * as classes from "./style.module.css";

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
        <div className={classes.Profile}>
          {data.image.src && (
            <ScaleOnHover scale={1.05}>
              <motion.div
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <GatsbyImage
                  className={classes.Avatar}
                  image={data.image.src.childImageSharp.gatsbyImageData}
                  alt={data.image.alt || `Profile ${data.name}`}
                />
              </motion.div>
            </ScaleOnHover>
          )}
          <motion.div 
            className={classes.ContactDetails}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={classes.Name}>{data.name}</div>
            <div className={classes.ContactInfo}>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&app_absent=0`}
                >
                  +351 910809408
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {data.socialProfiles && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SocialProfiles
              from={data.socialProfiles.from}
              showIcon={data.socialProfiles.showIcons}
            />
          </motion.div>
        )}
      </AnimatedSection>
    </Section>
  );
}
