<template>
  <section class="w-full py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-14">
        <span class="inline-block text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase mb-3">Kegiatan Rutin</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-5">Jadwal Kegiatan</h2>
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="h-px w-12 bg-yellow-400"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-px w-12 bg-yellow-400"></div>
        </div>
        <p class="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
          Jadwal kegiatan rutin GPdI Sahala Palembang
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col p-6"
        >
          <!-- Left accent bar -->
          <div class="absolute left-0 top-4 bottom-4 w-1 bg-yellow-400 rounded-full"></div>

          <div class="mb-4 pl-1">
            <span class="inline-block bg-[#00334e]/8 text-[#00334e] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              {{ item.category }}
            </span>
          </div>
          <h5 class="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug pl-1">
            {{ item.title }}
          </h5>
          <p class="text-sm text-gray-500 leading-relaxed flex-1 mb-5 pl-1">
            {{ item.description }}
          </p>
          <div class="flex items-center gap-2 text-xs font-semibold text-gray-600 border-t border-gray-100 pt-4 pl-1">
            <svg class="w-4 h-4 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ item.time }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    category: "Kamis",
    title: "Ibadah Tengah Minggu",
    description: "Ibadah Tengah Minggu diadakan setiap hari Kamis pukul 19.00 WIB di Gereja.",
    time: "Setiap Kamis, 19.00 WIB",
  },
  {
    category: "Jumat",
    title: "Sahala Music Class",
    description: "Sahala Music Class diadakan setiap hari Jumat pukul 16.00 WIB di Gereja.",
    time: "Setiap Jumat, 16.00 WIB",
  },
  {
    category: "Sabtu",
    title: "Youth Community",
    description: "Youth Community diadakan setiap hari Sabtu pukul 18.00 WIB di R. Setephanus Paul, Lt.2.",
    time: "Setiap Sabtu, 18.30 WIB",
  },
  {
    category: "Minggu",
    title: "Ibadah Raya Minggu",
    description: "Ibadah Raya Minggu diadakan setiap hari Minggu pukul 09.00 WIB di Gereja.",
    time: "Setiap Minggu, 09.00 WIB",
  },
  {
    category: "Minggu",
    title: "Ibadah Sekolah Minggu",
    description: "Ibadah Sekolah Minggu diadakan setiap hari Minggu pukul 10.00 WIB di R. Setephanus Paul, Lt.1.",
    time: "Setiap Minggu, 10.00 WIB",
  },
  {
    category: "Tidak Tetap",
    title: "Ibadah Rumah Tangga",
    description: "Ibadah Rumah Tangga diadakan sesuai kebutuhan dan jadwal yang ditentukan oleh pengurus gereja.",
    time: "Sesuai Jadwal, 18.30 WIB",
  },
];
</script>
