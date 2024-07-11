import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => {
  return {
    plugins: [vue()],
    define: {
      'import.meta.env.OS_ENV': JSON.stringify(Bun.env)
    }
  }
})
