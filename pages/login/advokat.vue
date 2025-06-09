<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 15:16:42
 * @LastEditors: hean
 * @LastEditTime: 2025-06-08 16:00:29
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
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold"> Together in Search of Justice </h1>
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

                                    <!-- <div>
                                        <div>
                                            <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Password</p>
                                            <div class="relative w-full  text-black ">
                                                <el-input
                                                    v-model="inputPassword"
                                                    type="password"
                                                    placeholder="Example: Abc1*" 
                                                    show-password
                                                    size="large"
                                                />
                                            </div>
                                        </div>
                                        <div class="flex justify-end mt-2">
                                            <button class="text-sm text-[#04A45E] text-right hover:underline"> Forgot your password? </button>
                                        </div>
                                    </div> -->
                                </div>
                                <button type="button" @click="loginRequest" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg"><span><span>Masuk</span></span></button>
                            </div>
                            <!-- <div class="flex flex-col gap-3">
                                <div class="border-t border-lightgrey-5"></div>
                                <div class="flex items-center justify-center gap-1 sm:text-base text-sm">
                                    <span>Don’t have a LawOnGo account yet?</span><a href="/register/advokat" class="text-[#04A45E] hover:underline"> Register here </a>
                                </div>
                                <div class="text-[#757E8C] sm:text-sm text-xs flex gap-2">
                                    <svg class="sm:w-6 sm:h-6 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#757E8C"></path></svg><span class="flex-1 font-light">For a better experience, use Google Chrome or Firefox browser.</span>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4">
                <div class="relative rounded-xl text-center sm:px-6 sm:py-3.5 p-3 bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)]  sm:w-fit mx-auto mt-12">
                    <div class="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-4 text-cultured">
                        <span class="sm:text-2xl text-xl font-semibold">Also Download Perqara Advokat Application</span>
                        <div class="flex items-center gap-3 flex-1">
                            <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" rel="noopener noreferrer" target="_blank">
                                <img
                                    alt="android-logo"
                                    class="sm:w-36 w-full"
                                    src="/image/landing-page/google-logo.png" />

                            </a>
                            <a 
                                href="javascript:;"
                                @click="ElMessage('敬请期待')"rel="noopener noreferrer" >
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
                    <p class="sm:text-2xl text-xl font-semibold text-center"> Benefits of Consulting at LawOnGo </p>
                    <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-9 gap-3 mt-7">
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-1.png" />
                            <p class="md:text-xl text-base font-semibold">Probono
                                Consultation</p>
                            <p class="md:text-base text-sm">Provide and access Probono consultation easily</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-3.png" />
                            <p class="md:text-xl text-base font-semibold">Getting
                                New Clients</p>
                            <p class="md:text-base text-sm">Getting new clients from various regions in Indonesia</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-3.png" />


                            <p class="md:text-xl text-base font-semibold">Developing
                                Expertise</p>
                            <p class="md:text-base text-sm">Sharpen your skills and connect with various cases</p>
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center md:w-[195px]">
                            <img
                                class="sm:w-[75px] sm:h-[75px] w-14 h-14"
                                src="/image/login-advocate/icon-4.png" />
                            <p class="md:text-xl text-base font-semibold">Expanding
                                Connections</p><p class="md:text-base text-sm">LawOnGo is connected and connected from all over Indonesia</p>
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
                                @click="ElMessage('敬请期待')" 
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