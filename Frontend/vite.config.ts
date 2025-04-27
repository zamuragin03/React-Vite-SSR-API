import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173, // чтобы совпадало с server.js
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  base: '/', // ВСЕГДА base = '/' в dev-режиме
  ssr: {
    noExternal: ['react-router-dom'],
  },
}));
