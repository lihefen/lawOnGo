<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 09:39:46
 * @LastEditors: hean
 * @LastEditTime: 2025-06-10 20:09:23
-->
<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-05-08 21:56:32
-->

<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <div class="font-lexend antialiased">
        <div class="bg-[url('/image/register/banner-register.png')] bg-cover bg-[#F1FFF9] lg:min-h-screen">
            <div class="md:max-w-[492px] lg:max-w-[1280px] sm:px-4 xl:px-40 mx-auto py-6">
                <a href="/" class=""><img src="/image/logo-perqara.png" alt="logo-perqara" class="mx-auto mb-3"></a>
                <div>
                    <div class="flex items-center justify-between py-2 px-4 sm:px-0 mb-3"><button @click="onClickBack"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 18.3102C11.0975 18.7008 11.0975 19.3339 10.707 19.7244C10.3164 20.115 9.68327 20.115 9.29274 19.7244L3.49985 13.9315C2.7188 13.1505 2.7188 11.8842 3.49985 11.1031L9.29274 5.31023C9.68327 4.9197 10.3164 4.9197 10.707 5.31023C11.0975 5.70075 11.0975 6.33392 10.707 6.72444L5.91406 11.5173H19.9998C20.5521 11.5173 20.9998 11.965 20.9998 12.5173C20.9998 13.0696 20.5521 13.5173 19.9998 13.5173H5.91406L10.707 18.3102Z" fill="#262E35"></path></svg></button><div class="font-semibold sm:text-base text-sm"> Have a LawOnGo account <a href="/login" class=""><button class="ml-2  h-7 bg-[#F3FBFF] border-1 text-[#333333]  rounded-[18px]  sm:px-4 px-3 sm:text-sm text-xs font-semibold  hover:bg-white hover:text-[#1192E8] transition-colors"> Login </button></a></div></div>

                    <div class="flex lg:flex-row flex-col gap-6">
                        <div class="lg:bg-[#E3F4FD]/80 lg:rounded-2xl lg:px-20 sm:px-0 px-4 lg:max-h-[800px] overflow-hidden flex-1">
                            <RegisterSwiper />
                        </div>

                        <div class="lg:w-[386px] space-y-3">
                            <div id="form-register" class="p-4 md:p-6 rounded-2xl bg-white md:shadow-[0_20px_50px_0_rgba(0,0,0,0.13)]" v-if="!showCode">
                                <p class="text-center text-neutral-800 text-2xl font-bold pb-4"> Account Registration </p>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Full name</label>
                                        <div>
                                            <el-input v-model="inputName" type="text" placeholder="Write your full name" ></el-input>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Mobile phone number</label>
                                        <div>
                                            <el-input v-model="inputPhone"  placeholder="Example: 08123456789"></el-input>
                                            <p class="text-[#647387] font-light mt-1 text-xs"> OTP code will be sent via Whatsapp</p>
                                        </div>
                                    </div>

                                    <div id="border-solid" class="border-t border-lightgrey-5"></div>

                                    <div class="flex gap-2 items-center">
                                        <p class="text-slate-700 text-sm font-semibold"> Data Support </p><button><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.58594 5.5299C7.36699 4.84648 8.63332 4.84648 9.41436 5.5299C10.1954 6.21331 10.1954 7.32135 9.41436 8.00477C9.27842 8.12372 9.12778 8.22197 8.96755 8.29951C8.47043 8.5401 8.00015 8.96505 8.00015 9.51733V10.0173M14 8.51733C14 11.831 11.3137 14.5173 8 14.5173C4.68629 14.5173 2 11.831 2 8.51733C2 5.20363 4.68629 2.51733 8 2.51733C11.3137 2.51733 14 5.20363 14 8.51733ZM8 12.0173H8.005V12.0223H8V12.0173Z" stroke="#3A475B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                                    </div>

                                    <div class="px-3 py-2 bg-[#E7FFF4] text-[#00854B] rounded-lg flex items-center gap-2">
                                        <div><img class="w-4" src="/image/register/anquan_icon.png"></div>
                                        <p class="text-[#00854B] text-xs font-light flex-1"> Your data security is our top priority,this data 
                                            will be used exclusively within LawOnGo services.  </p>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">E-mail</label>
                                        <div>
                                            <el-input v-model="inputEmail" type="email" placeholder="Write your active email"></el-input>
                                        </div>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-slate-700 text-xs">Date of birth</label>
                                        <div>
                                            <el-date-picker
                                                v-model="inputDate"
                                                type="date"
                                                placeholder="Year / Month / Day"
                                                size="large"
                                                class="w-full"
                                            />
                                        </div>
                                    </div>

                                    <!-- 性别 -->
                                    <div class="space-y-2">
                                        <label for="kelamin" class="text-xs text-slate-700">Gender</label>
                                        <div>
                                            <div class="flex w-full">
                                                <!-- 女性 -->
                                                <el-radio-group v-model="inputGender" size="large">
                                                    <el-radio-button label="Male" value="Male" />
                                                    <el-radio-button label="Female" value="Female" />
                                                </el-radio-group>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- 城市 & 地区 -->
                                    <div class="space-y-2">
                                        <p class="text-slate-700 text-xs"> City </p>
                                        <div>
                                            <div class="mt-2 w-full rounded-lg text-black">
                                                <div class="multiselect">
                                                    <el-select
                                                        v-model="inputCity"
                                                        placeholder="Select City"
                                                        size="large"
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
                                    </div>
                                    <p class="text-neutral-800 text-sm text-center"> By registering, I agree to LawOnGo’s<a href="/syarat-ketentuan" class="text-[#04A45E]"> Terms and 
                                        Conditions</a> and <a href="/kebijakan-privasi" class="text-[#04A45E]">Privacy Policy</a>.</p>
                                    <button @click="registerHandle" type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E] rounded-lg font-medium"><span> List </span></button>
                                </div>
                            </div>


                            <div class="lg:w-[386px] h-fit p-4 md:p-6 rounded-2xl bg-white md:shadow-[0_20px_50px_0_rgba(0,0,0,0.13)] flex flex-col justify-between gap-4" v-if="showCode">
                                <div class="space-y-6"><p class="text-2xl text-neutral-800 text-center font-bold"> Masukkan Kode OTP </p>
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
                                    <button  @click="loginRequest" type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 w-full flex justify-center items-center px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg font-medium"><span> Register </span></button>
                                </div>
                            </div>
                            <div class="md:px-6 py-3 px-4 rounded-2xl bg-white">
                                <p class="font-semibold text-center mb-4"> Join Us As Lawyer </p><a href="/login/advokat" class=""><img class="w-full cursor-pointer" src="/image/lawyer/login/banner-login-advokat.png" alt="banner-advokat"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
  </div>
