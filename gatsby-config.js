module.exports = {
  siteMetadata: {
    siteUrl: "https://www.psimanufehr.com/",
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://www.psimanufehr.com/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Emanuelle Fehr . psicologa", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
      },
    },
    {
      // Consent-gated Google Analytics. The theme's CookieBar calls
      // initializeAndTrack() on "Accept", which relies on this plugin registering
      // window.gatsbyPluginGDPRCookiesOptions on client entry.
      resolve: "gatsby-plugin-gdpr-cookies",
      options: {
        googleAnalytics: {
          trackingId: "G-0Z5YJD8CL6", // Google Analytics 4 Measurement ID
          cookieName: "gatsby-gdpr-google-analytics", // must match CookieBar cookieName
          anonymize: true,
          allowAdFeatures: false,
        },
        // Only load tracking in production
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          lastmod: modifiedGmt,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.psimanufehr.com",
        sitemap: "https://www.psimanufehr.com/sitemap-index.xml",
        policy: [
          { userAgent: "GPTBot", allow: "/" },
          { userAgent: "OAI-SearchBot", allow: "/" },
          { userAgent: "ChatGPT-User", allow: "/" },
          { userAgent: "ClaudeBot", allow: "/" },
          { userAgent: "PerplexityBot", allow: "/" },
          { userAgent: "Google-Extended", allow: "/" },
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"],
          },
        ],
      },
    },
  ],
};
