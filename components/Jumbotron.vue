<template>
  <div class="relative w-full min-h-screen md:h-screen flex flex-col-reverse md:flex-row bg-[#00334e] overflow-hidden">

    <!-- Left: Text -->
    <div class="w-full md:w-1/2 flex items-center justify-center px-8 py-16 md:px-16 z-10">
      <div class="max-w-lg text-center md:text-left">
        <span class="inline-block text-yellow-400 text-xs font-bold tracking-[0.35em] uppercase mb-5 animate-fade-in" style="animation-delay: 0.1s">
          Selamat Datang di
        </span>
        <h1 class="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in" style="animation-delay: 0.3s">
          GPdI<br />Sahala<br /><span class="text-yellow-400">Palembang</span>
        </h1>
        <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-8 animate-fade-in" style="animation-delay: 0.5s">
          Bergabunglah dengan komunitas kami dalam ibadah dan pelayanan
        </p>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in" style="animation-delay: 0.7s">
          <a href="/gereja"
            class="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg shadow-yellow-400/20">
            Kenali Pelayan Kami
          </a>
          <a href="/login"
            class="border border-white/30 hover:border-white/70 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full transition">
            Masuk
          </a>
        </div>
      </div>
    </div>

    <!-- Right: Image -->
    <div class="w-full md:w-1/2 relative h-64 md:h-full animate-fade-in" style="animation-delay: 0.2s">
      <img src="/logos/jumbotron.jpg" alt="Church Interior" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#00334e] via-[#00334e]/40 to-transparent"></div>
    </div>

    <!-- Bottom accent line -->
    <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.9s ease-out forwards;
}
</style>
