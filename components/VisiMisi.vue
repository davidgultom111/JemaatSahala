<template>
  <section class="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden">

    <!-- Background image -->
    <div
      class="absolute inset-0 bg-center bg-cover md:bg-fixed grayscale"
      :style="{ backgroundImage: 'url(/logos/section1.jpg)' }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#00334e]/82"></div>

    <!-- Top accent -->
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-yellow-400"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
      <!-- Decorative icon -->
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-yellow-400/50 mb-6">
        <span class="text-yellow-400 text-lg font-bold">✛</span>
      </div>

      <h2 class="text-3xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
        GPdI Sahala Palembang
      </h2>
      <div class="w-16 h-0.5 bg-yellow-400 mx-auto mb-8 rounded-full"></div>

      <div class="space-y-5 text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        <p>
          GPdI Sahala Palembang adalah komunitas iman yang berlandaskan kasih Kristus, berdedikasi untuk membangun generasi yang kuat dalam iman dan karakter. Kami percaya pada kuasa transformasi Roh Kudus yang bekerja di tengah jemaat.
        </p>
        <p>
          Menjangkau berbagai kalangan di kota Palembang melalui berbagai pelayanan kasih, misi sosial, dan pembinaan jemaat yang konsisten untuk kemuliaan nama Tuhan.
        </p>
      </div>
    </div>

    <!-- Bottom accent -->
    <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-400/40"></div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
