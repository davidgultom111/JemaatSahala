<template>
  <section class="w-full py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-neutral-900">Galeri Foto Pelayanan</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
      </div>

      <div class="relative group">
        <div class="overflow-hidden rounded-3xl shadow-2xl bg-black">
          <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(img, index) in carouselImages" :key="index" 
                 class="min-w-full relative h-[60vh] md:h-[650px] flex items-center justify-center">
              
              <img :src="img.src" :alt="img.alt" 
                   class="w-full h-full object-contain md:object-cover" />
              
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
                <p class="text-white text-lg md:text-2xl font-bold">{{ img.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6 space-x-2">
          <button v-for="(_, index) in carouselImages" :key="index" @click="currentSlide = index" 
                  :class="['w-3 h-3 rounded-full transition-all', currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-gray-300']"></button>
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

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % carouselImages.length; };

onMounted(() => { timer = setInterval(nextSlide, 4000); });
onUnmounted(() => { clearInterval(timer); });
</script>