<template>
    <div class="space-y-8">
        <div class="space-y-3 text-black text-center md:px-20">
            <h1 class="md:text-3xl text-2xl font-semibold">
                {{ $t('consultation.why_legal_consultation_at_lawOnGo') }}
            </h1>
        </div>
        <div class="md:hidden mx-auto mb-16">
            <UCarousel ref="mobileCarousel" v-slot="{ item }" loop dots :items="items">
                <img :src="item" class="rounded-lg mx-auto" />
            </UCarousel>
        </div>
        <div class="grid grid-rows-2 grid-cols-2 md:grid-cols-3 grid-flow-col md:gap-y-12 gap-4">
            <div
                :class="
                cn(
                    'bg-[#F5FBFD] bg-[url(/image/features/ai.png)] bg-position-[bottom_-1rem_left] bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333] md:text-base text-sm space-y-1',
                    activeIndex === 0
                    ? 'bg-[#54F9AB] bg-[url(/image/features/ai-active.png)]'
                    : ''
                )
                "
                @click="changeActive('0')"
            >
                <h2 class="md:text-2xl text-base font-bold"> {{ $t('consultation.ai_intelligent_match') }}</h2>
                <p>
                    {{ $t('consultation.ai_intelligent_match_desc') }}
                </p>
            </div>
            <div :class="
                cn(
                'bg-[#F5FBFD] bg-[url(/image/features/multi.png)] bg-position-[bottom_-1rem_left] bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333]  md:text-base text-sm space-y-1',
                activeIndex === 1
                    ? 'bg-[#54F9AB] bg-[url(/image/features/multi-active.png)]'
                    : ''
                )
            "
            @click="changeActive('1')"
            >
                <h2 class="md:text-2xl text-base font-bold">
                    {{ $t('consultation.multi_dimensional') }}
                </h2>
                <p>
                    {{ $t('consultation.multi_dimensional_desc') }}
                </p>
            </div>
            <div class="hidden md:block row-span-2 my-auto">
                <UCarousel
                    ref="carousel"
                    v-slot="{ item }"
                    :loop="true"
                    dots
                    :autoplay="{ delay: 5000 }"
                    :items="items"
                    :ui="{
                    dot: 'size-3 [&.bg-inverted]:bg-[#54F9AB]',
                    }"
                >
                    <img :src="item" width="250" class="rounded-lg mx-auto" />
                </UCarousel>
            </div>
            <div
                :class="
                    cn(
                    'bg-[#F5FBFD] bg-[url(/image/features/professional.png)] bg-position-[bottom_-1rem_left] bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333]  md:text-base text-sm space-y-1',
                    activeIndex === 2
                        ? 'bg-[#54F9AB] bg-[url(/image/features/professional-active.png)]'
                        : ''
                    )
                "
            @click="changeActive('2')"
            >
                <h2 class="md:text-2xl text-base font-bold">
                    {{ $t('consultation.professional_endorsement') }}
                </h2>
                <p>
                    {{ $t('consultation.professional_endorsement_desc') }}
                </p>
            </div>
            <div
                :class="
                    cn(
                    'bg-[#F5FBFD] bg-[url(/image/features/progress.png)] bg-position-[bottom_-1rem_left] bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333]  md:text-base text-sm space-y-1',
                    activeIndex === 3
                        ? 'bg-[#54F9AB] bg-[url(/image/features/progress-active.png)]'
                        : ''
                    )
                "
                @click="changeActive('3')"
            >
                <h2 class="md:text-2xl text-base font-bold">{{ $t('consultation.visual_progress_tracking') }}</h2>
                <p>
                    {{ $t('consultation.visual_progress_tracking_desc') }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { cn } from "~/utils";
const { locales, locale, setLocaleCookie,t } = useI18n()
const items = [
  "/image/landing-page/phone-first.png",
  "/image/landing-page/phone-second.png",
  "/image/landing-page/phone-third.png",
  "/image/landing-page/phone-four.png",
];

const activeIndex = ref(0);
const carousel = useTemplateRef("carousel");
const mobileCarousel = useTemplateRef("mobileCarousel");


function logSlidesInViewOnce(emblaApi) {
  const indexs = emblaApi.slidesInView();
  if (indexs.length === 1) {
    activeIndex.value = indexs[0];
  }
}

const changeActive = (value) => {
    console.log(mobileCarousel.value.emblaApi.scrollTo)
    // mobileCarousel.value.emblaApi.scrollTo(Number(value));
};

onMounted(() => {
  const emblaApi = mobileCarousel.value.emblaApi;
  if (emblaApi) {
    emblaApi.on("slidesInView", logSlidesInViewOnce);
  }
});

onMounted(() => {
  const emblaApi = carousel.value.emblaApi;
  if (emblaApi) {
    emblaApi.on("slidesInView", logSlidesInViewOnce);
  }
});
</script>
