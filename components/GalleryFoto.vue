<template>
  <section class="w-full py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase mb-3">Dokumentasi</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Foto Pelayanan</h2>
        <div class="w-12 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      <!-- Carousel -->
      <div class="relative group">
        <div class="overflow-hidden rounded-3xl shadow-2xl bg-black">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(img, index) in carouselImages"
              :key="index"
              class="min-w-full relative h-[55vh] md:h-[600px] flex items-center justify-center"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-contain md:object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span class="inline-block text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-2">Galeri</span>
                <p class="text-white text-lg md:text-2xl font-bold">{{ img.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Prev button -->
        <button
          @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 backdrop-blur-sm"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next button -->
        <button
          @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 backdrop-blur-sm"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dot indicators -->
        <div class="flex justify-center mt-5 gap-2">
          <button
            v-for="(_, index) in carouselImages"
            :key="index"
            @click="goTo(index)"
            :class="['h-2 rounded-full transition-all duration-300', currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400']"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let timer: any;

const carouselImages = [
  { src: "/logos/carousel3.jpg", alt: "Ibadah 3", title: "Ibadah Raya Minggu" },
  { src: "/logos/carousel5.jpg", alt: "Ibadah 2", title: "Ibadah Pemberkatan Nikah" },
  { src: "/logos/carousel4.jpg", alt: "Ibadah 1", title: "Ibadah Rumah Tangga" },
  { src: "/logos/carousel1.jpg", alt: "Ibadah 1", title: "Ibadah Raya Minggu" },
  { src: "/logos/carousel6.jpg", alt: "Ibadah 3", title: "Kegiatan 17 Agustus" },
  { src: "/logos/carousel2.jpg", alt: "Ibadah 2", title: "Ibadah Rumah Tangga" },
];

const next = () => { currentSlide.value = (currentSlide.value + 1) % carouselImages.length; };
const prev = () => { currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length; };
const goTo = (index: number) => { currentSlide.value = index; };

onMounted(() => { timer = setInterval(next, 4500); });
onUnmounted(() => { clearInterval(timer); });
</script>
