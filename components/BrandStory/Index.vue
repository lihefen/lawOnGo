<template>
  <section
    id="solution"
    class="max-w-[1280px] px-4 xl:px-20 mx-auto py-8 md:py-11"
  >
    <div class="story-bg relative min-h-[530px]">
      <img
        src="/image/features/story-top-left.png"
        alt=""
        class="absolute top-0 left-0 w-[260px] h-[150px] object-cover hidden lg:block"
      />
      <div
        class="hidden md:block text-white text-[32px] font-bold pl-[70px] pt-[38px]"
      >
        Brand Story
      </div>
      <div className="w-[470px] absolute -top-2 right-20 hidden lg:block">
        <div className="relative">
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
                Established
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-lg font-bold text-gray-800">2025</div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full relative z-10 mb-1"
              />
              <div className="text-lg text-[#333333] text-center max-w-xs">
                Fast developing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:pt-8">
        <div
          v-for="item in items"
          :key="item.title"
          class="relative w-full md:w-[340px] p-5 card-bg flex flex-col items-center gap-2 shadow-lg overflow-hidden"
        >
          <!-- <Video
            :video="item.video"
            :poster="item.poster"
            class="w-[300px] h-[143px]"
          /> -->
          <iframe
            :src="item.video"
            class="w-[300px] h-[143px] rounded-xl shrink-0"
          />

          <div class="w-full mt-2 px-10">
            <span class="text-lightgrey-5 text-xs sm:text-sm">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center w-full font-lexend text-sm font-bold antialiased"
      >
        <button
          @click="goAbout"
          type="button"
          class="w-full flex justify-center items-center px-4 py-2 bg-white text-lightblack-1 rounded-lg !text-[#04A45E] mt-4"
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
// import Video from "./Video.vue";

const items = ref([
  {
    title: "Leagal Consultation",
    description:
      "LawOnGo makes mediation simple, and legal services truly serve everyone.",
    video: "https://www.youtube.com/embed/Sy4ROOthOg4",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Company Establishment",
    description:
      "Oversight is not a barrier to progress, but a guardian of trust. LawOnGo will deliver legal tech services worthy of confidence from users, partners, and regulators.",
    video: "https://www.youtube.com/embed/81FNi23lrbc",
    poster: "/image/features/story-placeholder.png",
  },
  {
    title: "Document Creation",
    description:
      "Let's change our perspective on the debt problem, from something scary to an opportunity to improve and rebuild.",
    video: "https://www.youtube.com/embed/zq83AsGKCA0",
    poster: "/image/features/story-placeholder.png",
  },
]);

const goAbout = () => { 
    navigateTo("/about");
}
</script>
<style scoped>
.story-bg {
  background-image: url("/image/features/story-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* min-height: 530px; */
}
.card-bg {
  background: linear-gradient(179deg, #c6fce5 0%, #edfff7 100%);
  border-radius: 20px;
}
</style>
