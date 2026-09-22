import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../API/wwwroot',
    chunkSizeWarningLimit: 1024,
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5294'
    }
  },
  plugins: [react()],
})
