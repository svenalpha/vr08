import { resolve } from "path"; 
import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const outDiry = resolve(__dirname,"dist");  console.log("outDiry = ",outDiry);
const outDirx = resolve(__dirname,"dist/client");  console.log("outDirx = ",outDirx);
const rootx  = resolve(__dirname,"src");   console.log("rootx = ",rootx);
const root = path.join(__dirname,"src"); console.log("root = ",root);
const outDirz = path.join(__dirname,"dist"); console.log("outDirz = ",outDirz);


export default defineConfig({
 
  base: '/',
  plugins: [react()],
  build: {
    outDir: "/src/dist/client/",
    emptyOutDir: true,
    minify: false,
  },
})
