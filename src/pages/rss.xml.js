import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Alan | Blog',
    description: 'My journey learning Astro',
    site: 'https://astro-blog-alanjsan.netlify.app/blog/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}