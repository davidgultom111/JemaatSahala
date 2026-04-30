<template>
  <section class="w-full py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase mb-3">Temukan Kami</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokasi Kami</h2>
        <div class="w-12 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      <!-- Info card + Map -->
      <div class="flex flex-col lg:flex-row gap-6 items-stretch">

        <!-- Info card -->
        <div class="lg:w-72 flex-shrink-0 bg-[#00334e] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div class="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/30">
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-3">GPdI Sahala Palembang</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Jl. Soak Permai Lrg. Sahabat Bondol, Sukajaya, Kec. Sukarami, Kota Palembang
            </p>
          </div>

          <div class="mt-8 pt-6 border-t border-white/15">
            <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">Email</p>
            <p class="text-sm font-medium break-all text-gray-200">gpdisahalapalembang@gmail.com</p>
          </div>
        </div>

        <!-- Map -->
        <div class="flex-1 h-[350px] md:h-[430px] rounded-3xl shadow-lg overflow-hidden border-4 border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.442938166649!2d104.7330643!3d-2.9186003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75c8d8b4c73f%3A0x892a0e5b7b9b7b9b!2sGPdI%20SAHABAT%20ALLAH%20PALEMBANG!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
