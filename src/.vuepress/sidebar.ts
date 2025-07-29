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
  ],
});
