import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'





export default defineConfig({
  root: "src",
  base: '/',
  plugins: [react()],
  build: {
    outDir: "../dist/client/",
    emptyOutDir: true,
    minify: false,
  },
})
