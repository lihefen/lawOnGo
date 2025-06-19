/*
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-19 13:39:23
 * @LastEditors: hean
 * @LastEditTime: 2025-06-19 13:39:24
 */
/*
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-19 10:37:30
 * @LastEditors: hean
 * @LastEditTime: 2025-06-19 12:14:13
 */
const locales = [
    {
      code: 'en',
      file: 'en.json',
      name: 'English'
    },
    {
        code: 'id',
        file: 'id.json',
        name: 'Bahasa'
    },
  ]
  
  export const currentLocales = locales
  export const currentLocaleCodes = locales.map(l => l.code)