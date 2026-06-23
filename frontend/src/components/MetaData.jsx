import React from 'react';

/**
 * MetaData Component for SEO
 * In React 19, you can render <title>, <meta>, and <link> tags directly anywhere
 * in your component tree, and React will automatically hoist them to the document <head>.
 */
const MetaData = ({
  title,
  description,
  image,
  canonical,
  type = "website"
}) => {
  // We use window.location.origin for the base URL. 
  // In a full SSR environment, you might pass this from env vars.
  const BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';
  const defaultImage = `${BASE_URL}/og-default.png`;
  
  const siteTitle = title ? `${title} | CIT Events` : "CIT Events Portal";
  const siteDescription = description || "Discover and register for the latest events at CIT.";
  const imageUrl = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : defaultImage;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}
    </>
  );
};

export default MetaData;
