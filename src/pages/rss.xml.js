import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Gracie's Astro Learner | Blog",
    description: "Gracie's journey learning Astro",
    site: "https://gracie-astro-blog.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
