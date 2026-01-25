# SEO Implementation Guide - Manu Website

## Completed Improvements ✅

### 1. Essential SEO Plugins Added
- ✅ **gatsby-plugin-sitemap** - Auto-generates XML sitemap for search engines
- ✅ **gatsby-plugin-robots-txt** - Auto-generates robots.txt with proper directives
- ✅ **gatsby-plugin-canonical-urls** - Prevents duplicate content issues

**Location**: [gatsby-config.js](../gatsby-config.js)

### 2. Schema.org Structured Data Components Created
Three reusable schema components for rich search results:

#### LocalBusinessSchema
- **File**: [LocalBusinessSchema.tsx](../src/gatsby-theme-portfolio-minimal/components/Schema/LocalBusinessSchema.tsx)
- **Markup**: LocalBusiness schema for therapist practice
- **Usage**: Import and add to main pages (index.js, online-therapy.js)
- **Fields**: Name, description, URL, service types, areas served

#### PersonSchema
- **File**: [PersonSchema.tsx](../src/gatsby-theme-portfolio-minimal/components/Schema/PersonSchema.tsx)
- **Markup**: Person schema for Emanuelle Fehr
- **Usage**: Add to About page and therapist-related pages
- **Fields**: Name, job title, expertise areas, social profiles

#### BlogPostingSchema
- **File**: [BlogPostingSchema.tsx](../src/gatsby-theme-portfolio-minimal/components/Schema/BlogPostingSchema.tsx)
- **Markup**: BlogPosting schema for articles
- **Usage**: Can be used with BlogSeo component
- **Fields**: Title, description, author, publication date, keywords

### 3. Blog SEO Component Created
- **File**: [BlogSeo.tsx](../src/gatsby-theme-portfolio-minimal/components/BlogSeo.tsx)
- **Purpose**: Enhanced SEO for blog articles with structured data
- **Features**:
  - Custom meta descriptions per article
  - Open Graph image tags with dimensions
  - Twitter Card (summary_large_image)
  - Canonical URL handling
  - JSON-LD BlogPosting schema
  - Article metadata (author, publication date, modified date)

### 4. Schema Components Integrated into Pages
- **Home Page** ([index.js](../src/pages/index.js))
  - Added LocalBusinessSchema
  - Added PersonSchema
  
- **About Page** ([about.js](../src/pages/about.js))
  - Added PersonSchema
  
- **Online Therapy Page** ([online-therapy.js](../src/pages/online-therapy.js))
  - Added LocalBusinessSchema
  - Added PersonSchema

### 5. Article Frontmatter Enhanced
Updated all blog articles with new SEO fields:

**New Fields Added**:
- `slug` - Custom URL slug for each article
- `author` - Article author name (Emanuelle Fehr)
- `canonicalUrl` - Full canonical URL to prevent duplicate content

**Updated Articles**:
1. [autoestima-como-fortalecer/index.md](../content/articles/autoestima-como-fortalecer/index.md)
2. [conexao-emocional/index.md](../content/articles/conexao-emocional/index.md)
3. [tenho-perturbacao-de-deficit-de-atencao-e-hiperatividade/index.md](../content/articles/tenho-perturbacao-de-deficit-de-atencao-e-hiperatividade/index.md)

**Also Fixed**: Corrected typo in autoestima article keywords ("Austoestima" → "Autoestima")

---

## Next Steps (Manual Configuration Required)

### 1. Google Analytics Setup (Priority: High)

