import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 server: {
  port: 40001
 },
 base : "/greenergreenhillminutes/"
 plugins: [vue()],
})
