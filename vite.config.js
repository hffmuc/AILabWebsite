import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:1339/',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:1339/',
        changeOrigin: true
      }
    }
  }
})
