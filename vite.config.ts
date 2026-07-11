import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base: the same build serves from the GitHub Pages project path
  // (/technocracy-website/), a custom domain root (technocratic-union.com),
  // or a local file server. HashRouter keeps routing off the path entirely.
  base: './',
})
