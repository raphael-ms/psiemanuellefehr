import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { AnimatedSection } from "../AnimatedComponents";
// @ts-ignore
import * as classes from "./style.module.css";

const PROFILE_URL = "https://www.instagram.com/manufehr/";

// Thumbnails live in /static/reels/ (served at /reels/...). If a file is
// missing, the tile falls back to a branded gradient with a play affordance.
const REELS: { url: string; thumb: string }[] = [
  { url: "https://www.instagram.com/p/DX7KdcmIzZF/", thumb: "/reels/reel-1.jpg" },
  { url: "https://www.instagram.com/p/DYfPrTDOy_e/", thumb: "/reels/reel-2.jpg" },
  { url: "https://www.instagram.com/p/DayMapDumzr/", thumb: "/reels/reel-3.jpg" },
  { url: "https://www.instagram.com/p/DcwTu0Bua-n/", thumb: "/reels/reel-4.jpg" },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

export function InstagramReels(props: Readonly<{ sectionId: string; heading?: string }>): React.ReactElement {
  return (
    <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Reels]}>
      <AnimatedSection direction="up" delay={0.15}>
        <p className={classes.Intro}>
          Partilho reflexões e recursos sobre saúde mental no Instagram. Dê uma
          olhada para conhecer o meu trabalho antes do nosso primeiro encontro.
        </p>

        <ul className={classes.Grid}>
          {REELS.map((reel, i) => (
            <li key={reel.url}>
              <a
                className={classes.Reel}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver reel no Instagram (abre numa nova aba)"
              >
                <img
                  className={classes.Thumb}
                  src={reel.thumb}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className={classes.Play} aria-hidden="true">
                  <PlayIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          className={classes.ProfileLink}
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver perfil @manufehr
        </a>
      </AnimatedSection>
    </Section>
  );
}
