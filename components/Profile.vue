<template>
  <div class="w-full max-w-sm mx-auto bg-neutral-50 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 font-sans">
    
    <div class="flex flex-col items-center mb-8">
      <div class="relative">
        <img 
          :src="profileImage" 
          alt="Foto Profil" 
          class="w-32 h-32 rounded-full object-cover border-4 border-neutral-100 shadow-md"
        />
        
        <input 
          type="file" 
          ref="fileInput" 
          class="hidden" 
          accept="image/*" 
          @change="handleImageUpload" 
        />
        
        <button 
          @click="$refs.fileInput.click()" 
          class="absolute bottom-0 right-0 bg-yellow-500 p-2 rounded-full text-white hover:bg-yellow-600 transition shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      
      <h2 class="text-2xl font-bold text-neutral-900 mt-4">John Doe</h2>
      <p class="text-neutral-500 text-sm font-medium">Anggota GPdI Sahala Palembang</p>
    </div>

    <div class="space-y-6 mb-8">
      <ProfileField label="Jenis Kelamin" :value="user.gender" />
      <ProfileField label="Tempat, Tgl Lahir" :value="user.birthDate" />
      <ProfileField label="No. Telp" :value="user.phone" />
      <ProfileField label="Alamat Rumah" :value="user.address" />
    </div>

    <NuxtLink to="/editprofile" class="block w-full text-center bg-[#00334e] text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition duration-300 shadow-md">
      Edit Profil
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profileImage = ref('/images/pastor.jpg');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result; // Update preview foto secara instan
    };
    reader.readAsDataURL(file);
    // Di sini Anda bisa menambahkan logika upload ke server atau database
  }
};

const user = {
  gender: "Laki-laki",
  birthDate: "Palembang, 15 Mei 1995",
  phone: "0812-3456-7890",
  address: "Jl. Kolonel H. Burlian No. 123, Palembang",
};
</script>