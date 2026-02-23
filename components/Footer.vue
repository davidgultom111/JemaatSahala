<template>
  <footer class="bg-neutral-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
      
      <div class="text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start mb-6">
          <img src="/logos/logo gpdi.png" alt="Logo GPdI" class="h-10 w-auto mr-3" />
          <span class="text-xl font-bold italic">GPdI Sahala Palembang</span>
        </div>
        <p class="text-gray-400 leading-relaxed text-sm md:text-base">
          Gereja Pantekosta di Indonesia Sahala Palembang berkomitmen untuk melayani dengan kasih dan membawa jiwa-jiwa kepada Kristus.
        </p>
      </div>

      <div class="text-center md:text-left">
        <h4 class="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block md:block">
          Kontak Kami
        </h4>
        <ul class="text-gray-400 space-y-4 text-sm md:text-base">
          <li>
            <p class="leading-relaxed">Jl. Soak Permai Lrg. Sahabat Bondol, Sukajaya, Kec. Sukarami, Kota Palembang</p>
          </li>
          <li>
            <p class="break-all">gpdisahalapalembang@gmail.com</p>
          </li>
        </ul>
      </div>

      <div class="text-center md:text-left">
        <h4 class="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block md:block">
          Sosial Media
        </h4>
        <div class="flex justify-center md:justify-start space-x-6">
          <a href="https://www.instagram.com/gpdisahalapalembang?igsh=MXd4czU3eHB2ZDd2bw==" target="_blank" 
             class="text-gray-400 hover:text-yellow-400 transition text-sm">Instagram</a>
          <a href="https://www.facebook.com/share/1LPaDsoEGm/" target="_blank" 
             class="text-gray-400 hover:text-yellow-400 transition text-sm">Facebook</a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 text-center border-t border-gray-800 pt-8">
      <p class="text-gray-500 text-xs md:text-sm">
        &copy; {{ new Date().getFullYear() }} GPdI Sahala Palembang. All rights reserved.
      </p>
    </div>
  </footer>
</template>