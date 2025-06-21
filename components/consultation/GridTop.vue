<template>
  <div class="px-4 xl:px-30">
    <div class="bg-card p-8 relative">
      <img
        src="/image/features/bg-top-left.png"
        class="absolute top-0 left-0 w-[260px] h-[150px]"
      />
      <div class="space-y-1 mb-8 text-white">
        <h2 class="md:text-3xl font-semibold  text-xl">
         {{ $t('what_legal_consultation_do_you_want') }}
        </h2>
        <p>
            {{ $t('advocates_at_lawOnGo') }}
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div v-for="category in categories" :key="category.name">
          <div
            class="w-full flex justify-center min-h-[64px] lg:h-auto h-[104px] max-h-[104px] lg:justify-start p-2 category-card-bg gap-2 hover:shadow-lg shadow-[rgba(15, 169, 66, 0.27)]/50"
          >
            <div class="rounded-md cursor-pointer flex-1">
              <div class="lg:flex items-center gap-1 lg:gap-2">
                <img
                  class="size-[48px] mx-auto lg:mx-0"
                  :src="category.image"
                  alt=""
                />
                <div class="grid gap-1 pr-4">
                  <p
                    class="sm:leading-6 text-center lg:text-left text-xs text-neutral-800 font-dm-sans font-bold"
                  >
                    {{ category.name }}
                  </p>
                  <p v-if="category.description" class="bg-[#CBFFE8] rounded-md text-xs text-[#04A45E] line-clamp-1 px-1 py-0.5">
                    {{ category.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-80" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

const categories = ref([
  {
    name: "Bankruptcy & PKPU",
    image: "/image/category/kepailitan.png",
  },
  {
    name: "Employment",
    image: "/image/category/ketenagakerjaan.png",
    description: 'Industrial relations dis…'
  },
  {
    name: "Marriage & Divorce",
    image: "/image/category/perkawinan.png",
    description: 'General marriage and…'
  },
  {
    name: "Land",
    image: "/image/category/pertanahan.png",
    description: 'Criminal trespass'
  },
  {
    name: "Criminal",
    image: "/image/category/pidana.png",
    description: 'Abuse and mob violen…'
  },
  {
    name: "Civil",
    image: "/image/category/perdata.png",
    description: 'General civil law'
  },
  {
    name: "Corporate",
    image: "/image/category/corporate.png",
  },
  {
    name: "Personal Tax",
    image: "/image/category/tax.png",
  },
]);
</script>
<style scoped>
.bg-card {
  background: linear-gradient(
    180deg,
    #00ba69 0%,
    rgba(26, 203, 125, 0.63) 53%,
    rgba(81, 208, 152, 0) 100%
  );
  border-radius: 30px;
}
.category-card-bg {
  background: #ffffff;
  border-radius: 16px;
}
</style>
