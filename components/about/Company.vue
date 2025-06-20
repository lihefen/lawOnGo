<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-27 21:08:14
 * @LastEditors: hean
 * @LastEditTime: 2025-06-20 15:14:11
-->
<template>
  <div class="relative z-10 max-w-[1280px] mx-auto pb-12 px-10 xl:px-42">
    <div class="mb-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="relative mb-2">
            <div
              class="size-[30px] bg-[#1FF48F]/80 rounded-full absolute top-1 -left-3"
            />
            <h1 class="relative text-[32px] font-bold text-[#333333] z-10">
                {{ $t('aboutUs.mission') }}
            </h1>
          </div>
          <p class="text-lg text-black leading-7">
            {{ $t('aboutUs.focus') }}
          </p>
        </div>
        <div class="relative">
          <img src="/image/about-us/target.png" class="w-[342px] h-[225px]" />
        </div>
      </div>
    </div>

    <!-- Vision and Values Section -->
    <div class="grid gap-12 md:grid-cols-2">
      <!-- Vision -->
      <div>
        <div class="relative mb-2">
          <div
            class="size-[30px] bg-[#1FF48F]/80 rounded-full absolute top-1 -left-3"
          />
          <h2 class="relative text-[32px] font-bold text-[#333333] z-10">
            {{ $t('aboutUs.vision') }}
          </h2>
        </div>
        <p class="text-lg text-black leading-7">
            {{ $t('aboutUs.to_become') }}
        </p>
      </div>

      <!-- Values -->
      <div>
        <div class="relative mb-2">
          <div
            class="size-[30px] bg-[#1FF48F]/80 rounded-full absolute top-1 -left-3"
          />
          <h2 class="relative text-[32px] font-bold text-[#333333] z-10">
            {{ $t('aboutUs.values') }}
          </h2>
        </div>
        <div class="space-y-1 flex flex-col text-black text-lg leading-7">
          <div> {{ $t('aboutUs.customer') }} </div>
          <div> {{ $t('aboutUs.professionalism') }} </div>
          <div> {{ $t('aboutUs.fairness') }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locales, locale, setLocaleCookie,t } = useI18n()

</script>