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
    {
      text: "Listening",
      icon: "mdi:bookshelf",
      prefix: "listening/",
      link: "listening/",
      children: "structure",
    },
    {
      text: "Speaking",
      icon: "mdi:bookshelf",
      prefix: "speaking/",
      link: "speaking/",
      children: "structure",
    },
    {
      text: "Reading",
      icon: "mdi:bookshelf",
      prefix: "reading/",
      link: "reading/",
      children: "structure",
    },
    {
      text: "Writing",
      icon: "mdi:bookshelf",
      prefix: "writing/",
      link: "writing/",
      children: "structure",
    },
  ],
});
