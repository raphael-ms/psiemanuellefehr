const React = require("react");

const GA_MEASUREMENT_ID = "G-0Z5YJD8CL6";

// Google Consent Mode v2 (advanced). gtag.js loads for every visitor with
// analytics consent denied by default, so undecided/declined users still send
// cookieless modeled pings. Returning visitors who previously accepted are
// restored to "granted" by reading the consent cookie before gtag.js runs.
exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== "production") return;

  setHeadComponents([
    React.createElement("link", {
      key: "gtm-preconnect",
      rel: "preconnect",
      href: "https://www.googletagmanager.com",
    }),
    React.createElement("script", {
      key: "consent-mode-default",
      dangerouslySetInnerHTML: {
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
var hasConsent = /(?:^|; )gatsby-gdpr-google-analytics=true/.test(document.cookie);
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: hasConsent ? 'granted' : 'denied',
  wait_for_update: 500
});
gtag('set', 'url_passthrough', true);
gtag('set', 'ads_data_redaction', true);
`,
      },
    }),
    React.createElement("script", {
      key: "gtag-js",
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    }),
    React.createElement("script", {
      key: "gtag-config",
      dangerouslySetInnerHTML: {
        __html: `
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true, send_page_view: false });
`,
      },
    }),
  ]);
};
