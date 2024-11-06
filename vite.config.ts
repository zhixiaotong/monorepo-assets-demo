import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { DynamicPublicDirectory } from 'vite-multiple-assets'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // dev ip
    port: 3000, // dev port
    cors: true,
    hmr: true
  },
  plugins: [
    vue(),
    DynamicPublicDirectory([
      'apps/shared/assets/**',
      // use separate assets folder for each app
      {input: 'apps/a/src/assets/**', output: 'static/assets-a'},
      {input: 'apps/b/src/assets/**', output: 'static/assets-b'}
    ],{
      cwd: process.cwd()
    })
  ],
})

