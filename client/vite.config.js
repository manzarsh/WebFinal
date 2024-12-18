import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
const { PORT = 3000} = process.env;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
    '/api':{
    target:`http://localhost:${PORT}`,
    changeOrigin: true,
    },
    '/auth': {
    target:`http://localhost:${PORT}`,
    changeOrigin: true,
    },
    },
    },
    build: {
      outDir: '..dist',
    manifest: true,
    rollupOptions: {
    input: "./src/main.jsx",
    },
    },
})