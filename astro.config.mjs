import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/joeyjiron06',
  base: '/basecamp',
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
    }),
    react(),
  ]
});