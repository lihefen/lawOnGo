<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-31 20:10:51
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:44:09
-->
<template>
    <section id="career" class="md:mt-16 mt-8">
        <div class="max-w-[1200px] mx-auto">
            <div class="flex flex-col gap-6  md:p-8 p-4">
                <h1 class="text-[#333333] text-2xl sm:text-4xl font-semibold text-center"> Career</h1>


                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                    <div class="flex flex-col gap-2 sm:w-1/3" >
                        <h2 class="text-base md:text-2xl font-semibold text-[#333333]" >Backend Engineer</h2>
                        <div class="flex gap-1 items-center">
                            <img
                            alt="medal-star"
                            class="w-4 h-4"
                            src="/image/landing-page/icon-location-1.png"
                            />
                            <p class="text-base text-[#3A475B]" >Jakarta</p>
                        </div>
                        
                    </div>
                    
                    <button @click="openHr('jd1')" type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg !px-7 sm:self-center" ><span>View Careers</span></button>
                </div>


                <div class="bg-[#FDFEFF] rounded-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:px-8 sm:p-4 md:py-4 p-3 flex sm:flex-row flex-col md:gap-9 gap-3 md:items-center justify-between">
                    <div class="flex flex-col gap-2 sm:w-1/3" >
                        <h2 class="text-base md:text-2xl font-semibold text-[#333333]" >Front End Engineer</h2>
                        <div class="flex gap-1 items-center">
                            <img
                            alt="medal-star"
                            class="w-4 h-4"
                            src="/image/landing-page/icon-location-1.png"
                            />
                            <p class="text-base text-[#3A475B]" >Jakarta</p>
                        </div>
                        
                    </div>

                    
                    <button @click="openHr('jd2')"  type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80  rounded-lg !px-7 sm:self-center" ><span>View Careers</span> </button>
                </div>
            </div>
        </div>

        <HrDialog  
            v-model:show="showHrDialog"
            :jd="state.jd"
            @hide="showProductManagerDialog = false">
        </HrDialog>
    </section>
</template>

<script setup>
    import { reactive} from 'vue'
    const state = reactive({
        jd: 'jd1'
    });
    const showHrDialog = ref(false);

    const openHr = (jd) => {
        state.jd = jd;
        showHrDialog.value = true;
    }

</script>
