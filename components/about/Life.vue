<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-06-20 15:51:15
-->
<template>
  <div class="max-w-[1280px] mx-auto pt-12 px-10 xl:px-42">
    <div class="relative text-center">
      <img
        src="/image/about-us/title-bg.png"
        class="w-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div class="relative">
        <h2 class="text-[32px] font-bold text-[#333333]">Life at LawOnGo</h2>
        <p class="text-lg text-[#666666] leading-relaxed mt-2">
          Life in Pursuit of Dreams at LawOnGo
        </p>
      </div>
    </div>
  </div>

  <div class="custom-bg">
    <div class="relative max-w-[980px] md:h-[350px]  mx-auto px-10">
      <UCarousel
            ref="carousel"
            v-slot="{ item }"
            dots
            :autoplay="{ delay: 3000 }"
            :items="items"
            :ui="{
            dots: 'bottom-4',
            dot: 'w-6 h-2  rounded-[5px]  [&.bg-inverted]:bg-[#09EBA7]',
        }"
        class="mt-10"
      >
            <div class="rounded-[18px] overflow-hidden md:w-[900px] md:h-[350px] mx-auto">
                <img :src="item" class="md:w-[900px] md:h-[350px] mx-auto" />
            </div>
      </UCarousel>
      <div class="caBtnGroup hidden md:block">
            <a href="javascript:;" class="preBtn w-[42px] h-[42px]" @click="onPrevButtonClick"></a>
            <a href="javascript:;" class="nextBtn  w-[42px] h-[42px]" @click="onNextButtonClick"></a>
        </div>
    </div>
    <div class="flex justify-center items-center gap-2 mt-6 md:mt-[30px]">
        <button
          @click="goKarir"
          class="linear-button text-2xl font-bold text-[#333333] flex items-center justify-center px-6"
        >
           {{ $t('aboutUs.join_us') }}
          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            class="ml-2 text-2xl"
          />
        </button>
      </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const carousel = useTemplateRef("carousel");

const items = ref([
  "/image/about-us/life-placeholder-1.jpg",
  "/image/about-us/life-placeholder-2.jpg",
  "/image/about-us/life-placeholder-3.jpg",
]);
const onNextButtonClick = () => {
    if (!carousel.value) return;
    carousel.value.emblaApi.scrollNext();
};

const onPrevButtonClick = () => {
    if (!carousel.value) return;
    carousel.value.emblaApi.scrollPrev();
};
const goKarir = () => {
    window.location.href = '/karir'
}
</script>
<style scoped>
.custom-bg {
  background: url("/image/about-us/life-bg.png") no-repeat center center;
  background-size: cover;
}
.linear-button {
  background: linear-gradient(270deg, #77ffce 0%, #a1ff83 100%);
  box-shadow: 0px 17px 23px -17px rgba(95, 229, 83, 0.66);
  border-radius: 18px;
  height: 66px;
}
.caBtnGroup {
   
}
.caBtnGroup  .preBtn {
    position: absolute;
    background: url(/image/utils/pre_arrow.png) no-repeat center center;
    background-size: 100% 100%;
    left: -28px;
    top:50%;
    transform: translate3d(0,-50%,0);
}
.caBtnGroup  .nextBtn {
    position: absolute;
    background: url(/image/utils/next_arrow.png) no-repeat center center;
    background-size: 100% 100%;
    right: -28px;
    top:50%;
    transform: translate3d(0,-50%,0);
}
</style>
