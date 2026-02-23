<template>
  <div class="flex items-center justify-center py-8 px-4 w-full">
    <div class="w-full max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl">
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-neutral-900">Login</h2>
        <p class="text-xs md:text-sm text-neutral-500 mt-2">Selamat datang kembali di GPdI Sahala</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs md:text-sm font-semibold text-neutral-700 mb-1">Nama</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            class="w-full px-4 py-3 text-sm rounded-xl border border-neutral-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition" 
            placeholder="Masukkan nama Anda" 
          />
        </div>

        <div>
          <label class="block text-xs md:text-sm font-semibold text-neutral-700 mb-1">Password</label>
          <input 
            v-model="password" 
            type="password" 
            required 
            class="w-full px-4 py-3 text-sm rounded-xl border border-neutral-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition" 
            placeholder="••••••••" 
          />
        </div>

        <button 
          type="submit" 
          class="w-full bg-[#00334e] text-white py-3 rounded-xl font-bold text-sm hover:bg-neutral-800 transition duration-300 active:scale-95"
        >
          Masuk
        </button>
      </form>

      <p class="text-center text-xs text-neutral-500 mt-6">
        Belum punya akun? <a href="/Register" class="text-yellow-600 font-bold hover:underline">Daftar sekarang</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Login dengan:", email.value, password.value);
  alert("Fitur login sedang dikembangkan!");
};
</script>