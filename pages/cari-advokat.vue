<template>
  <div class="min-h-screen">
    <main>
      <TheNavbar @login-handler="loginHandler" />
      <div class="bg-[#F6F9FD]">
        <div
          class="container max-w-[1200px] mx-auto xl:p-0 h-full 2xl:h-auto relative"
        >
          <div class="text-black pt-4 md:pt-8 p-4">
            <p class="font-lexend font-bold text-xl lg:text-3xl">
              Debt Consolidation
            </p>
            <h1
              class="text-[#757E8C] font-lexend text-xs lg:text-base font-semibold antialiased"
            >
              Find the best Advoca
            </h1>
          </div>

          <div
            id="wrap-inputSearching"
            class="pb-6 p-4 sticky top-16 z-[5] flex flex-row gap-5 lg:block bg-[#F6F9FD]"
          >
            <div class="basis-5/6">
              <div class="relative">
                <el-input
                  v-model="inputSearch"
                  type="search"
                  placeholder="Search Advocate Name"
                  :prefix-icon="Search"
                  size="large"
                  class=""
                  style="--el-input-border-radius: 30px"
                >
                  <template #suffix>
                    <img
                      alt="icon-search"
                      class="w-6 h-6"
                      src="/image/utils/icon-search.png"
                    />
                  </template>
                </el-input>
              </div>
            </div>
            <!-- <div
              class="relative basis-1/6 bg-white border border-blue-2 lg:hidden rounded-md flex justify-center items-center"
            >
              <button class="w-6 h-6">
                <img
                  alt="icon-filter"
                  class="w-6 h-6"
                  src="/image/utils/icon-filter.png"
                />
              </button>
            </div> -->
          </div>

          <div class="lg:grid lg:grid-cols-3 lg:gap-x-6 px-4">
            <div>
              <div id="wrap-filter-mobile"></div>
              <div class="lg:sticky lg:top-[150px]">
                <div class="hidden lg:block">
                  <div
                    class="z-10 grid place-items-center fixed overflow-auto top-0 left-0 h-full w-full bg-black bg-opacity-50 lg:static lg:overflow-visible lg:place-items-baseline lg:bg-transparent lg:top-auto lg:left-0"
                  >
                    <div
                      class="bg-white min-w-[328px] lg:min-w-[304px] rounded-xl p-3 fixed w-full lg:relative bottom-0 font-lexend antialiased"
                    >
                      <section id="top-filter" class="lg:bg-transparent mb-4">
                        <div class="flex justify-between items-center">
                          <p
                            class="text-black text-xl font-bold flex items-center gap-2"
                          >
                            Filter
                          </p>
                          <button
                            class="text-[#04A45E] font-bold text-xs hidden lg:block"
                          >
                            Reset</button
                          ><button class="lg:hidden">
                            <img src="/image/exit.png" alt="arrow" />
                          </button>
                        </div>
                      </section>
                      <div
                        id="border-solid"
                        class="h-1 border-t border-solid border-lightgrey-2"
                      ></div>
                      <section
                        id="content-filter"
                        class="overflow-y-auto scroll-smooth h-[550px] p-1"
                      >
                        <div class="flex flex-col gap-4">
                          <div id="wrap-status">
                            <div
                              class="text-black antialiased font-medium text-xs leading-6"
                            >
                              <h2>Status</h2>
                            </div>
                            <div class="flex flex-col gap-1.5">
                              <el-radio-group v-model="radioStatus">
                                <el-radio :value="1"> All Status </el-radio>
                                <el-radio :value="2">On Line</el-radio>
                              </el-radio-group>
                            </div>
                          </div>
                          <div
                            id="border-solid"
                            class="h-1 border-t border-solid border-lightgrey-2"
                          ></div>
                          <div id="wrap-kategori">
                            <div
                              class="text-black antialiased font-medium text-xs leading-6"
                            >
                              <h2>Category</h2>
                            </div>
                            <div>
                              <div>
                                <el-radio-group v-model="radioStatus">
                                    <el-radio :value="3"> Lawyer Riza </el-radio>
                                    <el-radio :value="4">Lawyer Farouq</el-radio>
                                    <el-radio :value="5">Lawyer Edo</el-radio>
                                    <el-radio :value="6">Lawyer Rima</el-radio>
                                </el-radio-group>
                              </div>
                            </div>
                          </div>
                          <div
                            id="border-solid"
                            class="h-1 border-t border-solid border-lightgrey-2"
                          ></div>
                          <div id="wrap-province">
                            <div
                              class="text-black antialiased font-medium text-xs leading-6"
                            >
                              <h2>Province</h2>
                            </div>
                            <div>
                              <el-select
                                v-model="inputCity"
                                placeholder="Search Province"
                                size="large"
                                style="--el-border-radius-base: 30px"
                              >
                                <el-option
                                  v-for="item in provinces"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.name"
                                />
                              </el-select>
                            </div>
                          </div>
                          <div id="wrap-kota">
                            <div
                              class="text-black antialiased font-medium text-xs leading-6"
                            >
                              <h2>City</h2>
                            </div>
                            <div>
                              <el-select
                                v-model="inputCity"
                                placeholder="Search City"
                                size="large"
                                style="--el-border-radius-base: 30px"
                              >
                                <el-option
                                  v-for="item in cities"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.name"
                                />
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-2">
              <!-- <CariSwiper /> -->
              <div class="pb-7">
                <div v-for="(item, index) in advokatList" :key="index + 908">
                  <div
                    class="cursor-pointer relative font-lexend min-w-[328px] max-h-[239px] mb-4"
                  >
                    <div
                      class="relative bg-white rounded-xl overflow-hidden border border-[#E7ECF0]"
                    >
                      <div class="relative md:py-3 py-2">
                        <!-- <div class="absolute left-0 top-0 z-[4]">
                          <span class="relative flex h-3 w-3"
                            ><span
                              class="absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-200 animate-ping-slow"
                            ></span
                            ><span
                              class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                            ></span
                          ></span>
                        </div> -->

                        <div class="md:px-3 px-2 items-center flex gap-3">
                          <div class="relative h-fit">
                            <div class="absolute left-2 top-1 z-[4]">
                              <span class="relative flex h-3 w-3"
                                ><span
                                  class="absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-200 animate-ping-slow"
                                ></span
                                ><span
                                  class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                                ></span
                              ></span>
                            </div>
                            <img
                              :src="item.photo"
                              class="min-w-[62px] w-[62px] md:w-[80px] max-w-[80px] min-h-[80px] h-[80px] md:h-[123px] max-h-[123px] rounded-md md:rounded-lg md:ml-1 object-cover border border-[#E7ECF0]"
                            />
                          </div>
                          <div class="flex flex-col gap-1.5 flex-1">
                            <div class="flex items-center h-[40px]">
                              <span
                                class="text-sm md:text-xl font-bold line-clamp-2 leading-4 md:leading-6"
                                >{{ item.name }}</span
                              >
                            </div>
                            <div
                              class="flex gap-1 text-xs md:text-sm items-center"
                            >
                              <div class="flex gap-1 items-center">
                                <img
                                  alt="medal-star"
                                  class="w-4 h-4"
                                  src="/image/landing-page/icon-location-1.png"
                                />
                                <span class="text-[#333333] capitalize"
                                  >{{ item.location }}</span
                                >
                              </div>
                              <div class="border-l h-2/3 border-gray-500"></div>
                              <div class="flex gap-1 flex-1">
                                <img
                                  alt="medal-star"
                                  class="w-4 h-4"
                                  src="/image/landing-page/icon-medal-star.png"
                                />
                                <span class="text-[#333333] truncate"
                                  >Verified by Peradi</span
                                >
                              </div>
                            </div>
                            <div class="flex items-center">
                              <p
                                class="text-xs md:text-sm antialiased text-[#344052] my-auto flex gap-1 items-center !leading-4"
                              >
                                <img
                                  alt="medal-star"
                                  class="w-4 h-4"
                                  src="/image/landing-page/icon-year.png"
                                />6 years
                              </p>
                              <div class="flex items-center">
                                <div
                                  class="h-2 border-l border-gray-400 mx-2"
                                ></div>

                                <img
                                  alt="medal-star"
                                  class="w-4 h-4"
                                  src="/image/landing-page/icon-score.png"
                                /><label
                                  class="my-auto ml-0.5 text-xs md:text-sm text-black"
                                  >4.9</label
                                >
                              </div>
                              <span
                                class="text-xs md:text-sm text-[#757E8C] ml-1"
                                >（29 consultations）</span
                              >
                            </div>
                            <div
                              class="flex items-center justify-between gap-1 md:gap-2"
                            >
                              <div
                                class="flex text-xs md:text-sm justify-between"
                              >
                                <div class="flex gap-1 md:gap-2">
                                  <span
                                    class="text-[#04A45E] bg-[#CBFFE8] text-xs md:text-sm leading-3 w-auto rounded px-1 md:px-2 py-0.5 md:py-1 self-start max-w-[150px] truncate"
                                    v-for="(d,i) in item.marks"
                                    :key="i + 9090"
                                    >{{ d }}</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="min-w-[200px]">
                            <div class="">
                              <div class="flex items-center gap-2">
                                <div
                                  class="flex flex-col gap-0.5 md:gap-1 rounded-lg"
                                >
                                  <div class="text-base text-[#333333]">
                                    Starting from
                                  </div>
                                  <div class="flex gap-1 items-center">
                                    <p
                                      class="text-[#04A45E] font-semibold !leading-5 text-sm md:text-lg"
                                    >
                                      <sup class="text-xs">Rp</sup>40.000
                                    </p>
                                    <p
                                      class="text-xs line-through text-[#9B9B9B]"
                                    >
                                      Rp60.000
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <el-popover
                                    class="box-item"
                                    placement="top"
                                    :width="102"
                                >
                                    <template #reference>
                                        <button
                                            class="font-medium px-4 py-2.5 md:px-6 md:py-3 md:w-[160px] rounded-md md:rounded-[16px] text-xs md:text-base bg-[#04A45E] mt-[10px] text-white"
                                        >
                                        consult now
                                        </button>
                                    </template>
                                    <div class="text-center">
                                        <img src="/image/ewm.png" class="m-auto">
                                    </div>
                                </el-popover>
                              <!-- <button
                                @click="consultHandle"
                                class="font-medium px-4 py-2.5 md:px-6 md:py-3 md:w-[160px] rounded-md md:rounded-[16px] text-xs md:text-base bg-[#04A45E] mt-[10px] text-white"
                              >
                              consult now
                              </button> -->
                            </div>
                          </div>
                        </div>
                        <!-- <div class="border-b my-2 border-[#E7ECF0]"></div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </main>
    <LoginDialog
      v-model:show="showLoginDialog"
      @hide="showLoginDialog = false"
    />

  </div>
