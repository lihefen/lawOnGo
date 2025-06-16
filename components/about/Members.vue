<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:07:50
-->
<template>
  <div class="custom-bg mb-12">
    <div class="max-w-[1280px] mx-auto pt-4 px-10 xl:px-42">
      <div class="relative text-center">
        <h2 class="text-[32px] font-bold text-[#333333] mb-12">
          Core members of our team
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[150px]">
        <div
          v-for="member in members"
          :key="member.name"
          class="flex flex-col items-center"
        >
          <img
            :src="member.image"
            alt="Member"
            class="w-[205px] object-cover rounded-lg"
          />
          <div
            class="blur-card px-6 -mt-20 flex flex-col justify-center text-[#333333] gap-2"
          >
            <h3 class="text-2xl font-bold">{{ member.name }}</h3>
            <p class="text-lg">{{ member.job }}</p>
          </div>
          <div class="relative text-[#333333] mt-2 w-[260px]">
            <div class="relative z-100">
              <p class="text-warp">{{ member.description }}</p>
            </div>
            <img
              src="/image/about-us/quotes.jpg"
              alt="quote"
              class="absolute bottom-2 right-12 w-[80px] h-[59px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const members = ref([
  {
    name: "Nadya Nasya",
    job: "BOC",
    image: "/image/about-us/BOC.png",
    description: `Nadya believes that:"Effective supervision is not a question of
              after-the-fact,but of ensuring compliance before it happens."Under
              her leadership,the LawOnGo supervision system has become more
              independent,clear,and accountable,and has laid a systematic
              foundation for the sustainable development of LawOnGo.`,
  },
  {
    name: "Ettyta Ramadhani ",
    job: "CEO",
    image: "/image/about-us/CEO.png",
    description: `Ettyta’s leadership philosophy is based on"system development as the foundation of a culture of compliance,and long-term orientation by providing trustworthy and sustainable strategic support for LawOnGo amid challenging industry changes."`,
  },
  {
    name: "Rima Gravianty Baskoro",
    job: "Lawyer",
    image: "/image/about-us/lawyer.png",
    description: `Rima believes that:"Technology can support legal performance,even with certain limitations and constraints from the law itself."Under her leadership,LawOnGo is working to build a trustworthy AI-powered legal service platform that leverages artificial intelligence to provide legal services to all segments of society.`,
  },
]);
</script>

<style scoped>
.custom-bg {
  /* background: url("/image/about-us/members-bg.png") no-repeat center center; */
  /* background-size: 100% 100%; */
  background: linear-gradient( 180deg, #FFFFFF, rgba(204,255,235,0.96) 40%, rgba(194,255,231,0.73) 60%, rgba(255,255,255,0.19) 100%);
}

.blur-card {
  width: 260px;
  height: 130px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 30px 14px -21px rgba(187, 193, 213, 0.23),
    inset 0px 1px 0px 0px #ccffe4;
  border-radius: 16px;
  border: 1px solid #b3f8dc;
  backdrop-filter: blur(10px);
}
</style>
