<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-07 23:27:22
 * @LastEditors: hean
 * @LastEditTime: 2025-06-10 10:29:51
-->
<template>
  <div class="bg-[#f4f2f3] font-dm-sans min-h-screen overflow-x-hidden">
    <div class="h-16 overflow-hidden relative">
        <div class="relative bg-gradient-to-r from-[#00CD94] to-[#00BE6B] max-h-16">
            <img src="/image/landing-page/background-banner-left.png" class="lg:block hidden absolute left-0 z-0" alt="banner-left">
            <div class="cursor-pointer relative z-[1]">
                <div class="max-w-[1280px] px-4 xl:px-40 mx-auto py-2 xs:py-3 h-16 flex items-center justify-between gap-2"><div class="sm:px-2 flex items-center gap-2.5 text-lightwhite-1 flex-1">
                    <img class="w-20 h-16" src="/image/banner-mobile-icon.png" alt="banner-mobile"><img src="/image/lawongo-icon.png" alt="" class="hidden sm:inline-block">
                    <span class="text-sm sm:text-base py-1 font-semibold text-[#ffffff]">Consultation is easier by downloading the LawOnGo application!</span>
                </div>
                <div>
                    <div class="hidden md:flex md:gap-2">
                        <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" rel="noopener noreferrer" target="_blank">
                            <img class="w-[144px] h-[44px]" src="/image/landing-page/google-logo.png" alt="google icon">
                        </a>
                        <a href="javascript:;"  @click="ElMessage('敬请期待')" rel="noopener noreferrer">
                            <img class="w-[144px] h-[44px]" src="/image/landing-page/appstore-logo.png" alt="appstore icon">
                        </a>
                    </div>
                    <div class="bg-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-4 cursor-pointer md:hidden">
                        <svg class="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path class="" fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <main>
      <TheNavbar @loginHandler="loginHandler" />
      <div class="bg-white font-lexend -mt-16">
        <HeroBanner />
        <Features />
        <Why />
        <Consultation />
        <Solution />
        <!-- <TopAdvocate /> -->
        <BrandStory />
        <Testimonies />
        <FootBanner />
        <TheFooter />
      </div>
    </main>
    <LoginDialog
      v-model:show="showLoginDialog"
      @hide="showLoginDialog = false"
    ></LoginDialog>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const showLoginDialog = ref(false);
const loginHandler = () => {
  console.log("loginHandler");
  showLoginDialog.value = true;
};
</script>
