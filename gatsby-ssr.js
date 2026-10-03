const React = require("react");

// Google Consent Mode v2 default — denies analytics/ad storage until the visitor accepts the cookie banner.
// Must run before gatsby-plugin-gdpr-cookies loads gtag.js, so it's injected directly into <head>.
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "consent-mode-default",
      dangerouslySetInnerHTML: {
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
`,
      },
    }),
  ]);
};
