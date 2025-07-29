import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "NCE",
      icon: "mdi:bookshelf",
      prefix: "nce/",
      link: "nce/",
      children: "structure",
    },
    {
      text: "Duolingo",
      icon: "mdi:bookshelf",
      prefix: "duolingo/",
      link: "duolingo/",
      children: "structure",
    },
  ],
});
