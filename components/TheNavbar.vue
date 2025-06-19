<template>
  <div
    class="relative w-full z-99999 py-2.5 md:py-0 px-4 h-16 transition-all duration-300 ease-in-out sticky top-0 z-40 bg-white"
  >
    <div class="max-w-[1280px] mx-auto xl:px-[40px]">
      <div class="flex justify-between gap-2 items-center">
        <!-- Logo and mobile menu trigger -->
        <div class="flex items-center gap-6">
            <div class="flex items-center gap-3">
                <div  class="md:hidden">
                    <button
                        aria-label="Toggle menu"
                        @click="toggleMobileMenu"
                    >
                        <svg
                        v-if="isMobileMenuOpen"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="#1e40af"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <svg
                        v-else
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </button>
                </div>
                
                <NuxtLink to="/">
                    <img src="/image/topbar_logo.svg"  alt="LawOnGo Logo" />
                </NuxtLink>
            </div>
            <!-- Desktop Navigation Menu -->
            <div class="hidden md:flex items-center gap-1">
                <div
                v-for="item in menuItems"
                :key="item.id"
                class="relative"
                @mouseenter="openDropdown(item.id)"
                @mouseleave="closeDropdown"
                >
                <NuxtLink
                    v-if="!item.hasDropdown"
                    :to="{path:item.path}"
                    class="flex items-center h-16 px-2 font-medium text-sm text-[#344052]"
                >
                    {{ item.title }}
                </NuxtLink>

                <a
                    v-else
                    href="#"
                    class="flex items-center h-16 px-2 font-medium text-sm text-black"
                >
                    {{ item.title }}
                    <ChevronDown
                    :class="[
                        'chevron-rotate',
                        { 'rotate-chevron': openDropdownId === item.id },
                    ]"
                    class="ml-1"
                    :size="18"
                    />
                </a>

                <transition name="dropdown-fade-slide">
                    <div
                    v-if="item.hasDropdown && openDropdownId === item.id"
                    class="absolute top-2/3 left-0 w-80 bg-white rounded-lg shadow-lg p-2 z-50"
                    >
                        <div class="grid gap-4">
                            <NuxtLink 
                                v-for="service in serviceItems"
                                :key="service.id"
                                :to="{path:service.path}"
                                class="flex gap-2 p-2 hover:bg-gray-50 rounded-lg items-center">
                                    <img
                                        :src="service.icon"
                                        width="32"
                                        height="32"
                                        alt="Service Icon"
                                    />
                                    <div class="flex-1">
                                        <div class="flex items-center">
                                        <h3 class="font-semibold text-perqara-text text-sm">
                                            {{ service.title }}
                                        </h3>
                                        </div>
                                        <p class="text-perqara-gray text-xs mt-1">
                                        {{ service.description }}
                                        </p>
                                    </div>
                                    <div v-if="service.isNew" class="">
                                        <NewBadge />
                                    </div>
                            </NuxtLink>
                        </div>
                    </div>
                </transition>
                </div>
            </div>
        </div>

        <div class="flex items-center gap-3">
            <div class="flex rounded-lg items-center">
                <button
                    class="border-2 border-[#04A45E] bg-white text-[#04A45E]  py-1.5 px-3 rounded-full leading-5"
                    @click="loginHandler"
                >
                {{ $t('login.logo_on') }}
                </button>
            
            </div>
            <button
                class="border-2  bg-[#04A45E] border-[#04A45E] text-white  py-1.5 px-3 rounded-full leading-5"
                @click="navigateToRegister"
            >
            {{ $t('register.register') }}
            </button>

            <a @click="checkLang" href="javascript:;" class=" w-[66px] h-[30px]"  :class=" locale == 'en' ? 'enBtn' : 'idBtn'"></a>
        </div>
        
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobile && isMobileMenuOpen"
        class="absolute top-0 left-0 pt-16 w-full transition-all ease-in-out duration-500 z-[-1]"
      >
        <div
          class="px-4 bg-white border-t border-[#e5e7eb] flex flex-col rounded-b-xl shadow-lg overflow-y-auto max-h-[calc(100vh-64px)]"
        >
          <div v-for="item in menuItems" :key="item.id">
            <div
              v-if="item.hasDropdown"
              class="py-4 flex items-center justify-between"
              @click="toggleDropdown"
            >
              <p class="text-base font-semibold text-black">
                {{ item.title }}
              </p>
              <ChevronDown
                :class="['chevron-rotate', { 'rotate-180': isDropdownOpen }]"
                class="transition-transform"
                :size="20"
              />
            </div>

            <NuxtLink
              v-else
             :to="{path:item.path}"
              class="block py-4 text-base font-semibold text-[#344052]"
            >
              {{ item.title }}
            </NuxtLink>

            <div v-if="item.hasDropdown && isDropdownOpen" class="py-2">
                <NuxtLink 
                    v-for="service in serviceItems"
                    :key="service.id"
                    :to="{path:service.path}"
                    class="flex items-center gap-2 p-3">
                        <div>
                            <img
                                :src="service.icon"
                                width="32"
                                height="32"
                                alt="Service Icon"
                            />
                            </div>
                            <div class="flex-1">
                            <div class="flex items-center">
                                <h3 class="font-semibold text-perqara-text text-sm">
                                {{ service.title }}
                                </h3>
                            </div>
                            <p class="text-perqara-gray text-xs mt-1">
                                {{ service.description }}
                            </p>
                            </div>
                            <div v-if="service.isNew">
                            <NewBadge />
                        </div>
                </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted,watchEffect } from "vue";
