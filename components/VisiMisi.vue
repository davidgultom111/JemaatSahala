<template>
  <section class="relative w-full overflow-hidden">

    <!-- Background image (grayscale) -->
    <div
      class="absolute inset-0 bg-center bg-cover md:bg-fixed grayscale"
      :style="{ backgroundImage: 'url(/logos/section1.jpg)' }"
    ></div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-[#00334e]/88"></div>

    <!-- Dot pattern -->
    <div
      class="absolute inset-0 opacity-[0.04] pointer-events-none"
      style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 30px 30px;"
    ></div>

    <!-- Glow blobs -->
    <div class="absolute -top-20 left-1/4 w-96 h-96 bg-yellow-400/6 rounded-full blur-[80px] pointer-events-none"></div>
    <div class="absolute -bottom-20 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-[80px] pointer-events-none"></div>

    <!-- Top accent -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-24">

      <!-- Section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          <span class="text-base leading-none">✛</span>
          Tentang Gereja
        </div>

        <h2 class="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          GPdI Sahala
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Palembang
          </span>
        </h2>

        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="h-[2px] w-4 bg-yellow-400/40 rounded-full"></div>
          <div class="h-[2px] w-2 bg-yellow-400/20 rounded-full"></div>
        </div>

        <p class="text-sky-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Komunitas iman yang berlandaskan kasih Kristus, berdedikasi membangun
          generasi yang kuat dalam iman dan karakter melalui kuasa Roh Kudus.
        </p>
      </div>

      <!-- Visi & Misi Cards -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Visi Card -->
        <div class="group relative bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/15 hover:border-yellow-400/40 rounded-2xl p-8 transition-all duration-300 overflow-hidden">
          <!-- Card glow on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"></div>

          <!-- Card header -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <div class="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-0.5">01</div>
              <div class="text-white font-bold text-xl">Visi</div>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-yellow-400/40 to-transparent mb-6"></div>

          <p class="text-white text-sm md:text-base leading-relaxed">
            Menjadi gereja yang bertumbuh dalam iman, bersatu dalam kasih, dan
            berdampak nyata bagi masyarakat Palembang untuk kemuliaan nama
            Tuhan Yesus Kristus.
          </p>
        </div>

        <!-- Misi Card -->
        <div class="group relative bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/15 hover:border-yellow-400/40 rounded-2xl p-8 transition-all duration-300 overflow-hidden">
          <!-- Card glow on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"></div>

          <!-- Card header -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
              </svg>
            </div>
            <div>
              <div class="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-0.5">02</div>
              <div class="text-white font-bold text-xl">Misi</div>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-yellow-400/40 to-transparent mb-6"></div>

          <ul class="space-y-3.5">
            <li class="flex items-start gap-3 text-white text-sm md:text-base leading-relaxed">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
              Memberitakan Injil kepada setiap jiwa di kota Palembang.
            </li>
            <li class="flex items-start gap-3 text-white text-sm md:text-base leading-relaxed">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
              Membina jemaat melalui pengajaran Firman Tuhan yang konsisten.
            </li>
            <li class="flex items-start gap-3 text-white text-sm md:text-base leading-relaxed">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
              Menjangkau masyarakat melalui pelayanan kasih dan misi sosial.
            </li>
            <li class="flex items-start gap-3 text-white text-sm md:text-base leading-relaxed">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
              Membangun generasi muda yang berkarakter Kristus.
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom verse / quote -->
      <div class="mt-14 text-center">
        <div class="inline-flex items-center gap-3 text-yellow-200 text-sm italic">
          <div class="h-px w-10 bg-yellow-400/40"></div>
          <span>&ldquo;Kasihilah Tuhan, Allahmu, dengan segenap hatimu&rdquo; &mdash; Mat. 22:37</span>
          <div class="h-px w-10 bg-yellow-400/40"></div>
        </div>
      </div>
    </div>

    <!-- Bottom accent -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
  </section>
</template>
