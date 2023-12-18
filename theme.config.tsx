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
      titleTemplate: '%s – From Scratch'
    }
  },
  banner: {
    dismissible: true,
    key: 'isJsonParserBannerDismissed',
    text: '🎉 JSON parser from scratch chapter is not out!'
  }
};

export default config;
