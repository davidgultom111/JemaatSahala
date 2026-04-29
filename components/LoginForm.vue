<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router  = useRouter()
const auth    = useAuth()
const loading = ref(false)
const errorMsg = ref<string | null>(null)
const form    = ref({ id_jemaat: '', password: '' })

const handleLogin = async () => {
  loading.value  = true
  errorMsg.value = null
  try {
    await auth.login(form.value.id_jemaat, form.value.password)
    await router.push('/profile')
  } catch (err: any) {
    errorMsg.value = err.data?.message ?? 'ID atau password salah.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex items-center justify-center py-8 px-4 w-full">
    <div class="w-full max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl">
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-neutral-900">Login</h2>
        <p class="text-xs md:text-sm text-neutral-500 mt-2">Selamat datang kembali di GPdI Sahala Palembang</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs md:text-sm font-semibold text-neutral-700 mb-1">ID Anggota</label>
          <input
            v-model="form.id_jemaat"
            type="text"
            required
            autocomplete="username"
            placeholder="Masukkan ID Jemaat Anda"
            class="w-full px-4 py-3 text-sm rounded-xl border border-neutral-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label class="block text-xs md:text-sm font-semibold text-neutral-700 mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            required
            autocomplete="current-password"
            placeholder="••••••••"
            class="w-full px-4 py-3 text-sm rounded-xl border border-neutral-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
          />
        </div>

        <p v-if="errorMsg" class="text-xs text-red-500 text-center">{{ errorMsg }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#00334e] text-white py-3 rounded-xl font-bold text-sm hover:bg-neutral-800 transition duration-300 active:scale-95 disabled:opacity-50"
        >
          {{ loading ? 'Memproses...' : 'Masuk' }}
        </button>
      </form>
    </div>
  </div>
</template>
