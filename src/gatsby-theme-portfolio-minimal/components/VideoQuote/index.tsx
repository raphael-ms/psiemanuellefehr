import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import * as classes from "./style.module.css";

export function VideoQuoteSection(): React.ReactElement {
  return (
    <Animation type="fadeIn">
      <section className={classes.VideoSection}>
        <video
          className={classes.Video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://video.wixstatic.com/video/11062b_2f8250f9cff2422b95b3a2d846556146/720p/mp4/file.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta vídeos.
        </video>

        <div className={classes.VideoOverlay} />

        <blockquote className={classes.VideoQuote}>
          <p>
            “Cicatrizes nos lembram de onde estivemos.<br />
            Mas elas não precisam ditar para onde vamos.”
          </p>
          <footer>— David Rossi</footer>
        </blockquote>
      </section>
    </Animation>
  );
}