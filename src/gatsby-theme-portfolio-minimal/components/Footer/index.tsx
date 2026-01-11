import React from 'react';


import { Link } from 'gatsby-theme-portfolio-minimal/src/components/Link';
import { Theme, useGlobalState } from 'gatsby-theme-portfolio-minimal/src/context';
import { useSiteConfiguration } from 'gatsby-theme-portfolio-minimal/src//hooks/useSiteConfiguration';
import * as classes from './style.module.css';
import { Logo } from 'gatsby-theme-portfolio-minimal/src/components/Logo';

export function Footer(): React.ReactElement {
    const { globalState } = useGlobalState();
    const siteConfiguration = useSiteConfiguration();
    const darkModeEnabled = globalState.theme === Theme.Dark;

    return (
        <footer
            className={classes.Footer}
            style={{
                background: darkModeEnabled ? 'var(--background-color)' : 'var(--primary-color)',
                borderTop: darkModeEnabled ? '3px solid var(--box-shadow-hover-color)' : undefined,
            }}
        >
            <div className={classes.ContentWrapper}>
                <Link to="/" aria-label="home">
                    <Logo
                        fontSize="1.5rem"
                        color={darkModeEnabled ? 'var(--primary-color)' : 'var(--background-color)'}
                        theme={Theme.Dark}
                    />
                </Link>
                <div className={classes.Links}>
                    {siteConfiguration.navigation.footer.map((linkObject, key) => {
                        return (
                            <span
                                key={key}
                                aria-label={linkObject.label}
                                style={{ color: darkModeEnabled ? 'var(--primary-color)' : 'var(--background-color)' }}
                            >
                                {linkObject.label}
                            </span>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
