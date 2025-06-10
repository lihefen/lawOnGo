<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-06-10 10:37:24
 * @LastEditors: hean
 * @LastEditTime: 2025-06-10 11:13:14
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
        <div class="fixed flex items-center justify-center  overflow-auto top-0 left-0  h-full w-full bg-[#000000]/50 z-50 px-36">
            <section>
                <div>
                    <div class="relative rounded-t-3xl bg-white rounded-3xl  w-[465px] py-4 shadow">
                        <a @click="state.active = false" href="javascript:;" class="absolute top-4 right-4" ><img src="/image/close.png" alt=""></a>
                        <div class=" px-8 pt-8  block">
                            <div class="flex justify-center">
                                <p class="text-black font-bold antialiased text-2xl text-center"> Download App to consult </p>
                            </div>
                            <div class="pt-8"><img src="/image/ewm.png" alt="" class="m-auto"></div>
                            <div class="pt-6">
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
            </section>
        </div>
    </div>
  
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
