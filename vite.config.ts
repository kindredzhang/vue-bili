
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import legacy from "@vitejs/plugin-legacy";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'node:path'


export default defineConfig({
  plugins: [
    VueRouter({
      // keepDefaultRouter: true,
      // useHash: true,
      // autoRoutes: true,
      // syncRoutes: true,
      // pagesDir: 'src/pages',
      // extensions: ['vue', 'js'],
      // importMode: 'sync',
      // include: undefined,
      // exclude: undefined,
      // filter: undefined,
      // preprocess: undefined,
      // dedupe: true,
      // allowOverrides: false,
      // syncIndex: true,
      // syncTo: 'router',
      // replace: undefined,
      // extendRoute: undefined,
      // extendRoutes
    }),
    vue(),
    legacy(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api/': {
        target: 'http://shengxinjing.cn:7001/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/(.*)/, '/$1')
      }
    }
  }
})
