import React from 'react';


import { Link } from 'gatsby-theme-portfolio-minimal/src/components/Link';
import { Theme } from 'gatsby-theme-portfolio-minimal/src/context';
import { useSiteConfiguration } from 'gatsby-theme-portfolio-minimal/src//hooks/useSiteConfiguration';
// @ts-ignore
import * as classes from './style.module.css';
import { Logo } from 'gatsby-theme-portfolio-minimal/src/components/Logo';

export function Footer(): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();

    return (
        <footer className={classes.Footer}>
            <div className={classes.ContentWrapper}>
                <div>
                    <Link to="/" aria-label="home">
                        <Logo
                            fontSize="1.35rem"
                            color="rgba(255,255,255,0.9)"
                            theme={Theme.Dark}
                        />
                    </Link>
                    <p style={{
                        fontFamily: 'var(--heading-font)',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.45)',
                        marginTop: '0.5rem',
                        fontWeight: 400,
                    }}>
                        Sempre ao seu lado.
                    </p>
                </div>
                <div className={classes.Links}>
                    {siteConfiguration.navigation.footer.map((linkObject) => (
                        <span key={linkObject.label} aria-label={linkObject.label}>
                            {linkObject.label}
                        </span>
                    ))}
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginTop: '0.75rem' }}>
                        © {new Date().getFullYear()} Emanuelle Fehr
                    </span>
                </div>
            </div>
        </footer>
    );
}
