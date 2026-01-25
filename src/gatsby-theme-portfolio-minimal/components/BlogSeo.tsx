import React from "react";
import { useLocation } from "@reach/router";
import { useSiteMetadata } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata";
import { BlogPostingSchema } from "./Schema";

interface BlogSeoProps {
  title: string;
  description?: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  slug?: string;
}

/**
 * Enhanced blog SEO component
 * Provides structured data (JSON-LD) and schema markup for blog articles
 * 
 * Use alongside the regular Seo component or in blog templates
 * 
 * Example:
 * ```
 * <BlogSeo
 *   title="Article Title"
 *   description="Meta description"
 *   datePublished="2024-01-15"
 *   keywords={["keyword1", "keyword2"]}
 *   image="/images/article-banner.png"
 *   slug="/blog/article-slug"
 * />
 * ```
 */
export function BlogSeo(props: Readonly<BlogSeoProps>): React.ReactElement {
  const location = useLocation();
  const siteMetadata = useSiteMetadata();
  
  const description = props.description || siteMetadata.description;
  const imageUrl = props.image 
    ? (siteMetadata.siteUrl + props.image).replaceAll(/([^:]\/)\/+/g, "$1")
    : undefined;
  const canonicalUrl = props.slug 
    ? siteMetadata.siteUrl + props.slug
    : siteMetadata.siteUrl + location.pathname;

  return (
    <BlogPostingSchema
      title={props.title}
      description={description}
      image={imageUrl}
      datePublished={props.datePublished}
      dateModified={props.dateModified}
      author={props.author || siteMetadata.author}
      url={canonicalUrl}
      keywords={props.keywords}
    />
  );
}
