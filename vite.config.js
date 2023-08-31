import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  base: '/vr08/',
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, "dist"),
    minify: false,
  },
})
