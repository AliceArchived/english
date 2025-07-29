import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/english/",

  lang: "en-US",
  title: "English Study Record",
  description: "Study Record of English",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
