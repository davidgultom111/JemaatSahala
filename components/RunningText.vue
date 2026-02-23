<template>
  <div class="bg-neutral-900 border-y border-gray-800 py-3 overflow-hidden shadow-md">
    <div class="flex whitespace-nowrap animate-marquee px-2">
      <span v-for="i in 6" :key="i" class="text-white font-bold uppercase tracking-widest px-4 text-xs md:text-sm"> 
        Berdiri Karena Anugrahnya &nbsp; | &nbsp; Diberkati Untuk Menjadi Berkat &nbsp; | 
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  /* Durasi diatur 20s agar lebih dinamis di layar ponsel */
  animation: marquee 20s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>