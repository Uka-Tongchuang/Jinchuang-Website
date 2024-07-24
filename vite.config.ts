import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToRem from 'postcss-pxtorem';



// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcssPxToRem({
  //         rootValue: 192, // 这个值取决于你的设计稿基础尺寸
  //         propList: ['*'], // 转换所有可转换的属性
  //         // 其他配置选项...
  //       }),
  //     ],
  //   },
  // },
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
  
})
