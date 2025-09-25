import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// импортируешь другие плагины тоже через import

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
})
