<script setup lang="ts">
const auth           = useAuth()
const mobileMenuOpen = ref(false)
const loggingOut     = ref(false)

const menuItems = [
  { text: 'Profile',   href: '/profile' },
  { text: 'Surat',     href: '/surat' },
  { text: 'Pengajuan', href: '/pengajuan' },
]

const handleLogout = async () => {
  if (!confirm('Apakah Anda yakin ingin keluar?')) return
  loggingOut.value = true
  await auth.logout()
}
</script>

<template>
  <nav class="bg-[#00334e] border-b border-white/10 text-white w-full sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-8 w-auto" />
          <span class="font-bold text-sm tracking-wide hidden sm:block">GPdI Sahala Palembang</span>
        </NuxtLink>

        <!-- Desktop menu -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.text"
            :to="item.href"
            class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-white/10 hover:text-yellow-400"
            active-class="bg-white/10 text-yellow-400"
          >
            {{ item.text }}
          </NuxtLink>

          <div class="w-px h-5 bg-white/20 mx-2"></div>

          <button
            @click="handleLogout"
            :disabled="loggingOut"
            class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-white/70 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 disabled:opacity-50"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {{ loggingOut ? 'Keluar...' : 'Logout' }}
          </button>
        </div>

        <!-- Mobile hamburger -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-[#002a3f] border-t border-white/10">
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.text"
            :to="item.href"
            class="flex items-center px-3 py-3 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 hover:text-yellow-400 transition"
            active-class="bg-white/10 text-yellow-400"
            @click="mobileMenuOpen = false"
          >
            {{ item.text }}
          </NuxtLink>
          <button
            @click="handleLogout"
            :disabled="loggingOut"
            class="w-full flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-bold text-white/60 hover:bg-red-400/10 hover:text-red-400 transition disabled:opacity-50"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {{ loggingOut ? 'Keluar...' : 'Logout' }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
