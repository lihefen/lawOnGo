<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 17:46:47
 * @LastEditors: hean
 * @LastEditTime: 2025-06-22 18:09:58
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-cultured">
            <div class="px-6 md:px-10 lg:px-10 xl:px-[40px] h-auto pt-4 md:pt-8 container mx-auto">
                <h1 class="font-dm-sans text-black font-bold text-xl antialiased">{{ $t('faq.frequently_asked_questions') }}</h1>
                <div  v-for="(item,index) in currentFaqList" :key="index +999">
                    <h1 class="font-dm-sans text-black font-medium text-xl antialiased pt-8">{{ item.subName }}</h1>
                    <section class="flex flex-col md:flex-row mt-4" v-for="(d,i) in item.content" :key="i+10">
                        <div class="w-full">
                            <div>
                                <div class="bg-white rounded-lg shadow-lg p-4 mb-5">
                                    <el-collapse  @change="handleChange">
                                        <el-collapse-item title="Consistency" name="1">
                                            <template #title="{ isActive }">
                                            <div :class="['title-wrapper', { 'is-active': isActive }]">
                                                <h4 class="font-dm-sans text-black text-base font-medium antialiased">{{ d.title }}</h4>
                                            </div>
                                            </template>
                                            <div>
                                                <div class="mt-2 text-base font-dm-sans text-slate-500 font-normal antialiased prose" v-html="d.desc">
                                                </div>
                                            </div>
                                        </el-collapse-item>
                                    </el-collapse>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
                <div class="py-6">T{{ $t('faq.above_qa') }}</div>
            </div>
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

import { ref ,defineEmits} from "vue";
const { locales, locale, setLocaleCookie,t } = useI18n()

const showLoginDialog = ref(false);
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

