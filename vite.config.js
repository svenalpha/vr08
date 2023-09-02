import { resolve } from "path"; 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");
console.log("outDiry = ",outDiry);
const outDir = resolve(__dirname,"dist/client");
console.log("outDir = ",outDir);


export default defineConfig({
 
  root: '/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    minify: false,
  },
})
