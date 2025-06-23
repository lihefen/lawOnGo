<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 15:14:40
 * @LastEditors: hean
 * @LastEditTime: 2025-06-17 16:59:07
-->
<template>
   
    <div id="wrap-login" v-if="state.active">
        <div class="grid place-items-center fixed overflow-auto bg-white top-0 left-0 h-full w-full md:bg-black md:bg-opacity-50 z-50 xl:px-36">
            <section id="top-navigation" class="py-5 px-6 w-full md:px-10 lg:px-0 bg-transparent md:hidden">
                <div class="flex items-center">
                    <button >
                        <img
                            alt="arrow"
                            src="/image/back-arrow.png" />
                    </button>
                    <p class="text-lightblack-1 font-bold text-xl text-center w-full"> Masuk Akun LawOnGo </p>
                </div>
            </section>
            
            <section>
                <div id="wrap-loginComponent">
                    <div id="register" class="relative w-screen h-screen rounded-t-3xl bg-[linear-gradient(180deg,#D7FFEE_0%,#FFFFFF_20%,#FFFFFF_100%)] md:rounded-3xl md:h-auto md:w-[465px] md:py-4 md:shadow-md">
                        <div class="hidden md:block">
                            <img src="/image/login_icon.png" class="absolute left-0 top-0 w-[144px] h-[84px]" alt="">
                            <button @click="hide" class="absolute right-[20px] top-[20px] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        
                        <div class="relative px-6 lg:px-8  hidden md:block">
                            <div class="relative text-center pt-8">
                                <p class="text-black font-bold antialiased text-2xl">{{ $t('login.login_lawOnGo_accoun') }}</p>
                            </div>
                        </div>
                        <div class="md:px-8 px-6">
                                    <div class="pt-8 lg:pt-10" v-if="!showCode">
                                        <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Mobile Number</p>
                                        <div class="relative w-full ">
                                            <el-input v-model="inputPhone" type="text" size="large" placeholder="08313302938***" ></el-input>
                                        </div>
                                        <button class="mt-4 py-2 w-full bg-[#04A45E] text-[#ffffff] text-bold text-lg rounded-[12px] " @click="sendSms"> List </button>
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
                                
                                    <div class="mt-6 px-3 py-2 lg:px-2 w-full">
                                        <p class="text-black text-center text-base"> Don’t have a LawOnGo account yet? <span class="text-[#04A45E] lg:contents"><button @click="goRegister">Register here</button></span></p>
                                    </div>
                                    <div id="border-line" class="my-4"><div class="border border-dashed  border-[0.5px] border-[#CED1D6]"></div>
                                </div>
                                <div id="login-advokat">
                                    <p class="antialiased font-bold mb-2"> Are you a LawOnGo Advocate? </p><a href="/login/advokat" class=""><img class="w-full cursor-pointer" src="/image/lawyer/login/banner-login-advokat.png" alt="banner-advokat"></a>
                                </div>
                                <div class="pb-8 pt-4">
                                    <div class="flex items-start gap-1">
                                        <img class="w-3 mt-0.5" src="/image/info-icon.svg">
                                        <p class="text-xs text-slate-500 antialiased">For a better experience, use  <span class="font-semibold">Google Chrome</span>  or <span class="font-semibold">Firefox</span> browser.</p>
                                    </div>
                                </div>
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
    import publicKey  from '~/utils/publicKey';

    
    const inputPhone = ref('');
    const inputCode = ref('');
    const showCode = ref(false)
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
