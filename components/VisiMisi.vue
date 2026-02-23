<template>
  <section class="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
    <div 
      class="absolute inset-0 bg-center bg-cover grayscale contrast-125 md:bg-fixed" 
      :style="{ backgroundImage: 'url(/logos/section1.jpg)' }"
    ></div>

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center text-white">
      <h2 class="text-4xl md:text-7xl font-serif font-bold italic mb-8 tracking-tighter animate-fade-in">
        GPdI Sahala Palembang
      </h2>

      <div class="space-y-6">
        <p class="text-base md:text-xl leading-relaxed font-italic tracking-wide uppercase px-2 md:px-10">
          GPdI Sahala Palembang adalah komunitas iman yang berlandaskan kasih Kristus, berdedikasi untuk membangun generasi yang kuat dalam iman dan karakter. Kami percaya pada kuasa transformasi Roh Kudus yang bekerja di tengah jemaat.
        </p>

        <p class="text-base md:text-xl leading-relaxed font-italic tracking-wide uppercase px-2 md:px-10">
          Menjangkau berbagai kalangan di kota Palembang melalui berbagai pelayanan kasih, misi sosial, dan pembinaan jemaat yang konsisten untuk kemuliaan nama Tuhan.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
</style>