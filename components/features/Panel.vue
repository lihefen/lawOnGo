<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-25 18:28:37
 * @LastEditors: hean
 * @LastEditTime: 2025-06-06 17:35:44
-->
<template>
  <div class="relative">
    <div class="max-w-[1280px] px-4 xl:px-30 mx-auto">
      <div
        class="p-3 md:p-6 rounded-xl flex flex-col items-center gap-3 md:gap-6"
      >
        <h5 class="text-2xl lg:text-3xl font-bold text-center">
          LawOnGo Legal Services
        </h5>
        <div
          class="flex md:flex-row md:flex-wrap flex-col gap-4 md:gap-6 w-full cursor-pointer"
        >
          <a
            href="/cari-advokat"
            class="bg-gradient-panel p-6 md:flex-1"
          >
            <div class="flex gap-2 items-center m-0">
              <img
                src="/image/landing-page/icon-legal-consultation-colored.png"
                alt="icon-legal-consultation"
                class="w-12 md:w-14 lg:w-[110px]"
              />
              <div>
                <p class="font-bold text-xl lg:text-2xl flex-1">
                  Debt <br />Consolidation
                </p>
                <p class="text-xs sm:text-sm text-[#647387]">
                  AI+Legal Consultation
                </p>
              </div>
            </div>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[100px]"
            />
          </a>
          <a
            href="/cari-advokat"
            class="bg-gradient-panel p-6  md:flex-1 cursor-pointer"
          >

            <div class="flex gap-2 items-center m-0">
              <img
                src="/image/navbar/icon-company-establishment.png"
                alt="icon-company-establishment"
                class="w-12 md:w-14 lg:w-[110px]"
              />
              <div>
                <p class="font-bold text-xl lg:text-2xl flex-1">Debt Relief</p>
                <p class="text-xs sm:text-sm text-[#647387]">
                  Debt relief solution
                </p>
              </div>
            </div>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[100px]"
            />
          </a>
          <a
            href="/cari-advokat"
            class="bg-gradient-panel p-6 md:max-w-[252px]  cursor-pointer"
          >
            <div class="flex gap-2 items-center m-0">
                <img src="/image/utils/other_icon.png" alt="icon-other" class="w-6 md:w-6 lg:w-[40px]">
              <p class="font-bold text-xl lg:text-2xl flex-1">Other</p>
            </div>
            <p class="text-xs sm:text-sm text-[#647387] mt-2">
              Rapid debt reduction
            </p>
            <img
              src="/image/features/polka-dot.svg"
              alt="polka-dot"
              class="absolute right-0 bottom-0 w-[80px]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-gradient-panel {
  position: relative;
  background: linear-gradient(327deg, #e1fff2 0%, #ffffff 100%);
  box-shadow: 0px 38px 28px -36px rgba(15, 169, 66, 0.18),
    inset 1px 1px 0px 0px #5ae8ae;
  border-radius: 30px;
  overflow: hidden;
}
</style>
