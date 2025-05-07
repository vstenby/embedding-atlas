import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Embedding Atlas",
  description: "Documentation for embedding atlas.",
  head: [["link", { rel: "icon", href: "/embedding-atlas/favicon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/favicon.svg",
      dark: "/favicon_dark.svg",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/overview", target: "_self" },
      { text: "Demo", link: "/demo/index.html", target: "_self" },
    ],
    sidebar: [
      { text: "Overview", link: "/overview" },
      {
        text: "Use Embedding Atlas",
        items: [
          { text: "Command Line Utility", link: "/tool" },
          { text: "Jupyter Widget", link: "/widget" },
          { text: "Streamlit Component", link: "/streamlit" },
        ],
      },
      {
        text: "Component Library",
        items: [
          { text: "Table", link: "/table" },
          { text: "EmbeddingView", link: "/embedding-view" },
          { text: "EmbeddingViewMosaic", link: "/embedding-view-mosaic" },
          { text: "EmbeddingAtlas", link: "/embedding-atlas" },
          { text: "Algorithms", link: "/algorithms" },
        ],
      },
      {
        text: "Development",
        items: [{ text: "Development Instructions", link: "/develop" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/apple/embedding-atlas" }],
    footer: {
      copyright: "Copyright © 2025 Apple Inc. All rights reserved.",
    },
  },
});
