import React from 'react';
import { Link } from 'gatsby-theme-portfolio-minimal/src/components/Link';
import { Theme } from 'gatsby-theme-portfolio-minimal/src/context';
import { useSiteConfiguration } from 'gatsby-theme-portfolio-minimal/src//hooks/useSiteConfiguration';
// @ts-ignore
import * as classes from './style.module.css';
import { Logo } from 'gatsby-theme-portfolio-minimal/src/components/Logo';

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

export function Footer(): React.ReactElement {
    const siteConfiguration = useSiteConfiguration() as any;
    const SOCIAL_LINKS = {
        mail: 'mailto:emanuelle.fehr@gmail.com',
        instagram: 'https://www.instagram.com/manufehr/'
    };

    return (
        <footer className={classes.Footer}>
            <div className={classes.ContentWrapper}>
                {/* Left: Logo and Social Icons */}
                <div className={classes.LeftSection}>
                    <Link to="/" aria-label="home" className={classes.LogoLink}>
                        <Logo
                            fontSize="1.35rem"
                            color="rgba(255,255,255,0.9)"
                            theme={Theme.Dark}
                        />
                    </Link>
                    
                    {/* Social Icons */}
                    <div className={classes.SocialIcons}>
                        {SOCIAL_LINKS.mail && (
                            <a
                                href={SOCIAL_LINKS.mail}
                                aria-label="Email"
                                title="Email"
                                className={classes.SocialIcon}
                            >
                                <EmailIcon />
                            </a>
                        )}
                        {SOCIAL_LINKS.instagram && (
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                title="Instagram"
                                className={classes.SocialIcon}
                            >
                                <InstagramIcon />
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Links and Copyright */}
                <div className={classes.Links}>
                    {siteConfiguration.navigation.footer.map((linkObject: any) => (
                        <div key={linkObject.label} aria-label={linkObject.label}>
                            {linkObject.url ? (
                                <a 
                                    href={linkObject.url} 
                                    target={linkObject.url.startsWith('mailto') ? undefined : '_blank'} 
                                    rel={linkObject.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    style={{ 
                                        color: 'rgba(255,255,255,0.85)', 
                                        textDecoration: 'none', 
                                        transition: 'opacity 0.2s',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {linkObject.label}
                                </a>
                            ) : (
                                <span>{linkObject.label}</span>
                            )}
                        </div>
                    ))}
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginTop: '0.75rem' }}>
                        © {new Date().getFullYear()} Emanuelle Fehr
                    </span>
                </div>
            </div>
        </footer>
    );
}
