import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/vr08/client/',
  plugins: [react()],
  build: {
    minify: false,
  },
})
