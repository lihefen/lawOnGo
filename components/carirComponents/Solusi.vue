<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-31 14:46:30
 * @LastEditors: hean
 * @LastEditTime: 2025-06-15 09:45:35
-->
<template>
  <div>
    <h2 class="relative text-xl h-[40px] lg:text-3xl text-center font-semibold text-[#333333]">
        <div class="absolute left-1/2 -translate-x-1/2 z-10">What they say</div>
        <img class="absolute left-1/2 -translate-x-1/2 top-[10px] z-9" width="100" height="100"  src="/image/landing-page/font_bar.png">
    </h2>
    <div class="xl:flex xl:justify-center">
      <div class="max-w-[1280px] mx-auto">
        <div
          id="testimony-wrapper"
          class="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-6 px-2 mt-6"
        >
            <UCarousel
                ref="carousel"
                :prev="{ color: 'primary',size:'lg', class:'lawPrev' }"
                :next="{color: 'primary',size:'lg', class:'nextPrev '}"
                v-slot="{ item }"
                :items="items"
                :ui="{
                item: 'basis-auto',
                }"
                class="gap-4 md:gap-6 w-full "
                @select="onSelect"
            >
                <div
                class="relative w-[458px]   md:w-90 lg:w-[458px] xl:w-[458px] rounded-[24px] bg-card "
                >
                <div class="flex pl-[20px] pr-[20px] items-center pt-4 pb-4">
                    <div class="w-[90px]">
                        <div><img class="w-[90px]" :src="item.image"></div>
                        <div class="text-center text-[24px] font-bold mt-[-16px]">{{ item.name }}</div>
                    </div>
                    <div class="flex items-center pl-[10px]  overflow-auto scrollbar-hide w-[300px] h-[120px] pb-[40px]">
                        <blockquote class=" text-sm antialiased text-slate-500">
                        {{ item.quote }}
                        </blockquote>
                    </div>
                </div>
               

                <img class="absolute right-[-10px] bottom-0" src="/image/landing-page/icon_say.png" alt="kutip" />
                </div>
            </UCarousel>
        </div>
        <div class="caBtnGroup flex items-center justify-center gap-20 mt-4">
            <a href="javascript:;" class="preBtn w-[42px] h-[42px]" @click="onPrevButtonClick"></a>
            <a href="javascript:;" class="nextBtn  w-[42px] h-[42px]" @click="onNextButtonClick"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
    import { ref } from "vue";

    const items = ref([
    {
        id: 1,
        name: "Michael",
        quote:
        "LawOnGo is a fast paced starup in a relatively new industry that has been exposing me with a step learning curve.",
        image:'/image/landing-page/img_sayphoto_1.png'
    },
    {
        id: 2,
        name: "Alice",
        quote:
        "Advocate advice in this application is very helpful for small communities like me. ",
        image:'/image/landing-page/img_sayphoto_2.png'
    },
    {
        id: 3,
        name: "John",
        quote:
        "Advocate advice in this application is very helpful for small communities like me. ",
        image:'/image/landing-page/img_sayphoto_3.png'
    },
    {
        id: 4,
        name: "Siska",
        quote:
        "Advocate advice in this application is very helpful for small communities like me. ",
        image:'/image/landing-page/img_sayphoto_4.png'
    },
    ]);


    const carousel = useTemplateRef("carousel");
    const prevBtnDisabled = ref(false);
    const nextBtnDisabled = ref(false);

    const onSelect = () => {
    if (!carousel.value) return;
    prevBtnDisabled.value = !carousel.value.emblaApi.canScrollPrev();
    nextBtnDisabled.value = !carousel.value.emblaApi.canScrollNext();
    };

    const onNextButtonClick = () => {
      if (!carousel.value) return;
      carousel.value.emblaApi.scrollNext();
    };

    const onPrevButtonClick = () => {
      if (!carousel.value) return;
      carousel.value.emblaApi.scrollPrev();
    };
</script>
<style scoped>
.bg-card {
    background: linear-gradient(172deg, #cdffe9 0%, #ffffff 100%);
    box-shadow: 0px 35px 27px -35px rgba(15, 169, 66, 0.21),
        inset -1px -1px 0px 0px #78fea9;
    box-sizing: border-box;
}

.caBtnGroup  .preBtn {
   background: url(/image/utils/pre_arrow.png) no-repeat center center;
   background-size: 100% 100%;
}
.caBtnGroup  .nextBtn {
   background: url(/image/utils/next_arrow.png) no-repeat center center;
   background-size: 100% 100%;
}
</style>

<style>
    .ourSwiper {
        width: 100%;
    }
</style>
   
