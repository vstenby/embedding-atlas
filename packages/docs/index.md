---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Embedding Atlas
  text: Scalable, Interactive Visualization
  tagline: Compute & interactively visualize large embeddings.
  image:
    light: ./assets/embedding-light.png
    dark: ./assets/embedding-dark.png
    alt: a screenshot of embedding atlas
  actions:
    - theme: brand
      text: Demo
      link: /demo/
      target: _self
    - theme: brand
      text: Upload Data
      link: /upload/
      target: _self
    - theme: alt
      text: Documentation
      link: /overview

features:
  - icon: 📊
    title: Explore massive text data
    details: Visualize, cross-filter, and search embeddings and metadata. Powered by Mosaic and DuckDB.
  - icon: 🏷️
    title: Automatic labeling
    details: Inspect your data through automatic labels that interactively scale across resolutions.
  - icon: 📦
    title: Python command line tool
    details: Compute embeddings and visualize your data locally or from Hugging Face with one script.
  - icon: 🛠️
    title: Standalone web component
    details: Easily include the main embedding visualization into your own web app.
---

<h2>Demo</h2>

<iframe style="width:100%; height: 700px; border: none; border-radius: 4px" src="./demo/index.html"></iframe>
