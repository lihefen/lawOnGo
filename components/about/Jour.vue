<template>
  <div class="relative z-10 max-w-[1280px] mx-auto py-12 px-10 xl:px-42">
    <div class="flex justify-center">
      <h1 class="title-adron text-[32px] font-bold text-[#333333] w-fit ">
        {{ $t('aboutUs.our_development_jour') }}
      </h1>
    </div>
    <div class="relative mt-14 hidden md:block">
      <div
        className="absolute top-4 left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#1FF48F] to-transparent"
      />
      <div v-for="(item, index) in currentTimelineData" :key="item.year">
        <div
          class="flex justify-center gap-4 max-w-[940px] w-full mx-auto items-start mt-12"
          :class="{ 'flex-row-reverse': index % 2 === 1 }"
        >
          <div
            class="mt-0 flex-1"
            :class="index % 2 === 1 ? 'text-left' : 'text-right'"
          >
            <span
              class="font-dm-sans font-bold md:text-[32px] text-[#005F38] antialiased"
            >
              {{ item.year }}
            </span>
            <img
              alt="story-2020"
              class="w-[280px] md:w-[360px] object-cover"
              :class="[index % 2 === 1 ? 'mr-auto' : 'ml-auto']"
              :src="item.image"
            />
          </div>
          <div class="flex flex-col">
            <div
              class="relative w-5 h-5 rounded-full flex items-center justify-center mt-1 bg-[#1FF48F]"
            >
              <div
                class="w-2 h-2 bg-white rounded-full flex items-center justify-center"
              />
            </div>
            <!-- <div
              class="ml-1.5 mt-0.5 md:ml-3 border-l-2 border-dashed border-lightgrey-5 h-full"
            /> -->
          </div>
          <div class="flex-1 flex flex-col text-left">
            <div class="bg-gray-50 rounded-lg p-6">
              <span className="highlight-mark text-2xl font-bold text-black">
                {{ item.title }}
              </span>
              <p className="text-black my-2 leading-7">
                {{ item.description }}
              </p>
              <div className="space-y-1">
                <p
                  v-for="(detail, detailIndex) in item.details"
                  :key="detailIndex"
                  className="text-black leading-7 break-words"
                >
                  {{ detail }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-14  md:hidden">
        <div v-for="(item, index) in currentTimelineData" :key="item.year">
            <div class="relative gap-4 items-start pl-7">
                <div class="absolute left-0 top-0 flex flex-col h-full ">
                    <div class="bg-[#1FF48F] relative w-4 h-4 rounded-full flex items-center justify-center mt-1">
                        <div class="w-2 h-2 bg-white rounded-full flex items-center justify-center"></div>
                    </div>
                    <div id="border-dashed" class="h-full ml-1.5 mt-0.5 border-l-2 border-dashed border-[#1FF48F]"></div>
                </div>
                <div class="w-[90%]">
                    <span class="font-dm-sans font-bold text-gray-700 antialiased">  {{ item.year }}</span>
                    <img :src="item.image" class="w-[223px]" alt="">
                    <p class="font-dm-sans text-xs text-gray-500 antialiased mt-2">
                        <span className="highlight-mark text-2xl font-bold text-black">
                            {{ item.title }}
                        </span>
                    </p>
                    <p className="text-black my-2 leading-7">
                        {{ item.description }}
                    </p>
                    <div className="space-y-1">
                        <p
                        v-for="(detail, detailIndex) in item.details"
                        :key="detailIndex"
                        className="text-black leading-7 break-words"
                        >
                        {{ detail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

const timelineDataEn = ref([
  {
    year: "2023",
    title: 'Initial Concept:Responding to the"Silent Need"',
    description:
      "As Indonesia's fintech industry rapidly develops,an increasing number of individual users and small merchants are falling into the quagmire of multiple lending and debt collection.We have observed that a significant number of users,when confronted with debt,are left in a state of confusion,fear,and a lack of resources or viable solutions.",
    details: [
      'Thus,we conceived an initial idea:to create a low-threshold,digital,and trustworthy legal platform that ensures"everyone has the right to negotiate."',
    ],
    image: "/image/about-us/story-2023.png",
  },
  {
    year: "2024",
    title: "The Launch of the LawOnGo Platform",
    details: [
      "• The LawOnGo project team was officially established in Jakarta",
      "• The prototype of the first-generation AI legal Q&A engine was developed.",
      "• Preliminary cooperation mechanisms were established with more than 10 local law firms.",
      "The debt mediation model process was designed, including:",
      "• User profile collection",
      "• Case pre-assessment",
      "• Generation of standardized mediation agreements",
      "• Verification of the successful payment mechanism",
      "Our services began to be open for testing to the first batch of real users.",
    ],
    image: "/image/about-us/story-2024-1.png",
  },
  {
    year: "2024",
    title: 'Completing the Integrated Loop of"Consultation-Mediation-Signing"',
    description:"The official version of App 1.0 was launched,supporting AI consultation+manual mediation+electronic signing of contracts.",

    details: [
     'Over 30 law firms,creditor institutions,and mediation experts in Indonesia were partnered with to form a professional network.',
     'The total number of user consultations exceeded 10,000.Diversified service packages were introduced.',
     'The platform began to be recognized by the media and the industry as an"innovative representative in the debt mediation field."'
    ],
    image: "/image/about-us/story-2024-2.png",
  },
  {
    year: "2025",
    title: 'Evolving into an"Intelligent Legal Platform"',
    details: [
     'Upgraded the AI legal Q&A system to support preliminary screening of complex cases and situational simulation responses.',
     'Established channels for synchronizing mediation agreements with financial institutions and arbitration bodies.',
     'Expanded the contract service module to support the entire chain of contract drafting,review,translation,and signing.',
     'Formed long-term partnerships with law schools and legal organizations to expand the impact of legal accessibility.',
     'Launched the LawOnGo B2B service line to address compliance and debt management issues for small and medium-sized enterprises.',
     'We are evolving from a"debt mediation tool"to a"legal partner in everyones pocket."'
    ],
    image: "/image/about-us/story-2025.png",
  },
]);

const timelineDataId = ref([
  {
    year: "2023",
    title: 'Ide Awal:Merespons"Kebutuhan yang Tidak Terdengar"',
    description:
      "Seiring perkembangan cepat industri fintech di Indonesia,semakin banyak pengguna individu dan pedagang kecil terjebak dalam masalah pinjaman berganda dan penagihan utang.Kami telah mengamati bahwa sejumlah besar pengguna,saat menghadapi utang,merasa bingung,takut,dan kekurangan sumber daya atau solusi yang layak.",
    details: [
      'Dengan demikian,kami memikirkan ide awal:menciptakan platform hukum yang berbasis digital,terpercaya,dan memiliki ambang batas rendah yang menjamin"setiap orang memiliki hak untuk bernegosiasi."',
    ],
    image: "/image/about-us/story-2023.png",
  },



  {
    year: "2024",
    title: "Peluncuran Platform LawOnGo",
    details: [
        "•Tim proyek LawOnGo secara resmi didirikan di Jakarta.",
        "•Prototipe mesin tanya-jawab hukum AI generasi pertama dikembangkan.",
        "•Mekanisme kerja sama awal didirikan dengan lebih dari 10 kantor hukum lokal.",
        "•Proses model mediasi utang dirancang,termasuk:",
        "•Pengumpulan profil pengguna",
        "•Pra-asesmen kasus",
        "•Pembuatan perjanjian mediasi yang terstandarisasi",
        "•Verifikasi mekanisme pembayaran yang sukses",
        "•Layanan kami mulai dibuka untuk pengujian kepada kelompok pengguna nyata pertama."
    ],
    image: "/image/about-us/story-2024-1.png",
  },
  {
    year: "2024",
    title: 'Melengkapi Loop Terintegrasi"Konsultasi-Mediasi-Penandatanganan"',
    description:"Versi resmi Aplikasi 1.0 diluncurkan,mendukung konsultasi AI+mediasi manual+penandatanganan elektronik kontrak.",

    details: [
        'Lebih dari 30 kantor hukum,lembaga kreditur,dan para ahli mediasi di Indonesia telah bekerja sama untuk membentuk jaringan profesional.',
        'Jumlah total konsultasi pengguna telah melebihi 10.000.',
        'Diperkenalkannya paket layanan yang beragam.',
        'Platform mulai diakui oleh media dan industri sebagai"wakil inovatif di bidang mediasi utang."'
    ],
    image: "/image/about-us/story-2024-2.png",
  },
  {
    year: "2025",
    title: 'Bertransformasi Menjadi"Platform Hukum Berbasis Kecerdasan Buatan"',
    details: [
         '• Sistem tanya-jawab hukum AI ditingkatkan untuk mendukung penyaringan awal kasus kompleks dan respons simulasi situasional.',
         '• Dibuka saluran untuk sinkronisasi perjanjian mediasi dengan lembaga keuangan dan badan arbitrase.',
         '• Diperluas modul layanan kontrak untuk mendukung seluruh rangkaian penyusunan kontrak,tinjauan,penerjemahan,dan penandatanganan.',
         '• Dibentuk kemitraan jangka panjang dengan fakultas hukum dan organisasi hukum untuk memperluas dampak aksesibilitas hukum.',
         '• Diluncurkan layanan B2B LawOnGo untuk menangani masalah kepatuhan dan manajemen utang bagi usaha kecil dan menengah.',
         '• Kami bertransformasi dari"alat mediasi utang"menjadi"mitra hukum di saku setiap orang."'
    ],
    image: "/image/about-us/story-2025.png",
  },
]);

// 计算属性：根据语言环境返回对应的 FAQ 列表
const currentTimelineData = computed(() => {
  return locale.value == 'id' ? timelineDataId.value : timelineDataEn.value;
});
</script>
<style scoped>
.title-adron {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 105%;
    height: 18px;
    background: #4bf5a4;
    opacity: 0.3;
    z-index: -1;
  }
}
.highlight-mark {
  background-image: linear-gradient(#1ff48f, #1ff48f);

  background-repeat: no-repeat;

  background-size: 100% 0.32em;

  background-position: 0 0.8em;

  /*
    关键属性：确保当内联元素 (span) 跨越多行时，
    背景 (我们的荧光笔标记) 在每一行都被正确地“克隆”和渲染。
  */
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone; /* 兼容 Safari 和旧版 Chrome/Edge */
}
</style>
