import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/entry-client/',
  plugins: [react()],
  build: {
    minify: false,
  },
})
