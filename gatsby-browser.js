const GA_MEASUREMENT_ID = "G-0Z5YJD8CL6";

// gtag config uses send_page_view:false, so page_views are sent here on every
// route change (including initial load). Consent Mode downgrades these to
// cookieless modeled pings while analytics consent is denied.
exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("event", "page_view", {
    page_path: location.pathname + location.search + location.hash,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
};
