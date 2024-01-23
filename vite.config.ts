import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig({
  publicDir: 'public',
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        documents: resolve(__dirname, 'documents/index.html'),
        partners: resolve(__dirname, 'partners/index.html'),
        investors: resolve(__dirname, 'investors/index.html'),
        borrowers: resolve(__dirname, 'borrowers/index.html'),
      },
    },
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 90,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 90,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      /* pass your config */
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./*', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/scss/_var.scss";
        @import "@/styles/scss/_color.scss";
        @import "@/styles/scss/_function.scss";
        @import "@/styles/scss/_mixins.scss";
        @import "@/styles/scss/_breakpoints.scss";
        @import "@/styles/scss/_fonts.scss";
        `,
      },
    },
  },
  server: {
    port: 5001,
  },
  preview: {
    port: 3040,
  },
});
