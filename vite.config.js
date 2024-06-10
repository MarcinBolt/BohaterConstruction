import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
//TODO: change base if will change deploy from gh-pages
const baseURL = '/BohaterConstruction/#/';

export default defineConfig({
  base: `${baseURL}`,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@components': path.join(__dirname, 'src/components'),
      '@views': path.join(__dirname, 'src/views'),
    },
  },
});

