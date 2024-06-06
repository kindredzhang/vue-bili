import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import legacy from '@vitejs/plugin-legacy'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    legacy(),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["text", "json", "html"],
    },
  },
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
