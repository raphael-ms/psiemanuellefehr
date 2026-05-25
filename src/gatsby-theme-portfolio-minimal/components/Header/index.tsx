import React from 'react';
import { useSiteConfiguration } from 'gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration';
import { Logo } from 'gatsby-theme-portfolio-minimal/src/components/Logo';
import { Link } from 'gatsby-theme-portfolio-minimal/src/components/Link';
import { motion } from 'framer-motion';
// @ts-ignore
import * as classes from './style.module.css';

interface SiteConfigWithSocial {
  navigation: any;
  siteMetadata?: { social?: { mail?: string; instagram?: string } };
}

export function Header(): React.ReactElement {
  const siteConfiguration = useSiteConfiguration() as SiteConfigWithSocial & any;
  const socialLinks = siteConfiguration.siteMetadata?.social || {};

  return (
    <header className={classes.Header}>
      <div className={classes.ContentWrapper}>
        <div style={{ flex: 1 }}>
          <Link to="/" aria-label="home">
            <Logo />
          </Link>
        </div>

        <nav className={classes.TopNavigationBar}>
          {siteConfiguration.navigation.header.map((item: any) => (
            <Link key={item.label} to={item.url}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className={classes.SocialLinks}>
          {socialLinks.mail && (
            <a
              href={socialLinks.mail}
              aria-label="Email"
              title="Email"
              className={classes.SocialLink}
            >
              ✉
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className={classes.SocialLink}
            >
              📷
            </a>
          )}
        </div>

        {/* CTA Button */}
        <motion.a
          href={siteConfiguration.navigation.ctaButton.url}
          target={siteConfiguration.navigation.ctaButton.openNewTab ? '_blank' : undefined}
          rel={siteConfiguration.navigation.ctaButton.openNewTab ? 'noopener noreferrer' : undefined}
          className={classes.CtaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {siteConfiguration.navigation.ctaButton.label}
        </motion.a>
      </div>
    </header>
  );
}
