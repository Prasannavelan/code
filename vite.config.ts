import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is where the build output goes
    emptyOutDir: true, // Cleans the folder before building
  },
});