</template>
<style  scoped>
    ::v-deep .el-radio-button.is-active .el-radio-button__original-radio:not(:disabled)+.el-radio-button__inner {
        background: #04A45E;
        border-color: #04A45E;
    }

    ::v-deep .el-radio-button__inner:hover {
        color: #04A45E;
    }



</style>
<style>
.el-date-table td.current:not(.disabled) .el-date-table-cell__text {
        background-color: #04A45E;
    }
.el-month-table td.current:not(.disabled) .el-date-table-cell__text {
        background-color: #04A45E;
    }

    .el-year-table td.current:not(.disabled) .el-date-table-cell__text {
        background-color: #04A45E;

    }
</style>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterSwiper from '@/components/RegisterSwiper.vue'
// 发送验证码
import { sendCode } from '~/services/sendCode';
import { loginCode } from '~/services/loginCode';
import {encryptDataWithRSA}  from '~/utils/encryptDataWithRSA';
import {cities}  from '~/utils/cities';
import { get } from 'lodash';


const router = useRouter()
// 姓名
const inputName = ref('')
// 电话
const inputPhone = ref('')
// 邮件
const inputEmail = ref('')
// 出生日期
const inputDate = ref('')
// 性别
const inputGender = ref('Perempuan')
const inputCity = ref('')
const inputCode = ref('')
const showCode = ref(false)

// 公钥
const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIbWcnQIWROhmlba/fhdJ8XGMLjHC5GC/Mb08ZueFocHLD7WUifTfyxTo0DjTm2KpRTMuUAO5YQbofuHU2kB018CAwEAAQ==';

    


const registerHandle = async () => {
    if(inputName.value == '' || inputPhone.value == '' || inputEmail.value == '' || inputDate.value == '' || inputGender.value == '' || inputCity.value == '') {
        // alert('请输入完整信息')
        ElMessage('Please fill all the fields!')
        return
    }
    const dataText = JSON.stringify({
        channel: 'io.lawongo.app',
        mobile: inputPhone.value,
        appName: 'LawOnGo',
        email:inputEmail.value,
        date:inputDate.value,
        city:inputCity.value,
        sex:inputGender.value
    });
    console.log(dataText)
    const dataBody = encryptDataWithRSA(dataText,publicKey)
    try {
        const res = await sendCode({
            data:dataBody
        })
        // {"code":"00000","msg":"Success!","data":true}
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
    if(inputCode.value == '') {
        ElMessage('Please enter the mobile verification code.')
        return
    }
    const dataText = JSON.stringify({
        aesKey:'rMM+4uHIkgfbhk2qOqPxzw==',
        appName:'LawOnGo',
        channel:'io.lawongo.app',
        mobile:inputPhone.value,
        vcode: inputCode.value,
        email:inputEmail.value,
        date:inputDate.value,
        city:inputCity.value,
        sex:inputGender.value
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
            window.location.href = '/down'
        }
        // {
        //     "code": "00000",
        //     "msg": "Success!",
        //     "data": "bVJGF54S77hgtk/0M5FCowSGXor1rKQrHLlExpIgZ9MALXk2qwLAs5jEZjoga57zQniwhyOVFUsi+6QjlRENnv9fgtUlpfPngtgHhXe9e7rWMPKWq48c35LyN4xNFIrkgR2mIan7KYkpFFeaBx8jNQcWGDDSD1dyh7QfgkO5+Ps2GVxB1QTiExSYbKMsdDBOBkdyXrdb2cAzhhPR9z1uyhzfwmSB8X1NGh/87FsF+go="
        // }

    } catch (error) {
        console.log(error)
    }
}

const navigateToRegister = () => {
    router.push('/login')
};
const onClickBack = () => {
    history.back();
};
</script>