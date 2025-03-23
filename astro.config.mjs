// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hiamalif.netlify.app',
  integrations: [vue(), partytown(), sitemap()],
  vite:{
    plugins:[tailwindcss()],
  }
});