<template>
  <nav class="bg-neutral-900 text-white w-full shadow-lg">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-10 w-auto mr-3" />
          <span class="text-xl md:text-2xl italic font-bold tracking-wide"> GPdI Sahala Palembang </span>
        </div>

        <div class="hidden md:flex flex-1 justify-end items-center">
          <ul class="flex space-x-3 lg:space-x-5 mr-6">
            <li v-for="item in menuItems" :key="item.text">
              <a :href="item.href" class="text-[10px] lg:text-xs font-bold uppercase hover:text-yellow-400 transition tracking-tighter">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white focus:outline-none">
            <svg v-if="!mobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden bg-neutral-900 px-2 pt-2 pb-3 space-y-1 rounded-b-lg border-t border-gray-800">
        <a v-for="item in menuItems" :key="item.text" :href="item.href" class="block px-3 py-2 rounded-md text-sm font-bold uppercase text-white hover:bg-neutral-800 hover:text-yellow-400 transition">
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
  <br />

  <div class="relative w-full h-[70vh] flex flex-col md:flex-row bg-[#00334e] overflow-hidden">
    <div class="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 z-10">
      <div class="max-w-xl">
        <div class="max-w-xl">
          <h4 class="text-4xl text-gray-200 font-light tracking-wide italic animate-fade-in" style="animation-delay: 0.2s">Welcome to</h4>
          <br />
          <h1 class="text-6xl md:text-7xl font-serif font-bold text-white leading-[0.8] animate-fade-in" style="animation-delay: 0.4s">
            GPdI <br />
            Sahala <br />
            Palembang
          </h1>
        </div>
        <br /><br /><br />

        <p class="text-xl text-gray-200 font-light tracking-wide italic animate-fade-in" style="animation-delay: 0.6s">Bergabunglah dengan komunitas kami dalam ibadah dan pelayanan</p>
      </div>
    </div>

    <div class="w-full md:w-1/2 relative h-64 md:h-full animate-fade-in" style="animation-delay: 0.8s">
      <img src="/logos/jumbotron.jpg" alt="Church Interior" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#00334e] to-transparent hidden md:block"></div>
    </div>
  </div>
  <br />

  <!-- Runnig Text -->
  <div class="bg-neutral-900 border-y border-gray-800 py-3 overflow-hidden shadow-md">
    <div class="flex whitespace-nowrap animate-marquee">
      <span class="text-white font-bold uppercase tracking-widest px-6text-sm md:text-base"> Berdiri Karena Anugrahnya &nbsp; | &nbsp; Diberkati Unruk Menjadi Berkat &nbsp; | &nbsp; </span>
      <span class="text-white font-bold uppercase tracking-widest px-6text-sm md:text-base"> Berdiri Karena Anugrahnya &nbsp; | &nbsp; Diberkati Unruk Menjadi Berkat &nbsp; | &nbsp; </span>
      <span class="text-white font-bold uppercase tracking-widest px-6text-sm md:text-base"> Berdiri Karena Anugrahnya &nbsp; | &nbsp; Diberkati Unruk Menjadi Berkat &nbsp; | &nbsp; </span>
      <span class="text-white font-bold uppercase tracking-widest px-6text-sm md:text-base"> Berdiri Karena Anugrahnya &nbsp; | &nbsp; Diberkati Unruk Menjadi Berkat &nbsp; | &nbsp; </span>
    </div>
  </div>
  <br />

  <!-- Main Content -->
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-5xl font-bold mb-4 animate-fade-in" style="animation-delay: 0.6s">Jadwal Kegiatan</h1>
    <p class="text-lg text-gray-600 animate-fade-in" style="animation-delay: 0.6s">Seputar Jadwal Kegiatan GPdI Sahala Palembang</p>
  </div>

  <div class="w-full px-4 py-16 bg-white">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div v-for="(item, index) in services" :key="index" class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
        <div class="p-8 flex-1">
          <h6 class="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-3">
            {{ item.category }}
          </h6>

          <h5 class="text-2xl font-serif font-bold text-neutral-900 mb-4 leading-tight">
            {{ item.title }}
          </h5>

          <p class="text-gray-600 leading-relaxed mb-6">
            {{ item.description }}
          </p>
          <p class="text-sm text-gray-500 font-bold">
            {{ item.time }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-fixed bg-center bg-cover grayscale contrast-125" style="background-image: url(&quot;/logos/section1.jpg&quot;)"></div>

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
      <h2 class="text-5xl md:text-7xl font-serif font-bold italic mb-12 tracking-tighter animate-fade-in">GPdI Sahala Palembang</h2>

      <p class="text-lg md:text-xl leading-relaxed mb-8 font-italic tracking-wide uppercase">
        GPdI Sahala Palembang adalah komunitas iman yang berlandaskan kasih Kristus, berdedikasi untuk membangun generasi yang kuat dalam iman dan karakter. Kami percaya pada kuasa transformasi Roh Kudus yang bekerja di tengah jemaat.
      </p>

      <p class="text-lg md:text-xl leading-relaxed mb-8 font-italic tracking-wide uppercase">
        menjangkau berbagai kalangan di kota Palembang melalui berbagai pelayanan kasih, misi sosial, dan pembinaan jemaat yang konsisten untuk kemuliaan nama Tuhan.
      </p>
    </div>
  </section>

  <section class="w-full py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-neutral-900">Galeri Foto Pelayanan</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-3xl shadow-2xl">
          <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(img, index) in carouselImages" :key="index" class="min-w-full relative h-[650px]">
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10">
                <p class="text-white text-2xl font-bold">{{ img.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-md transition opacity-0 group-hover:opacity-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-md transition opacity-0 group-hover:opacity-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div class="flex justify-center mt-6 space-x-2">
          <button v-for="(_, index) in carouselImages" :key="index" @click="currentSlide = index" :class="['w-3 h-3 rounded-full transition', currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-gray-300']"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- Lokasi Kami -->
  <section class="w-full py-20 bg-neutral-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif font-bold text-neutral-900">Lokasi Kami</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        <p class="mt-4 text-neutral-600">Jl. Soak Permai Lrg. Sahabat Bondol, Sukajaya, Kec. Sukarami, Kota Palembang</p>
      </div>

      <div class="w-full h-[450px] rounded-3xl shadow-lg overflow-hidden border-4 border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.442938166649!2d104.7330643!3d-2.9186003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75c8d8b4c73f%3A0x892a0e5b7b9b7b9b!2sGPdI%20SAHABAT%20ALLAH%20PALEMBANG!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-neutral-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div>
        <div class="flex items-center mb-6">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-10 w-auto mr-3" />
          <span class="text-xl font-bold italic">GPdI Sahala Palembang</span>
        </div>
        <p class="text-gray-400 leading-relaxed">Gereja Pantekosta di Indonesia Sahala Palembang berkomitmen untuk melayani dengan kasih dan membawa jiwa-jiwa kepada Kristus.</p>
      </div>

      <div>
        <h4 class="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Kontak Kami</h4>
        <ul class="text-gray-400 space-y-4">
          <li class="flex items-start">
            <span>Jl. Soak Permai Lrg. Sahabat Bondol, Sukajaya, Kec. Sukarami, Kota Palembang</span>
          </li>
          <li class="flex items-center">
            <span>gpdisahalapalembang@gmail.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Sosial Media</h4>
        <ul class="space-y-3 text-gray-400">
          <li>
            <a href="https://www.instagram.com/gpdisahalapalembang?igsh=MXd4czU3eHB2ZDd2bw==" target="_blank" class="hover:text-yellow-400 transition flex items-center">
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1LPaDsoEGm/" target="_blank" class="hover:text-yellow-400 transition flex items-center">
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 text-center border-t border-gray-800 pt-8 mt-8">
      <p class="text-gray-500 text-sm">&copy; {{ new Date().getFullYear() }} GPdI Sahala Palembang. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Gabungkan semua import di baris paling atas
import { ref, onMounted, onUnmounted } from "vue";

// 1. State untuk Navbar
const mobileMenuOpen = ref(false);

// 2. State untuk Carousel
const currentSlide = ref(0);
let timer: any;

// 3. Data Menu
const menuItems = [
  { text: "BERANDA", href: "/" },
  { text: "GEREJA", href: "/gereja" },
  { text: "IBADAH", href: "/ibadah" },
  { text: "TERHUBUNG", href: "/terhubung" },
  { text: "MEDIA", href: "/media" },
  { text: "MEMBERI", href: "/memberi" },
  { text: "MISI", href: "/misi" },
  { text: "PELAYANAN", href: "/pelayanan" },
  { text: "MSJ", href: "/msj" },
  { text: "TOKO", href: "/toko" },
];

// 4. Data Jadwal Kegiatan
const services = [
  {
    category: "Kamis",
    title: "Ibadah Tengah Minggu",
    description: "Mari bergabung dalam pujian dan penyembahan di GPdI Sahala Palembang",
    time: "Kamis, 18:30 WIB - GPdI Sahala Palembang",
  },
  {
    category: "Jumat",
    title: "Sahala Music Class",
    description: "Mari bergabung dalam Sahala Music Class di GPdI Sahala Palembang",
    time: "Jumat, 16:00 WIB - GPdI Sahala Palembang",
  },
  {
    category: "Sabtu",
    title: "Ibadah Sahala Community",
    description: "Mari bergabung dalam Ibadah Sahala Community di GPdI Sahala Palembang",
    time: "Sabtu, 19:00 WIB - Lt. 2 R. Setephanus Paul",
  },
  {
    category: "Minggu",
    title: "Ibadah Raya Minggu",
    description: "Mari bergabung dalam Ibadah Raya Minggu di GPdI Sahala Palembang",
    time: "Minggu, 19:00 WIB - GPdI Sahala Palembang",
  },
  {
    category: "Minggu",
    title: "Ibadah Sekolah Minggu",
    description: "Mari bergabung dalam Ibadah Sekolah Minggu di GPdI Sahala Palembang",
    time: "Minggu, 19:00 WIB - Lt. 1 R. Setephanus Paul",
  },
  {
    category: "Tidak Tetap",
    title: "Ibadah Rumah Tangga",
    description: "Mari bergabung dalam Ibadah Rumah Tangga di GPdI Sahala Palembang",
    time: "Tidak Tetap, 18.30 WIB - Lokasi Bergantian",
  },
];

// 5. Data Carousel
const carouselImages = [
  { src: "/logos/carousel3.jpg", alt: "Ibadah 3", title: "Ibadah Raya Minggu" },
  { src: "/logos/carousel5.jpg", alt: "Ibadah 2", title: "Ibadah Pemberkatan Nikah" },
  { src: "/logos/carousel4.jpg", alt: "Ibadah 1", title: "Ibadah Rumah Tangga" },
  { src: "/logos/carousel1.jpg", alt: "Ibadah 1", title: "Ibadah Raya Minggu" },
  { src: "/logos/carousel6.jpg", alt: "Ibadah 3", title: "Kegiatan 17 Agustus" },
  { src: "/logos/carousel2.jpg", alt: "Ibadah 2", title: "Ibadah Rumah Tangga" },
];

// 6. Fungsi Navigasi Carousel
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length;
};

// 7. Lifecycle Hooks (Auto Play)
onMounted(() => {
  timer = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
nav {
  font-family: "Montserrat", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
  opacity: 0;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

/* Tambahkan ini agar saat mouse diarahkan ke teks, jalannya berhenti sebentar */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
