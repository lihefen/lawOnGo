/*
 * @Description:
 * @version:
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-06-19 18:16:54
 */
import tailwindcss from "@tailwindcss/vite";
import { currentLocales } from './i18n/i18n'
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
  modules: ["@nuxt/eslint", "@nuxt/ui", "@element-plus/nuxt", "@nuxt/icon",'@nuxtjs/i18n'],
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
        routes: ['/about', '/faq','/axios','/cari-advokat','/down','/index','/karir','/kebijakan-privasi','/karir','/kebijakan-privasi','/layanan-lainnya','/pendirian-badan-usaha','/register','/service-page','/syarat-ketentuan','/login/advokat','/login/advokat','/service-page?id=document','/service-page?id=copyright','/service-page?id=tax'], // 列出所有静态路由
        
    }
  },
  generate:{
    routes: ['/about', '/faq','/axios','/cari-advokat','/down','/index','/karir','/kebijakan-privasi','/karir','/kebijakan-privasi','/layanan-lainnya','/pendirian-badan-usaha','/register','/service-page','/syarat-ketentuan','/login/advokat','/login/advokat','/service-page?id=document','/service-page?id=copyright','/service-page?id=tax'], // 列出所有静态路由
  },
  alias: {
  },
  i18n: {
    locales: currentLocales,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: '~/i18n/i18n.config.ts',
    // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
    // nuxt-i18n 会在 cookie 中添加一个用于存储当前语言环境的变量，当我们修改语言时，nuxt-i18n 会更新它
    detectBrowserLanguage: {
      // 启动 cookie
      useCookie: true,
      // 用于存储当前语言环境的变量名
      cookieKey: 'i18n_redirected',
      // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是“no_prefix”时才有效。
      redirectOn: 'root'
    }
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