/*
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-19 13:39:06
 * @LastEditors: hean
 * @LastEditTime: 2025-06-19 14:13:06
 */
import en from './locales/en.json'
import id from './locales/id.json'
import { currentLocales } from './i18n'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    availableLocales: currentLocales.map(l => l.code),
    fallbackLocale: 'en', // 区配不到的语言就用en
    messages: {
        en,
        id,
    }
}));
