<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-09 11:56:36
 * @LastEditors: hean
 * @LastEditTime: 2025-06-09 12:57:48
-->
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
            <div class="bg-[linear-gradient(180deg,#D7FFEE_0%,#FFFFFF_23%,#FFFFFF_100%)] relative shadow-lg overflow-hidden w-full xs:w-[95%] md:w-[650px] max-h-[95%] sm:max-h-[80%] max-h-[95%]  p-0 bottom-0 xs:bottom-auto xs:rounded-b-2xl rounded-t-2xl rounded-b-2xl">
                <a href="javascript:;" class="closeBtn" @click="state.active = false"></a>
                <div class="px-4.5 pt-[48px] pb-[36px] flex flex-col gap-3 relative">
                    <div class="space-y-2">
                        <h1 class="text-2xl uppercase font-bold text-neutral-800">Product Manager</h1>
                        <div class="flex items-center flex-wrap gap-2 justify-between">
                            <div class="flex items-center gap-3">
                                <span >Jakarta</span>
                                <div class="flex items-center gap-2">
                                    <span class="relative flex items-center justify-center w-4.5 h-4.5">
                                        <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]"></span>
                                    </span>
                                    <span >Manager</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="relative flex items-center justify-center w-4.5 h-4.5">
                                        <span class="absolute inline-flex h-full w-full rounded-full bg-[#E7ECF0]"></span>
                                        <span  class="relative inline-flex rounded-full h-3 w-3 bg-[#55707A]"></span>
                                    </span>
                                    <span >Product</span>
                                </div>
                            </div>
                            <div  class="flex items-center gap-2">
                                <span class="text-sm text-[#7C8DA1]">Bagikan:</span>
                                <button ><img src="/image/icon-facebook.svg" alt="icon-facebook"></button>
                                <button ><img  src="/image/icon-linkedin.svg" alt="icon-linkedin"></button>
                                <button ><img  src="/image/icon-x.svg" alt="icon-x"></button>
                                <button ><img  src="/image/icon-whatsapp.svg" alt="icon-whatsapp"></button>
                                <button ><img  src="/image/icon-share-link.svg" alt="icon-share-link"></button>
                            </div>
                        </div>
                    </div>
                    <div class="max-h-[500px] sm:max-h-[400px] max-h-[500px] min-h-[360px] overflow-auto  overflow-y-auto  scrollbar">
                        <div class="flex flex-col gap-2" >
                            <h2 class="font-semibold" >·Responsibilities</h2>
                            <ul class="list-disc pl-8 text-sm leading-6 font-light" ><!--[-->
                                <li>-Product Development</li>
                                <li>-Relaying feedback from our lawyer partners to our internal teams</li>
                                <li>-Proposing product features that enhance the value and experience of our clients
                                </li>
                                <li>-Creating tools and UI/UX that will streamline our registration and onboarding process, as well as reporting processes for internal usage
                                </li>
                                <li>-Proactively identify and resolve strategic issues that may impair the team’s ability to meet strategic, financial, and technical goals
                                </li>
                                <li>-Own the communication and coordination of requirements to the business, design and development teams. Ensure that the user stories match the overall business requirements.
                                </li>
                                <li>
                                    -Measure and analyse existing products and business models for opportunities to innovate and improve, providing additional benefits to developers and customers.
                            </li>
                            </ul>
                        </div>
                    </div>  
                    <div class="flex items-center gap-3" >
                        <button type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg ring-1 ring-inset ring-current text-[#04A45E] hover:bg-blue-2/10 focus-visible:ring-2 focus-visible:ring-blue-2 rounded-lg flex-1" ><span><!--[--> Kembali <!--]--></span></button>




                        
                        <a href="https://forms.gle/3xR8L7ufjm7nGB6P9" rel="noopener noreferrer" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg flex-1 text-center" ><!--[--> Pilih Karir <!--]--></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>
<script setup>
    import { reactive, ref ,watch,defineProps, defineEmits,watchEffect} from 'vue'
    // 发送验证码
    import { sendCode } from '~/services/sendCode';
    import { loginCode } from '~/services/loginCode';
    import {encryptDataWithRSA}  from '~/utils/encryptDataWithRSA';
    const inputPhone = ref('');
    const inputCode = ref('');
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
        } catch (error) {
            console.log(error)
        }
        if(inputName.value == '' || inputPhone.value == '' || inputEmail.value == '' || inputDate.value == '' || inputGender.value == '' || inputCity.value == '') {
            // alert('请输入完整信息')
            return
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
        } catch (error) {
            console.log(error)
        }
    }
</script>
<style scoped>
    .closeBtn {
        position: absolute;
        width: 60px;
        height: 60px;
        background: url(/image/close.png) no-repeat center center;
        background-size: 100% 100%;
        right: 10px;
        top:10px;
        z-index: 9;
    }
</style>
