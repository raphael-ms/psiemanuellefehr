import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import * as classes from "./style.module.css";
import {
  Theme,
  useGlobalState,
} from "gatsby-theme-portfolio-minimal/src/context";
import {
  SiteConfiguration,
  useSiteConfiguration,
} from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration";

interface LogoProps {
  fontSize?: string;
  color?: string;
  theme?: Theme;
}

export function Logo(props: Readonly<LogoProps>): React.ReactElement {
  const { globalState } = useGlobalState();
  const { logo } = useSiteConfiguration();
  const fontSize = props.fontSize || "2rem";
  const color = props.color || "var(--primary-color)";

  const Logo = getLogoContent(logo.image, logo.text);
  const LogoDark = getLogoContent(logo.imageDark, logo.text);

  const theme = props.theme ?? globalState.theme;
  const ThemeSpecificLogo = theme === Theme.Dark ? LogoDark || Logo : Logo;

  return (
    <div>
        <div
          className={classes.Logo}
          aria-roledescription="logo"
          style={{ fontSize, color }}
        >
          {ThemeSpecificLogo || logo.text}
        </div>
        <div
          className={classes.Logo}
          aria-roledescription="slogan"
          style={{ fontSize: "0.6rem", color }}
        >
          Psicóloga Especialista em Terapia Cognitivo Comportamental
        </div>
      </div>
  );
}

const getLogoContent = (
  image: SiteConfiguration["logo"]["image"],
  fallback: string
) => {
  const hasImage =
    !!image?.childImageSharp ||
    !!image?.publicURL ||
    !!image?.svg?.originalContent;

  const isSvg = image?.extension === "svg";

  if (hasImage && isSvg && image?.svg?.originalContent) {
    return (
      <div
        className="logo-svg-wrapper"
        dangerouslySetInnerHTML={{ __html: image?.svg.originalContent }}
      />
    );
  }

  if (hasImage && isSvg && image?.publicURL) {
    return <img src={image?.publicURL} alt={fallback} />;
  }

  if (hasImage && !isSvg && image?.childImageSharp?.gatsbyImageData) {
    return (
      <GatsbyImage
        image={image?.childImageSharp?.gatsbyImageData}
        alt={fallback}
        objectFit="contain"
      />
    );
  }

  return undefined;
};
