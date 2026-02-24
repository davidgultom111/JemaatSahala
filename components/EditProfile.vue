<template>
  <div class="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 font-sans">
    <h2 class="text-2xl font-bold text-neutral-900 mb-6 text-center">Edit Profil</h2>

    <form @submit.prevent="saveProfile" class="space-y-5">
      <div>
        <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Nama Lengkap</label>
        <input v-model="form.name" type="text" class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition" />
      </div>

      <div>
        <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Jenis Kelamin</label>
        <select v-model="form.gender" class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition bg-transparent">
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Tempat, Tgl Lahir</label>
        <input v-model="form.birthDate" type="text" class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition" />
      </div>

      <div>
        <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">No. Telp</label>
        <input v-model="form.phone" type="tel" class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition" />
      </div>

      <div>
        <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Alamat Rumah</label>
        <textarea v-model="form.address" class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition resize-none"></textarea>
      </div>

      <div class="pt-4 flex gap-4">
        <button 
          type="button" 
          @click="handleCancel" 
          class="flex-1 py-3 rounded-full font-bold text-neutral-500 hover:bg-neutral-100 transition"
        >
          Batal
        </button>
        <button type="submit" class="flex-1 bg-[#00334e] text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition shadow-md">
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Tambahkan router untuk navigasi

const router = useRouter();

const form = ref({
  name: "John Doe",
  gender: "Laki-laki",
  birthDate: "Palembang, 15 Mei 1995",
  phone: "0812-3456-7890",
  address: "Jl. Kolonel H. Burlian No. 123, Palembang"
});

// Fungsi untuk menangani pembatalan
const handleCancel = () => {
  const confirmed = confirm("Apakah Anda yakin ingin keluar? Perubahan tidak akan disimpan.");
  if (confirmed) {
    router.push('/profile'); // Kembali ke halaman profil
  }
};

const saveProfile = () => {
  console.log("Data tersimpan:", form.value);
  alert("Profil berhasil diperbarui!");
  router.push('/profile'); // Otomatis kembali setelah simpan
};
</script>