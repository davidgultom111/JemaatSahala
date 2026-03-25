<template>
  <section class="w-full py-12 px-6 bg-white font-sans">
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 class="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">Surat Pengajuan dan Permohonan</h2>
      <br />

      <div class="space-y-6 text-gray-600 mb-10">
        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p class="text-base md:text-xl font-medium text-gray-700 mb-2">Surat Administrasi Meliputi:</p>
          <p class="text-sm md:text-lg leading-relaxed">Tugas Pelayanan, Surat Pengantar, Keterangan Jemaat Aktif, Nilai Sekolah, Pengajuan Baptisan, Penyerahan Anak, Pernikahan, hingga Kematian.</p>
        </div>
        <p class="text-sm md:text-lg">
          Untuk pengajuan surat, silakan hubungi Sekretariat GPdI Sahala Palembang melalui WA di nomor
          <a href="https://wa.me/6282188252205" class="text-yellow-600 font-bold hover:underline">0821-8825-2205</a>
          atau email ke <a href="mailto:gpdisahabatallahpalembang@gmail.com" class="text-blue-600 font-bold hover:underline">gpdisahabatallahpalembang@gmail.com</a>
        </p>
      </div>

      <div class="w-full max-w-7xl bg-white border border-gray-100 p-4 sm:p-6 rounded-[2.5rem] shadow-xl">
        <p class="text-left text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 ml-4">Ambil Surat Anda</p>

        <div class="flex flex-col md:flex-row gap-4 px-2">
          <div class="relative min-w-[220px]">
            <select
              v-model="selectedCategory"
              class="w-full h-full pl-6 pr-10 py-5 bg-gray-50 border-2 border-transparent focus:border-[#00334e] rounded-2xl appearance-none outline-none text-sm font-bold text-gray-700 cursor-pointer transition shadow-sm"
            >
              <option value="" disabled selected>Jenis Surat</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div class="relative flex-1 group">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Masukkan Nama Lengkap Jemaat sesuai KTP..."
              class="w-full pl-6 pr-16 py-5 bg-gray-50 border-2 border-transparent focus:border-[#00334e] focus:bg-white rounded-2xl outline-none transition duration-300 text-gray-800 font-medium shadow-inner"
            />
            <button @click="handleSearch" class="absolute right-2.5 top-2.5 bottom-2.5 bg-[#00334e] text-white px-7 rounded-xl hover:bg-neutral-800 transition shadow-md active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <p class="mt-4 text-left ml-4 text-[11px] text-gray-400 italic">*Pilih jenis surat dan ketik nama jemaat untuk menampilkan file secara otomatis</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const selectedCategory = ref("");

const categories = ["Semua Jenis", "Surat Baptisan", "Surat Pernikahan", "Keterangan Jemaat Aktif", "Surat Penyerahan Anak", "Tugas Pelayanan"];

const handleSearch = () => {
  if (!selectedCategory.value) {
    alert("Silakan pilih Jenis Surat terlebih dahulu.");
    return;
  }
  if (!searchQuery.value) {
    alert("Silakan masukkan nama jemaat.");
    return;
  }

  console.log(`Mencari: ${searchQuery.value} | Kategori: ${selectedCategory.value}`);
  // Logika Fetch API Laravel Anda di sini
};
</script>