import { useRouter } from "vue-router";
import NewBadge from "./NewBadge.vue";
import ChevronDown from "./ChevronDown.vue";
const { locales, locale, setLocaleCookie,t } = useI18n()
const router = useRouter();
// 使用ref存储响应式服务项
const serviceItems = ref([])

// 原始菜单项配置（不含翻译）
const menuConfig = [
  {
    id: 1,
    key: 'legalServices.legal_services',
    path: "javascript:;",
    hasDropdown: true,
  },
  {
    id: 2,
    key: 'aboutUs.about_us',
    path: "about",
  },
  {
    id: 3,
    key: 'Faq',
    path: "faq",
  },
]

// 使用ref存储菜单项，使其具有响应性
const menuItems = ref([])
// 初始化菜单
const initMenuItems = () => {
  menuItems.value = menuConfig.map(item => ({
    ...item,
    title: t(item.key)
  }))
}

// 监听语言变化，重新初始化菜单
watch(locale, () => {
  initMenuItems()
})

// 初始调用
initMenuItems()


const serviceItemKeys = {
    1:{
        title:'serviceNav.ai_based_legal_services',
        description:'serviceNav.ai_based_legal_services_description'
    },
    2:{
        title:'serviceNav.legal_document_creation',
        description:'serviceNav.legal_document_creation'
    },
    3:{
        title:'serviceNav.intellectual_property_registration',
        description:'serviceNav.intellectual_property_registration_description',
    },
    4:{
        title:'serviceNav.tax_consultation',
        description:'serviceNav.tax_consultation_description',
    }
}
// Service items data
const baseServiceItems = [

  {
    id: 1,
    icon: "/image/navbar/icon-legal-consultation.png",
    path: "cari-advokat",
  },
  {
    id: 2,
    icon: "/image/navbar/document-icon.png",
    isNew: true,
    path: "service-page?id=document",
  },
  {
    id: 3,
    icon: "/image/navbar/tax-icon.png",
    isNew: true,
    path: "service-page?id=tax",
  },
  {
    id: 4,
    icon: "/image/navbar/copyright-icon.png",
    isNew: true,
    path: "service-page?id=copyright",
  },
];

// 使用watchEffect监听语言变化
watchEffect(() => {
  // 每次语言变化时重新生成服务项
  serviceItems.value = baseServiceItems.map(item => {
    const keys = serviceItemKeys[item.id]
    return {
      ...item,
      title: t(keys.title),
      description: t(keys.description)
    }
  })
})

// Reactive state
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);
const openDropdownId = ref(null);

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const openDropdown = (id) => {
  openDropdownId.value = id;
};

const closeDropdown = () => {
  openDropdownId.value = null;
};

// Check for mobile viewport
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const navigateToRegister = () => {
  router.push("/register");
};
const loginHandler = () => {
  emit("loginHandler");
};

const emit = defineEmits(["loginHandler"]);
const checkLang = () => {
    if(locale.value == 'en') {
        locale.value = 'id'
    }else {
        locale.value = 'en'
    }
    setLocaleCookie(locale.value)
}
console.log(locale.value)
// Lifecycle hooks
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
.dropdown-fade-slide-enter-active,
.dropdown-fade-slide-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-fade-slide-enter-from,
.dropdown-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
.dropdown-fade-slide-enter-to,
.dropdown-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.chevron-rotate {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-chevron {
  transform: rotate(180deg);
}
.enBtn {
    display: block;
    background: url("/image/en_icon.png") no-repeat center center;
    background-size: 100% 100%;
}

.idBtn {
    display: block;
    background: url("/image/id_icon.png") no-repeat center center;
    background-size: 100% 100%;
}
</style>
