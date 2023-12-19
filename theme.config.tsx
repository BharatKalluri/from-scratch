import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>From scratch</span>,
  project: {
    link: "https://github.com/bharatkalluri/from-scratch",
  },
  docsRepositoryBase: "https://github.com/bharatkalluri/from-scratch",
  footer: {
    text: "Hand crafted by Bharat Kalluri",
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – From Scratch",
    };
  },
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="From scratch" />

      {['og:site_name', 'og:title', 'twitter:title'].map((property) => (
        <meta key={property} property={property} content={'From scratch'} />
      ))}
      {['description', 'og:description', 'twitter:description'].map((property) => (
        <meta key={property} name={property} content={'Building everyday technology, from scratch'} />
      ))}
      <meta name="twitter:site:domain" content="fromscratch.bharatkalluri.com" />
      <meta name="twitter:url" content="https://x.com/the_bharat_k" />
    </>
  ),
  banner: {
    dismissible: true,
    key: "isJsonParserBannerDismissed",
    text: "🎉 JSON parser from scratch chapter is now out!",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
};

export default config;
