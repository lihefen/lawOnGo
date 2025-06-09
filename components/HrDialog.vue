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
                            <h2>Primary Job Role :</h2>
                            <div>
                               {{ hrJd[jd].jobRole }}
                            </div>
                            <h2 class="font-semibold" >Responsibilities</h2>
                            <ul class="list-disc pl-8 text-sm leading-6 font-light" >
                               <li v-for="(item,index) in hrJd[jd].responsibilities " :key="index + 10">{{ item }}</li> 
                            </ul>
                            <h2 class="font-semibold">Requirements</h2>
                            <ul class="list-disc pl-8 text-sm leading-6 font-light">
                                <li v-for="(item,index) in hrJd[jd].requirements " :key="index + 900">{{ item }}</li> 
                            </ul>
                        </div>
                    </div>  
                    <div class="flex items-center gap-3" >
                        <button @click="state.active = false" type="button" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg ring-1 ring-inset ring-current text-[#04A45E] hover:bg-blue-2/10 focus-visible:ring-2 focus-visible:ring-blue-2 rounded-lg flex-1" ><span>Back</span></button>

                        <a href="https://forms.gle/3xR8L7ufjm7nGB6P9" rel="noopener noreferrer" class="focus:outline-none focus:outline-0 focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 flex-shrink-0 transition-all ease-in-out duration-300 px-4.5 py-2.5 md:text-lg bg-[#04A45E] text-white hover:bg-[#04A45E]/80 rounded-lg flex-1 text-center" >Choose a Carrer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>
<script setup>
    import { reactive, ref ,watch,defineProps, defineEmits} from 'vue'
    import {hrJd}  from '~/utils/hrJd';

    const props = defineProps({
        show: {
            type: Boolean,
            default: false,
        },
        jd: {
            type: String,
            default: 'jd1'
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
