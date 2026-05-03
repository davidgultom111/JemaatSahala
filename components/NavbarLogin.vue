<template>
  <nav class="bg-[#00334e] border-b border-white/10 text-white w-full sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Back link -->
        <a href="/" class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-yellow-400 transition-colors duration-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </a>

        <!-- Logo + name -->
        <div class="flex items-center gap-2.5">
          <span class="text-sm font-bold tracking-wide text-white hidden sm:block">GPdI Sahala Palembang</span>
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-8 w-auto" />
        </div>

      </div>
    </div>
  </nav>
</template>
