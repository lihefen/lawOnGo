<template>
  <div>
    <h2 class="text-xl lg:text-3xl text-center font-semibold pt-4">
      Like Them, Anyone Can Find A Solution!
    </h2>
    <div class="xl:flex xl:justify-center">
      <div id="wrapper-carousel" class="max-w-[1280px] xl:px-40">
        <div
          id="testimony-wrapper"
          class="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-6 pt-6 pb-2 px-2"
        >
          <UCarousel
            ref="carousel"
            v-slot="{ item }"
            :items="items"
            :ui="{
              container: 'items-stretch',
              item: 'basis-auto',
              dot: 'size-3 [&.bg-inverted]:bg-[#54F9AB]',
            }"
            class="inline-flex gap-4 md:gap-6"
            @select="onSelect"
          >
            <div
              class="w-52 pt-4 h-full md:w-60 lg:w-[290px] xl:w-[320px] rounded-[24px] bg-card flex flex-col text-[#333333]"
            >
              <div class="px-4 pb-4 overflow-auto scrollbar-hide flex-grow">
                <blockquote class="pt-2 text-sm antialiased text-slate-500">
                  {{ item.quote }}
                </blockquote>
              </div>

              <div class="flex justify-between mt-auto">
                <div class="flex pl-4 py-2">
                  <div><img src="/image/utils/icon_person.png" /></div>
                  <label class="text-lg font-bold bottom-0 pl-2">
                    {{ item.name }}
                  </label>
                </div>
                <div>
                  <img src="/image/card-testimoni.png" alt="kutip" />
                </div>
              </div>
            </div>
          </UCarousel>
        </div>
        <!-- <div class="hidden lg:flex flex-row justify-end mt-2">
          <div class="flex">
            <button
              class="p-2 mx-1 my-2 shadow-md rounded-full bg-white"
              :disabled="prevBtnDisabled"
              :class="{ 'opacity-50!': prevBtnDisabled }"
              @click="onPrevButtonClick"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                ></path>
              </svg>
            </button>
            <button
              class="p-2 my-2 shadow-md rounded-full bg-white"
              :disabled="nextBtnDisabled"
              :class="{ 'opacity-50!': nextBtnDisabled }"
              @click="onNextButtonClick"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex lg:hidden justify-center items-center">
          <button
            class="p-2 mx-1 my-2 shadow-md rounded-full bg-white"
            :disabled="prevBtnDisabled"
            :class="{ 'opacity-50!': prevBtnDisabled }"
            @click="onPrevButtonClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              ></path>
            </svg>
          </button>
          <button
            class="p-2 my-2 shadow-md rounded-full bg-white"
            :disabled="nextBtnDisabled"
            :class="{ 'opacity-50!': nextBtnDisabled }"
            @click="onNextButtonClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              ></path>
            </svg>
          </button>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    name: "harina ",
    quote:
      "After submitting the information, the lawyer contacted me quickly and helped me solve the debt problem. Thanks to LawOnGo ",
  },
  {
    id: 2,
    name: "matinrus",
    quote:
      "Attorney Rima demonstrated exceptional professionalism—patiently listening to my concerns, providing practical legal guidance, and skillfully negotiating with my borrower. She resolved all my debts within manageable terms. I truly can't imagine how I'll be today without LawOnGo. ",
  },
  {
    id: 3,
    name: "siska",
    quote:
      "AI smart consultation is very goood. It answered my questions in just a few words. Most importantly, it is completely free. I hope LawOnGo will do better and better.",
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

// const onNextButtonClick = () => {
//   if (!carousel.value) return;
//   carousel.value.emblaApi.scrollNext();
// };

// const onPrevButtonClick = () => {
//   if (!carousel.value) return;
//   carousel.value.emblaApi.scrollPrev();
// };
</script>
<style scoped>
.bg-card {
  background: linear-gradient(172deg, #cdffe9 0%, #ffffff 100%);
  box-shadow: 0px 35px 27px -35px rgba(15, 169, 66, 0.21),
    inset -1px -1px 0px 0px #78fea9;
}
</style>