</template>

<script setup>
import { ref } from "vue";
// import CariSwiper from "~/components/CariSwiper.vue";


import {provinces}  from '~/utils/provinces';

import {cities}  from '~/utils/cities';

const inputSearch = ref("");
const inputCity = ref("");
const checked1 = ref(false);
const radioStatus = ref(1);
const showLoginDialog = ref(false);
const showProductManagerDialog = ref(false);
const loginHandler = () => {
  console.log("loginHandler");
  showLoginDialog.value = true;
};
const consultHandle = () => {
    showProductManagerDialog.value = true;
}

const provinsiOptions = [
  {
    value: "ACEH",
    label: "ACEH",
  },
  {
    value: "SUMATERA UTARA",
    label: "SUMATERA UTARA",
  },
  {
    value: "SUMATERA BARAT",
    label: "SUMATERA BARAT",
  },
  {
    value: "RIAU",
    label: "RIAU",
  },
  {
    value: "JAMBI",
    label: "JAMBI",
  },
];

// "Consult now
// Riza zafita rizki:Jakata;Corporate law, Contract review and drafting, Venture capital compliance, P2P lending, Acquisitions
// Farouq Habibullah El-Hassan, S.H:Jakata;AML/CFT supervision,Commercial contracts,Company establishment,IPO legal affairs,Legal due diligence,Cross-border legal cooperatio
// Edo:Jakata;Corporate transactions ,Merger & Acquistion, Foreign investment, Data protection
// Rima Gravianty Baskoro,S.H., MPPM., ACIArb：Jakata;International Arbitration, Corporate Law


