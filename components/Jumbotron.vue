<template>
  <div class="relative w-full min-h-screen flex flex-col-reverse md:flex-row bg-[#00334e] overflow-hidden">

    <!-- Decorative glow blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-yellow-400/6 blur-[100px]"></div>
      <div class="absolute top-1/2 -right-56 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-[120px]"></div>
      <div class="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-white/3 blur-3xl"></div>
    </div>

    <!-- Subtle grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 56px 56px;"
    ></div>

    <!-- Left: Text -->
    <div class="w-full md:w-1/2 flex items-center justify-center px-8 py-24 md:px-16 z-10 relative">

      <!-- Vertical accent line -->
      <div class="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block"></div>

      <div class="max-w-lg text-center md:text-left">

        <!-- Animated badge -->
        <div
          class="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 animate-fade-in"
          style="animation-delay: 0.1s"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
          Selamat Datang di
        </div>

        <!-- Title -->
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-in"
          style="animation-delay: 0.3s"
        >
          GPdI<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Sahala
          </span><br />
          Palembang
        </h1>

        <!-- Divider accent -->
        <div class="flex items-center gap-3 mb-6 justify-center md:justify-start animate-fade-in" style="animation-delay: 0.4s">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="h-[2px] w-4 bg-yellow-400/40 rounded-full"></div>
          <div class="h-[2px] w-2 bg-yellow-400/20 rounded-full"></div>
        </div>

        <!-- Description -->
        <p
          class="text-gray-300 text-base md:text-lg leading-relaxed mb-10 animate-fade-in"
          style="animation-delay: 0.5s"
        >
          Bergabunglah dengan komunitas kami dalam ibadah, pelayanan,
          dan persekutuan yang penuh kasih dan sukacita.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in"
          style="animation-delay: 0.7s"
        >
          <a
            href="/gereja"
            class="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/50 hover:scale-105 active:scale-95"
          >
            Kenali Pelayan Kami
          </a>
          <a
            href="/login"
            class="border border-white/25 hover:border-yellow-400/60 text-white hover:text-yellow-400 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-yellow-400/5"
          >
            Masuk &rarr;
          </a>
        </div>

        <!-- Stats row -->
        <div
          class="flex gap-6 mt-14 justify-center md:justify-start animate-fade-in"
          style="animation-delay: 0.9s"
        >
          <div class="text-center md:text-left">
            <div class="text-2xl font-extrabold text-white">100+</div>
            <div class="text-xs text-gray-400 tracking-wide mt-0.5">Jemaat</div>
          </div>
          <div class="w-px bg-white/10 self-stretch"></div>
          <div class="text-center md:text-left">
            <div class="text-2xl font-extrabold text-white">10+</div>
            <div class="text-xs text-gray-400 tracking-wide mt-0.5">Pelayan Aktif</div>
          </div>
          <div class="w-px bg-white/10 self-stretch"></div>
          <div class="text-center md:text-left">
            <div class="text-2xl font-extrabold text-white">2001</div>
            <div class="text-xs text-gray-400 tracking-wide mt-0.5">Tahun Berdiri</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Image -->
    <div class="w-full md:w-1/2 relative h-72 md:h-full animate-fade-in" style="animation-delay: 0.2s">

      <!-- Decorative border frame -->
      <div class="absolute inset-6 border border-yellow-400/20 rounded-2xl z-20 pointer-events-none hidden md:block"></div>

      <img
        src="/logos/jumbotron.jpg"
        alt="Church Interior"
        class="w-full h-full object-cover object-center"
      />

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#00334e] via-[#00334e]/30 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#00334e]/20 to-transparent"></div>

      <!-- Floating info card -->
      <div
        class="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 hidden md:block animate-fade-in z-20 shadow-xl"
        style="animation-delay: 1.1s"
      >
        <div class="flex items-center gap-2 mb-1">
          <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          <span class="text-yellow-400 font-bold text-sm">Ibadah Minggu</span>
        </div>
        <div class="text-white text-xs opacity-70">Pkl. 09.00</div>
      </div>
    </div>

    <!-- Bottom accent line -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden md:flex animate-fade-in" style="animation-delay: 1.2s">
      <div class="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</div>
      <div class="scroll-line w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.9s ease-out forwards;
}

@keyframes scrollDrop {
  0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
  60%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
}

.scroll-line {
  animation: scrollDrop 2s ease-in-out infinite;
}
</style>
