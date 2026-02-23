<template>
  <section class="w-full py-16 px-4 bg-white">
    <div class="flex flex-col items-center justify-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">Jadwal Kegiatan</h2>
      <div class="w-20 h-[3px] bg-yellow-500 mx-auto mt-4"></div>
      <br />
      <p class="text-sm md:text-lg text-gray-600 text-center px-4">Seputar Jadwal Kegiatan GPdI Sahala Palembang</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <div v-for="(item, index) in services" :key="index" class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col p-6">
        <h6 class="text-[10px] md:text-xs font-bold text-yellow-600 uppercase tracking-widest mb-3">
          {{ item.category }}
        </h6>
        <h5 class="text-xl md:text-2xl font-serif font-bold text-neutral-900 mb-3 leading-tight">
          {{ item.title }}
        </h5>
        <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-6 flex-1">
          {{ item.description }}
        </p>
        <p class="text-xs md:text-sm text-gray-500 font-bold border-t pt-4">
          {{ item.time }}
        </p>
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
