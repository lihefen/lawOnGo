<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-06-20 14:49:21
-->
<template>
  <div class="card-bg md:h-[572px]">
    <div
      class="relative z-10 max-w-[1280px] mx-auto px-10 xl:px-52 py-12 lg:py-16"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
      >
        <div class="flex flex-col text-white gap-1">
          <p class="text-[42px] leading-[50px]">
            {{ $t('aboutUs.building_life') }}
          </p>
          <p class="text-lg">
            {{ $t('aboutUs.lawOnGo') }}
          </p>
        </div>

        <iframe
          src="https://www.youtube.com/embed/zq83AsGKCA0"
          class="w-[360px] h-[212px] rounded-xl shrink-0"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
// import Video from "../BrandStory/Video.vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

</script>
<style scoped>
.card-bg {
  background-image: url("/image/about-us/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
