import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/_globals.scss" as *;`
        }
      }
    }
})
