import { defineUserConfig } from "vuepress";
import { tocPlugin } from '@vuepress/plugin-toc'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/english/",

  lang: "en-US",
  title: "English Study Record",
  description: "Study Record of English",
  shouldPrefetch: true,
  head: [["link", { rel: "icon", href: "/english/favicon.ico" }]],
  plugins: [
    tocPlugin({
      // optional: headingSelector: 'h2, h3, h4',
      // optional: componentName: 'TOC'
    }),
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
