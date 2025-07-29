import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/english/",

  lang: "en-US",
  title: "English Study Record",
  description: "Study Record of English",
  shouldPrefetch: true,
  head: [["link", { rel: "icon", href: "/english/favicon.ico" }]],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
