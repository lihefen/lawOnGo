<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-18 18:45:48
 * @LastEditors: hean
 * @LastEditTime: 2025-06-09 11:29:20
-->
<template>
  <ClientOnly>
    <Swiper
      class="swiper-testimonial"
      :slides-per-view="1.2"
      :space-between="16"
      :direction="'horizontal'"
      :loop="true"
      :mousewheel="true"
      :breakpoints="{
        '1024': {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: true,
        },
      }"
    >
      <SwiperSlide v-for="item in items" :key="item.name" class="!h-auto">
        <!--[-->
        <div
          class="bg-white rounded-xl lg:px-8 lg:pt-6 p-3 h-full shadow-[0_7px_25px_0_rgba(0,0,0,0.09)] flex lg:flex-col lg:gap-3.5 gap-2"
        >
            <div class="text-[10px] flex items-center gap-1">
                <div class="w-[16px]"><img src="/image/register/person_icon.png" alt=""></div>
                <span>LawOnGo Clent</span>
            </div>
            <img
                :src="item.image"
                alt="Yakup Putra Hasibuan, S.H., LL.M"
                class="lg:mx-auto lg:w-[472px] w-[158px] self-start"
            />
            <div class="space-y-2 flex-1">
                <p class="font-semibold text-sm lg:text-center">{{ item.name }}</p>
                <div class="border-t border-lightgrey-5"></div>
                <p class="text-xs font-light">"{{ item.description }}"</p>
            </div>
        </div>
        <!--]--><!---->
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay } from "swiper/modules";

import "swiper/css";

const isMobile = ref(false);
const items = ref([
  {
    name:'Riza Zafita Rizki, S.H.',
    image: "/image/testimonial/testimonial-1.png",
    description:
      "“The lawyer really helped me in finding solutions and legal steps that I had to take regarding my problem.”",
  },
  {
    name:'Farouq Habibullah El-Hassan, S.H',
    image: "/image/testimonial/testimonial-2.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name:'Edo',
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name:'Rima Gravianty Baskoro,S.H.,MPPM.,ACIArb.',
    image: "/image/testimonial/testimonial-4.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
]);

const onResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});
</script>
<style>
.swiper-testimonial .swiper-slide-next,
.swiper-testimonial .swiper-slide-prev {
  opacity: 0.5;
}

.swiper-testimonial .swiper-slide-active {
  opacity: 1;
}
</style>
