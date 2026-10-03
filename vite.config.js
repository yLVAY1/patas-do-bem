import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'dist',
    modulePreload: { polyfill: false },
    minify: true,
    cssMinify: true,
    rollupOptions: {
      input: { inicio: resolve(import.meta.dirname, 'index.html'), cadastro: resolve(import.meta.dirname, 'cadastro.html') }
    }
  }
});
