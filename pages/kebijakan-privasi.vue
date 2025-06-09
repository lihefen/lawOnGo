<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-11 10:03:08
 * @LastEditors: hean
 * @LastEditTime: 2025-05-11 16:47:47
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
            <div class="bg-cultured">
                <div class="px-4 md:px-10 lg:px-28 xl:px-36 2xl:px-72 container mx-auto">
                    <div>
                        <p style="margin:12pt 0pt" class="text-center py-4">
                            <span class="text-[24px] " style="font-family:Arial;  font-weight:bold">SYARAT DAN KETENTUAN PENGGUNAAN PLATFORM LAWONGO</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt">Efektif per: </span>
                            <span style="background-color:#ffff00; font-family:Arial; font-size:11pt">[*]</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt">Selamat datang di LawOnGo,</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">HARAP BACA DENGAN TELITI DAN SEKSAMA SYARAT DAN KETENTUAN INI SEBELUM MENGGUNAKAN PLATFORM LAWONGO.</span>
                        </p>
                        <p style="margin:12pt 0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt">Dengan mengakses dan/atau mendaftar dan/atau menggunakan LawOnGo dan/atau menikmati Layanan yang tersedia, Anda menyatakan bahwa Anda telah membaca, memahami, mengetahui, menerima, dan menyetujui seluruh informasi, syarat, dan ketentuan penggunaan platform LawOnGo yang terdapat dalam dokumen ini. Jika Anda tidak menyetujui sebagian atau seluruh Syarat &amp;Ketentuan, Anda tidak diperkenankan untuk menggunakan Layanan.</span>
                        </p>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">DEFINISI</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt">Kecuali secara tegas ditentukan lain, istilah berikut memiliki arti sebagai berikut:</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">LawOnGo</span>
                                <span style="font-family:Arial; font-size:11pt">adalah sebuah platform teknologi berbasis kecerdasan buatan (AI) yang dikelola oleh PT Solusi Pertiwi Teknologi ("LawOnGo"), yang mempertemukan Pengguna dengan Penyedia Jasa hukum (advokat) untuk menangani permasalahan hukum terkait utang, termasuk namun tidak terbatas pada penyelesaian sengketa, negosiasi dan/atau mediasi dengan kreditur, dan restrukturisasi kewajiban pembayaran utang.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Layanan</span>
                                <span style="font-family:Arial; font-size:11pt">adalah seluruh jasa dan fitur yang tersedia dalam platform LawOnGo, termasuk:</span>
                            </li>
                        </ol>
                        <p style="margin:0pt 0pt 0pt 72pt; text-align:justify; text-indent:-18pt">
                            <span style="font-family:Arial; font-size:11pt; text-decoration:none">○</span>
                            <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span>
                            <span style="font-family:Arial; font-size:11pt">Konsultasi hukum berbasis pesan, panggilan suara, atau video;</span>
                        </p>
                        <p style="margin:0pt 0pt 0pt 72pt; text-align:justify; text-indent:-18pt">
                            <span style="font-family:Arial; font-size:11pt; text-decoration:none">○</span>
                            <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span>
                            <span style="font-family:Arial; font-size:11pt">Pembuatan dan pengiriman dokumen hukum yang relevan;</span>
                        </p>
                        <p style="margin:0pt 0pt 0pt 72pt; text-align:justify; text-indent:-18pt">
                            <span style="font-family:Arial; font-size:11pt; text-decoration:none">○</span>
                            <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span>
                            <span style="font-family:Arial; font-size:11pt">Bantuan dalam negosiasi atau penyelesaian sengketa utang;</span>
                        </p>
                        <p style="margin:0pt 0pt 0pt 72pt; text-align:justify; text-indent:-18pt">
                            <span style="font-family:Arial; font-size:11pt; text-decoration:none">○</span>
                            <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span>
                            <span style="font-family:Arial; font-size:11pt">Rekomendasi atas langkah hukum awal yang dapat diambil Pengguna; dan</span>
                        </p>
                        <p style="margin:0pt 0pt 0pt 72pt; text-align:justify; text-indent:-18pt">
                            <span style="font-family:Arial; font-size:11pt; text-decoration:none">○</span>
                            <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span>
                            <span style="font-family:Arial; font-size:11pt">Layanan lain yang dapat dikembangkan dari waktu ke waktu.</span>
                        </p>
                        <ol start="3" type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Pengguna</span>
                                <span style="font-family:Arial; font-size:11pt">adalah pihak perorangan atau badan hukum yang menggunakan LawOnGo untuk mendapatkan Layanan.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Penyedia Jasa</span>
                                <span style="font-family:Arial; font-size:11pt">adalah Advokat yang telah terdaftar dan bekerja sama secara resmi dengan LawOnGo dalam memberikan </span>
                                <span style="font-family:Arial; font-size:11pt">layanan</span>
                                <span style="font-family:Arial; font-size:11pt">hukum kepada Pengguna. Penyedia Jasa bukan bagian dari LawOnGo secara kelembagaan maupun korporasi, namun bekerjasama berdasarkan perjanjian khusus dengan LawOnGo.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Akun</span>
                                <span style="font-family:Arial; font-size:11pt">adalah akun yang didaftarkan oleh Pengguna atau Penyedia Jasa pada sistem LawOnGo.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Materi</span>
                                <span style="font-family:Arial; font-size:11pt">adalah semua informasi, panduan, artikel, konten hukum, data, dan lainnya yang tersedia pada platform LawOnGo.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Informasi Pribadi</span>
                                <span style="font-family:Arial; font-size:11pt">adalah data yang diberikan Pengguna atau Penyedia Jasa termasuk namun tidak terbatas pada nama, alamat, nomor identitas, data kontak, informasi finansial, dan dokumen hukum pribadi.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Kebijakan Privasi</span>
                                <span style="font-family:Arial; font-size:11pt">adalah ketentuan terpisah yang menjelaskan cara LawOnGo mengumpulkan, menyimpan, dan melindungi Informasi Pribadi.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt; font-weight:bold">Hari dan Jam Kerja</span>
                                <span style="font-family:Arial; font-size:11pt">merujuk pada hari Senin hingga Jumat pukul 09.00–17.00 WIB, kecuali hari libur nasional.</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">KETENTUAN UMUM PENGGUNAAN PLATFORM</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo bukan firma hukum dan tidak memberikan layanan hukum secara langsung.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Hubungan hukum antara Pengguna dan Penyedia Jasa hanya terbentuk setelah adanya kesepakatan konsultasi, dan merupakan hubungan Advokat-Klien yang diatur oleh perjanjian dan hukum dan etika profesi yang berlaku.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo bertindak hanya sebagai penghubung, dan tidak bertanggung jawab atas kualitas atau hasil dari layanan hukum yang diberikan oleh Penyedia Jasa.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Setiap rekomendasi awal dari sistem AI adalah panduan umum dan tidak menggantikan konsultasi hukum profesional.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo tidak menjamin bahwa penyelesaian masalah utang akan berhasil, dan tidak bertanggung jawab atas setiap kerugian akibat tindakan berdasarkan informasi dari platform.</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">AKUN DAN KEAMANAN</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Pengguna wajib memberikan informasi yang akurat, lengkap, dan benar pada saat pendaftaran.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Pengguna bertanggung jawab atas kerahasiaan akun dan kata sandi serta seluruh aktivitas yang terjadi melalui akun tersebut.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo tidak bertanggung jawab atas penyalahgunaan akun oleh pihak ketiga.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Jika terjadi pelanggaran keamanan, pengguna wajib segera melaporkan kepada tim Customer Support LawOnGo.</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">PELAKSANAAN DAN PENGAKHIRAN LAYANAN</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Layanan akan dimulai setelah adanya persetujuan antara Pengguna dan Penyedia Jasa, serta persetujuan antara Advokat dengan Pengguna.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo berhak menghentikan sementara atau permanen akses akun jika ditemukan pelanggaran terhadap Syarat &amp;Ketentuan atau penyalahgunaan layanan.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Pengguna dapat mengakhiri penggunaan Layanan kapan saja, namun kewajiban pembayaran atas layanan yang telah dilakukan tetap berlaku.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Komunikasi antara Pengguna dan Penyedia Jasa tunduk pada ketentuan kerahasiaan profesi sebagaimana diatur dalam UU Advokat dan Kode Etik Advokat yang berlaku di Indonesia.</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">BATASAN TANGGUNG JAWAB</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo tidak bertanggung jawab atas isi komunikasi, saran hukum, atau dokumen yang diberikan Penyedia Jasa kepada Pengguna.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">LawOnGo tidak bertanggung jawab atas keterlambatan, kesalahan sistem, atau kerugian yang timbul akibat gangguan teknologi atau pihak ketiga.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Pengguna menggunakan platform atas risiko sendiri dan bertanggung jawab penuh atas keputusan hukum yang diambil berdasarkan saran atau informasi dari platform.</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">PERUBAHAN SYARAT &amp;KETENTUAN</span>
                        </p>
                        <p style="margin:12pt 0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt">LawOnGo berhak untuk mengubah Syarat &amp;Ketentuan ini sewaktu-waktu. Setiap perubahan akan diberitahukan melalui platform. Penggunaan layanan setelah tanggal perubahan dianggap sebagai bentuk persetujuan terhadap Syarat &amp;Ketentuan yang baru.</span>
                        </p>
                        <p style="font-size:11pt; line-height:115%; margin:0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                        <p style="margin:12pt 0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt; font-weight:bold">LAIN-LAIN</span>
                        </p>
                        <ol type="1" style="margin:0pt; padding-left:0pt">
                            <li style="font-family:Arial; font-size:11pt; margin:12pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Syarat &amp;Ketentuan ini tunduk pada hukum Republik Indonesia.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 0pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Jika terdapat bagian dari ketentuan ini yang dinyatakan tidak sah atau tidak berlaku, bagian lainnya tetap berlaku penuh.</span>
                            </li>
                            <li style="font-family:Arial; font-size:11pt; margin:0pt 0pt 12pt 32.17pt; padding-left:3.83pt; text-align:justify; text-decoration:none; text-indent:0pt">
                                <span style="font-family:Arial; font-size:11pt">Untuk pertanyaan atau pengaduan, silakan hubungi layanan pelanggan LawOnGo di [</span>
                                <span style="font-family:Arial; font-size:11pt">alamat email/call center akan ditentukan</span>
                                <span style="font-family:Arial; font-size:11pt">].</span>
                            </li>
                        </ol>
                        <p style="font-size:11pt; line-height:115%; margin:0pt; text-align:justify">
                            <span style="font-family:Arial; font-size:11pt">&#xa0;</span>
                        </p>
                    </div>
                </div>
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
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};
const handleChange = (val) => {
  console.log(val)
}


const hukumOptions = [
  {
    value: 'Pembuatan Dokumen',
    label: 'Pembuatan Dokumen',
  },
  {
    value: 'Pendaftaran HAKI (Hak Kekayaan Intelektual)',
    label: 'Pendaftaran HAKI (Hak Kekayaan Intelektual)',
  },
]

const kotaOptions = [
    {
        value: 'SIMEULUE',
        label: 'SIMEULUE',
    },
    {
        value: 'ACEH SINGKIL',
        label: 'ACEH SINGKIL',
    },
    {
        value: 'ACEH SELATAN',
        label: 'ACEH SELATAN',
    },
    {
        value: 'ACEH TENGGARA',
        label: 'ACEH TENGGARA',
    },
    
]

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
