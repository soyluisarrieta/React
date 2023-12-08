import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@store': '/src/store',
      '@assets': '/src/assets',
      '@icons': '/src/assets/icons',
      '@schemas': '/src/assets/schemas'
    }
  }
})
