<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-11 10:03:08
 * @LastEditors: hean
 * @LastEditTime: 2025-06-15 09:44:31
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen ">
    <main >
        <TheNavbar @loginHandler="loginHandler" />
        <div class="mx-auto w-full bg-[#ffffff]">
            <img
                alt="header"
                class="w-full mx-auto"
                src="/image/career-page/karir_banner.png" />
        </div>
        <div class="mt-[-60px]">
            <CarirComponents></CarirComponents>
        </div>
       
        <div class="mt-16">
            <TheFooter />
        </div>
        
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { ref ,defineEmits} from "vue";
// const containerRef = ref<HTMLElement | null>(null);
const inputSearch = ref('')
const radioStatus = ref(1)
const showLoginDialog = ref(false);
const activeNames = ref(['1'])
const inputHukum =ref('')
const textareaDibutuhkan = ref('')
const showHrDialog = ref(true)
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};
const handleChange = (val) => {
  console.log(val)
}

</script>


<style scoped>
.gap-4 {
    gap: 1rem;
}
::v-deep .el-collapse-item__header {
    border: none;
    font-size: inherit;
}

::v-deep .el-collapse {
    border: none;
}
::v-deep .el-collapse-item__wrap {
    border: none;
    
}

::v-deep .el-collapse-item__content {
    padding-bottom: 10px;
    font-size: inherit;
}

::v-deep .el-anchor {
    background:initial;
    font-size: initial;
}

::v-deep  .el-anchor__link {
    font-size: initial;
}

::v-deep  .el-anchor__marker {
    display: none;
}

</style>
