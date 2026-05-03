<template>
  <div>

    <!-- ── Hero ── -->
    <div class="relative bg-[#00334e] overflow-hidden py-28 px-4">

      <!-- Decorations -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-[100px]"></div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/4 blur-[80px]"></div>
      </div>
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 28px 28px;"
      ></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
          GPdI Sahala Palembang
        </div>

        <h1 class="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
          Pelayan
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Tuhan
          </span>
        </h1>

        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
        </div>

        <p class="text-gray-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Mengenal para hamba Tuhan yang dengan setia melayani di GPdI Sahala Palembang.
        </p>
      </div>
    </div>

    <!-- ── Featured: Gembala Sidang ── -->
    <div class="max-w-5xl mx-auto px-4 -mt-10 relative z-10 mb-6">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="flex flex-col md:flex-row">

          <!-- Photo -->
          <div class="md:w-2/5 relative">
            <img
              :src="staffList[0].image"
              :alt="staffList[0].name"
              class="w-full h-64 md:h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>
          </div>

          <!-- Info -->
          <div class="md:w-3/5 px-8 py-10 flex flex-col justify-center relative overflow-hidden">
            <!-- Subtle decoration -->
            <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00334e]/4 pointer-events-none"></div>

            <span class="inline-flex items-center gap-1.5 bg-yellow-400/15 border border-yellow-400/30 text-yellow-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5 w-fit">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              {{ staffList[0].role }}
            </span>

            <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
              {{ staffList[0].name }}
            </h2>

            <div class="h-[2px] w-10 bg-yellow-400 rounded-full mb-4"></div>

            <p class="text-gray-500 leading-relaxed mb-7 text-sm md:text-base">
              {{ staffList[0].description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <a
                v-for="social in staffList[0].socials"
                :key="social.name"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#00334e] hover:bg-[#004a70] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#00334e]/15"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Tim Pelayanan Grid ── -->
    <div class="max-w-6xl mx-auto px-4 py-20">

      <!-- Section header -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 bg-[#00334e]/8 border border-[#00334e]/15 text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Struktur Pelayanan
        </div>

        <h2 class="text-2xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
          Tim <span class="text-[#00334e]">Pelayanan</span>
        </h2>

        <div class="flex items-center justify-center gap-3">
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div class="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <!-- Staff cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(staff, index) in staffList.slice(1)"
          :key="index"
          class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden border border-gray-100"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="staff.image"
              :alt="staff.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <!-- Role badge on image -->
            <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span class="inline-block text-[11px] font-black bg-yellow-400 text-gray-900 px-3 py-1 rounded-full shadow">
                {{ staff.role }}
              </span>
              <!-- Number badge -->
              <span class="text-white/30 text-3xl font-black leading-none tabular-nums">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5">
            <h3 class="text-sm md:text-base font-bold text-gray-900 mb-1.5 leading-snug">{{ staff.name }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed mb-4">{{ staff.description }}</p>

            <div class="flex gap-2 flex-wrap">
              <a
                v-for="social in staff.socials"
                :key="social.name"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs text-[#00334e] border border-[#00334e]/20 hover:bg-[#00334e] hover:text-white hover:border-[#00334e] px-3 py-1.5 rounded-full transition-all duration-200 font-bold"
              >
                {{ social.name }}
              </a>
            </div>
          </div>

          <!-- Bottom hover accent -->
          <div class="h-[3px] mx-5 mb-5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const staffList = [
  { name: "Pdt. Tamrin Gultom, S.Th", role: "Gembala Sidang",                  description: "Gembala Sidang GPdI Sahala Palembang.",                   image: "/images/pastor.jpg", socials: [{ name: "Instagram", link: "#" }] },
  { name: "Bpk. Alpon Sinaga",         role: "Pembela Sidang",                  description: "Pembela Sidang GPdI Sahala Palembang.",                   image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Bpk. Theodorus Panjaitan",  role: "Pembela Sidang",                  description: "Pembela Sidang GPdI Sahala Palembang.",                   image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Bpk. Pramono",              role: "Sekretariat",                     description: "Sekretariat GPdI Sahala Palembang.",                     image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Sdra. David Gultom",        role: "Bendahara",                       description: "Bendahara GPdI Sahala Palembang.",                       image: "/images/pastor.jpg", socials: [{ name: "Instagram", link: "https://www.instagram.com/gulltommmm?igsh=MTNzY2hoOHE3bnIybw==" }] },
  { name: "Bpk. Santo Siburian",       role: "Koordinator Musik",               description: "Koordinator Musik GPdI Sahala Palembang.",               image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Ibu. Melphi Gultom",        role: "Koordinator Pelayanan Altar",     description: "Koordinator Pelayanan Altar GPdI Sahala Palembang.",     image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Sdri. Linda Butar-butar",   role: "Koordinator Pelayanan Anak",      description: "Koordinator Pelayanan Anak GPdI Sahala Palembang.",      image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Sdra. Hendra Tambunan",     role: "Koordinator Sahala Community",    description: "Koordinator Sahala Community GPdI Sahala Palembang.",    image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
  { name: "Ibu. Bunga Silitonga",      role: "Koordinator Tim Sosial",          description: "Koordinator Tim Sosial GPdI Sahala Palembang.",          image: "/images/pastor.jpg", socials: [{ name: "Facebook",  link: "#" }] },
]
</script>
