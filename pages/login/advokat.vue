<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 15:16:42
 * @LastEditors: hean
 * @LastEditTime: 2025-06-23 09:59:06
-->
<template>
    <div class="bg-cultured font-dm-sans min-h-screen">
        <div class="relative bg-[#001F16] min-h-screen">
            <div class="absolute top-0 left-0 w-full z-0 ease-in-out transition-opacity">
                <img
                    class="w-full h-auto"
                    src="/image/login-advocate/img-2.png" />
            </div>
            <a aria-current="page" href="/login/advokat" class="router-link-active router-link-exact-active">
                <img
                    class="absolute z-10 top-4 left-1/2 transform -translate-x-1/2 sm:w-[200px] w-[155px]" 
                    src="/image/logo-perqara-advocate-white.png" />
            </a>
            <div class="relative w-full md:w-[632px] mx-auto pt-[169px] md:pt-[241px] md:px-0 px-4">
                <div class="grid gap-3 text-cultured text-center">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold">{{ $t('login.together_in_search') }}</h1>
                    <p class="font-medium sm:text-base text-sm">Provide legal consultation services from anywhere and
                         <br>anytime according to your field of expertise</p>
                </div>
                <div class="mt-8 sm:mx-[90px]">
                    <div class="bg-white rounded-2xl sm:p-8 p-4 sm:h-[530px] h-[500px] overflow-hidden">
                        <div class="flex flex-col justify-between h-full">
                            <div class="flex flex-col sm:gap-6 gap-4 flex-1">
                                <h5 class="text-xl sm:text-2xl font-semibold text-center"> Login to LawOnGo account</h5>
                                <div>
                                    <div>
                                        <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Full Name</p>
                                        <div class="relative w-full  rounded-lg text-black ">
                                            <el-input v-model="inputName" type="text" placeholder="Write your full name" size="large" ></el-input>
                                        </div>
                                    </div>
                                   <div>
                                        <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Mobile Number</p>
                                        <div class="relative w-full  rounded-lg text-black ">
                                            <el-input v-model="inputPhone" type="text" placeholder="08313302938***" size="large" ></el-input>
                                        </div>
                                   </div>
                                  
                                </div>
                                <button type="button" @click="loginRequest" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg"><span><span>Login</span></span></button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <div class="relative rounded-xl text-center sm:px-6 sm:py-3.5 p-3 bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)]  sm:w-fit mx-auto mt-12">
                    <div class="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-4 text-cultured">
                        <span class="sm:text-2xl text-xl font-semibold">{{ $t('login.also_download_lawOnGo') }}</span>
                        <div class="flex items-center gap-3 flex-1">
                            <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" rel="noopener noreferrer" target="_blank">
                                <img
                                    alt="android-logo"
                                    class="sm:w-36 w-full"
                                    src="/image/landing-page/google-logo.png" />

                            </a>
                            <a 
                                href="javascript:;"
                                @click="ElMessage('Anticipate it with expectation')"rel="noopener noreferrer" >
                                <img
                                    alt="appstore-logo"
                                    class="sm:w-36 w-full"
                                    src="/image/landing-page/appstore-logo.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <div class="relative rounded-[30px] md:mt-10 mt-8  bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)] md:py-8 md:px-9 p-4 shadow-[0px_0px_16.7px_0px_#00000080] text-white w-fit mx-auto">
                    <p class="sm:text-2xl text-xl font-semibold text-center">{{ $t('login.benefits_of_consulting') }}</p>
                    <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-9 gap-3 mt-7">
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-1.png" />
                            <p class="md:text-xl text-base font-semibold">{{ $t('login.probono_consultation') }}</p>
                            <p class="md:text-base text-sm">{{ $t('login.provide_and_access') }}</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-3.png" />
                            <p class="md:text-xl text-base font-semibold">{{ $t('login.getting_new_clients') }}</p>
                            <p class="md:text-base text-sm">{{ $t('login.getting_new_clients_from') }}</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-3.png" />


                            <p class="md:text-xl text-base font-semibold">{{ $t('login.developing_expertise') }}</p>
                            <p class="md:text-base text-sm">{{ $t('login.sharpen_your_skills') }}</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-4.png" />
                            <p class="md:text-xl text-base font-semibold">{{ $t('login.expanding_connections') }}</p><p class="md:text-base text-sm">{{ $t('login.lawOnGo_is_connected') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-[#005F38] mt-20">
                <div class="container max-w-[1280px] xl:px-40 mx-auto sm:py-6 p-4 flex sm:flex-row flex-col items-center justify-between gap-y-8 sm:text-left text-center">
                    <div>
                        <img
                            class="w-32 mx-auto sm:mx-0"
                            src="/image/logo-perqara-advocate-white.png" />

                        <div class="grid gap-1 text-sm leading-3 mt-1.5 text-white">
                            <span>PT Solusi Teknologi.Hak Cipta Dilindingi</span><span>© 2025 LawOnGo. All Rights Reserved.</span>
                        </div>
                    </div>
                    <div class="text-sm text-white">
                        <span>Download LowOnGo Advocate</span>
                        <div class="flex items-center gap-4 mt-2">
                            <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" rel="noopener noreferrer" target="_blank">
                                <img
                                    alt="android-logo"
                                    class="sm:w-36 w-full"
                                    src="/image/landing-page/google-logo.png" />

                            </a>
                            <a 
                              href="javascript:;"
                                @click="ElMessage('Anticipate it with expectation')" 
                rel="noopener noreferrer">
                                <img
                                    alt="appstore-logo"
                                    class="sm:w-36 w-full"
                                    src="/image/landing-page/appstore-logo.png" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { officialInfoLawyer } from '~/services/officialInfoLawyer';

const router = useRouter()
const inputPhone = ref('');
const inputName = ref('');
const navigateToRegister = () => {
    router.push('/register')
};
const loginRequest = async () => {
    if(inputPhone.value == '' || inputName.value == '') {
        ElMessage('Please fill all the fields!')
        return
    }
    const dataBody = {
        fullName:inputName.value,
        mobileNumber:inputPhone.value,
    }
    try {
        const res = await officialInfoLawyer({
            data:dataBody
        })
        console.log(res)
        if(res != 'success' ) {
            ElMessage('System error, please try again later.')
            
        }else {
            window.location.href = '/'
        }

    } catch (error) {
        console.log(error)
    }
}

</script>