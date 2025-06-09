<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 15:14:40
 * @LastEditors: hean
 * @LastEditTime: 2025-05-13 00:15:26
-->
<template>
   
    <div id="wrap-login" v-if="state.active">
        <div class="grid place-items-center fixed overflow-auto bg-white top-0 left-0 h-full w-full md:bg-black md:bg-opacity-50 z-50 xl:px-36">
            <section id="top-navigation" class="py-5 px-6 w-full md:px-10 lg:px-0 bg-transparent md:hidden">
                <div class="flex items-center">
                    <button>
                        <img
                            alt="arrow"
                            src="/image/back-arrow.png" />
                    </button>
                    <p class="text-lightblack-1 font-bold text-xl text-center w-full"> Masuk Akun LawOnGo </p>
                </div>
            </section>
            
            <section>
                <div id="wrap-loginComponent">
                    <div id="register" class="w-screen h-screen rounded-t-3xl bg-white md:rounded-3xl md:h-auto md:w-[465px] md:py-4 md:shadow-md">
                        <div class="px-6 lg:px-8 pt-8 hidden md:block"><div class="flex justify-between"><p class="text-black pl-24 font-bold antialiased text-2xl"> Masuk Akun LawOnGo </p>
                        <button @click="hide">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button></div></div>
                        <div class="md:px-8 px-6">
                            <div class="pt-8 lg:pt-10" v-if="!showCode">
                                <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Mobile Number</p>
                                <div class="relative w-full ">
                                    <el-input v-model="inputPhone" type="text" size="large" placeholder="08313302938***" ></el-input>
                                </div>
                                <button class="mt-4 py-2 w-full bg-[#04A45E] text-[#ffffff] text-bold text-lg rounded-md " @click="sendSms"> List </button>
                            </div>

                            <div class="space-y-6" v-if="showCode">
                                <p class="text-2xl text-neutral-800 text-center font-bold" > Masukkan Kode OTP </p>
                                <div class="flex items-center gap-2">
                                    <img src="/image/icon-whatsapp-otp.svg" alt="icon-Whatsapp" class="w-12 h-12">
                                    <p class="text-sm flex-1"> Kami telah mengirimkan 6 angka kode OTP melalui Whatsapp Anda </p>
                                </div>
                                <div class="w-fit bg-[#F3FBFF] rounded-lg px-3 py-1 text-sm text-center mx-auto">{{ inputPhone }}</div>
                                <div class="flex justify-center">
                                    <section>
                                        <div>
                                            <div>
                                                <div class="relative w-full flex">
                                                    <el-input
                                                        v-model="inputCode"
                                                        type="text"
                                                        placeholder=""
                                                        size="large" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <button  @click="loginRequest" type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg font-medium"><span> Login </span></button>
                            </div>
                            <!-- <div class="mt-6">
                                <div>
                                    <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">verification code</p>
                                    <div class="relative w-full flex">
                                        <el-input
                                            v-model="inputCode"
                                            type="text"
                                            placeholder=""
                                            size="large" 
                                        />
                                        <el-button class="ml-2" color="#04A45E" type="primary" size="large" @click="sendSms">send</el-button>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="mt-1.5 flex justify-end"><button class="text-sm text-[#04A45E] text-right cursor-pointer"> Forgot your password? </button></div> -->
                            <div class="mt-6 px-3 py-2 lg:px-2 w-full"><p class="text-black text-center text-base"> Don’t have a LawOnGo account yet? <span class="text-[#04A45E] lg:contents"><button @click="goRegister">Register here</button></span></p></div>
                            <div id="border-line" class="my-4"><div class="border border-[#CED1D6]"></div></div>
                            <div id="login-advokat"><p class="antialiased font-bold mb-2"> Anda Advokat LawOnGo? </p><a href="/login/advokat" class=""><img class="w-full cursor-pointer" src="/image/lawyer/login/banner-login-advokat.png" alt="banner-advokat"></a></div>
                            <div class="pb-8 pt-4"><div class="flex items-start gap-1"><img class="w-3 mt-0.5" src="/image/info-icon.svg"><p class="text-xs text-slate-500 antialiased"> Untuk pengalaman lebih baik, gunakan browser <span class="font-semibold">Google Chrome</span> atau <span class="font-semibold">Firefox</span></p></div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  
</template>
<script setup>
    import { reactive, ref ,watch,defineProps, defineEmits,watchEffect} from 'vue'
    import { get } from 'lodash';
    // 发送验证码
    import { sendCode } from '~/services/sendCode';
    import { loginCode } from '~/services/loginCode';
    import {encryptDataWithRSA}  from '~/utils/encryptDataWithRSA';
    const inputPhone = ref('');
    const inputCode = ref('');
    const showCode = ref(false)
    const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIbWcnQIWROhmlba/fhdJ8XGMLjHC5GC/Mb08ZueFocHLD7WUifTfyxTo0DjTm2KpRTMuUAO5YQbofuHU2kB018CAwEAAQ==';
    const props = defineProps({
        show: {
            type: Boolean,
            default: false,
        }
    });
    const state = reactive({
        active: props.show,
    });
    // 监听 props 中的 show
    watch(
        () => props.show,
        val => {
            state.active = val;
        }
    );

    watch(
        () => state.active,
        val => {
            emit('update:show', val);
        }
    );

    // 传递事件
    const emit = defineEmits(['update:show']);

    const hide = () => {
        emit('update:show', false);
        emit('hide', false);
    };


    const sendSms = async () => {
        if(inputPhone.value == '') {
            ElMessage('Please fill all the fields!')
            return
        }
        const dataText = JSON.stringify({
            channel: 'io.lawongo.app',
            mobile: inputPhone.value,
            appName: 'LawOnGo'
        });
        const dataBody = encryptDataWithRSA(dataText,publicKey)
        try {
            const res = await sendCode({
                data:dataBody
            })
            const msg = get(res,'msg','');
            const code = get(res,'code','-9999');
            if(code != '00000' ) {
                ElMessage(msg)
            }else {
                showCode.value = true
            }
        } catch (error) {
            console.log(error)
        }
    }

    const loginRequest = async () => {
        const dataText = JSON.stringify({
            aesKey:'rMM+4uHIkgfbhk2qOqPxzw==',
            appName:'LawOnGo',
            channel:'io.lawongo.app',
            mobile:inputPhone.value,
            vcode: inputCode.value
        });
        const dataBody = encryptDataWithRSA(dataText,publicKey)
        try {
            const res = await loginCode({
                data:dataBody
            })
            const msg = get(res,'msg','');
            const code = get(res,'code','-9999');
            if(code != '00000' ) {
                ElMessage(msg)
            }else {
                state.active = false;
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error)
        }
    }
    const goRegister = () => {
        state.active = false;
        window.location.href = '/register'
    }
</script>
<style scoped>

</style>