const faqListEn = ref([
    {
        subName:'About LawOnGo',
        content:[
            {
                title: 'What is LawOnGo?',
                desc:'LawOnGo is an AI-based legal platform that focuses on providing fast,legal,and user-friendly debt mediation solutions.</br>Through LawOnGo,you can easily access debt mediation services,legal consultations,and rights protection via your smartphone—no upfront fees and no need to visit a law firm.</br>LawOnGo is committed to helping the people of Indonesia deal with debt stress in a fair,secure,and humane manner.Supported by AI technology and a network of legal professionals,we offer:</br><ol></ol><uL><li>Legal and compliant online debt mediation</li></uL><uL><li>24/7 AI-powered legal consultations that are fast and confidential</li></uL><uL><li>Negotiation with creditors on your behalf</li></uL><uL><li> Data protection and legal assistance throughout the processLawOnGo believes that everyone should have access to affordable and reliable legal solutions,especially during tough times.We will accompany you on your journey to financial freedom.</li></uL></ol>'
            },
            {
                title: 'What are the core strengths of LawOnGo?',
                desc:'LawOnGo is committed to creating a professional,efficient,and trustworthy online legal service platform by integrating AI technology with legal resources.Our four core strengths include:<br/>1.Ai-Powered Smart Matching Mechanism</br>After users submit their questions or service requests,the system intelligently recommends the most suitable lawyer or mediation consultant within seconds,based on case type,service priority,and historical success cases.<br/>Matching dimensions include:legal expertise,case handling experience,user ratings,response speed,etc.</br>📌Advantage:Improves matching accuracy,saves waiting time,and ensures that every user finds the most appropriate legal assistance.</br>2.Integration of Top-tier National Legal Resources</br>LawOnGo has partnered with over 50+well-known law firms and legal teams,covering:<ol><ul><li>Debt mediation</li></ul><ul><li>Corporate law</li></ul><ul><li>Intellectual property</li></ul><ul><li>Labor disputes</li></ul><ul><li>Financial compliance</li></ul></ol></br/>These partnerships span major cities and key industry sectors nationwide,providing users with extensive professional support.</br>📌Advantage:Whether its a personal issue or a corporate need,users can obtain one-stop expert services on the platform.</br>3.One-Stop Online Full-Process Experience</br>From legal consultation→plan formulation→online mediation→agreement signing→performance tracking,everything can be completed within the LawOnGo App.</br>The platform supports electronic signatures,contract archiving,mediation record tracking,and follow-up services.</br>📌Advantage:Eliminates cumbersome offline processes,enhancing the efficiency and convenience of legal services.</br>.Zero-Risk,Flexible Payment Mechanism</br>We offer a variety of payment models to meet different user needs:<ol><ul><li>Results-oriented(pay after success)</li></ul><ul><li>Installment payments(0 down payment+flexible settlement)</li></ul><ul><li>Free AI Q&A services</li></ul></ol>No charge unless successful,safeguarding user interests.</br>📌Advantage:Lowers the barrier for first-time users,increasing trust and service conversion rates.</br>We promise:<ol><ul><li>100%Data Confidentiality:All uploaded materials and conversation content are strictly encrypted.</li></ul><ul><li>100%Genuine Lawyers:Each partner consultant is verified for identity and professional qualifications.</li></ul><ul><li>100%Visible Process:Every step of the progress is trackable on the platform,giving users full control.</li></ul></ol>'
            },
            {
                title: 'What types of services does LawOnGo provide?',
                desc:'LawOnGo offers a range of legal services and debt solutions designed to help Indonesians deal with financial stress in alegal,secure,and affordablemanner.Here are the main services provided by LawOnGo:<br/><ol><ul><li>Digital Debt Mediation</li></ul></ol>Professional legal mediation for debt settlement services.We help you negotiate with creditors,establish payment plans,and reach amicable agreements—no need to visit a law firm.<br/><ol><ul><li>AI-Based Legal Consultations(24/7)</li></ul></ol>Get quick answers to your legal questions anytime.Our AI system is always ready to help you understand your rights and obligations instantly,confidentially,and accurately.<br/><ol><ul><li>Debt Case Assistance</li></ul></ol>If you are facing aggressive debt collection,intimidation,or unethical behavior from debt collectors,we provide personal legal support.Our team is ready to offer legal assistance to protect your rights.<ol><ul><li>Preparation of Mediation Documents and Payment Agreements</li></ul></ol>Official legal document preparation services for your debt mediation outcomes,including installment payment agreements,settlement agreements,and reports to authorities when necessary.<ol><ul><li>Privacy Protection and Data Security</li></ul></ol>LawOnGo ensures the confidentiality of your personal data and transactions and will not share your information with third parties without permission.User security is our top priority.<br/>If you need legal services focused on resolving debt issues in a wise and dignified manner,LawOnGo is a trustworthy choice for you.'
            }
        ]
    },
    {
        subName:'Account and Security',
        content:[
            {
                title: 'How to register for a LawOnGo account?',
                desc:'<ol><ul><li> Open the official website or App and click on“Register.”</li></ul><ul><li>Enter your mobile phone number and receive the SMS verification code,or log in quickly using WeChat/Alipay.</li></ul><ul><li> Complete the basic information form:name,ID number,email address.</li></ul><ul><li>Upload a photo for facial recognition to enhance account security.</li></ul></ol>'
            },
            {
                title: 'What should I do if I forget my password?',
                desc:'<ol><ul><li>Click on the“Forgot Password”link on the login page.</li></ul><ul><li>Enter the email address or mobile number associated with your account.</li></ul><ul><li>You will receive a password reset link via email or a verification code via SMS.</li></ul><ul><li>Follow the instructions to set a new password.</li></ul></ol>'
            },
            {
                title: 'Is my personal data safe?',
                desc:'Data across the entire platform is stored with AES-256 encryption;<br/>Access to user information is restricted to authorized lawyers/mediators on a need-to-know basis;</br>Regular audits are conducted to ensure compliance with ISO27001 and local security regulations.'
            },
        ]
    },
    {
        subName:'Online Legal Consultation',
        content:[
            {
                title: 'How do I initiate an online legal consultation?',
                desc:'LawOnGo offers 24/7 online legal consultation services to help you quickly obtain professional advice.Here is the complete process for initiating a consultation:</br>✅Step 1:Access the Legal Consultation Module<ol><ul><li>Log in to the LawOnGo App,click on the“Legal Consultation”icon on the home page or“Consultation Services”in the navigation menu.</li></ul></ol><ol><ul><li> Select“Online Consultation”to enter the service page.</li></ul></ol>✅Step 2:Describe the Issue&Upload Materials<ol><ul><li>Clearly describe your issue,such as debt disputes,contract disputes,or collection harassment.</li></ul></ol><ol><ul><li>Upload relevant materials(e.g.,IOUs,contracts,chat record screenshots)to help the lawyer better understand your situation.</li></ul></ol>📎Tip:Providing complete materials will enhance the accuracy of the match and the efficiency of the consultation.</br>✅Step 3:Choose a Matching Lawyer/Mediator/Debt Advisor<ol><ul><li>The system will automatically recommend the most suitable expert based on your issue.</li></ul></ol><ol><ul><li>You can also manually browse lawyer profiles and select an expert proficient in the relevant field.</li></ul></ol>✅Step 4:Select the Consultation Mode</br>LawOnGo offers two modes to meet different user needs:<ol><ul><li>AI Simulated Q&A(Free)</li></ul></ol>→The intelligent system generates suggestions and reference answers instantly,suitable for quickly obtaining basic opinions.<ol><ul><li>One-on-One Human Consultation(Paid)</li></ul></ol>→Communicate in real-time with a licensed lawyer(via text/phone/video)to get targeted legal advice.</br>→The system supports both advance booking and instant connection.<br/>✅Step 5:Complete Payment&Start Consultation<ol><ul><li>If you choose one-on-one consultation,complete the payment according to the lawyers fee schedule.</li></ul></ol><ol><ul><li>After payment,you will immediately enter the exclusive session interface to start communicating with the lawyer.</li></ul></ol>💡Additional Notes:<ol><ul><li>All consultation records are stored encrypted and are visible only to the user and the lawyer.</li></ul></ol><ol><ul><li>LawOnGo strictly reviews the professional qualifications of partner lawyers to ensure that consultations are professional,secure,and reliable.</li></ul></ol><ol><ul><li>In case of urgent legal issues,it is recommended to choose“One-on-One Human Consultation”for timely support.</li></ul></ol>'
            },
            {
                title: 'What are the differences between AI simulated Q&A and human consultation?',
                desc:'AI Simulated Q&A(Free)<ol><ul><li>Technical Principle:The AI system generates response suggestions based on a vast database of real cases,legal provisions,and judicial interpretations.</li></ul></ol><ol><ul><li>Scope of Application:Suitable for handling basic,common,and frequently asked questions,such as:</li></ul></ol><ol><ul><li> What is legal debt collection?</li></ul></ol><ol><ul><li>How long after a debt is overdue will I be sued?</li></ul></ol><ol><ul><li>Can I refuse door-to-door debt collection?</li></ul></ol><ol><ul><li> Response Speed:Instantly generates replies without waiting.</li></ul></ol><ol><ul><li>Price:Free to use.</li></ul></ol><ol><ul><li>Advantages:</li></ul></ol><ol><ul><li>Quickly obtain directional advice.</li></ul></ol><ol><ul><li>No need to register complex information.</li></ul></ol>Human One-on-One Consultation(Paid)<ol><ul><li>Human One-on-One:Real lawyers provide online answers,suitable for complex legal matters or in-depth legal strategies.</li></ul></ol><ol><ul><li>Service Method:Licensed lawyers offer personalized answers through text,voice,or video.</li></ul></ol><ol><ul><li>Scope of Application:Suitable for handling complex,high-value,and strategy-guided matters,such as:</li></ul></ol><ol><ul><li>How can I negotiate installment payments with multiple platforms?</li></ul></ol><ol><ul><li>I have received a court summons,what should I do?</li></ul></ol><ol><ul><li>Can I sue the debt collector for harassment?</li></ul></ol>Service Content:<ol><ul><li>Case assessment</li></ul><ul><li>Analysis of applicable law</li></ul><ul><li>Specific action recommendations(such as filing a lawsuit,lodging a complaint,or preparing for negotiations)</li></ul><ul><li>Response Time:Typically enters the session within 5-10 minutes.</li></ul></ol>Advantages:<ol><ul><li>One-on-one communication,more focused on your issues</li></ul><ul><li>Obtain legal pathway advice and practical operation guidance</li></ul></ol>'
            },
        ]
    },
    {
        subName:'Debt Mediation Services',
        content:[
            {
                title: 'How to use LawOnGo for debt mediation?',
                desc:'<ol><ul><li>Click on“Debt Mediation”on the home page→Fill in information such as the lending platform,amount,and number of overdue days;</li></ul><ul><li>The AI assessment model generates a“Mediation Feasibility Report”and recommends multiple solutions;</li></ul><ul><li>Choose a service package and sign an electronic mediation agreement;</li></ul><ul><li>A dedicated mediation consultant initiates negotiations,with the entire process trackable online in a visual manner;</li></ul><ul><li>After an agreement is reached,a performance plan is automatically generated,and the system sends repayment reminders.</li></ul></ol>'
            },
            {
                title: 'What are the fees for debt mediation services?',
                desc:'Success Fee(Pay-After-Service)<ol><ul><li>Fee Structure:Fees are charged only after successful mediation.</li></ul><ul><li>Pricing Method:5%to 10%of the actual amount reduced is charged as the service fee.</li></ul><ul><li>Target Audience:Users who want to try with zero risk and are sensitive to costs.</li></ul><ul><li>Advantages:No upfront costs/No charge if unsuccessful/Results-oriented service</li></ul></ol>VIP Exclusive Package(Priority Service+Professional Protection)<ol><ul><li>Fee Structure:Fixed base service fee(priced based on the total amount of debt);if mediation is successful,an additional cashback reward from the platform is provided.</li></ul><ul><li> Added Benefits:One-on-one service with a dedicated lawyer/Priority mediation scheduling in the fast lane/Exclusive reports and negotiation support materials</li></ul><ul><li>Target Audience:Users with multiple debts,high amounts,and the need for quick processing</li></ul></ol>'
            },
            {
                title: 'What happens if the mediation fails?',
                desc:'If the official negotiation fails to reach a reduction,LawOnGo will fully refund the service fee;<br/>The system will automatically trigger a second round of solution recommendations,or hand over to the cooperating risk management team for further assistance.'
            },
            {
                title: "How to entrust LawOnGo to draft or review a contract?",
                desc:"<ol><ul><li>Select“Document Services”→“Contract Drafting/Review”on the platform.</li></ul><ul><li>Upload the existing contract or fill in the basic elements(information of the parties,rights and obligations).</li></ul><ul><li>The system AI will conduct an initial review and generate a contract draft,which you can preview online and suggest modifications.</li></ul><ul><li>After the lawyer consultant completes the customized modifications,you can sign and download the final version online.</li></ul></ol>"
            }
        ]
    },
    {
        subName:'Non-profit service and Public Interest Services',
        content:[
            {
                title: "How can I participate in LawOnGo's Non-profit service public interest projects?",
                desc:'The platform regularly collaborates with public welfare organizations to provide free legal aid to low-income or economically disadvantaged groups.</br>Enter the“Public Interest Law”section,register,and submit proof of family income or poverty.</br>After approval,you can book a Non-profit service lawyer for a 30-minute free consultation.<br/>Some assistance projects are subsidized.'
            },
            {
                title: 'Is there a limit to the number of Non-profit service services?',
                desc:'Each user can enjoy 1 Non-profit service consultation within a year.<br/>If you need more services,you can choose to pay for consultations.'
            },
        ]
    }
])

