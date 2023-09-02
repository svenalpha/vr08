import { resolve } from "path"; 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDir = resolve(__dirname,"dist");
console.log("outDir = ",outDir);
const outDirx = resolve(__dirname,"dist/client");
console.log("outDirx = ",outDirx);


export default defineConfig({
 
  base: '/vr08/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    minify: false,
  },
})
