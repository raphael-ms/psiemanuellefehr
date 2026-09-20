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
  const [open, setOpen] = React.useState<boolean>(false);
  const closeMenu = () => setOpen(false);

  const cta = siteConfiguration.navigation.ctaButton;

  const navLinks = siteConfiguration.navigation.header.map((item: any) => (
    <Link key={item.label} to={item.url} className={classes.NavLink} onClick={closeMenu}>
      {item.label}
    </Link>
  ));

  return (
    <header className={classes.Header}>
      <div className={classes.ContentWrapper}>
        <div style={{ flex: 1 }}>
          <Link to="/" aria-label="home" onClick={closeMenu}>
            <Logo />
          </Link>
        </div>

        <nav className={classes.TopNavigationBar}>{navLinks}</nav>

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

        {/* CTA Button (desktop) */}
        <motion.a
          href={cta.url}
          target={cta.openNewTab ? '_blank' : undefined}
          rel={cta.openNewTab ? 'noopener noreferrer' : undefined}
          className={classes.CtaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {cta.label}
        </motion.a>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className={classes.Burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div style={open ? { transform: 'rotate(45deg)' } : undefined} />
          <div style={open ? { transform: 'translateX(20px)', opacity: 0 } : undefined} />
          <div style={open ? { transform: 'rotate(-45deg)', width: '2rem' } : undefined} />
        </button>
      </div>

      {/* Slide-in navigation (mobile) */}
      <div
        className={classes.SideBarWrapper}
        style={open ? { transform: 'translateX(0)', visibility: 'visible' } : undefined}
        aria-hidden={!open}
      >
        <nav className={classes.SideNavigationBar}>
          {navLinks}
          {cta?.url ? (
            <Link
              to={cta.url}
              target={cta.openNewTab ? '_blank' : undefined}
              className={classes.CtaButton}
              onClick={closeMenu}
            >
              {cta.label}
            </Link>
          ) : null}
        </nav>
      </div>
      <div
        className={classes.SideBarBackdrop}
        style={open ? { display: 'block' } : undefined}
        onClick={closeMenu}
      />
    </header>
  );
}
