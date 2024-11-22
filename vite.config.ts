import { loadEnv, type ConfigEnv, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { DynamicPublicDirectory } from 'vite-multiple-assets'


// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_BASE_PATH } = env;
  return {
    base: VITE_BASE_PATH,
    server: {
      host: '0.0.0.0', // dev ip
      cors: true,
      hmr: true
    },
    plugins: [
      vue(),
      DynamicPublicDirectory([
        {'input': 'apps/shared/assets/static/**', output: 'static/shared'},
        // use separate assets folder for each app
        {input: 'apps/a/src/assets/**', output: 'static/assets-a'},
        {input: 'apps/b/src/assets/**', output: 'static/assets-b'}
      ],{
        cwd: process.cwd(),
        needTransformBaseCss: true
      })
    ],
  }
}

