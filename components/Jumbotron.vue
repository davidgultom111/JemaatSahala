<template>
  <div class="relative w-full min-h-[60vh] md:h-[70vh] flex flex-col-reverse md:flex-row bg-[#00334e] overflow-hidden">
    
    <div class="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:px-16 z-10 text-center md:text-left">
      <div class="max-w-xl">
        <h4 class="text-2xl md:text-4xl text-gray-200 font-light tracking-wide italic animate-fade-in mb-4" style="animation-delay: 0.2s">
          Welcome to
        </h4>
        <h1 class="text-4xl md:text-7xl font-serif font-bold text-white leading-tight animate-fade-in mb-6" style="animation-delay: 0.4s">
          GPdI <br class="hidden md:block" /> Sahala <br class="hidden md:block" /> Palembang
        </h1>
        <p class="text-base md:text-xl text-gray-200 font-light tracking-wide italic animate-fade-in" style="animation-delay: 0.6s">
          Bergabunglah dengan komunitas kami dalam ibadah dan pelayanan
        </p>
      </div>
    </div>

    <div class="w-full md:w-1/2 relative h-48 md:h-full animate-fade-in" style="animation-delay: 0.8s">
      <img src="/logos/jumbotron.jpg" alt="Church Interior" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#00334e] to-transparent"></div>
    </div>
  </div><br>
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