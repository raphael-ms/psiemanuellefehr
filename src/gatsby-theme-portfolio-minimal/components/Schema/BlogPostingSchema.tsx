import React from "react";

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
  keywords?: string[];
}

export function BlogPostingSchema(props: Readonly<BlogPostingSchemaProps>): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.title,
    description: props.description,
    ...(props.image && { image: props.image }),
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      "@type": "Person",
      name: props.author || "Emanuelle Fehr",
    },
    url: props.url,
    ...(props.keywords && {
      keywords: props.keywords.join(", "),
    }),
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
