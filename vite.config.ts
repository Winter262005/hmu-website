import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/hmu-website/', // Add this line (replace with your exact repo name if different)
=======
  base: '/hmu-website/',
>>>>>>> 6d383c6 (Configure base path and automatic deployment workflow)
  plugins: [react(), tailwindcss()],
})
