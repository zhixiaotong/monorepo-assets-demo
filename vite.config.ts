import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { DynamicPublicDirectory } from 'vite-multiple-assets'

// https://vite.dev/config/
// use vite-multiple-assets
// export default defineConfig({
//   publicDir: false,
//   plugins: [
//     vue(), 
//     DynamicPublicDirectory([
//       {
//         input: 'apps/shared/assets/**',
//         output: ''
//       }
//     ], {
//       cwd: process.cwd()
//     })
//   ],
// })

// dont use vite-multiple-assets
export default defineConfig({
  publicDir: 'apps/shared/assets',
  plugins: [
    vue()
  ],
})

