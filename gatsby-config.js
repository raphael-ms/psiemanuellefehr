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
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
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
