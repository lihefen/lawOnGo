<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-29 20:45:10
 * @LastEditors: hean
 * @LastEditTime: 2025-06-18 18:09:38
-->
<template>
  <div>
    <Hero />
    <Trust />
    <Company />
    <Jour />
    <Members />
    <Life />
    <div class="mt-12 md:mt-[116px]">
        <FootBanner />
    </div>
    
  </div>
</template>
<script setup>
import Hero from "./Hero.vue";
import Trust from "./Trust.vue";
import Company from "./Company.vue";
import Jour from "./Jour.vue";
import Members from "./Members.vue";
import Life from "./Life.vue";
import FootBanner from "../FootBanner.vue";
</script>
