<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-08 21:13:28
 * @LastEditors: hean
 * @LastEditTime: 2025-06-21 10:45:55
-->

<template>
    <div class="bg-white font-dm-sans min-h-screen">
      <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="service-head md:h-[572px]">
            <div
            class="relative z-10 max-w-[1280px] mx-auto px-10  py-12 lg:py-12" :class="locale == 'id' ? 'xl:px-32' : 'xl:px-52'"
            >
            <div
                class="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16"
            >
                <div class="flex flex-col ">
                    <p class="text-[42px] leading-[50px] font-bold text-[#333333]">
                        {{ $t('legalServices.professional_legal') }}
                    </p>
                    <p class=" text-[#333333] text-[18px]">
                        {{ $t('legalServices.serving_various') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mt-[4px]" >
                        <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" > {{ $t('legalServices.document_creation') }}</span>
                        <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" >  {{ $t('legalServices.corporate_notary_services') }}</span>
                        <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" >  {{ $t('legalServices.copyright_registration') }}</span>
                        <span class="px-2 py-1 rounded-lg bg-[#B2F4D7] text-[#00854B] text-sm font-medium" >{{ $t('legalServices.tax_consultation') }}</span>
                    </div>

                    <button class="font-bold px-4 py-2.5 md:px-6 md:py-3 md:w-60 rounded-md md:rounded-[16px]  bg-[linear-gradient(224deg,#18D683_0%,#00CE73_17%,#0DBC6F_46%,#04A45E_100%)]  mt-[10px] text-white text-[24px]">{{ $t('legalServices.view_services') }}</button>
                </div>
                <iframe
                src="https://www.youtube.com/embed/Sy4ROOthOg4"
                class="w-[360px] h-[212px] rounded-xl shrink-0"
                />
            </div>
            </div>
        </div>
        <section class="p-4 md:-mt-[200px]">
            <div class="relative z-10 max-w-[1280px] mx-auto mt-4]">
                <div
                    class="card-bg  rounded-[24px] text-[#333333] overflow-hidden mx-auto pt-[24px] pb-[60px] md:w-[916px]"
                >
                    <div class="flex flex-col gap-2 md:gap-4 items-center">
                        <h5 class="sm:text-2xl lg:text-3xl font-semibold">
                            
                            {{ $t('trustworthy_platform.trustworthy_platform') }}
                        </h5>
                        <div class="flex flex-wrap gap-4 py-2">
                            <img
                            class="w-20 md:w-[138px]"
                            src="/image/about-us/trust-logo1.png"
                            alt="peradi-footer"
                            />
                            <img
                            class="w-20 md:w-[138px]"
                            src="/image/about-us/trust-logo2.png"
                            alt="peradi-footer"
                            />
                            <img
                            class="w-20 md:w-[138px]"
                            src="/image/about-us/trust-logo3.png"
                            alt="peradi-footer"
                            />
                            <img
                            class="w-20 md:w-[138px]"
                            src="/image/about-us/trust-logo4.png"
                            alt="peradi-footer"
                            />
                            <img
                            class="w-20 md:w-[138px]"
                            src="/image/about-us/trust-logo5.png"
                            alt="peradi-footer"
                            />
                        </div>
                        <div class="border-b border-white/30 w-full"></div>
                        <div class="relative px-3">
                            <img
                            src="/image/about-us/trust-adorn.svg"
                            class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10"
                            />
                            <img
                            src="/image/about-us/trust-adorn.svg"
                            class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 rotate-y-180"
                            />
                            <div
                            class="flex items-center justify-center gap-4 md:gap-9 text-center text-[#333333]"
                            >
                                <div class="flex flex-col">
                                    <span class="md:text-2xl font-medium">8000+</span>
                                    <span class="text-xs md:text-sm"> {{ $t('trustworthy_platform.suceess_stories') }}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="md:text-2xl font-medium">50+</span>
                                    <span class="text-xs md:text-sm">{{ $t('trustworthy_platform.registered_lawyers') }}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="md:text-2xl font-medium">15+</span>
                                    <span class="text-xs md:text-sm">{{ $t('trustworthy_platform.cities_covered') }}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span
                                    class="md:text-2xl font-medium flex items-center justify-center gap-1 md:gap-2"
                                    >
                                    <img
                                        src="/image/landing-page/icon-star.svg"
                                        alt=""
                                        class="w-4 md:w-6 h-4.5 md:h-8"
                                    />
                                    <span>4.9<span class="text-sm">/5.0</span></span>
                                    </span>
                                    <span class="text-xs md:text-sm">{{ $t('trustworthy_platform.excellent_rating') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative service-card  overflow-hidden xl:max-w-[1180px] xl:mx-auto -mt-32 pt-32 bg-[#F5FBFD] md:rounded-3xl">
                <div class=" px-4 flex flex-col gap-4 md:gap-8">
                        <h2 class="text-2xl lg:text-3xl font-semibold text-[#ffffff]  text-center xl:px-64">
                            {{ $t('legalServices.why') }}
                        </h2>
                        <div class="md:px-20 px-4 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-x-4 pb-10 md:pb-[60px]">
                            <div class="flex flex-col items-center ">
                                <img src="/image/service-page/costs_icon.png" alt="" class="w-fit">
                                <div class="flex flex-col text-center gap-2">
                                    <span class="md:text-xl font-semibold text-[#ffffff]" >{{  $t('legalServices.transparent_costs') }}</span>
                                    <span class="text-sm text-[#ffffff]" >{{  $t('legalServices.transparent_costs_desc') }}</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center " >
                                <img src="/image/service-page/save_time_icon.png" alt="" class="w-fit">
                                <div class="flex flex-col text-center gap-2" >
                                    <span class="md:text-xl font-semibold text-[#ffffff]">{{  $t('legalServices.save_time') }}</span><span class="text-sm text-[#ffffff]">{{  $t('legalServices.save_time_desc') }}</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center ">
                                <img src="/image/service-page/accurate_icon.png" alt="" class="w-fit">
                                <div class="flex flex-col text-center gap-2">
                                    <span class="md:text-xl font-semibold text-[#ffffff]">{{  $t('legalServices.accurate_results') }}</span><span class="text-sm text-[#ffffff]">{{  $t('legalServices.accurate_results_desc') }}</span>
                                </div>
                            </div>

                            <div class="flex flex-col items-center ">
                                <img src="/image/service-page/team-icon.png" alt="" class="w-fit">
                                <div class="flex flex-col text-center gap-2">
                                    <span class="md:text-xl font-semibold text-[#ffffff]">{{  $t('legalServices.professional_expert_team') }}</span><span class="text-sm text-[#ffffff]">{{  $t('legalServices.professional_expert_team_desc') }}</span>

                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </section>
        <section id="konsultasi-hukum" class="py-6 md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div class="relative w-full md:w-1/2">
                        <img
                        alt="img-legal-consultation"
                        class="w-full"
                        src="/image/service-page/img-legal-consultation.png" />
                        <img  src="/image/service-page/icon-legal-consultation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div  class="flex flex-col gap-4">
                            <img  src="/image/service-page/icon-legal-consultation-colored.png" alt="" class="w-fit md:inline-block hidden w-[10px]" >
                            <h2 class="relative mt-[-60px] ml-[20px] text-2xl md:text-3xl font-bold md:text-left text-center">{{ $t('legalServices.legal_consultation') }} </h2><p  class="text-[#55707A]">{{ $t('legalServices.legal_consultation_desc') }}</p>
                        </div>
                        <button @click="scrollToId('form')"  class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> {{ $t('legalServices.consult_now') }}</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="pendirian-badan-usaha" class="py-6 md:py-12 bg-[linear-gradient(0deg,rgba(255,255,255,1)_19%,rgba(194,255,231,0.43)_60%,rgba(204,255,235,0.26)_96%)] relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div class="flex flex-col gap-6 w-full md:w-1/2">
                        <img src="/image/service-page/icon-company-establishment-colored.png" alt="" class="w-fit md:inline-block hidden" >
                        <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" >{{ $t('legalServices.establishment_of_a_business_bntity') }}  </h2>
                        <p class="text-[#55707A]" >{{ $t('legalServices.establishment_of_a_business_bntity_desc') }}</p>
                        <div class="flex flex-col gap-3" >
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >{{ $t('legalServices.establishment') }}</span><span class="text-[#55707A]" >{{ $t('legalServices.all_kinds') }}</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >{{ $t('legalServices.changes_to_the_act') }}</span><span class="text-[#55707A]" >{{ $t('legalServices.information_change') }}</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold italic" >{{ $t('legalServices.authentication') }}</span><span class="text-[#55707A]">{{ $t('legalServices.bookkeeping_service_on_letters') }}</span>
                                </div>
                            </div>
                        </div>
                        <button @click="scrollToId('form')" class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer">{{ $t('legalServices.apply_now') }}</button>
                    </div>
                    <div  class="relative w-full md:w-1/2">
                        <img
                            alt="iimg-company-services"
                            class="w-full"
                            src="/image/landing-page/img-company-services.png" />
                    </div>
                </div>
            </div>
        </section>
        <section  id="pembuatan-dokumen" class="py-6 md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div  class="relative w-full md:w-1/2">
                        <img
                            alt="img-document-creation"
                            class="w-full"
                            src="/image/service-page/img-document-creation.png" />


                        <img  src="/image/service-page/icon-document-creation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div class="flex flex-col gap-4" >
                            <img src="/image/service-page/icon-document-creation-colored.png" alt="" class="w-fit md:inline-block hidden" >
                            <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" >{{ $t('legalServices.document_creation') }} </h2><p class="text-[#55707A]" >{{ $t('legalServices.create_various') }}</p>
                            <div class="flex flex-wrap gap-2" >
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >{{ $t('legalServices.sale_and_purchase_agreement') }}</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >{{ $t('legalServices.power_of_attorney') }}</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >{{ $t('legalServices.employment_agreement') }}</span>
                                <span class="px-2 py-0.5 rounded-lg bg-[#CBFFE8] text-[#04A45E] text-sm font-medium" >+24</span>
                            </div>
                        </div>
                        <button @click="scrollToId('form')" class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer"> {{ $t('legalServices.create_now') }} </button>
                    </div>
                </div>
            </div>
        </section>
        <section  id="pendaftaran-haki" class="py-6 md:py-12 bg-[#F7F7F7] relative z-10">
            <div  class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div  class="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div  class="flex flex-col gap-4 w-full md:w-1/2">
                        <img src="/image/service-page/icon-haki-registration-colored.png" alt="" class="w-fit md:inline-block hidden" >
                        <h2 class="relative mt-[-60px] ml-[20px]  text-2xl md:text-3xl font-bold md:text-left text-center" > {{ $t('legalServices.registration') }}</h2>
                        <p class="text-[#55707A]" > {{ $t('legalServices.get_easy_registration') }}</p>
                        <div class="flex flex-col gap-3" >
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >{{ $t('legalServices.trademark_registration') }}</span><span class="text-[#55707A]" >{{ $t('legalServices.getexclusive_rights') }}</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" >
                                <div class="flex flex-col" >
                                    <span class="md:text-xl font-bold" >{{ $t('legalServices.copyright_registration') }}</span><span class="text-[#55707A]" >{{ $t('legalServices.getexclusive_rights') }}</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-3" >
                                <img src="/image/service-page/icon-check.png" alt="" ><div class="flex flex-col" ><span class="md:text-xl font-bold" >{{ $t('legalServices.industrial_design_application') }}</span><span class="text-[#55707A]" >{{ $t('legalServices.get_protection_for_design') }}</span>
                            </div>
                        </div>
                    </div>
                    <button @click="scrollToId('form')" class="bg-[#04A45E] px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80  transition-all ease-in-out duration-300 cursor-pointer">{{ $t('legalServices.register_now') }}</button>
                </div>
                <div  class="relative w-full md:w-1/2">
                    <img
                        alt="img-hero-service-page"
                        class="w-full"
                        src="/image/service-page/img-haki-registration.png" />
                    <img  src="/image/service-page/icon-haki-registration-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden"></div>
                </div>
            </div>
        </section>

        <section  id="konsultasi-pajak" class="py-6 md:py-12 relative z-10">
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div class="relative w-full md:w-1/2">
                        <img
                            alt="img-tax-consultation"
                            class="w-full"
                            src="/image/service-page/img-tax-consultation.png" />
                            
                        <img  src="/image/service-page/icon-tax-consultation-colored.png" alt="" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-fit md:hidden">
                    </div>
                    <div  class="flex flex-col gap-6 w-full md:w-1/2">
                        <div  class="flex flex-col gap-4">
                            <img  src="/image/service-page/icon-tax-consultation-colored.png" alt="" class="w-fit md:inline-block hidden">
                            <h2  class="relative mt-[-60px] ml-[20px] text-2xl md:text-3xl font-bold md:text-left text-center">{{ $t('legalServices.tax_consultation') }}</h2>
                            <p  class="text-[#55707A]">{{ $t('legalServices.report_corporate') }}  </p>
                        </div>
                        <button @click="scrollToId('form')"  class="bg-[#04A45E]  px-5 py-3 w-full text-center md:w-fit text-white rounded-[18px] shadow-gray-500 hover:bg-[#04A45E]/80   transition-all ease-in-out duration-300 cursor-pointer">{{ $t('legalServices.consult_now') }} </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-8 md:py-0 relative z-10" >
            <div class="max-w-[1280px] mx-auto px-4 xl:px-40" >
                <div class="flex juster-center flex-col gap-12" >
                    <h2 class="text-2xl md:text-3xl font-bold text-center" >{{ $t('legalServices.process_stages') }} </h2>
                    <div class="md:flex text-center" >
                        <div class="relative  md:gap-4 md:w-[390px]">
                           <div  class="relative flex flex-col gap-2">
                                <div class=" process-title-1  mx-auto  w-[130px] h-[130px]" ></div>
                                <div class="processCard relative mt-[-84px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4 md:min-h-[190px]" >
                                    <span class="text-lg md:text-2xl font-bold" >{{ $t('legalServices.submit_offer_form') }}</span><span class="text-[#556987] font-light text-left" >{{ $t('legalServices.explain_the_details') }}</span>
                                </div>
                           </div>
                            <img src="/image/process_arrow.png" class="hidden md:block absolute right-[-32px] top-[140px] w-[10px] h-[18px]" alt="">
                        </div>
                        <div class="relative md:gap-4 md:w-[390px] md:ml-[58px]">
                            <div class="relative flex flex-col gap-2">
                                <div class=" process-title-2  mx-auto  w-[130px] h-[130px]" ></div>
                                <div class="processCard relative mt-[-84px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4 md:min-h-[190px]" >
                                    <span class="text-lg md:text-2xl font-bold" >{{ $t('legalServices.consult_your_needs') }}</span><span class="text-[#556987] font-light text-left" >{{ $t('legalServices.the_lawOnGo_team') }}</span>
                                </div>
                            </div>
                            <img src="/image/process_arrow.png" class="hidden md:block absolute right-[-32px] top-[140px] w-[10px] h-[18px]" alt="">
                        </div>
                        <div class="relative md:gap-4 md:w-[390px] md:ml-[58px]">
                            <div class="relative flex flex-col gap-2">
                                <div class=" process-title-3  mx-auto  w-[130px] h-[130px]" ></div>
                                <div class="processCard relative mt-[-84px]  p-4 pt-6 md:p-6 md:pt-8 flex flex-col gap-2 md:gap-4 md:min-h-[190px]" >
                                    <span class="text-lg md:text-2xl font-bold" >{{ $t('legalServices.transparent_process') }} </span><span class="text-[#556987] font-light text-left" >{{ $t('legalServices.our_professional_team') }}</span>
                                </div>
                            </div>
                       
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>

        <section id="form" class="md:py-12 relative z-10 ">
            <div class="max-w-[900px] mx-auto">
                <div class="relative rounded-2xl bg-[linear-gradient(180deg,#D7FFEE_0%,#FFFFFF_23%,#FFFFFF_100%)] px-4 md:px-8 py-7 shadow-[0_6px_19px_-6px_rgba(15,207,123,0.31)]">
                    <img src="/image/login_icon.png" class="absolute top-0 left-0  " alt="">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-2xl font-semibold text-center md:w-[52%] mx-auto"> {{ $t('legalServices.complete_your_personal_data') }}</h2>
                        <div class="flex flex-col sm:flex-row gap-6">
                            <div class="w-full sm:w-1/2 flex flex-col gap-3">
                                <div>
                                    <p class="font-medium font-dm-sans antialiased mb-2 text-black text-base">{{ $t('legalServices.full_name') }}</p>
                                    <div class="relative w-full text-black">
                                        <el-input v-model="inputName" type="text"  placeholder="Write your full name" size="large" ></el-input>
                                    </div>
                                </div>

                                <div>
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">{{ $t('legalServices.mobile_number') }}</p>
                                    <div class="relative w-full text-black">
                                        <el-input v-model="inputPhone" type="text"  placeholder="Example:08123456789" size="large" ></el-input>
                                    </div>
                                </div>

                                <div >
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">Email</p>
                                    <div  class="relative w-full  text-black ">
                                        <el-input v-model="inputEmail" type="text"  placeholder="Tuliskan email aktif anda"  size="large" ></el-input>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 flex flex-col gap-3">
                                <div>
                                    <label class="mb-2 block">{{ $t('legalServices.legal_services') }}</label>
                                    <div class="relative z-100">
                                        <el-select
                                            v-model="inputLegalServices"
                                            placeholder="Choose legal service"
                                            size="large"
                                            >
                                            <el-option
                                                v-for="item in legalServicesOptions"
                                                :key="item.id"
                                                :label="item.label"
                                                :value="item.value"
                                            />
                                        </el-select>
                                    </div>
                                </div>

                                <div>
                                    <label class="mb-2 block">{{ $t('legalServices.type_of_service') }}</label>
                                    <div class="relative z-100">
                                        <el-select
                                            v-model="inputTypeOfService"
                                            placeholder="Choose legal service"
                                            size="large"
                                            >
                                            <el-option
                                                v-for="item in typeOfServiceOptions"
                                                :key="item.id"
                                                :label="item.label"
                                                :value="item.value"
                                            />
                                        </el-select>
                                    </div>
                                </div>

                                <div >
                                    <p  class="font-medium font-dm-sans antialiased mb-2 text-black text-base">{{ $t('legalServices.business_Field') }}</p>
                                    <div  class="relative w-full  text-black ">
                                        <el-input v-model="inputBusiness" type="text"  placeholder="Example:Food,Beverages,Heavy Equipen"  size="large" ></el-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#E7ECF0]"></div>
                        <div>
                            <label class="mb-2 block">{{ $t('legalServices.detail_of_required_services') }}</label>
                            <el-input
                                v-model="textareaDibutuhkan"
                                :rows="5"
                                type="textarea"
                                placeholder="Example: I want to register my furniture company brand"
                            />
                            <div class="flex items-center justify-between gap-2 text-xs">
                                <span class="text-[#676767]">{{ $t('legalServices.minimal') }}</span><span class="mr-1 transform duration-300 ease-in-out -translate-y-4 opacity-0">0</span>
                            </div>
                        </div>
                        <div  class="rounded-lg px-3 py-2 flex items-center gap-2 bg-[#E7FFF4] text-[#00854B] text-sm">
                            <img class="w-4" src="/image/register/anquan_icon.png"><span  class="flex-1">{{ $t('legalServices.your_data_security') }}</span>
                        </div>
                        <button  @click="officialInfoRequest" class="text-center bg-[#04A45E] px-7 py-2.5 w-full text-lg text-white rounded-md shadow-gray-500 hover:bg-[#04A45E]/80 transition-all ease-in-out duration-300 cursor-pointer"> {{ $t('legalServices.send') }} </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-8 relative z-10 bg-gradient-to-b from-[#DDF6EB] to-[#FFFFFF] ">
            <div class="max-w-[1280px] mx-auto xl:px-[40px]">
                <div class="space-y-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#262E35] text-center" > {{ $t('legalServices.frequently_asked_questions') }} </h2>
                    <div class="space-y-4" v-for="(item, index) in questionsList" :key="index + 909">
                        <el-collapse  @change="handleChange" class="rounded-xl px-4 py-3 shadow-sm flex gap-4 " expand-icon-position="right">
                            <el-collapse-item title="Consistency" name="1" class="flex-1">
                                <template #title="{ isActive }">
                                    <div :class="['title-wrapper', { 'is-active': isActive }]">
                                        <div class="space-y-2 flex-1">
                                            <p class="font-semibold leading-5" >{{ item.title }}</p>
                                        </div>
                                    </div>
                                </template>
                                <div>
                                    <p class="font-light text-[#737373] leading-6 group-data-[active=false]:hidden" v-html=" item.desc"></p>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    
                </div>
            </div>
        </section>

        <section  class="py-8 relative z-10">
            <div  class="max-w-[1280px] mx-auto px-4 xl:px-[60px]">
                <div class="relative bg-gradient-to-r from-[#00B163] to-[#00D89C]  md:p-6  flex flex-col md:flex-row items-center gap-3 md:gap-6 rounded-2xl">
                    <img class="md:absolute md:left-[0] md:bottom-[0px]"  src="/image/landing-page/icon-customer-service.png" alt="">
                    <div  class="flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left gap-3">
                        <span  class="flex-1 font-semibold text-xl md:text-[32px] text-[#ffffff]  md:ml-[260px]">{{ $t('legalServices.find_the_service_you_need') }}</span>
                        <button @click="goWa"  class="w-full md:w-auto text-lightblack-1 font-semibold bg-white w-[180px] px-5 py-3 text-[#005F38] text-center rounded-[18px] text-[24px] shadow">{{ $t('legalServices.contact_us') }}</button>
                    </div>
                </div>
            </div>
        </section>
        <TheFooter />
        <LoginDialog
          :show.sync="showLoginDialog"
          @hide="showLoginDialog = false"
        ></LoginDialog>
      </main>
    </div>
  </template>
  

  
  <style scoped>
 .service-head {
  background-image: url("/image/service-page/service_head.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-bg {
  background-image: url("/image/service-page/platform_bg.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 33px;
  
  /* box-shadow: 0px 35px 28px -32px rgba(15, 169, 66, 0.22),
    inset 2px 2px 0px 0px #ffffff; */
}

.service-card {
    background-image: url("/image/service-page/service_card.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.processCard {
    background-image: url("/image/service-page/process_bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.process-title-1 {
    background-image: url("/image/service-page/process_title_1.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.process-title-2 {
    background-image: url("/image/service-page/process_title_2.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.process-title-3 {
    background-image: url("/image/service-page/process_title_3.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

::v-deep .el-collapse-item__header {
    border: none;
    font-size: inherit;
}

::v-deep .el-collapse {
    border: none;
    background: #fff;
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
  <script setup>
    import {getQueryString}  from '~/utils/getQueryString';
    import { officialInfo } from '~/services/officialInfo';
    const { locales, locale, setLocaleCookie,t } = useI18n()
    const showLoginDialog = ref(false);
    const inputName = ref("");
    const inputPhone = ref("");
    const inputEmail = ref('')
    const inputBusiness = ref('')
    const inputTypeOfService = ref('');
    const inputLegalServices = ref('');
    const textareaDibutuhkan =ref('');
    const legalServicesOptions = [
        {
            id: '100001',
            value:'Legal Document Creation',
            label:'Legal Document Creation'
        },
        {
            id: '100002',
            value:'Intellectual Property Registration',
            label:'Intellectual Property Registration'
        },
        {
            id: '100003',
            value:'Tax Consultation',
            label:'Tax Consultation'
        }
    ]


    const typeOfServiceOptions = [
        {
            id: '200001',
            value:'Legal Document Creation',
            label:'Legal Document Creation'
        },
        {
            id: '200002',
            value:'Intellectual Property Registration',
            label:'Intellectual Property Registration'
        },
        {
            id: '200003',
            value:'Tax Consultation',
            label:'Tax Consultation'
        }
    ]
    const loginHandler = () => {
        console.log("loginHandler");
        showLoginDialog.value = true;
    };

    const scrollToId = (id) => {
        if(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        }else {
            const idEle = getQueryString('id');
            if(idEle) {
                let element= null;
                if(idEle == 'document') {
                    element = document.getElementById('pendirian-badan-usaha');
                }
                if(idEle == 'tax') {
                    element = document.getElementById('konsultasi-pajak');
                }
                if(idEle == 'copyright') {
                    element = document.getElementById('form');
                }

                
                if (element) {
                    element.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                }
            }
        }
        
    }
    const questionsList = [
            {
                title: 'What is LawOnGo?',
                desc:'LawOnGo is an AI-based legal platform that focuses on providing fast,legal,and user-friendly debt mediation solutions.</br>Through LawOnGo,you can easily access debt mediation services,legal consultations,and rights protection via your smartphone—no upfront fees and no need to visit a law firm.</br>LawOnGo is committed to helping the people of Indonesia deal with debt stress in a fair,secure,and humane manner.Supported by AI technology and a network of legal professionals,we offer:</br><ol></ol><uL><li>Legal and compliant online debt mediation</li></uL><uL><li>24/7 AI-powered legal consultations that are fast and confidential</li></uL><uL><li>Negotiation with creditors on your behalf</li></uL><uL><li> Data protection and legal assistance throughout the processLawOnGo believes that everyone should have access to affordable and reliable legal solutions,especially during tough times.We will accompany you on your journey to financial freedom.</li></uL></ol>'
            },
            {
                title: 'How to register for a LawOnGo account?',
                desc:'<ol><ul><li> Open the official website or App and click on“Register.”</li></ul><ul><li>Enter your mobile phone number and receive the SMS verification code,or log in quickly using WeChat/Alipay.</li></ul><ul><li> Complete the basic information form:name,ID number,email address.</li></ul><ul><li>Upload a photo for facial recognition to enhance account security.</li></ul></ol>'
            },
            {
                title: 'How can I participate in LawOnGos Non-profit service public interest projects',
                desc:'The platform regularly collaborates with public welfare organizations to provide free legal aid to low-income or economically disadvantaged groups.</br>Enter the“Public Interest Law”section,register,and submit proof of family income or poverty.</br>After approval,you can book a Non-profit service lawyer for a 30-minute free consultation.<br/>Some assistance projects are subsidized.'
            },
            {
                title: 'How to entrust LawOnGo to draft or review a contract?',
                desc:'<ol><ul><li>Select“Document Services”→“Contract Drafting/Review”on the platform.</li></ul><ul><li>Upload the existing contract or fill in the basic elements(information of the parties,rights and obligations).</li></ul><ul><li>The system AI will conduct an initial review and generate a contract draft,which you can preview online and suggest modifications.</li></ul><ul><li>After the lawyer consultant completes the customized modifications,you can sign and download the final version online.</li></ul></ol>'
            }


           
        
    ]
    onMounted(() => {
        scrollToId()
    });

    const goWa = () => {
        window.location.href = 'https://wa.me/6282324599898'   
    }

    const officialInfoRequest = async () => {

        if(inputName.value == '' ||inputPhone.value == '' || inputTypeOfService.value ==''||inputEmail.value==''||inputBusiness.value == ''  || inputLegalServices.value == '' || textareaDibutuhkan.value == '') {
            ElMessage('Please fill all the fields!')
            return
        }
        try {
            const res = await officialInfo({
                data: {
                    "type": "web", 
                    "fullName": inputName.value, 
                    "mobileNumber": inputPhone.value,
                    "email": inputEmail.value,
                    "legalServices": inputLegalServices.value, 
                    "typeOfService": inputTypeOfService.value,
                    "businessField": inputBusiness.value, 
                    "detailOfRequired": textareaDibutuhkan.value
                }
            })
            if(res == 'success') {
                ElMessage('Your request has been sent!')
            }else {
                ElMessage('Something went wrong!')
            }
        } catch (error) {
            console.log(error)
        }
    }



  </script>
  