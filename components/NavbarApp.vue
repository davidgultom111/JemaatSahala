<script setup lang="ts">
const auth           = useAuth()
const mobileMenuOpen = ref(false)
const loggingOut     = ref(false)

const menuItems = [
  { text: 'PROFILE',   href: '/profile' },
  { text: 'SURAT',     href: '/surat' },
]

const handleLogout = async () => {
  if (!confirm('Apakah Anda yakin ingin keluar?')) return
  loggingOut.value = true
  await auth.logout()
}
</script>

<template>
  <nav class="bg-neutral-900 text-white w-full shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-8 w-auto mr-2" />
          <span class="text-sm md:text-xl font-bold tracking-wide italic truncate">GPdI Sahala Palembang</span>
        </div>

        <div class="hidden lg:flex flex-1 justify-end items-center gap-6">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.text"
            :to="item.href"
            class="text-xs font-bold uppercase hover:text-yellow-400 transition"
          >
            {{ item.text }}
          </NuxtLink>
          <button
            @click="handleLogout"
            :disabled="loggingOut"
            class="text-xs font-bold uppercase hover:text-yellow-400 transition disabled:opacity-50"
          >
            {{ loggingOut ? 'KELUAR...' : 'LOGOUT' }}
          </button>
        </div>

        <div class="lg:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white hover:text-yellow-400 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="lg:hidden absolute w-full bg-neutral-900 border-t border-gray-800 shadow-xl">
      <div class="px-4 py-4 space-y-1">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.text"
          :to="item.href"
          class="block px-3 py-3 text-base font-bold uppercase text-white hover:bg-neutral-800 hover:text-yellow-400 border-b border-neutral-800 transition"
          @click="mobileMenuOpen = false"
        >
          {{ item.text }}
        </NuxtLink>
        <button
          @click="handleLogout"
          :disabled="loggingOut"
          class="w-full text-left px-3 py-3 text-base font-bold uppercase text-white hover:bg-neutral-800 hover:text-yellow-400 transition disabled:opacity-50"
        >
          {{ loggingOut ? 'KELUAR...' : 'LOGOUT' }}
        </button>
      </div>
    </div>
  </nav>
  <br />
</template>

<style scoped>
nav { font-family: sans-serif; }
</style>
