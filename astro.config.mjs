import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/we-cafe/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://we-cafe.example.com',
});