<template>
  <div class="downBg bg-[#F1FFF9] lg:min-h-screen font-dm-sans min-h-screen">
    <div class="font-lexend antialiased">
        <div class="">
            <div class=" sm:px-4 xl:px-40 mx-auto py-6" >
                <a href="/" class=""><img src="/image/logo-perqara.png" alt="logo-perqara" class="mx-auto mb-3"></a>
                <div class="text-center w-full mt-[130px]">
                    <img src="/image/down_icon.png" alt="" class="mx-auto">
                    <div class="text-[24px] font-bold text-[#000000]">Registered <br/>Successfu</div>
                </div>
            </div>
        </div>
        <div class="mt-[130px]">
            <FootBanner />
        </div>
        <TheFooter />
    </div>
  </div>
</template>
<style  scoped>
    .downBg {
        background-image: url("/image/down_bg.png");
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
</style>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterSwiper from '@/components/RegisterSwiper.vue'

const router = useRouter()
const inputEmail = ref('');
const inputPassword = ref('');
const navigateToRegister = () => {
    router.push('/register')
};


</script>