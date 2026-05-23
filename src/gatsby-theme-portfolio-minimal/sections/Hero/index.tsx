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
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 900], [0, 72]);
  const textOpacity = useTransform(scrollY, [0, 1100], [1, 0.35]);
  const scrollHintOpacity = useTransform(scrollY, [0, 850], [1, 0.2]);

  return (
    <Section
      anchor={props.sectionId}
      additionalClasses={[classes.HeroContainer]}
    >
      {/* ── Left: text column ─────────────────────── */}
      <motion.div
        className={classes.Hero}
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className={classes.Intro}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {data.intro && (
            <span className={classes.ImagePrefix}>{data.intro}</span>
          )}
          {data.image?.src && (
            <FloatingElement duration={3} yOffset={6}>
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

        {/* Heading */}
        <motion.h1
          className={classes.Title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Sou a<u>{data.title}</u>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className={classes.Subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          {data.subtitle.prefix}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {data.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <motion.button
            className={classes.ScheduleButton}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
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

        {/* Scroll hint */}
        <motion.div
          className={classes.scrollHint}
          style={{ opacity: scrollHintOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Scroll
        </motion.div>
      </motion.div>

      {/* ── Right: photo column ───────────────────── */}
      {data.heroPhoto?.src && (
        <motion.div
          className={classes.heroImageCont}
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div style={{ scale: imgScale, height: "100%" }}>
            <GatsbyImage
              className={classes.heroImage}
              image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
              alt={data.heroPhoto.alt || `Profile Image`}
              loading="eager"
            />
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
}

