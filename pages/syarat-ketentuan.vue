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
        <div class="bg-cultured agreement">
            <div class="px-4 md:px-10 lg:px-28 xl:px-36 2xl:px-72 container mx-auto">
                <div class="text-black pb-12">
                    <div class="header">
                        <h1 class="font-bold text-center py-4 text-[24px]">KEBIJAKAN PRIVASI LAWONGO</h1>
                        <div class="last-updated">Terakhir diperbarui pada <strong>[*]</strong></div>
                    </div>

                    <div class="note py-4">
                        <p>MOHON BACA SELURUH KEBIJAKAN PRIVASI INI DENGAN CERMAT DAN SEKSAMA SEBELUM MENGGUNAKAN LAYANAN YANG TERSEDIA DALAM LAWONGO</p>
                        <p>LawOnGo sangat menjunjung tinggi prinsip perlindungan data pribadi dan berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana LawOnGo mengumpulkan, menggunakan, memproses, menyimpan, mengungkapkan, dan melindungi data pribadi Anda saat Anda menggunakan layanan kami dalam menyelesaikan permasalahan hukum utang melalui teknologi kecerdasan buatan yang terhubung dengan advokat terdaftar.</p>
                        <p>Jika tidak ditentukan lain, istilah dalam Kebijakan Privasi ini memiliki arti sebagaimana dimaksud dalam Syarat dan Ketentuan Penggunaan LawOnGo.</p>
                    </div>

                    <div class="section py-4">
                        <h2>1. PENGUMPULAN DAN PENGGUNAAN INFORMASI</h2>
                        <p>Anda dapat mengakses situs dan membaca konten informatif LawOnGo tanpa membuat akun. Namun, untuk menggunakan layanan konsultasi hukum atau fitur penyelesaian utang, Anda diwajibkan untuk membuat akun dan menyetujui Syarat & Ketentuan serta Kebijakan Privasi ini.</p>

                        <h3>Informasi Pribadi Pengguna</h3>
                        <p>Kami mengumpulkan data berikut saat Anda mendaftar dan menggunakan layanan:</p>
                        <ul>
                            <li>Nama lengkap (sesuai KTP/Paspor)</li>
                            <li>Tanggal lahir</li>
                            <li>Jenis kelamin</li>
                            <li>Nomor telepon dan/atau email aktif</li>
                            <li>Alamat tempat tinggal</li>
                            <li>Alamat sesuai KTP</li>
                            <li>Informasi keuangan dasar (termasuk namun tidak terbatas pada:  jumlah utang, nama kreditur, status pembayaran, penghasilan per bulan)</li>
                            <li>Dokumen pendukung (termasuk namun tidak terbatas pada: salinan perjanjian pinjaman, bukti tagihan, surat somasi, dll.)</li>
                            <li>Aktivitas penggunaan layanan konsultasi hukum melalui aplikasi sebelumnya</li>
                        </ul>

                        <h3>Informasi Pribadi Advokat (Penyedia Jasa Hukum)</h3>
                        <p>Untuk keperluan verifikasi dan pemrosesan layanan, LawOnGo akan meminta:</p>
                        <ul>
                            <li>Nama lengkap</li>
                            <li>Nomor HP dan email</li>
                            <li>Nama dan Alamat Kantor Hukum</li>
                            <li>Latar belakang pendidikan</li>
                            <li>Spesialisasi dan preferensi penanganan kasus serta lamanya praktek sebagai Advokat</li>
                            <li>Riwayat kesuksesan perkara (tanpa menyebutkan identitas para pihak) terkait penyelesaian utang</li>
                        </ul>

                        <h3>Penggunaan Data</h3>
                        <p>Data pribadi dikumpulkan untuk tujuan:</p>
                        <ul>
                            <li>Verifikasi identitas pengguna dan advokat</li>
                            <li>Pemberian rekomendasi hukum berbasis AI</li>
                            <li>Penghubungan otomatis antara pengguna dan advokat</li>
                            <li>Pengolahan dan penyajian analisa hukum dan keuangan</li>
                            <li>Pengiriman notifikasi, surat elektronik, dan informasi terkait layanan</li>
                            <li>Evaluasi kualitas layanan dan pengembangan sistem AI</li>
                            <li>Kepatuhan terhadap hukum yang berlaku</li>
                        </ul>
                    </div>

                    <div class="section py-4">
                        <h2>2. KERAHASIAAN DAN PERLINDUNGAN INFORMASI PRIBADI</h2>
                        <p>LawOnGo menerapkan langkah-langkah teknis dan organisasi yang wajar untuk menjaga keamanan data pribadi Anda, termasuk enkripsi, autentikasi dua faktor, dan audit sistem. Namun, transmisi data melalui internet tidak sepenuhnya aman, dan Anda memahami bahwa risiko tersebut berada di luar kendali LawOnGo.</p>
                        <p>Informasi Anda disimpan di server yang dikelola secara profesional di pusat data terpilih dan tunduk pada ketentuan kerahasiaan dan perlindungan data sesuai peraturan perundang-undangan di Indonesia.</p>
                    </div>

                    <div class="section py-4">
                        <h2>3. PENGUNGKAPAN INFORMASI PRIBADI</h2>
                        <p>LawOnGo dapat mengungkapkan informasi pribadi Anda kepada pihak ketiga hanya dalam keadaan berikut:</p>
                        <ul>
                            <li>Untuk menghubungkan Anda dengan advokat dan antara advokat dengan kreditur secara sah dan aman</li>
                            <li>Jika diminta oleh lembaga penegak hukum atau regulator sesuai kewenangan hukum</li>
                            <li>Dalam rangka penyelesaian sengketa antara Anda dengan pihak lain melalui layanan LawOnGo</li>
                            <li>Kepada vendor atau penyedia layanan pendukung yang tunduk pada perjanjian kerahasiaan</li>
                            <li>Dengan persetujuan eksplisit Anda</li>
                        </ul>
                    </div>

                    <div class="section py-4">
                        <h2>4. PENYIMPANAN DAN PENGHAPUSAN DATA</h2>
                        <p>LawOnGo akan menyimpan data pribadi Anda selama akun masih aktif atau selama diperlukan untuk mematuhi ketentuan hukum yang berlaku. Dokumen terkait layanan hukum akan disimpan selama 30 (tiga puluh) hari terhitung setelah jasa hukum dinyatakan selesai, kecuali diwajibkan lain oleh hukum yang berlaku di Indonesia.</p>
                        <p>Permintaan penghapusan akun dan data pribadi dapat diajukan melalui email resmi. Namun, kami berhak menyimpan data tertentu untuk tujuan audit, keamanan, atau kepatuhan hukum selama periode yang diperbolehkan oleh hukum yang berlaku di Indonesia.</p>
                    </div>

                    <div class="section py-4">
                        <h2>5. HAK-HAK PENGGUNA</h2>
                        <p>Anda memiliki hak untuk:</p>
                        <ul>
                            <li>Mengakses dan memperbarui data pribadi Anda</li>
                            <li>Menarik persetujuan atas pemrosesan data pribadi Anda</li>
                            <li>Mengajukan keberatan atas penyalahgunaan data</li>
                            <li>Meminta penghapusan atau pembatasan pemrosesan data</li>
                        </ul>
                        <p>Permintaan tersebut dapat diajukan melalui email ke: <strong class="contact-email">[*]</strong></p>
                    </div>

                    <div class="section py-4">
                        <h2>6. KEGAGALAN PERLINDUNGAN DATA</h2>
                        <p>Dalam hal terjadi kebocoran atau pelanggaran data pribadi, LawOnGo akan memberitahu Anda paling lambat dalam 3 x 24 jam melalui surat elektronik beserta langkah mitigasi yang telah dilakukan.</p>
                    </div>

                    <div class="section py-4">
                        <h2>7. PEMBAHARUAN KEBIJAKAN PRIVASI</h2>
                        <p>LawOnGo dapat mengubah isi Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahukan perubahan tersebut melalui email atau notifikasi dalam aplikasi. Dengan terus menggunakan layanan LawOnGo setelah pemberitahuan tersebut, Anda dianggap menyetujui Kebijakan Privasi terbaru.</p>
                    </div>
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
.agreement {
    line-height: 1.8;
}
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
