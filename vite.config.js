import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Doyoung_An-portfolio/', 
  plugins: [react()],
})
