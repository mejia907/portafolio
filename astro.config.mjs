import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.andresmejia.dev',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
