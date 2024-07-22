import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxtoRem from "postcss-pxtorem";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://192.168.101.17:8080',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'')
      }
    }
  },
  css: {
  postcss: {
    plugins: [
      postcssPxtoRem({
        rootValue: 192, // 按照自己的设计稿修改 1920/10
        unitPrecision: 5, // 保留到5位小数
        selectorBlackList: ["ignore"], // 忽略转换正则匹配项
        propList: ["*", "!border"],
        replace: true,
        mediaQuery: false, // 媒体查询( @media screen 之类的)中不生效
        minPixelValue: 1, //可以选择px小于1的不会被转换
      }),
    ],
  },
},

})
