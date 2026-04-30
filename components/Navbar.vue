<template>
  <nav class="bg-[#00334e] text-white w-full sticky top-0 z-50 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 flex-shrink-0">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-8 w-auto" />
          <span class="text-sm md:text-base font-bold tracking-wide">
            GPdI Sahala <span class="text-yellow-400">Palembang</span>
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in menuItems"
            :key="item.text"
            :href="item.href"
            class="relative text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-md hover:text-yellow-400 transition-colors duration-200
                   after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-yellow-400
                   after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            {{ item.text }}
          </a>
        </div>

        <!-- Mobile Burger -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="menu">
      <div v-if="mobileMenuOpen" class="lg:hidden border-t border-white/10 bg-[#002b42]">
        <div class="px-4 py-3 space-y-0.5">
          <a
            v-for="item in menuItems"
            :key="item.text"
            :href="item.href"
            class="flex items-center px-3 py-3 text-sm font-semibold uppercase tracking-wide
                   hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-colors
                   border-b border-white/5 last:border-0"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const mobileMenuOpen = ref(false);

const menuItems = [
  { text: "Beranda", href: "/" },
  { text: "Pelayan", href: "/gereja" },
//  { text: "Ibadah", href: "/ibadah" },
 // { text: "Terhubung", href: "/terhubung" },
 // { text: "Media", href: "/media" },
 // { text: "Memberi", href: "/memberi" },
 // { text: "Misi", href: "/misi" },
 // { text: "Pelayanan", href: "/pelayanan" },
//  { text: "MSJ", href: "/msj" },
  { text: "Login", href: "/login" },
];
</script>

<style scoped>
nav { font-family: "Montserrat", sans-serif; }

.menu-enter-active,
.menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
