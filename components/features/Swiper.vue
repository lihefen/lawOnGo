<template>
  <ClientOnly>
    <div class="overflow-auto scrollbar-hide scroll-smooth">
      <div class="flex gap-2 justify-center items-center">
        <button
          id="sampleSwiperPrev"
          class="bg-[#A6E9CC]/30 rounded-full p-1 z-10 size-11 flex items-center justify-center"
          :disabled="activeIndex === 0"
          :class="{ 'opacity-50': activeIndex === 0 }"
          @click="swiperRef.slidePrev()"
        >
          <Icon
            name="material-symbols:arrow-back-ios-new"
            class="text-[#2D5946]"
          />
        </button>
        <div class="w-9/12 lg:w-[1000px]">
          <Swiper
            slides-per-view="auto"
            :effect="'coverflow'"
            :grab-cursor="true"
            :space-between="-120"
            :centered-slides="true"
            :coverflow-effect="{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
              scale: 0.6,
              slideShadows: false,
            }"
            :modules="[EffectCoverflow]"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
          >
            <swiper-slide v-for="item in items" :key="item.id" class="w-auto!">
              <div class="w-[470px] h-[300px] py-8 relative overflow-visible">
                <div
                  :class="
                    activeIndex === item.id - 1
                      ? 'person-card-active'
                      : 'person-card'
                  "
                  class="flex items-center gap-6 p-4"
                >
                  <div
                    class="w-[180px] text-center flex flex-col gap-1 items-center relative"
                  >
                    <div
                      class="w-[165px] h-[214px] absolute -top-12 left-1/2 -translate-x-1/2"
                    >
                      <img
                        :src="item.image"
                        alt=""
                        class="size-full object-cover"
                      />
                    </div>
                    <img
                      :src="
                        activeIndex === item.id - 1
                          ? '/image/features/oval-active.svg'
                          : '/image/features/oval.svg'
                      "
                      class="size-[160px]"
                    />
                    <div class="relative">
                      <h3 class="mt-1 font-semibold text-sm">
                        {{ item.name }}
                      </h3>
                      <div class="flex justify-center mt-1">
                        <Icon
                          v-for="i in item.rating"
                          :key="i"
                          name="material-symbols:star"
                          class="text-yellow-400 text-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="text-base space-y-6">
                    <div class="flex items-center gap-2">
                      <Icon name="ic:sharp-access-time" />
                      <span>{{ item.experience }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="mdi:account-multiple" />
                      <span>{{ item.peopleHelped }} person</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <Icon
                        name="fluent:text-bullet-list-square-person-32-filled"
                      />
                      <span>{{ item.services }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <button
          id="sampleSwiperNext"
          class="bg-[#A6E9CC]/30 rounded-full p-1 z-10 size-11 flex items-center justify-center"
          :disabled="activeIndex === 3"
          :class="{ 'opacity-50': activeIndex === 3 }"
          @click="swiperRef.slideNext()"
        >
          <Icon
            name="material-symbols:arrow-forward-ios"
            class="text-[#2D5946]"
          />
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";

const swiperRef = ref(null);
const activeIndex = ref(0);

const items = ref([
  {
    id: 1,
    image: "/image/landing-page/lawyer/profile-lawyer-2.png",
    name: "Aditya Edo Primantoro",
    rating: 5,
    experience: "10+ years",
    peopleHelped: "1000+",
    services: "Family Law, Criminal Law, Civil Law",
  },
  {
    id: 2,
    image: "/image/landing-page/lawyer/profile-lawyer-1.png",
    name: "Farouq Habibullah El-Hassan, S.H",
    rating: 5,
    experience: "10+ years",
    peopleHelped: "1000+",
    services: "Family Law, Criminal Law, Civil Law",
  },
  {
    id: 3,
    image: "/image/landing-page/lawyer/profile-lawyer-3.png",
    name: "Riza Zafita Rizki, S.H.",
    rating: 5,
    experience: "10+ years",
    peopleHelped: "1000+",
    services: "Family Law, Criminal Law, Civil Law",
  },
  {
    id: 4,
    image: "/image/landing-page/lawyer/profile-lawyer-4.png",
    name: "Rima Gravianty Baskoro,S.H.,MPPM.,ACIArb.",
    rating: 5,
    experience: "10+ years",
    peopleHelped: "1000+",
    services: "Family Law, Criminal Law, Civil Law",
  },
  //   {
  //     id: 5,
  //     image: "/image/landing-page/lawyer/profile-lawyer-5.png",
  //     name: "Chairunnisa Ratu Salma, S.H.",
  //     rating: 5,
  //     experience: "10+ years",
  //     peopleHelped: "1000+",
  //     services: "Family Law, Criminal Law, Civil Law",
  //   },
]);

const onSwiper = (newSwiper) => {
  swiperRef.value = newSwiper;
  // 滚到到中间
  newSwiper.slideTo(Math.floor(newSwiper.slides.length / 2));
};

const onSlideChange = () => {
  activeIndex.value = swiperRef.value.activeIndex;
};
</script>
<style scoped>
.person-card-active {
  background: linear-gradient(
    -53deg,
    #4ee9b8 0%,
    #00c683 44%,
    #01d574 81%,
    #04f19c 100%
  );
  box-shadow: 0px 17px 15px -14px rgba(15, 169, 119, 0.28);
  border-radius: 17px;
  color: white;
  font-size: 14px;
}

.person-card {
  background: #f7fffa;
  box-shadow: 0px 17px 15px -14px rgba(15, 169, 119, 0.28);
  border-radius: 17px;
  border: 1px solid #aee9d3;
  opacity: 0.8;
  color: #007d4f;
  font-size: 14px;
}
</style>
