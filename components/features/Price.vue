<template>
  <div class="antialiased">
    <p class="text-3xl font-bold text-black text-center mb-6">
      {{ $t('consultationPrice.consultation_price') }}
    </p>
    <section
      class="justify-center items-center flex-col flex lg:flex-row lg:gap-10"
    >
      <div
        class="bg-linear-[180deg,#D2FFEB,#E2FFEF] rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center mb-6">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-probono-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">{{ $t('consultationPrice.non_rofit_service') }}</p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="text-2xl font-bold text-[#00673A] sm:text-[32px]">              
                <p class="font-bold antialiased sm:text-xl">{{ $t('consultationPrice.free') }}</p>
            </p>
            <p class="text-[#00673A] font-semibold antialiased">
                {{ $t('consultationPrice.minutes_consultat') }}
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#666666] leading-4 text-center h-10 mt-6"
          >
          {{ $t('consultationPrice.get_free_legal_service') }}
          </p>
        </div>
        <button
          type="button"
          class="flex-shrink-0 px-4.5 py-2.5 md:text-lg bg-linear-[264deg,#00D075,#069456] text-white rounded-2xl w-full text-center mt-6"
          @click="showDownDialog = true"
        >
          <span>{{ $t('consultationPrice.apply_pro_bono') }}</span>
        </button>
      </div>
      <div
        class="bg-linear-[180deg,#D2FFEB,#E2FFEF] rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center mb-4">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-chat-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">{{ $t('consultationPrice.livechat_serivice') }}</p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="font-bold relative text-[#00673A]">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">50.000</span>
            </p>
            <p class="text-[#00673A] font-semibold antialiased">
              30 {{ $t('consultationPrice.minutes') }}
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#666666] leading-4 text-center h-10 mt-6"
          >
          {{ $t('consultationPrice.the_ideal_solution') }}
          </p>
        </div>
        <button
          type="button"
          class="flex-shrink-0 px-4.5 py-2.5 md:text-lg bg-linear-[264deg,#00D075,#069456] text-white rounded-2xl w-full text-center mt-6"
          @click="showDownDialog = true"
        >
          <span>{{ $t('consultationPrice.consult_now') }}</span>
        </button>
      </div>
      <div
        class="three-card-bg rounded-[24px] p-8 mt-4 w-[340px] h-auto flex-1 relative overflow-visible"
      >
        <div id="content-payment">
          <div class="flex justify-between sm:justify-center items-center mb-6">
            <div
              id="wrap-title"
              class="flex sm:flex-col gap-2 items-center -mt-12"
            >
              <img
                src="/image/utils/icon-fullpackage-payment.png"
                alt="icon"
                class="w-20"
              />
              <p class="font-bold antialiased sm:text-xl">
                {{ $t('consultationPrice.chat_voice_vedio_call') }}
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-[0px_-1px_1px_1px_#00B267] rounded-full p-2 flex flex-col justify-center items-center w-full my-2"
          >
            <p class="font-bold relative text-[#00673A]">
              <span class="absolute top-0 left-0">Rp</span>
              <span class="text-2xl sm:text-[32px] ml-6">100.000</span>
            </p>
            <p class="text-[#00673A] font-semibold antialiased">
              60{{ $t('consultationPrice.minutes') }}
            </p>
          </div>
          <p
            class="text-xs sm:text-base text-[#556987] leading-4 text-center h-10 mt-4"
          >
          {{ $t('consultationPrice.in_depth_discussion') }}
          </p>
        </div>
        <button
         class="flex-shrink-0 md:text-lg bg-linear-[259deg,#00D98A,#00E510_10%,#00BB4D] text-white rounded-2xl w-[240px] h-[60px] text-center mt-6"
          type="button"
          @click="showDownDialog = true"
        >
          <span>Consult Now</span>
        </button>
      </div>
    </section>

    <DownDialog  v-model:show="showDownDialog" @hide="showDownDialog = false"></DownDialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()
const showDownDialog = ref(false);
// 每个卡片独立展开/收起状态
const isOpen1 = ref(true); // 默认展开，可改为false
const isOpen2 = ref(true);
const isOpen3 = ref(true);

// 1024px 以上全部展开
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen1.value = true;
    isOpen2.value = true;
    isOpen3.value = true;
  } else {
    isOpen1.value = false;
    isOpen2.value = false;
    isOpen3.value = true;
  }
};

// 监听窗口大小变化
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
.three-card-bg {
  background: url("/image/features/card-bg.png") no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
