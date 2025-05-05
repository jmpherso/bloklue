// vite.config.ts (for USERNAME.github.io repo)
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/', // Serve from the root
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});