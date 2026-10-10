import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import 'gatsby-theme-portfolio-minimal/src/components/CookieBar/style.css';
import * as classes from 'gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css';

type Gtag = (...args: unknown[]) => void;

// gtag.js is loaded for every visitor in gatsby-ssr.js with analytics consent
// denied by default (cookieless modeling). Accepting/declining only flips the
// Consent Mode state — no script (re)loading needed.
function updateAnalyticsConsent(granted: boolean): void {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof gtag === 'function') {
        gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
}

export function CookieBar(): React.ReactElement {
    return (
        <Animation className={classes.CookieBar} type="fadeUp" delay={1000}>
            <CookieConsent
                cookieName="gatsby-gdpr-google-analytics"
                buttonId="confirm"
                buttonText="Aceitar"
                declineButtonId="decline"
                declineButtonText="Recusar"
                enableDeclineButton={true}
                setDeclineCookie={true}
                disableStyles={true}
                onAccept={() => updateAnalyticsConsent(true)}
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

// gtag.js now loads for all visitors via Consent Mode, so no activation cookie
// is required. Kept as a no-op for the theme Layout when useCookieBar is false.
export function EnsureActivatedTrackingCookie(): null {
    return null;
}
