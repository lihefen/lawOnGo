<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-10 10:37:24
 * @LastEditors: hean
 * @LastEditTime: 2025-06-17 17:12:46
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
     <div class="w-full h-full relative" v-if="state.active" >
        <div class="grid place-items-center fixed top-0 left-0 w-full h-full bg-black/50 z-50 xl:px-36 ">
            <div class="bg-[linear-gradient(180deg,#D7FFEE_0%,#FFFFFF_20%,#FFFFFF_100%)] shadow-lg absolute overflow-auto w-full xs:w-[520px] max-h-[95%] scrollbar p-4 sm:p-5 md:p-7 bottom-0 xs:bottom-auto rounded-b-none xs:rounded-b-2xl rounded-t-2xl">
                <img src="/image/login_icon.png" class="absolute left-0 top-0 w-[144px] h-[84px]" alt="">
                <button @click="hide" class="absolute right-[20px] top-[20px]"><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=" cursor-pointer"><path data-v-b314d3a0="" d="M13.4099 11.9999L19.7099 5.70994C19.8982 5.52164 20.004 5.26624 20.004 4.99994C20.004 4.73364 19.8982 4.47825 19.7099 4.28994C19.5216 4.10164 19.2662 3.99585 18.9999 3.99585C18.7336 3.99585 18.4782 4.10164 18.2899 4.28994L11.9999 10.5899L5.70994 4.28994C5.52164 4.10164 5.26624 3.99585 4.99994 3.99585C4.73364 3.99585 4.47824 4.10164 4.28994 4.28994C4.10164 4.47825 3.99585 4.73364 3.99585 4.99994C3.99585 5.26624 4.10164 5.52164 4.28994 5.70994L10.5899 11.9999L4.28994 18.2899C4.19621 18.3829 4.12182 18.4935 4.07105 18.6154C4.02028 18.7372 3.99414 18.8679 3.99414 18.9999C3.99414 19.132 4.02028 19.2627 4.07105 19.3845C4.12182 19.5064 4.19621 19.617 4.28994 19.7099C4.3829 19.8037 4.4935 19.8781 4.61536 19.9288C4.73722 19.9796 4.86793 20.0057 4.99994 20.0057C5.13195 20.0057 5.26266 19.9796 5.38452 19.9288C5.50638 19.8781 5.61698 19.8037 5.70994 19.7099L11.9999 13.4099L18.2899 19.7099C18.3829 19.8037 18.4935 19.8781 18.6154 19.9288C18.7372 19.9796 18.8679 20.0057 18.9999 20.0057C19.132 20.0057 19.2627 19.9796 19.3845 19.9288C19.5064 19.8781 19.617 19.8037 19.7099 19.7099C19.8037 19.617 19.8781 19.5064 19.9288 19.3845C19.9796 19.2627 20.0057 19.132 20.0057 18.9999C20.0057 18.8679 19.9796 18.7372 19.9288 18.6154C19.8781 18.4935 19.8037 18.3829 19.7099 18.2899L13.4099 11.9999Z" fill="black"></path></svg></button>
                <div class="flex flex-col gap-4 pt-10">
                    <h5 class="font-bold text-2xl text-center"> Download App to consult  </h5>
                    <div class="pt-8"><img src="/image/ewm.png" alt="" class="m-auto"></div>
                    <div class="flex justify-center mt-1"><img src="/image/shadow.png" alt=""></div>
                    <div class="pt-4 pb-4">
                        <div class="flex gap-4 justify-center">
                            <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" rel="noopener noreferrer" target="_blank">
                                <img class="w-[144px] h-[44px]" src="/image/landing-page/google-logo.png" alt="google icon">
                            </a>
                            <a href="javascript:;"  @click="ElMessage('Anticipate it with expectation')" rel="noopener noreferrer">
                                <img class="w-[144px] h-[44px]" src="/image/landing-page/appstore-logo.png" alt="appstore icon">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div id="downDialog" v-if="state.active">
        <div class="fixed flex items-center justify-center  overflow-auto top-0 left-0  h-full w-full bg-[#000000]/50 z-50 px-36">
            <section>
                <div>
                    <div class="relative rounded-t-3xl bg-white rounded-3xl  w-[465px] py-4 shadow">
                        <a @click="state.active = false" href="javascript:;" class="absolute top-4 right-4" ><img src="/image/close.png" alt=""></a>
                        <div class=" px-8 pt-8  block">
                            <div class="flex justify-center">
                                <p class="text-black font-bold antialiased text-2xl text-center"> Download App to consult </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div> -->
  
</template>
<script setup>
    import { reactive, ref ,watch,defineProps, defineEmits} from 'vue'
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

</script>
<style scoped>

</style>
