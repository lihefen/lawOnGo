<template>
  <div>
    <h2 class="text-xl lg:text-3xl text-center font-semibold pt-4">
      {{ $t('likeThem.like_them') }}
    </h2>
    <div class="xl:flex xl:justify-center">
      <div id="wrapper-carousel" class="max-w-[1280px] xl:px-40">
        <div
          id="testimony-wrapper"
          class="relative flex flex-row scrollbar-hide scroll-smooth gap-6 pt-6 pb-2 px-2"
        >
          <div class="absolute -left-2 top-0 w-8 bg-white h-full z-10 blur-md" />
          <div class="absolute -right-4 top-0 w-12 bg-white h-full z-100 blur-md" />
          <UCarousel
            ref="carousel"
            v-slot="{ item }"
            :loop="true"
            :autoplay="{delay: 3000}"
            :items="currentList"
            :ui="{
              container: 'items-stretch',
              item: 'basis-auto w-52 md:w-60 lg:w-[290px] xl:w-[320px]',
              dot: 'size-3 [&.bg-inverted]:bg-[#54F9AB]',
            }"
            class="inline-flex gap-4 md:gap-6"
            @select="onSelect"
          >
            <div
              class="pt-4 h-[240px]  rounded-[24px] bg-card flex flex-col text-[#333333]"
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
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

const itemsEn = ref([
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

const itemsId = ref([
  {
    id: 1,
    name: "harina ",
    quote:
      "Setelah submitted informasi, pengacara segera menghubungi saya dan membantu menyelesaikan masalah hutang saya. Terima kasih kepada LawOnGo.",
  },
  {
    id: 2,
    name: "matinrus",
    quote:
      "Pengacara Rima menunjukkan keahlian yang luar biasa—dengan sabar mendengarkan kekhawatiran saya, memberikan bimbingan hukum praktis, dan dengan mahir bernegosiasi dengan peminjamku. Dia menyelesaikan semua hutang saya dalam syarat-syarat yang dapat ditangani. Benar-benar tidak bisa membayangkan bagaimana saya sekarang tanpa LawOnGo.",
  },
  {
    id: 3,
    name: "siska",
    quote:
      "Konsultasi cerdas AI sangat bagus. Ia menjawab pertanyaan saya hanya dengan beberapa kata. Yang terpenting, itu sepenuhnya gratis. Saya harap LawOnGo akan semakin berkembang dan sukses.",
  },
]);

// 计算属性：根据语言环境返回对应的 FAQ 列表
const currentList = computed(() => {
  return locale.value == 'id' ? itemsId.value : itemsEn.value;
});

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
