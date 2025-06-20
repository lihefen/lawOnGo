<template>
  <div class="flex flex-col justify-center items-center relative">
    <div class="relative w-full h-[100px] mb-2">
      <div
        class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-[#12EB92] via-[#50FFBE] via-45% to-[#BEFFEE/30] bg-clip-text text-transparent font-bold text-[70px] lg:text-[110px] text-center opacity-45"
      >
        {{ $t('ourTeam.our_team') }}
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black font-black text-2xl lg:text-4xl"
      >
        {{ $t('ourTeam.our_team') }}
      </div>
    </div>

    <div class="bg-linear1 absolute top-0 w-[100vw] h-full"></div>
    <Swiper />
    <div
      class="relative z-[10] flex justify-center w-[214px] font-lexend text-sm font-bold antialiased"
    >
      <button
        class="w-full flex justify-center items-center px-4 bg-white text-lightblack-1 hover:bg-cultured rounded-lg text-[#04A45E] mt-2"
        type="button"
        @click="goCariAdvokat"
      >
        <span>  {{ $t('ourTeam.view_all_advocates') }} </span>
        <Icon
          name="material-symbols:arrow-forward-ios"
          class="ml-2"
          style="color: #04a45e"
        />
      </button>
    </div>
  </div>
</template>
<script setup>
import Swiper from "./Swiper.vue";
const goCariAdvokat = () => {
  navigateTo("/cari-advokat");
}
</script>
<style scoped>
.bg-linear1 {
  background: linear-gradient(
    180deg,
    rgba(204, 255, 235, 0.96) 0%,
    rgba(194, 255, 231, 0.73) 60%,
    rgba(255, 255, 255, 0.19) 100%
  );
  border-radius: 36px;
  opacity: 0.3657;
  filter: blur(16px);
}
</style>
