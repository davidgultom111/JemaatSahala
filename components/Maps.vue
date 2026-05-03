<template>
  <section class="w-full py-24 bg-white relative overflow-hidden">

    <!-- Subtle background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#00334e]/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 bg-[#00334e]/8 border border-[#00334e]/15 text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Temukan Kami
        </div>

        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Lokasi
          <span class="text-[#00334e]">Kami</span>
        </h2>

        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
        </div>

        <p class="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
          Kunjungi kami dan jadilah bagian dari keluarga GPdI Sahala Palembang
        </p>
      </div>

      <!-- Info + Map grid -->
      <div class="flex flex-col lg:flex-row gap-6 items-stretch">

        <!-- Info card -->
        <div class="lg:w-80 flex-shrink-0 bg-[#00334e] text-white rounded-2xl p-8 flex flex-col shadow-2xl shadow-[#00334e]/20 relative overflow-hidden">

          <!-- Card decoration -->
          <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-yellow-400/5 pointer-events-none"></div>
          <div class="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/3 pointer-events-none"></div>

          <!-- Icon + Name -->
          <div class="relative mb-8">
            <div class="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-5 shadow-lg shadow-yellow-400/30">
              <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-xl font-black leading-snug text-white">GPdI Sahala<br />Palembang</h3>
          </div>

          <!-- Info rows -->
          <div class="relative flex flex-col gap-5 flex-1">

            <!-- Address -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[11px] text-yellow-400 font-bold uppercase tracking-widest mb-0.5">Alamat</p>
                <p class="text-sm text-gray-200 leading-relaxed">
                  Jl. Soak Permai Lrg. Sahabat Bondol, Sukajaya, Kec. Sukarami, Kota Palembang
                </p>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-white/10"></div>

            <!-- Email -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-[11px] text-yellow-400 font-bold uppercase tracking-widest mb-0.5">Email</p>
                <p class="text-sm text-gray-200 break-all">gpdisahalapalembang@gmail.com</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-white/10"></div>

            <!-- Ibadah -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-[11px] text-yellow-400 font-bold uppercase tracking-widest mb-0.5">Ibadah Minggu</p>
                <p class="text-sm text-gray-200">Pkl. 09.00 WIB</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Map -->
        <div class="flex-1 min-h-[380px] md:min-h-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
          <!-- Map corner badge -->
          <div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 text-[#00334e] text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            GPdI Sahala Palembang
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.442938166649!2d104.7330643!3d-2.9186003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75c8d8b4c73f%3A0x892a0e5b7b9b7b9b!2sGPdI%20SAHABAT%20ALLAH%20PALEMBANG!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style="border: 0; display: block;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
