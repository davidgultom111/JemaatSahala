<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Hero Header -->
    <div class="relative bg-[#00334e] overflow-hidden py-24 px-4">
      <div class="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-white/5 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <span class="inline-block text-yellow-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">GPdI Sahala Palembang</span>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">Pelayan Tuhan</h1>
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 bg-yellow-400/60"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-px w-16 bg-yellow-400/60"></div>
        </div>
        <p class="text-gray-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Mengenal para hamba Tuhan yang dengan setia melayani di GPdI Sahala Palembang.
        </p>
      </div>
    </div>

    <!-- Featured: Gembala Sidang -->
    <div class="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-2/5 relative">
            <img
              :src="staffList[0].image"
              :alt="staffList[0].name"
              class="w-full h-64 md:h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent"></div>
          </div>
          <div class="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <span class="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 w-fit">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              {{ staffList[0].role }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              {{ staffList[0].name }}
            </h2>
            <p class="text-gray-500 leading-relaxed mb-7 text-sm md:text-base">
              {{ staffList[0].description }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in staffList[0].socials"
                :key="social.name"
                :href="social.link"
                class="inline-flex items-center gap-2 bg-[#00334e] hover:bg-[#004d73] text-white text-sm px-5 py-2.5 rounded-full transition-colors font-medium"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tim Pelayanan Grid -->
    <div class="max-w-6xl mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <span class="inline-block text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase mb-3">Struktur Pelayanan</span>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Tim Pelayanan</h2>
        <div class="w-12 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          v-for="(staff, index) in staffList.slice(1)"
          :key="index"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group"
        >
          <!-- Card Image -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="staff.image"
              :alt="staff.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="inline-block text-xs font-semibold bg-yellow-400 text-gray-900 px-3 py-1 rounded-full shadow">
                {{ staff.role }}
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-5">
            <h3 class="text-base font-bold text-gray-900 mb-1.5 leading-snug">{{ staff.name }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ staff.description }}</p>
            <div class="flex gap-2 flex-wrap">
              <a
                v-for="social in staff.socials"
                :key="social.name"
                :href="social.link"
                class="text-xs text-[#00334e] border border-[#00334e]/25 hover:bg-[#00334e] hover:text-white hover:border-[#00334e] px-3 py-1.5 rounded-full transition-all font-medium"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const staffList = [
  { name: "Pdt. Tamrin Gultom, S.Th", role: "Gembala Sidang", description: "Gembala Sidang GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Instagram", link: "#" }] },
  { name: "Bpk. Alpon Sinaga", role: "Pembela Sidang", description: "Pembela Sidang GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Bpk. Theodorus Panjaitan", role: "Pembela Sidang", description: "Pembela Sidang GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Bpk. Pramono", role: "Sekretariat", description: "Sekretariat GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Sdra. David Gultom", role: "Bendahara", description: "Bendahara GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Bpk. Santo Siburian", role: "Koordinator Musik", description: "Koordinator Musik GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Ibu. Melphi Gultom", role: "Koordinator Pelayanan Altar", description: "Koordinator Pelayanan Altar GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Sdri. Linda Butar-butar", role: "Koordinator Pelayanan Anak", description: "Koordinator Pelayanan Anak GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Sdra. Hendra Tambunan", role: "Koordinator Sahala Community", description: "Koordinator Sahala Community GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
  { name: "Ibu. Bunga Silitonga", role: "Koordinator Tim Sosial", description: "Koordinator Tim Sosial GPdI Sahala Palembang.", image: "/images/pastor.jpg", socials: [{ name: "Facebook", link: "#" }] },
];
</script>
