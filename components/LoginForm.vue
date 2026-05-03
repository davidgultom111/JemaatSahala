<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router   = useRouter()
const auth     = useAuth()
const loading  = ref(false)
const errorMsg = ref<string | null>(null)
const showPass = ref(false)
const form     = ref({ id_jemaat: '', password: '' })

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
  <div class="flex flex-col md:flex-row w-full h-full">

    <!-- Left panel: branding -->
    <div class="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-[#00334e] flex-col items-center justify-center px-12 overflow-hidden">

      <!-- Decorative blobs -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/6 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute -bottom-32 -right-32 w-80 h-80 bg-yellow-400/5 rounded-full blur-[80px] pointer-events-none"></div>

      <!-- Dot pattern -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 28px 28px;"
      ></div>

      <!-- Vertical left accent -->
      <div class="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-xs">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-400 shadow-xl shadow-yellow-400/30 mb-8">
          <img src="/logos/logo gpdi.png" alt="Logo" class="h-9 w-auto" />
        </div>

        <h1 class="text-4xl font-black text-white leading-tight mb-3">
          GPdI<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Sahala
          </span><br />
          Palembang
        </h1>

        <div class="flex items-center justify-center gap-2 my-5">
          <div class="h-[2px] w-8 bg-yellow-400/60 rounded-full"></div>
          <span class="text-yellow-400 text-base">✛</span>
          <div class="h-[2px] w-8 bg-yellow-400/60 rounded-full"></div>
        </div>

        <p class="text-gray-300 text-sm leading-relaxed mb-8">
          Masuk untuk mengakses layanan digital jemaat GPdI Sahala Palembang.
        </p>

        <p class="text-gray-500 text-xs italic">
          &ldquo;Sebab di dalam Dia kita hidup, kita bergerak, kita ada&rdquo;<br />
          <span class="text-yellow-400/70 not-italic font-semibold">— Kis. 17:28</span>
        </p>
      </div>
    </div>

    <!-- Right panel: form -->
    <div class="flex-1 flex items-center justify-center bg-slate-50 px-6 py-14 md:py-0">
      <div class="w-full max-w-sm">

        <!-- Mobile logo -->
        <div class="flex items-center justify-center gap-2 mb-8 md:hidden">
          <img src="/logos/logo gpdi.png" alt="Logo" class="h-8 w-auto" />
          <span class="text-[#00334e] font-black text-lg">GPdI Sahala</span>
        </div>

        <!-- Heading -->
        <div class="mb-8">
          <p class="text-xs font-bold tracking-[0.3em] uppercase text-yellow-500 mb-2">Selamat datang kembali</p>
          <h2 class="text-3xl font-black text-gray-900">Masuk</h2>
          <p class="text-sm text-gray-500 mt-1.5">Gunakan ID jemaat dan password Anda.</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">

          <!-- ID Anggota -->
          <div>
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              ID Anggota
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                v-model="form.id_jemaat"
                type="text"
                required
                autocomplete="username"
                placeholder="Masukkan ID Jemaat Anda"
                class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all duration-200 shadow-sm"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                v-model="form.password"
                :type="showPass ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full pl-10 pr-11 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all duration-200 shadow-sm"
              />
              <button
                type="button"
                @click="showPass = !showPass"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                tabindex="-1"
              >
                <svg v-if="!showPass" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Error -->
          <div v-if="errorMsg" class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs px-3.5 py-2.5 rounded-xl">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ errorMsg }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#00334e] hover:bg-[#004a70] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#00334e]/20 flex items-center justify-center gap-2"
          >
            <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {{ loading ? 'Memproses...' : 'Masuk' }}
          </button>
        </form>

        <!-- Back link -->
        <p class="text-center text-xs text-gray-400 mt-6">
          <a href="/" class="text-[#00334e] hover:text-yellow-500 font-semibold transition-colors duration-200">
            &larr; Kembali ke beranda
          </a>
        </p>
      </div>
    </div>

  </div>
</template>