const advokatList = [
  {
    photo: "/image/photo/photo-01.png",
    name:'Riza Zafita Rizki, S.H.',
    location:'Jakata',
    marks:['Corporate law','Contract review and drafting','Venture capital compliance']
  },
  {
    photo: "/image/photo/photo-02.png",
    name:'Farouq Habibullah El-Hassan, S.H',
    location:'Jakata',
    marks:['AML/CFT','supervision','Commercial contracts']
  },
  {
    photo: "/image/photo/photo-03.png",
    name:'Aditya Edo Primantoro',
    location:'Jakata',
    marks:['Corporate transactions','Merger & Acquistion',' Foreign']
  },
  {
    photo: "/image/photo/photo-04.png",
    name:'Rima Gravianty Baskoro,S.H.,MPPM.,ACIArb.',
    location:'Jakata',
    marks:['International Arbitration',' Corporate Law']
  },
];
</script>

<style scoped>
::v-deep .el-radio__input .el-radio__inner {
    width: 22px;
    height: 22px;
    background: url('/image/utils/el-radio-icon.png') no-repeat center center;
    background-size: 100% 100%;
    border: none;
}
::v-deep .el-radio__input.is-checked .el-radio__inner {
    width: 22px;
    height: 22px;
    background: url('/image/utils/el-radio-active.png') no-repeat center center;
    background-size: 100% 100%;
    border: none;
}
::v-deep .el-radio__input.is-checked+.el-radio__label {
    color: #333;
    font-size: 18px;
}
::v-deep  .el-radio__label {
    color: #333;
    font-size: 18px;
}
::v-deep .el-radio__inner:after {
    display: none;
}
::v-deep .el-radio-group {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;
}
::v-deep .el-collapse-item__header {
  border: none;
}

::v-deep .el-collapse {
  border: none;
}
::v-deep .el-collapse-item__wrap {
  border: none;
}

::v-deep .el-collapse-item__content {
  padding-bottom: 10px;
}
</style>
