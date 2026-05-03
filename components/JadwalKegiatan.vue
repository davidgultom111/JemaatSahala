<template>
  <section class="w-full py-24 px-4 bg-slate-50">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-[#00334e]/8 border border-[#00334e]/15 text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Kegiatan Rutin
        </div>

        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Jadwal
          <span class="text-[#00334e]">Kegiatan</span>
        </h2>

        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
        </div>

        <p class="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
          Jadwal kegiatan rutin GPdI Sahala Palembang
        </p>
      </div>

      <!-- Skeleton loading -->
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="bg-gray-200 rounded-2xl h-52 animate-pulse"></div>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col"
        >
          <!-- Card top: navy with day badge + time -->
          <div class="relative bg-[#00334e] px-6 pt-6 pb-5 overflow-hidden">
            <!-- Ghost day text as background decoration -->
            <div
              class="absolute -right-2 -bottom-3 text-[72px] font-black text-white/[0.06] leading-none select-none pointer-events-none uppercase tracking-tight"
            >
              {{ item.category.substring(0, 3) }}
            </div>

            <!-- Day badge -->
            <span class="inline-block bg-yellow-400 text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              {{ item.category }}
            </span>

            <!-- Time -->
            <div class="flex items-center gap-1.5 text-yellow-300 text-xs font-semibold">
              <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ item.time }}
            </div>
          </div>

          <!-- Card body -->
          <div class="flex flex-col flex-1 px-6 py-5">
            <h5 class="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">
              {{ item.title }}
            </h5>
            <p class="text-sm text-gray-500 leading-relaxed flex-1">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom hover accent -->
          <div class="h-[3px] mx-6 mb-5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { ApiResponse, JadwalPelayanan } from '~/types'

const { request } = useApi()

const { data, pending } = await useAsyncData('jadwal-pelayanan', () =>
  request<ApiResponse<JadwalPelayanan[]>>('/public/jadwal').catch(() => null)
)

const fallback = [
  { category: 'Kamis', title: 'Ibadah Tengah Minggu', description: 'Ibadah Tengah Minggu diadakan setiap hari Kamis pukul 19.00 WIB di Gereja.', time: 'Setiap Kamis, 19.00 WIB' },
  { category: 'Jumat', title: 'Sahala Music Class', description: 'Sahala Music Class diadakan setiap hari Jumat pukul 16.00 WIB di Gereja.', time: 'Setiap Jumat, 16.00 WIB' },
  { category: 'Sabtu', title: 'Youth Community', description: 'Youth Community diadakan setiap hari Sabtu pukul 18.00 WIB di R. Setephanus Paul, Lt.2.', time: 'Setiap Sabtu, 18.30 WIB' },
  { category: 'Minggu', title: 'Ibadah Raya Minggu', description: 'Ibadah Raya Minggu diadakan setiap hari Minggu pukul 09.00 WIB di Gereja.', time: 'Setiap Minggu, 09.00 WIB' },
  { category: 'Minggu', title: 'Ibadah Sekolah Minggu', description: 'Ibadah Sekolah Minggu diadakan setiap hari Minggu pukul 10.00 WIB di R. Setephanus Paul, Lt.1.', time: 'Setiap Minggu, 10.00 WIB' },
  { category: 'Tidak Tetap', title: 'Ibadah Rumah Tangga', description: 'Ibadah Rumah Tangga diadakan sesuai kebutuhan dan jadwal yang ditentukan oleh pengurus gereja.', time: 'Sesuai Jadwal, 18.30 WIB' },
]

const services = computed(() => {
  const list = data.value?.data
  if (!list?.length) return fallback
  return list.map(j => ({
    category: j.kategori,
    title: j.nama_kegiatan,
    description: j.deskripsi ?? '',
    time: j.hari === 'Tidak Tetap'
      ? `Sesuai Jadwal, ${j.waktu} WIB`
      : `Setiap ${j.hari}, ${j.waktu} WIB`,
  }))
})
</script>
