import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FINANCE-DASHBOARD/', // Replace 'FINANCE-DASHBOARD' with your repository name
  build: {
    outDir: 'dist', // Optional: ensure the build output folder is set
  },
});
