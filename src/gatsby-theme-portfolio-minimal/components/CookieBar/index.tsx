import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useLocation } from '@reach/router';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import 'gatsby-theme-portfolio-minimal/src/components/CookieBar/style.css';
import * as classes from 'gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css';

type Gtag = (...args: unknown[]) => void;

// Propagates the visitor's choice to Google Consent Mode (no-op until gtag.js has loaded)
function updateAnalyticsConsent(granted: boolean): void {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof gtag === 'function') {
        gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
}

export function CookieBar(): React.ReactElement {
    const location = useLocation();

    return (
        <Animation className={classes.CookieBar} type="fadeUp" delay={1000}>
            <CookieConsent
                cookieName="gatsby-gdpr-google-analytics"
                buttonId="confirm"
                buttonText="Aceitar"
                declineButtonId="decline"
                declineButtonText="Recusar"
                enableDeclineButton={true}
                disableStyles={true}
                onAccept={() => {
                    updateAnalyticsConsent(true);
                    initializeAndTrack(location);
                }}
                onDecline={() => updateAnalyticsConsent(false)}
            >
                <p>
                    Utilizo cookies de análise anónimos (Google Analytics) para perceber como posso melhorar este
                    website. Não são usados para publicidade nem partilhados com terceiros para fins comerciais.
                    Pode aceitar ou recusar livremente, sem qualquer impacto no acesso ao site.
                </p>
            </CookieConsent>
        </Animation>
    );
}

export function EnsureActivatedTrackingCookie() {
    const location = useLocation();

    React.useEffect(() => {
        const configured = Cookies.get('portfolio-minimal-ga-configured');
        const enabled = Cookies.get('gatsby-gdpr-google-analytics');

        if (configured !== 'true') return;
        if (configured === 'true' && enabled === 'true') return;

        try {
            Cookies.set('gatsby-gdpr-google-analytics', 'true');
            initializeAndTrack(location);
        } catch {
            Cookies.remove('gatsby-gdpr-google-analytics');
            console.warn('Could not initialize Google Analytics');
        }
    }, []);

    return null;
}
