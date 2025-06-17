<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-01 10:26:14
 * @LastEditors: hean
 * @LastEditTime: 2025-06-17 23:12:52
-->
<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-01 10:07:29
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:24:31
-->
<template>
   <div class="custom-bg mb-12">
    <div class="max-w-[1000px] mx-auto pt-12 ">
      <div class="relative text-center">
        <h2 class="relative text-xl h-[40px] lg:text-3xl text-center font-semibold text-[#333333]">
            <div class="absolute left-1/2 -translate-x-1/2 z-10">Work at LawOnGo</div>
            <img class="absolute left-1/2 -translate-x-1/2 top-[10px] z-9" width="100" height="100"  src="/image/landing-page/font_bar.png">
        </h2>
      </div>

      <div class="p-4  md:hidden ">
            <div class="relative ">
                <p class="relative text-[#000000] text-[18px] z-10 leading-snug"><span class="text-[40px] font-bold">L</span>awOnGo offers a dynamic environment where everyone can get involved and contribute to every project. We believe that every opinion, experiment, even failure is part of the learning process that ultimately leads to the development of better products and services.
                </p>
                <img class="absolute right-0 bottom-[0px]" src="/image/landing-page/work_text_icon.png" alt="">
            </div>
            <div class="mt-4">
                <iframe
                    src="https://www.youtube.com/embed/Sy4ROOthOg4"
                    class="w-full h-[212px] rounded-xl shrink-0"
                    />
            </div>
      </div>


      <div class="p-4 hidden md:flex md:gap-8 mt-6 items-center">
            <div class="relative flex-1 pb-4">
                <p class="relative text-[#000000] text-[18px] z-10 leading-snug"><span class="text-[40px] font-bold">L</span>awOnGo offers a dynamic environment where everyone can get involved and contribute to every project. We believe that every opinion, experiment, even failure is part of the learning process that ultimately leads to the development of better products and services.
                </p>
                <img class="absolute right-0 bottom-[0px]" src="/image/landing-page/work_text_icon.png" alt="">
            </div>
            <div  class="flex-1">
                <iframe
                    src="https://www.youtube.com/embed/Sy4ROOthOg4"
                    class="w-full h-[212px] rounded-xl shrink-0"
                    />
            </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const members = ref([
  {
    name: "Customer First",
    image: "/image/landing-page/img_our_1.png",
  },
  {
    name: "Fairness Keadilan ",
    image: "/image/landing-page/img_our_2.png",
  },
  {
    name: "Professionalism",
    image: "/image/landing-page/img_our_3.png",
  },
]);
</script>

<style scoped>
</style>