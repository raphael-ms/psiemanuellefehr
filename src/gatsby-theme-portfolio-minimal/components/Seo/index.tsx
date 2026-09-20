import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useSiteMetadata } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata";

interface SeoProps {
  title: string;
  useTitleTemplate?: boolean;
  noIndex?: boolean;
  description?: string;
}

export function Seo(props: Readonly<SeoProps>): React.ReactElement {
  const location = useLocation();
  const siteMetadata = { ...useSiteMetadata(), ...props };
  const canonicalUrl = (siteMetadata.siteUrl + location.pathname).replaceAll(
    /([^:]\/)\/+/g,
    "$1"
  );

  const thumbnailUrl = siteMetadata.thumbnail
    ? (
        siteMetadata.siteUrl +
        siteMetadata.thumbnail.childImageSharp.original.src
      ).replaceAll(/([^:]\/)\/+/g, "$1")
    : undefined;

  return (
    <Helmet
      title={siteMetadata.title}
      titleTemplate={
        props.useTitleTemplate ? siteMetadata.titleTemplate : undefined
      }
      htmlAttributes={{ lang: siteMetadata.language }}
    >
      {/* Google Fonts — non-blocking via <link> instead of CSS @import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
      />
      {/* hreflang — signals pt-PT market to Google */}
      <link rel="alternate" hrefLang="pt-PT" href="https://www.psimanufehr.com/" />
      <link rel="alternate" hrefLang="x-default" href="https://www.psimanufehr.com/" />
      {props.noIndex && <meta name="robots" content="noindex" />}
      <meta name="description" content={siteMetadata.description} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:url" content={canonicalUrl} />
      {thumbnailUrl && <meta property="og:image" content={thumbnailUrl} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="google-site-verification" content="l6cC7Q-QvO0ehFInMUDsweWJxlJOabT7DNdsZsnhaBM" />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={siteMetadata.author} />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:description" content={siteMetadata.description} />
    </Helmet>
  );
}
