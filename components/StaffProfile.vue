<template>
  <div class="bg-neutral-50 min-h-screen">
    <div class="max-w-7xl mx-auto text-center py-12 px-4">
      <h4 class="text-lg md:text-2xl font-serif text-neutral-500 italic tracking-[0.2em] uppercase">Pelayan-pelayan</h4>
      <h1 class="text-3xl md:text-6xl font-serif font-bold text-neutral-900 mt-2 tracking-tight">GPdI Sahala Palembang</h1>
      <div class="w-20 h-[3px] bg-yellow-500 mx-auto mt-4"></div>
    </div>

    <div class="max-w-7xl mx-auto space-y-6 pb-20 px-4">
      <section 
        v-for="(staff, index) in staffList" 
        :key="index" 
        :style="{ backgroundColor: getBgColor(index) }"
        class="w-full py-8 px-6 md:py-12 md:px-16 rounded-3xl shadow-lg transition-colors duration-500"
      >
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div class="w-full md:w-1/3 flex justify-center pt-4 md:pt-0">
            <div class="relative w-32 h-32 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white/10">
              <img :src="staff.image" :alt="staff.name" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="w-full md:w-2/3 text-white text-center md:text-left flex flex-col items-center md:items-start">
            <h3 class="font-bold md:text-lg mb-2 opacity-90">{{ staff.role }}</h3>
            <h2 class="text-3xl md:text-5xl font-bold mb-3">{{ staff.name }}</h2>
            <p class="text-gray-200 leading-relaxed mb-6 text-sm md:text-xl max-w-2xl">{{ staff.description }}</p>

            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <a v-for="social in staff.socials" :key="social.name" :href="social.link" 
                 class="border border-white/40 hover:bg-white hover:text-gray-900 px-6 py-2 rounded-full text-xs font-semibold transition">
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Daftar warna yang cocok dengan teks putih (Deep tones)
const colors = ["#00334e", "#1b3a2a", "#3c2a4d", "#2d2d2d", "#2e3a46"];

// Fungsi untuk memilih warna secara berulang (loop)
const getBgColor = (index) => {
  return colors[index % colors.length];
};

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