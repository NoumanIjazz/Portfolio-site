import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'framer-motion',
      'react-scroll',
      'react-icons/fi',
      'react-icons/si',
      'react-icons/fa',
      'react-type-animation',
      'react-intersection-observer',
    ],
  },
})
