import { resolve } from "path"; 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");
console.log("outDiry = ",outDiry);
const outDir = resolve(__dirname,"dist/client");
console.log("outDir = ",outDir);
const root = resolve(__dirname,"src");
console.log("root = ",root);

export default defineConfig({
   root,
  base: '/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    minify: false,
  },
})
