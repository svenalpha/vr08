import { resolve } from "path"; 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");
console.log("outDiry = ",outDiry);
const outDirx = resolve(__dirname,"dist/client");
console.log("outDirx = ",outDirx);
const root = resolve(__dirname,"src");
console.log("root = ",root);

export default defineConfig({
 
  base: '/',
  plugins: [react()],
  build: {
    outDir: "/src/dist/client/",
    emptyOutDir: true,
    minify: false,
  },
})
