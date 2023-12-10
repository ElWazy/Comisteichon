import { defineConfig } from 'astro/config';
import glsl from 'vite-plugin-glsl'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true,
  },
  vite: {
    plugins: [glsl()],
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: '[ext]/[name][extname]',
          entryFileNames: 'script/entry.js',
        },
      },
      cssCodeSplit: false,
    },
  },
});