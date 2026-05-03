<template>
  <section class="w-full py-24 bg-[#00334e] overflow-hidden relative">

    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-yellow-400/4 blur-[100px]"></div>
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-yellow-400/4 blur-[100px]"></div>
    </div>
    <div
      class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 28px 28px;"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Dokumentasi
        </div>

        <h2 class="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Galeri
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Foto
          </span>
          Pelayanan
        </h2>

        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
        </div>

        <p class="text-gray-300 text-sm md:text-base max-w-sm mx-auto">
          Momen-momen berharga dalam perjalanan pelayanan GPdI Sahala Palembang
        </p>
      </div>

      <!-- Skeleton -->
      <div v-if="pending" class="rounded-2xl overflow-hidden bg-white/5 animate-pulse" style="height: 480px;"></div>

      <!-- Carousel -->
      <div v-else-if="carouselImages.length" class="relative">

        <!-- Main image frame -->
        <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-black group">

          <!-- Slides -->
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(img, index) in carouselImages"
              :key="index"
              class="min-w-full relative h-[55vh] md:h-[560px] flex items-center justify-center"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" />

              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20"></div>

              <!-- Caption -->
              <div class="absolute bottom-0 left-0 right-0 px-7 py-7">
                <span class="inline-block text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  Galeri Foto
                </span>
                <p class="text-white text-lg md:text-2xl font-bold leading-snug drop-shadow">
                  {{ img.title }}
                </p>
              </div>

              <!-- Slide counter -->
              <div class="absolute top-5 right-5 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tabular-nums">
                {{ String(index + 1).padStart(2, '0') }} / {{ String(carouselImages.length).padStart(2, '0') }}
              </div>
            </div>
          </div>

          <!-- Prev button -->
          <button
            @click="prev"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-yellow-400 text-white hover:text-gray-900 flex items-center justify-center transition-all duration-200 z-10 backdrop-blur-sm border border-white/10 hover:border-yellow-400 shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next button -->
          <button
            @click="next"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-yellow-400 text-white hover:text-gray-900 flex items-center justify-center transition-all duration-200 z-10 backdrop-blur-sm border border-white/10 hover:border-yellow-400 shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Autoplay progress bar -->
          <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              class="h-full bg-yellow-400 progress-bar"
              :key="currentSlide"
            ></div>
          </div>
        </div>

        <!-- Thumbnail strip -->
        <div class="flex gap-2.5 mt-4 justify-center flex-wrap">
          <button
            v-for="(img, index) in carouselImages"
            :key="index"
            @click="goTo(index)"
            class="relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-200 shrink-0"
            :class="currentSlide === index
              ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#00334e] opacity-100 scale-105'
              : 'opacity-40 hover:opacity-70'"
          >
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" />
          </button>
        </div>

        <!-- Dot indicators (mobile fallback) -->
        <div class="flex justify-center mt-4 gap-2 md:hidden">
          <button
            v-for="(_, index) in carouselImages"
            :key="index"
            @click="goTo(index)"
            :class="['h-2 rounded-full transition-all duration-300', currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-white/30 w-2 hover:bg-white/50']"
          ></button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { ApiResponse, GaleriFoto } from '~/types'

const { request } = useApi()

const { data, pending } = await useAsyncData('galeri-foto', () =>
  request<ApiResponse<GaleriFoto[]>>('/public/galeri').catch(() => null)
)

const carouselImages = computed(() => {
  const list = data.value?.data
  if (!list?.length) {
    return [
      { src: '/logos/carousel3.jpg', alt: 'Ibadah 3', title: 'Ibadah Raya Minggu' },
      { src: '/logos/carousel5.jpg', alt: 'Ibadah 2', title: 'Ibadah Pemberkatan Nikah' },
      { src: '/logos/carousel4.jpg', alt: 'Ibadah 1', title: 'Ibadah Rumah Tangga' },
      { src: '/logos/carousel1.jpg', alt: 'Ibadah 1', title: 'Ibadah Raya Minggu' },
      { src: '/logos/carousel6.jpg', alt: 'Ibadah 3', title: 'Kegiatan 17 Agustus' },
      { src: '/logos/carousel2.jpg', alt: 'Ibadah 2', title: 'Ibadah Rumah Tangga' },
    ]
  }
  return list.map(g => ({ src: g.foto_url, alt: g.judul, title: g.judul }))
})

const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval>

const next = () => { currentSlide.value = (currentSlide.value + 1) % carouselImages.value.length }
const prev = () => { currentSlide.value = (currentSlide.value - 1 + carouselImages.value.length) % carouselImages.value.length }
const goTo = (index: number) => { currentSlide.value = index }

onMounted(() => { timer = setInterval(next, 4500) })
onUnmounted(() => { clearInterval(timer) })
</script>

<style scoped>
@keyframes progress {
  from { width: 0%; }
  to   { width: 100%; }
}

.progress-bar {
  animation: progress 4.5s linear forwards;
}
</style>
