import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 100000000, // Inline all assets as base64
    cssCodeSplit: false,
  },
})
