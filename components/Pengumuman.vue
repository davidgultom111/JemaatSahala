<template>
  <section v-if="pengumuman.length" class="w-full px-4 py-10 bg-gradient-to-b from-[#001f30] to-[#00334e] relative overflow-hidden">

    <!-- Dekorasi latar belakang -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-yellow-400/5 animate-pulse"></div>
      <div class="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/3 animate-pulse" style="animation-delay:1.5s"></div>
    </div>

    <div class="max-w-7xl mx-auto relative">

      <!-- Header seksi -->
      <div class="flex items-center gap-4 mb-8">
        <!-- Ikon lonceng bergetar -->
        <div class="relative flex-shrink-0">
          <div class="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30 bell-ring">
            <svg class="w-6 h-6 text-[#00334e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
          </div>
          <!-- Titik ping merah -->
          <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
          </span>
        </div>

        <div>
          <h2 class="text-white font-bold text-xl md:text-2xl tracking-wide">Pengumuman</h2>
          <p class="text-white/50 text-xs mt-0.5">Informasi & kegiatan gereja terkini</p>
        </div>
      </div>

      <!-- Kartu pengumuman -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in pengumuman"
          :key="item.id"
          class="announcement-card group relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5
                 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer overflow-hidden"
          :style="{ animationDelay: `${i * 0.1}s` }"
          @click="expanded = expanded === item.id ? null : item.id"
        >
          <!-- Garis aksen kiri -->
          <div class="absolute left-0 top-4 bottom-4 w-0.5 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>

          <div class="pl-3">
            <!-- Badge baru (jika dibuat dalam 7 hari terakhir) -->
            <div class="flex items-start justify-between gap-3 mb-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span v-if="isNew(item.created_at)"
                      class="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider new-badge">
                  <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  Baru
                </span>
                <span class="text-white/50 text-[11px]">
                  {{ formatDate(item.tanggal_mulai) }}
                  <template v-if="item.tanggal_akhir"> — {{ formatDate(item.tanggal_akhir) }}</template>
                </span>
              </div>
              <!-- Indikator expand -->
              <svg class="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5 transition-transform duration-300"
                   :class="{ 'rotate-180': expanded === item.id }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>

            <h3 class="text-white font-semibold text-base leading-snug mb-1">{{ item.judul }}</h3>

            <!-- Isi dapat di-expand -->
            <div class="overflow-hidden transition-all duration-500"
                 :style="{ maxHeight: expanded === item.id ? '300px' : '0px', opacity: expanded === item.id ? 1 : 0 }">
              <p class="text-white/70 text-sm leading-relaxed mt-2 whitespace-pre-line">{{ item.isi }}</p>
            </div>
            <p v-if="expanded !== item.id" class="text-white/50 text-xs mt-1">Ketuk untuk baca selengkapnya →</p>
          </div>

          <!-- Efek shimmer saat hover -->
          <div class="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { ApiResponse, Pengumuman as PengumumanType } from '~/types'

const { request } = useApi()

const { data } = await useAsyncData('pengumuman', () =>
  request<ApiResponse<PengumumanType[]>>('/public/pengumuman').catch(() => null)
)

const pengumuman = computed(() => data.value?.data ?? [])
const expanded = ref<number | null>(null)

function isNew(createdAt: string): boolean {
  const diff = Date.now() - new Date(createdAt).getTime()
  return diff < 7 * 24 * 60 * 60 * 1000
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
/* Animasi lonceng bergetar */
@keyframes bell-ring {
  0%, 100% { transform: rotate(0deg); }
  10%       { transform: rotate(15deg); }
  20%       { transform: rotate(-13deg); }
  30%       { transform: rotate(10deg); }
  40%       { transform: rotate(-8deg); }
  50%       { transform: rotate(5deg); }
  60%       { transform: rotate(-3deg); }
  70%       { transform: rotate(2deg); }
}
.bell-ring {
  animation: bell-ring 2.5s ease-in-out infinite;
  transform-origin: top center;
}

/* Badge "Baru" berdenyut */
@keyframes badge-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  50%       { box-shadow: 0 0 0 6px rgba(239,68,68,0); }
}
.new-badge {
  animation: badge-pulse 1.8s ease-in-out infinite;
}

/* Kartu masuk dari bawah */
@keyframes slide-up-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.announcement-card {
  animation: slide-up-in 0.5s ease-out both;
}

/* Efek shimmer */
.shimmer-effect {
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  from { background-position: -200% 0; }
  to   { background-position: 200% 0; }
}
</style>
