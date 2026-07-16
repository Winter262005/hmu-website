import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/hmu-website/', // Add this line (replace with your exact repo name if different)
  plugins: [react(), tailwindcss()],
})
