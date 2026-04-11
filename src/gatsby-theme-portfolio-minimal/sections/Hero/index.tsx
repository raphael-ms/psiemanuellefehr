import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { Animation } from "gatsby-theme-portfolio-minimal";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Hero/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingElement } from "../../components/AnimatedComponents";
// @ts-ignore
import * as classes from "./style.module.css";

export function HeroSection(props: Readonly<PageSection>): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allHeroJson.sections[0];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Section
      anchor={props.sectionId}
      additionalClasses={[classes.HeroContainer]}
    >
      {data.heroPhoto?.src && (
        <motion.div 
          className={classes.heroImageCont}
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GatsbyImage
              className={classes.heroImage}
              image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
              alt={data.heroPhoto.alt || `Profile Image`}
              loading="eager"
            />
          </motion.div>
        </motion.div>
      )}
      <motion.div 
        className={classes.Hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className={classes.Intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {data.intro && (
            <span className={classes.ImagePrefix}>{data.intro}</span>
          )}
          {data.image?.src && (
            <FloatingElement duration={3} yOffset={8}>
              <Animation
                className={classes.Image}
                type="waving-hand"
                duration={2500}
                iterationCount={3}
              >
                <GatsbyImage
                  image={data.image.src.childImageSharp.gatsbyImageData}
                  alt={data.image.alt || `Intro Image`}
                  loading="eager"
                />
              </Animation>
            </FloatingElement>
          )}
        </motion.div>
        <motion.h1 
          className={classes.Title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Sou a<u>{data.title}</u>
        </motion.h1>
        <motion.h2 
          className={classes.Subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {data.subtitle.prefix}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {data.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button 
            className={classes.ScheduleButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              target="_blank"
              href="https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&amp;app_absent=0"
              rel="noopener noreferrer"
            >
              Agende uma sessão introdutória gratuita de 15 minutos
            </a>
          </motion.button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
