<template>
  <div class="bg-yellow-400 py-2.5 overflow-hidden">
    <div class="flex whitespace-nowrap animate-marquee">
      <span v-for="i in 8" :key="i" class="inline-flex items-center gap-4 text-gray-900 font-bold uppercase tracking-widest px-6 text-xs">
        Berdiri Karena AnugerahNya
        <span class="w-1.5 h-1.5 rounded-full bg-gray-900/30 inline-block flex-shrink-0"></span>
        Diberkati Untuk Menjadi Berkat
        <span class="w-1.5 h-1.5 rounded-full bg-gray-900/30 inline-block flex-shrink-0"></span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
