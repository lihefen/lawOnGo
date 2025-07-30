<template>
  <section
    id="solution"
    class="max-w-[1280px] px-4 xl:px-20 mx-auto py-8 md:py-10"
  >
    <div class="story-bg relative pb-4">
      <img
        src="/image/features/story-top-left.png"
        alt=""
        class="absolute top-0 left-0 w-[260px] h-[150px] object-cover hidden lg:block"
      />
      <div
        class="hidden md:block text-white text-[32px] font-bold pl-[70px] pt-[38px]"
      >
        {{ $t('brandStory.brand_story') }}
      </div>
      <div className="w-[470px] absolute -top-2 right-20 hidden lg:block">
        <div className="relative">
          <div class="absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-white to-white/40 w-8 h-2 z-10" />
           <div class="absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-l from-white to-white/40 w-12 h-2 z-10" />
          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"
          />

          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
          >
            <div
              className="w-full h-full border-t-2 border-dashed border-green-500"
            />
          </div>

          <div className="relative flex justify-between items-center px-6">
            <div className="flex flex-col items-center">
              <div className="mb-1 text-lg font-bold text-gray-800">2024</div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full relative z-10 mb-1"
              />
              <div className="text-lg text-[#333333] text-center max-w-xs">
                {{ $t('brandStory.established') }}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-lg font-bold text-gray-800">2025</div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full relative z-10 mb-1"
              />
              <div className="text-lg text-[#333333] text-center max-w-xs">
                {{ $t('brandStory.fast_developing') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:pt-4">
        <div
          v-for="item in currentItems"
          :key="item.title"
          class="relative w-full md:w-[340px] p-5 card-bg flex flex-col items-center gap-2 overflow-hidden"
        >
          <iframe
            :src="item.video"
            class="w-[300px] h-[143px] rounded-xl shrink-0"
          />

          <div class="w-full mt-2 px-10 text-center">
            <span class="text-lightgrey-5 text-xs sm:text-sm line-clamp-2">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center w-full font-lexend text-sm font-bold antialiased"
      >
        <button
          class=" flex justify-center items-center px-4 py-2 text-lightblack-1 rounded-lg !text-[#04A45E] mt-4"
          type="button"
          @click="goAbout"
        >
          View all
          <Icon name="material-symbols:arrow-forward-ios" class="ml-2" />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

const itemsEn = ref([
  {
    title: "Leagal Consultation",
    description:
      "LawOnGo makes mediation simple, and legal services truly serve everyone.",
    video: "https://www.youtube.com/embed/cT7RI7m3nsw",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Company Establishment",
    description:
      "Oversight is not a barrier to progress, but a guardian of trust. LawOnGo will deliver legal tech services worthy of confidence from users, partners, and regulators.",
    video: "https://www.youtube.com/embed/gM0JwcBT9fM",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Document Creation",
    description:
      "Let's change our perspective on the debt problem, from something scary to an opportunity to improve and rebuild.",
    video: "https://www.youtube.com/embed/2NU1o2yATrU",
    poster: "/image/features/story-placeholder.png",
  },
]);

const itemsId = ref([
  {
    title: "Konsultasi Hukum",
    description:
      "LawOnGo membuat mediasi menjadi sederhana, dan layanan hukum benar-benar melayani semua orang.",
    video: "https://www.youtube.com/embed/cT7RI7m3nsw",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Pendirian Perusahaan",
    description:
      "Pengawasan bukanlah penghalang bagi kemajuan, melainkan penjaga kepercayaan. LawOnGo akan menyediakan layanan teknologi hukum yang layak mendapatkan kepercayaan dari pengguna, mitra, dan regulator.",
    video: "https://www.youtube.com/embed/gM0JwcBT9fM",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Dokumen Hukum",
    description:
      "Mari kita ubah perspektif kita tentang masalah utang, dari sesuatu yang menakutkan menjadi kesempatan untuk memperbaiki dan membangun kembali.",
    video: "https://www.youtube.com/embed/2NU1o2yATrU",
    poster: "/image/features/story-placeholder.png",
  },
]);
const currentItems = computed(() => {
  return locale.value == 'id' ? itemsId.value : itemsEn.value;
});
const goAbout = () => { 
    navigateTo("/about");
}
</script>
<style scoped>
.story-bg {
  background-image: url("/image/features/story-bg.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  /* min-height: 530px; */
}
.card-bg {
  /* background: linear-gradient(179deg, #c6fce5 0%, #edfff7 100%); */
  background: #FFFFFF;
  box-shadow: inset 0px 1px 0px 0px #5AE8AE;
  border-radius: 18px;
}
</style>
