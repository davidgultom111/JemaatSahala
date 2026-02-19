<template>
  <nav class="bg-neutral-900 text-white w-full shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl md:text-2xl italic font-bold tracking-wide">
            GPdI Sahala Palembang
          </span>
        </div>

        <div class="hidden md:flex flex-1 justify-end items-center">
          <ul class="flex space-x-4 lg:space-x-6 mr-6">
            <li v-for="item in menuItems" :key="item.text">
              <a :href="item.href" class="text-[10px] lg:text-xs font-bold uppercase hover:text-yellow-400 transition tracking-tighter lg:tracking-normal">
                {{ item.text }}
              </a>
            </li>
          </ul>

          <div class="flex items-center border-l border-gray-700 pl-4">
            <img src="https://flagcdn.com/id.svg" alt="ID" class="w-5 h-3 mr-1 rounded-sm border border-white" />
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
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
        <a v-for="item in menuItems" 
           :key="item.text" 
           :href="item.href" 
           class="block px-3 py-2 rounded-md text-sm font-bold uppercase text-white hover:bg-neutral-800 hover:text-yellow-400 transition">
          {{ item.text }}
        </a>
        <div class="flex items-center px-3 py-2 mt-2 border-t border-gray-800 pt-4">
          <img src="https://flagcdn.com/id.svg" alt="ID" class="w-6 h-4 mr-2 rounded-sm border border-white" />
          <span class="text-xs font-bold">INDONESIA</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

// State untuk buka/tutup menu di HP
const mobileMenuOpen = ref(false);

// Data menu agar kode lebih bersih dan mudah diedit
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
</script>

<style scoped>
/* Pastikan font Montserrat sudah terpasang jika ingin menggunakannya */
nav {
  font-family: 'Montserrat', sans-serif;
}
</style>