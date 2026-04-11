module.exports = {
  siteMetadata: {
    siteUrl: "https://psimanufehr.com/",
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://psimanufehr.com/", // Used for sitemap generation
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
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0Z5YJD8CL6", // Replace with your Google Analytics 4 Measurement ID
        ],
        // This object gets passed directly to the gtag config command
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://psimanufehr.com",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://psimanufehr.com",
        sitemap: "https://psimanufehr.com/sitemap-index.xml",
        policy: [
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
