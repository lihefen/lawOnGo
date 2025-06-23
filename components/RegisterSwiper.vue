<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-18 18:45:48
 * @LastEditors: hean
 * @LastEditTime: 2025-06-23 09:30:50
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
      :enabled="true"
      :breakpoints="{
        '1024': {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: true,
        },
      }"
    >
      <SwiperSlide v-for="item in currentItems" :key="item.name" class="!h-auto">
        <!--[-->
        <div
          class="bg-white rounded-xl lg:px-8 lg:pt-6 p-3 h-full shadow-[0_7px_25px_0_rgba(0,0,0,0.09)] flex lg:flex-col lg:gap-3.5 gap-2"
        >
            <img
                :src="item.image"
                alt="Yakup Putra Hasibuan, S.H., LL.M"
                class="lg:mx-auto lg:w-[460px] w-[88px] self-start"
            />
            <div class="space-y-2 flex-1">
                <p class="font-semibold text-sm lg:text-center break-all">{{ item.name }}</p>
                <div class="border-t border-dashed border-[#D7D7D7]"></div>
                <p class="text-xs font-light break-all">"{{ item.description }}"</p>
                <div class="text-[10px] flex items-center gap-1">
                    <div class="w-[16px]"><img src="/image/register/person_icon.png" alt=""></div>
                    <span>LawOnGo Client</span>
                </div>
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
const { locales, locale, setLocaleCookie,t } = useI18n()
// import { Autoplay } from "swiper/modules";

import "swiper/css";

const isMobile = ref(false);
const itemsEn = ref([
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
    name:'Aditya Edo Primantoro',
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name:'Rima Gravianty Baskoro,S.H.,MPPM.,ACIArb.',
    image: "/image/testimonial/testimonial-4.png",
    description:
      "Attorney Rima demonstrated exceptional professionalism—patiently listening to my concerns, providing practical legal guidance, and skillfully negotiating with my borrower. She resolved all my debts within manageable terms. I truly can't imagine how I'll be today without LawOnGo.",
  },
]);

const itemsId = ref([
  {
    name:'Riza Zafita Rizki, S.H.',
    image: "/image/testimonial/testimonial-1.png",
    description:
      "Pengacara benar-benar membantu saya dalam menemukan solusi dan langkah-langkah hukum yang harus saya ambil terkait masalah saya.",
  },
  {
    name:'Farouq Habibullah El-Hassan, S.H',
    image: "/image/testimonial/testimonial-2.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name:'Aditya Edo Primantoro',
    image: "/image/testimonial/testimonial-3.png",
    description:
      "Saya cukup puas selama konsultasi, karena insight yang diberikan cukup baik dan jujur sehingga saya bisa menentukan keputusan apa yang sekiranya mungkin saya ambil.",
  },
  {
    name:'Rima Gravianty Baskoro,S.H.,MPPM.,ACIArb.',
    image: "/image/testimonial/testimonial-4.png",
    description:
      "Advokat Rima menunjukkan profesionalisme yang luar biasa—dengan sabar mendengarkan kekhawatiran saya, memberikan panduan hukum yang praktis, dan dengan keahlian bernegosiasi dengan peminjam saya. Dia menyelesaikan semua utang saya dalam syarat-syarat yang dapat dikelola. Benar-benar tidak bisa membayangkan bagaimana saya hari ini tanpa LawOnGo.",
  },
]);


const currentItems = computed(() => {
  return locale.value == 'id' ? itemsId.value : itemsEn.value;
});

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
