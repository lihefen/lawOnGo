<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-25 18:28:37
 * @LastEditors: hean
 * @LastEditTime: 2025-06-23 01:03:25
-->
<template>
  <div class="w-full bg-gradient-to-r from-[#005F38] to-[#005F38]">
    <div class="flex justify-center max-w-[1280px] p-4 xl:px-40 mx-auto">
      <div class="max-w-mobile md:max-w-tablet lg:max-w-full">
        <div class="lg:flex w-full">
          <div id="wrap-logo">
            <div class="flex justify-center py-6 lg:justify-start">
                <img class="w-2/5 lg:w-1/2" src="/image/footer/logo-footer.png"  alt="logo-footer-perqara">
            </div>
            <div class="flex gap-2 pb-8 justify-center">
              <a
                href="javascript:;"
                @click="ElMessage('Anticipate it with expectation')"
                rel="noopener noreferrer"
                ><img
                  alt="appstore-logo"
                  class="w-36"
                  src="/image/landing-page/appstore-logo.png" /></a
              ><a
                href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share"
                rel="noopener noreferrer"
                target="_blank"
                ><img
                  alt="android-logo"
                  class="w-36"
                  src="/image/footer/google-logo.png"
              /></a>
            </div>
            <p class="font-dm-sans font-bold text-white text-base antialiased">
              {{ $t('foot.fllow_us') }}
            </p>
            <div class="flex gap-1 mt-3">
                <a href="" target="_blank"><img
                class="w-10"
                src="/image/footer/fb.svg"
                alt="fb-logo"
                /></a>
                <a href="https://x.com/lawongo_id?t=55bPYi3TYLvRBnxddt4Jbg&s=09" target="_blank"><img
                class="w-10"
                src="/image/footer/x.svg"
                alt="x-logo"
                /></a>
                <a href="https://www.instagram.com/lawongo.id/" target="_blank"><img
                class="w-10"
                src="/image/footer/link.svg"
                alt="in-logo"
                /></a>
                <a href="https://www.instagram.com/lawongo.id/" target="_blank"><img
                class="w-10"
                src="/image/footer/ins.svg"
                alt="ins-logo"
                /></a>
                 <a href="https://api.whatsapp.com/send/?phone=6282324599898&text&type=phone_number&app_absent=0" target="_blank"><img
                class="w-10"
                src="/image/footer/whatsapp.png"
                alt="whatsapp"
                /></a>
            </div>
          </div>
          <div class="mt-8 flex w-full text-white gap-3 lg:pl-32">
            <div class="font-dm-sans antialiased w-1/2 lg:w-2/3">
              <p class="font-bold text-base">Site Map</p>
              <ul class="text-[14px] lg:text-base">
                
                <li class="mt-2 lg:mt-3">
                    <NuxtLink
                    :to="{path:'/about'}">
                        {{ $t('foot.about_us') }} 
                    </NuxtLink>

                </li>
                <li class="mt-2 lg:mt-3">
                    <NuxtLink
                    :to="{path:'/cari-advokat'}">
                        {{ $t('foot.find_an_advocate') }} 
                    </NuxtLink>
                </li>
                <li class="mt-2 lg:mt-3">
                    <NuxtLink
                    :to="{path:'/faq'}">
                    FAQ
                    </NuxtLink>
                </li>
                <li class="mt-2 lg:mt-3">
                  <NuxtLink
                    :to="{path:'/karir'}">
                    {{ $t('foot.career') }}
                    </NuxtLink>
                </li>
                <li class="mt-2 lg:mt-3">
                  <NuxtLink
                    :to="{path:'/syarat-ketentuan'}">
                    {{ $t('foot.terms_and_conditions') }} 
                    </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="font-dm-sans antialiased ml-2">
              <p class="font-bold">Contact Us</p>
              <p class="text-[14px] lg:text-base mt-3">
                Whatsapp: +62 823-2459-9898
              </p>
              <!-- <p class="text-[14px] lg:text-base">Senopati, Jakarta Selatan</p> -->
              <p class="text-[14px] lg:text-base mt-3">Email: cs@lawongo.id</p>
              <div class="mt-2 hidden lg:block">
                <p class="font-bold">Address</p>
              <p class="text-[14px] lg:text-base mt-3">
                Vantage Office Business Centre at Equity Tower, 26th floor H, Kavling 52 - 52, Jl Jendral Sudirman Senayan, Jakarta Selatan, 12910 Jakarta, Indonesia
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-white text-center mt-10 pb-10 text-xs lg:text-base">
      <p>2025 PT Solusi Pertiwi Teknologi. Hak Cipta Dilindungi</p>
    </div>
  </div>
</template>

<script setup>
const { locales, locale, setLocaleCookie,t } = useI18n()

</script>