**Step 1**: Get your Google Analytics 4 Tracking ID
- Go to [Google Analytics](https://analytics.google.com/)
- Create a new property for psimanufehr.com
- Get your Measurement ID (format: G-XXXXXXXXXX)

**Step 2**: Enable Analytics in gatsby-config.js
Uncomment and update:
```javascript
googleAnalytics: {
    trackingId: "G-YOUR_TRACKING_ID",
    anonymize: true,
    environments: ["production", "development"]
}
```

**Step 3**: Rebuild your site
```bash
gatsby clean && gatsby build
```

### 2. Search Console Integration (Priority: High)

**Step 1**: Add site to Google Search Console
- Go to [Google Search Console](https://search.google.com/search-console)
- Add property: https://psimanufehr.com
- Verify ownership using HTML tag (already in site metadata)

**Step 2**: Submit sitemap
- Your sitemap will be auto-generated at: `https://psimanufehr.com/sitemap-index.xml`
- Submit it in Search Console under "Sitemaps"

**Step 3**: Monitor search performance
- Check indexation status
- Monitor search queries and rankings
- Fix any crawl errors

### 3. Test Structured Data (Priority: High)

**Rich Results Test** (Google)
- Go to [Rich Results Test](https://search.google.com/test/rich-results)
- Test pages: 
  - Homepage: https://psimanufehr.com
  - Article example: https://psimanufehr.com/blog/autoestima-como-fortalecer
- Verify LocalBusiness, Person, and BlogPosting schemas are detected

**Schema.org Validator** (Alternative)
- Go to [Schema.org Validator](https://validator.schema.org/)
- Validate each page URL

### 4. Blog Template Integration (Priority: Medium)

The BlogSeo component is ready but needs integration with your blog template. Check if the theme automatically renders blog pages or if you need to create a custom blog template.

**If custom blog template needed**:
```tsx
import { BlogSeo } from "../gatsby-theme-portfolio-minimal/components/BlogSeo";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  
  return (
    <>
      <BlogSeo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        datePublished={post.frontmatter.date}
        author={post.frontmatter.author}
        keywords={post.frontmatter.keywords}
        slug={post.frontmatter.slug}
        image={post.frontmatter.banner?.src}
      />
      {/* Blog content */}
    </>
  );
}
```

### 5. Open Graph Images (Priority: Medium)

**Current Status**: Articles have banner images defined, but they need proper OG image sizing (1200x630px)

**Recommendation**:
- Ensure all banner images are at least 1200x630px
- Consider creating a template image for articles that don't have specific images
- Use Gatsby Image Sharp to optimize and resize images automatically

### 6. Robots.txt Verification (Priority: Low)

After deployment, verify your robots.txt:
- Visit: https://psimanufehr.com/robots.txt
- Should include sitemap location and allow rules

---

## SEO Best Practices Checklist

### Technical SEO ✅
- [x] Sitemap generated automatically
- [x] Robots.txt generated automatically
- [x] Canonical URLs configured
- [x] Schema.org structured data implemented
- [x] Mobile-friendly (Gatsby default)
- [ ] Page speed optimized (run Google PageSpeed Insights)
- [ ] XML sitemap submitted to GSC

### On-Page SEO
- [x] Title tags optimized (159-160 characters)
- [x] Meta descriptions present (155-160 characters)
- [x] Keywords in article frontmatter
- [x] Image alt text present
- [ ] Internal linking strategy implemented
- [ ] H1 tags properly structured

### Local SEO (For Therapist Practice)
- [x] LocalBusiness schema added
- [ ] Google Business Profile created and optimized
- [ ] Address and phone added to schema
- [ ] Reviews/ratings integrated (if available)

### Content SEO
- [x] Articles have unique descriptions
- [x] Keywords are relevant
- [ ] Target more therapy-related keywords
- [ ] Regular content updates planned

---

## File Structure Summary

### New Components Created
```
src/gatsby-theme-portfolio-minimal/components/
├── Schema/
│   ├── LocalBusinessSchema.tsx
│   ├── PersonSchema.tsx
│   ├── BlogPostingSchema.tsx
│   └── index.ts (exports all)
└── BlogSeo.tsx
```

### Modified Files
```
gatsby-config.js                    (Added plugins and siteMetadata)
src/pages/index.js                  (Added schemas)
src/pages/about.js                  (Added PersonSchema)
src/pages/online-therapy.js         (Added schemas)
content/articles/*/index.md         (Added SEO frontmatter fields)
```

---

## Testing Checklist

Before going live:
- [ ] Run `gatsby build` - should complete without errors
- [ ] Check sitemap generation: `dist/sitemap-index.xml`
- [ ] Check robots.txt generation: `dist/robots.txt`
- [ ] Test Rich Results with all pages
- [ ] Verify OG images display correctly on social media (use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/))
- [ ] Check Core Web Vitals with PageSpeed Insights
- [ ] Mobile responsiveness test

---

## Future Enhancements

1. **Breadcrumb Schema** - Add breadcrumb navigation schema for better hierarchy
2. **FAQ Schema** - Add FAQs about therapy services
3. **Testimonials/Reviews Schema** - Implement if testimonials have ratings
4. **Video Schema** - If you add therapy-related videos
5. **Local Schema with Hours** - Add business hours to LocalBusiness schema
6. **Multi-language Support** - Add hreflang tags if expanding to other languages

---

## Resources & Links

- [Gatsby SEO Plugin Guide](https://www.gatsbyjs.com/plugins/?=seo)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central Guide](https://developers.google.com/search/docs)
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://support.google.com/analytics/answer/10089681)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Gatsby Image Optimization](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)

---

**Last Updated**: January 25, 2026
**Implementation Status**: 5/5 Core Tasks Completed ✅