const faqListId = ref([
    {
        subName:'Tentang LawOnGo',
        content:[
            {
                title: 'Apa itu LawOnGo?',
                desc:`LawOnGo adalah platform hukum berbasis AI yang fokus pada solusi mediasi utang yang cepat,legal,dan ramah pengguna.</br>
                Melalui LawOnGo,Anda dapat dengan mudah mengakses layanan mediasi utang,konsultasi hukum,dan perlindungan hak melalui smartphone-tanpa biaya awal dan tanpa harus mengunjungi kantor pengacara.</br>
                LawOnGo berkomitmen untuk membantu masyarakat Indonesia mengatasi tekanan utang secara adil, aman, dan manusiawi. Didukung oleh teknologi kecerdasan buatan dan jaringan profesional hukum yang terpercaya, kami menyediakan :</br>
                <ol><ul><li>Mediasi utang secara daring yang sah dan sesuai regulasi</li></ul>
                    <ul><li>Konsultasi hukum berbasis AI 24/7 yang cepat dan rahasia</li></ul>
                    <ul><li>Layanan Negosiasi dengan kreditur atas nama Anda</li></ul>
                    <ul><li>Perlindungan data serta pendampingan hukum selama proses berlangsung
                    Kami percaya bahwa setiap individu berhak mendapatkan akses hukum yang terjangkau dan dapat diandalkan, terutama saat menghadapi masa-masa sulit. LawOnGo siap menjadi mitra Anda menuju kebebasan finansial.</li></ul></ol>`
            },
            {
                title: 'Apa kekuatan inti LawOnGo?',
                desc:`LawOnGo berkomitmen untuk menciptakan platform layanan hukum online yang profesional,efisien,dan dapat dipercaya dengan mengintegrasikan teknologi AI dengan sumber daya hukum.Keempat kekuatan inti kami meliputi:</br>
                    <ol>
                        <ul><li>Teknologi Pencocokan Cerdas yang Didukung AI</li</ul>
                    </ol>
                    Ajukan pertanyaan, sistem kami segera mencocokkan pengguna dengan advokat atau mediator terbaik berdasarkan jenis kasus, kebutuhan layanan, dan rekam jejak keberhasilan. Cepat, akurat, dan efisien.</br>
                    Dimensi pencocokan meliputi:keahlian hukum,pengalaman penanganan kasus,peringkat pengguna,kecepatan respons,dll.</br>
                    📌Keuntungan:Meningkatkan akurasi pencocokan,menghemat waktu tunggu,dan memastikan bahwa setiap pengguna menemukan bantuan hukum yang paling sesuai.
                    <ol>
                        <ul><li>Teknologi Pencocokan Cerdas yang Didukung AI</li></ul>
                        <ul>
                            <li>Integrasi Sumber Daya Hukum Nasional Top-Tier LawOnGo telah bekerja sama dengan lebih dari 50+firma hukum dan tim hukum terkenal,meliputi:</br></li>
                        </ul>
                        <ul><li>Mediasi utang</li></ul>
                        <ul><li>Hukum perusahaan</li></ul>
                        <ul><li>Hak kekayaan intelektual</li></ul>
                        <ul><li>Perselisihan tenaga kerja</li></ul>
                    </ol>
                    Kemitraan ini mencakup kota-kota besar dan sektor industri utama di seluruh negeri,memberikan dukungan profesional yang luas bagi pengguna.
                    📌Keuntungan:Baik masalah pribadi maupun kebutuhan perusahaan,pengguna dapat memperoleh layanan ahli satu atap di platform.
                    <ol>
                    <ul><li>Pengalaman Proses Penuh Online Satu Atap</li></ul>
                    <ul><li>Dari konsultasi hukum→penyusunan rencana→mediasi online→penandatanganan perjanjian→pelacakan pelaksanaan,semuanya dapat diselesaikan dalam Aplikasi LawOnGo.</br>
                    Platform ini mendukung tanda tangan elektronik,penyimpanan kontrak,pelacakan rekaman mediasi,dan layanan pengikut.</li></ul>
                    </ol>
                    📌Keuntungan:Menghilangkan proses offline yang merepotkan,meningkatkan efisiensi dan kenyamanan layanan hukum.
                    <ol>
                    <ul><li>Mekanisme Pembayaran Tanpa Risiko,Fleksibel</br>Kami menawarkan berbagai model pembayaran untuk memenuhi kebutuhan pengguna yang berbeda:</li></ul>
                    <ul><li>Berorientasi hasil(bayar setelah berhasil)</li></ul>
                    <ul><li>Pembayaran cicilan(0 uang muka+penyelesaian fleksibel)</li></ul>
                    <ul><li>Layanan Tanya Jawab AI gratis</br>Tidak ada biaya kecuali berhasil,melindungi kepentingan pengguna.</li></ul>
                    </ol>
                    📌Keuntungan:Menurunkan batas masuk untuk pengguna pertama kali,meningkatkan kepercayaan dan tingkat konversi layanan.
                    Kami berjanji:</br>
                    <ol>
                    <ul><li>100%Kerahasiaan Data:Semua materi yang diunggah dan konten percakapan dienkripsi secara ketat.</li></ul>
                    <ul><li>100%Pengacara Asli:Setiap konsultan mitra diverifikasi untuk identitas dan kualifikasi profesional.</li></ul>
                    <ul><li>100%Proses Terlihat:Setiap langkah kemajuan dapat dilacak di platform,memberikan pengguna kendali penuh.</li></ul>
                    </ol>`
            },
            {
                title: 'Apa jenis layanan yang ditawarkan LawOnGo?',
                desc:`
                    LawOnGo menawarkan berbagai layanan hukum dan solusi utang yang dirancang untuk membantu orang Indonesia mengatasi stres keuangan secara legal,aman,dan terjangkau.Berikut adalah layanan utama yang ditawarkan LawOnGo:
                    <ol>
                        <ul><li>Mediasi Profesional Penyelesaian Utang</li></ul>
                    </ol>
                    LawOnGo membantu Anda menyelesaikan masalah utang secara legal dan damai. Kami memfasilitasi negosiasi langsung dengan kreditur, menyusun rencana pembayaran yang sesuai kemampuan Anda, dan mencapai kesepakatan yang saling menguntungkan—semua tanpa perlu datang ke kantor pengacara.</br>
                    <ol>
                        <ul><li>Konsultasi Hukum Berbasis AI(24/7)</li></ul>
                    </ol>
                    Dapatkan jawaban cepat atas pertanyaan hukum Anda kapan saja. Sistem AI kami selalu siap membantu Anda memahami hak dan kewajiban Anda secara instan,rahasia,dan akurat.
                    <ol>
                        <ul><li>Bantuan Kasus Utang</li></ul>
                    </ol>
                    Jika Anda menghadapi penagihan utang agresif, intimidasi,atau perilaku tidak etis dari penagih utang,kami menyediakan dukungan hukum pribadi.Tim kami siap menawarkan bantuan hukum untuk melindungi hak Anda.
                    <ol>
                        <ul><li>Persiapan Dokumen Mediasi dan Perjanjian Pembayaran</li></ul>
                    </ol>
                    Layanan penyiapan dokumen hukum resmi untuk hasil mediasi utang Anda,termasuk perjanjian pembayaran angsuran,perjanjian penyelesaian,dan laporan kepada otoritas jika diperlukan.
                    <ol>
                        <ul><li>Perlindungan Privasi dan Keamanan Data</li></ul>
                    </ol>
                    LawOnGo memastikan kerahasiaan data pribadi dan transaksi Anda dan tidak akan membagikan informasi Anda dengan pihak ketiga tanpa izin. Keamanan pengguna adalah prioritas utama kami.</br>
                    Jika Anda membutuhkan layanan hukum yang berfokus pada penyelesaian masalah utang secara bijak dan bermartabat, LawOnGo adalah mitra tepercaya yang siap membantu Anda.`
            }
        ]
    },
    {
        subName:'Akun dan Keamanan',
        content:[
            {
                title: 'Bagaimana mendaftar akun LawOnGo?',
                desc:`
                <ol>
                    <ul><li>Buka situs web resmi atau aplikasi dan klik“Daftar.”</li></ul>
                    <ul><li>Masukkan nomor telepon seluler Anda dan terima kode verifikasi SMS,atau masuk dengan cepat menggunakan WhatsApp.</li></ul>
                    <ul><li>Lengkapi formulir informasi dasar:nama,nomor ID,alamat email.</li></ul>
                    <ul><li>Unggah foto untuk pengenalan wajah untuk meningkatkan keamanan akun.</li></ul>
                </ol>`
            },
            {
                title: 'Apa yang harus saya lakukan jika saya lupa kata sandi?',
                desc:`
                    <ol>
                        <ul><li>Klik tautan“Lupa Kata Sandi”di halaman masuk.</li></ul>
                        <ul><li>Masukkan alamat email atau nomor telepon yang terkait dengan akun Anda.</li></ul>
                        <ul><li>Anda akan menerima tautan reset kata sandi melalui email atau kode verifikasi melalui SMS.</li></ul>
                        <ul><li>Ikuti petunjuk untuk menetapkan kata sandi baru.</li></ul>
                    </ol>
                `
            },
            {
                title: 'Apakah data pribadi saya aman?',
                desc:`
                    Data di seluruh platform disimpan dengan enkripsi AES-256;</br>
                    Akses ke informasi pengguna dibatasi hanya untuk pengacara/mediator yang berwenang atas dasar kebutuhan tahu;</br>
                    Audit teratur dilakukan untuk memastikan kepatuhan dengan ISO27001 dan peraturan keamanan lokal.
                `
            },
        ]
    },
    {
        subName:'Konsultasi Hukum Online',
        content:[
            {
                title: 'Bagaimana memulai konsultasi hukum online?',
                desc:`
                    LawOnGo menawarkan layanan konsultasi hukum online 24/7 untuk membantu Anda mendapatkan saran profesional dengan cepat.Berikut adalah proses lengkap untuk memulai konsultasi:</br>
                    ✅Langkah 1:Akses Modul Konsultasi Hukum
                    <ol>
                        <ul><li>Masuk ke Aplikasi LawOnGo,klik ikon“Konsultasi Hukum”di halaman utama atau“Layanan Konsultasi”di menu navigasi.</li></ul>
                        <ul><li>Pilih“Konsultasi Online”untuk masuk ke halaman layanan.</li></ul>
                    </ol>
                    ✅Langkah 2:Deskripsikan Masalah&Unggah Bahan

                    <ol>
                        <ul><li>Jelaskan dengan jelas masalah Anda,seperti sengketa utang,sengketa kontrak,atau gangguan penagihan.</li></ul>
                        <ul><li>Unggah bahan yang relevan(misalnya,surat utang,kontrak,tangkapan layar percakapan)untuk membantu pengacara memahami situasi Anda lebih baik.</li></ul>
                        <ul><li>📎Tip:Menyediakan bahan lengkap akan meningkatkan akurasi pencocokan dan efisiensi konsultasi.</li></ul>
                    </ol>

                    ✅Langkah 3:Pilih Pengacara/Mediator/Penasehat Utang yang Cocok
                    <ol>
                        <ul><li>Sistem akan secara otomatis merekomendasikan ahli yang paling sesuai berdasarkan masalah Anda.</li></ul>
                        <ul><li>Anda juga dapat secara manual menjelajahi profil pengacara dan memilih ahli yang mahir di bidang yang relevan.</li></ul>
                    </ol>
                    ✅Langkah 4:Pilih Mode Konsultasi</br>
                    LawOnGo menawarkan dua mode untuk memenuhi kebutuhan pengguna yang berbeda:
                    <ol>
                        <ul><li> Tanya Jawab Simulasi AI(Gratis)</li></ul>
                    </ol>
                    →Sistem cerdas menghasilkan saran dan jawaban referensi secara instan,cocok untuk mendapatkan pendapat dasar dengan cepat.
                    <ol>
                        <ul><li>Konsultasi Satu-satu Manusia(Berbayar)</li></ul>
                    </ol>
                    →Berkomunikasi secara real-time dengan pengacara berlisensi(melalui teks/telepon/video)untuk mendapatkan saran hukum yang terfokus.</br>
                    →Sistem mendukung pemesanan terlebih dahulu dan koneksi instan.</br>
                    ✅Langkah 5:Selesaikan Pembayaran&Mulai Konsultasi
                    <ol>
                        <ul><li>Jika Anda memilih konsultasi satu-satu,selesaikan pembayaran sesuai dengan jadwal biaya pengacara.</li></ul>
                        <ul><li> Setelah pembayaran,Anda akan langsung masuk ke antarmuka sesi eksklusif untuk mulai berkomunikasi dengan pengacara.</li></ul>
                    </ol>
                    💡Catatan Tambahan:
                    <ol>
                        <ul><li>Semua rekaman konsultasi disimpan dengan enkripsi dan hanya terlihat oleh pengguna dan pengacara.</li></ul>
                        <ul><li>LawOnGo melakukan peninjauan ketat terhadap kualifikasi profesional mitra pengacara untuk memastikan bahwa konsultasi profesional,aman,dan dapat diandalkan.</li></ul>
                        <ul><li>Dalam kasus masalah hukum mendesak,disarankan untuk memilih“Konsultasi Satu-satu Manusia”untuk dukungan tepat waktu.</li></ul>
                    </ol>
                `
            },
            {
                title: 'Apa perbedaan antara tanya jawab simulasi AI dan konsultasi manusia?',
                desc:`
                    Tanya Jawab Simulasi AI(Gratis)
                    <ol>
                        <ul><li>Prinsip Teknis:Sistem AI menghasilkan saran respons berdasarkan basis data besar kasus nyata,ketentuan hukum,dan interpretasi yudisial.</li></ul>
                        <ul><li>Ruang Lingkup Aplikasi:Cocok untuk menangani pertanyaan dasar,umum,dan yang sering diajukan,seperti:</li></ul>
                        <ul><li>Apa itu penagihan utang yang legal?</li></ul>
                        <ul><li>Berapa lama setelah utang jatuh tempo saya akan dituduh?</li></ul>
                        <ul><li>Bolehkah saya menolak penagihan utang door-to-door?</li></ul>
                        <ul><li>Kecepatan Respons:Menghasilkan balasan secara instan tanpa menunggu.</li></ul>
                        <ul><li>Harga:Gratis untuk digunakan.</li></ul>
                        <ul><li> Keuntungan:</li></ul>
                        <ul><li>Mendapatkan saran arah dengan cepat.</li></ul>
                        <ul><li>Tidak perlu mendaftar informasi yang rumit.</li></ul>
                    </ol>
                    Konsultasi Satu-satu Manusia(Berbayar)

                    <ol>
                        <ul><li>Satu-satu Manusia:Pengacara sungguhan memberikan jawaban online,cocok untuk masalah hukum yang kompleks atau strategi hukum yang mendalam.</li></ul>
                        <ul><li>Metode Layanan:Pengacara berlisensi menawarkan jawaban pribadi melalui teks,suara,atau video.</li></ul>
                        <ul><li> Ruang Lingkup Aplikasi:Cocok untuk menangani masalah yang kompleks,bernilai tinggi,dan berbasis strategi,seperti:</li></ul>
                        <ul><li>Bagaimana saya bisa bernegosiasi pembayaran angsuran dengan beberapa platform?</li></ul>
                        <ul><li>Saya telah menerima panggilan pengadilan,apa yang harus saya lakukan?</li></ul>
                        <ul><li>Bisakah saya menggugat penagih utang karena gangguan?</li></ul>
                    </ol>

                    Isi Layanan:
                    <ol>
                        <ul><li>Penilaian kasus</li></ul>
                        <ul><li>Analisis hukum yang berlaku</li></ul>
                        <ul><li>Rekomendasi tindakan spesifik(seperti mengajukan gugatan,mengajukan keluhan,atau menyiapkan negosiasi)</li></ul>
                        <ul><li>Waktu Respons:Biasanya memasuki sesi dalam waktu 5-10 menit.</li></ul>
                    </ol>
                    Keuntungan:
                    <ol>
                        <ul><li>Komunikasi satu-satu,lebih fokus pada masalah Anda</li></ul>
                        <ul><li>Mendapatkan saran jalur hukum dan panduan operasional praktis</li></ul>
                    </ol>
                `
            },
        ]
    },
    {
        subName:'Layanan Mediasi Utang',
        content:[
            {
                title: 'Bagaimana menggunakan LawOnGo untuk mediasi utang?',
                desc:`
                    <ol>
                        <ul><li>Klik“Mediasi Utang”di halaman utama→Isi informasi seperti platform pinjaman,jumlah,dan jumlah hari terlambat;</li></ul>
                        <ul><li>Model penilaian AI menghasilkan“Laporan Kelayakan Mediasi”dan merekomendasikan beberapa solusi;</li></ul>
                        <ul><li>Pilih paket layanan dan tandatangani perjanjian mediasi elektronik;</li></ul>
                        <ul><li>Konsultan mediasi khusus memulai negosiasi,dengan seluruh proses dapat dilacak secara online dalam bentuk visual;</li></ul>
                        <ul><li>Setelah kesepakatan dicapai,rencana pelaksanaan secara otomatis dihasilkan,dan sistem mengirim pengingat pembayaran.</li></ul>
                    </ol>
                `
            },
            {
                title: 'Berapa biaya untuk layanan mediasi utang?',
                desc:`
                    Biaya Berhasil(Pembayaran Setelah Layanan)
                    <ol>
                        <ul><li>Struktur Biaya:Biaya hanya dikenakan setelah mediasi berhasil.</li></ul>
                        <ul><li> Metode Penentuan Harga:5%hingga 10%dari jumlah pengurangan yang sebenarnya dikenakan sebagai biaya layanan.</li></ul>
                        <ul><li>Target Pengguna:Pengguna yang ingin mencoba tanpa risiko dan peka terhadap biaya.</li></ul>
                        <ul><li>Keuntungan:Tidak ada biaya awal/Tidak dikenakan biaya jika tidak berhasil/Layanan berorientasi hasil</li></ul>
                    </ol>
                    Paket Eksklusif VIP(Layanan Prioritas+Proteksi Profesional)
                    <ol>
                        <ul><li>Struktur Biaya:Biaya layanan dasar tetap(ditentukan berdasarkan jumlah utang total);jika mediasi berhasil,pengembalian uang tunai tambahan dari platform akan diberikan.</li></ul>
                        <ul><li>Keuntungan Tambahan:Layanan satu-satu dengan pengacara khusus/Jadwal mediasi prioritas di jalur cepat/Laporan eksklusif dan bahan dukungan negosiasi</li></ul>
                        <ul><li>Target Pengguna:Pengguna dengan utang ganda,jumlah besar,dan kebutuhan untuk diproses dengan cepat
                    </li></ul>
                    </ol>
                `
            },
            {
                title: 'Apa yang terjadi jika mediasi gagal?',
                desc:`
                    Jika negosiasi resmi gagal mencapai pengurangan,LawOnGo akan mengembalikan biaya layanan secara penuh;</br>
                    Sistem akan secara otomatis memicu rekomendasi solusi kedua,atau menyerahkan kepada tim manajemen risiko yang bekerja sama untuk bantuan lebih lanjut.
                `
            },
            {
                title: "Bagaimana cara meminta LawOnGo untuk menyusun atau meninjau kontrak?",
                desc:`
                    <ol>
                        <ul><li>Pilih“Document Services”→“Contract Drafting/Review”pada platform.</li></ul>
                        <ul><li>Unggah kontrak yang ada atau isi elemen dasar(informasi pihak,hak dan kewajiban).</li></ul>
                        <ul><li>AI sistem akan melakukan tinjauan awal dan menghasilkan draf kontrak,yang dapat Anda pratinjau secara online dan sarankan perubahan.</li></ul>
                        <ul><li>Setelah konsultan hukum menyelesaikan perubahan khusus,Anda dapat menandatangani dan mengunduh versi akhir secara online.</li></ul>
                    </ol>
                `
            }
        ]
    },
    {
        subName:'Jasa Pro Bono dan Kepentingan Publik',
        content:[
            {
                title: "Bagaimana saya dapat berpartisipasi dalam proyek kepentingan publik pro bono LawOnGo?",
                desc:`
                    Platform secara teratur bekerja sama dengan organisasi kesejahteraan publik untuk menyediakan bantuan hukum gratis bagi kelompok berpenghasilan rendah atau yang secara ekonomi kurang beruntung.</br>
                    Masuk ke bagian“Hukum Kepentingan Publik”,daftar,dan kirimkan bukti penghasilan keluarga atau kemiskinan..</br>
                    Setelah disetujui,Anda dapat memesan pengacara Pro Bono untuk konsultasi gratis selama 30 menit..</br>
                    Beberapa proyek bantuan mendapat subsidi.
                `
            },
            {
                title: 'Apakah ada batasan jumlah layanan Pro Bono?',
                desc:`
                    Setiap pengguna dapat menikmati 1 konsultasi Pro Bono dalam setahun.</br>
                    Jika Anda memerlukan lebih banyak layanan,Anda dapat memilih untuk membayar konsultasi.
                `
            },
        ]
    }
])

// 计算属性：根据语言环境返回对应的 FAQ 列表
const currentFaqList = computed(() => {
  return locale.value == 'id' ? faqListId.value : faqListEn.value;
});
</script>


<style scoped>
::v-deep .el-collapse-item__header {
    border: none;
}

::v-deep .el-collapse {
    border: none;
}
::v-deep .el-collapse-item__wrap {
    border: none;
    
}

::v-deep .el-collapse-item__content {
    padding-bottom: 10px;
}

</style>
