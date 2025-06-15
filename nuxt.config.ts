/*
 * @Description:
 * @version:
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-06-15 21:09:16
 */
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/', // 基础URL
    buildAssetsDir: '/_nuxt/', // 静态资源目录
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/entry.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxt/eslint", "@nuxt/ui", "@element-plus/nuxt", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    devProxy: {
      "/proxyDev": {
        target: "http://123.60.107.0:18080",
        prependPath: true,
      },
    },
    prerender: {
        routes: ['/about', '/faq','/axios','/cari-advokat','/down','/index','/karir','/kebijakan-privasi','/karir','/kebijakan-privasi','/layanan-lainnya','/pendirian-badan-usaha','/register','/service-page','/syarat-ketentuan','/login/advokat'], // 列出所有静态路由
        
    }
  },
  generate:{
    routes: ['/about', '/faq','/axios','/cari-advokat','/down','/index','/karir','/kebijakan-privasi','/karir','/kebijakan-privasi','/layanan-lainnya','/pendirian-badan-usaha','/register','/service-page','/syarat-ketentuan','/login/advokat'], // 列出所有静态路由
  },
  alias: {
    // services: "/<rootDir>/services",
  },
  devServer: {
    port: 5000, // 你可以选择一个未被占用的端口
    host: "http://g.lawongo.net",
  },
  ui: {
    fonts: false,
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  build: {
    transpile: ['jsencrypt']
  }
});
