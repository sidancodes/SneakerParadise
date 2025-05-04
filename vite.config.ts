import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the project root is correctly set
  build: {
    outDir: 'dist', // Default output directory
  },
});
