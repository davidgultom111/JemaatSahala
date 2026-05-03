<script setup lang="ts">
import type { Member, ApiResponse } from '~/types'

const { request } = useApi()
const router = useRouter()

const loading     = ref(false)
const saved       = ref(false)
const apiError    = ref<string | null>(null)
const fieldErrors = ref<Record<string, string[]>>({})
const profile     = ref<Member | null>(null)
const form        = ref({ nama_lengkap: '', alamat: '', no_telepon: '' })

onMounted(async () => {
  try {
    const res = await request<ApiResponse<Member>>('/me')
    profile.value = res.data
    form.value = {
      nama_lengkap: res.data.nama_lengkap,
      alamat:       res.data.alamat,
      no_telepon:   res.data.no_telepon,
    }
  } catch {
    apiError.value = 'Gagal memuat data profil.'
  }
})

const handleCancel = () => {
  if (confirm('Keluar tanpa menyimpan?')) router.push('/profile')
}

const saveProfile = async () => {
  loading.value     = true
  apiError.value    = null
  fieldErrors.value = {}
  try {
    await request<ApiResponse<Member>>('/me', {
      method: 'PUT',
      body: {
        nama_lengkap: form.value.nama_lengkap,
        alamat:       form.value.alamat,
        no_telepon:   form.value.no_telepon,
      },
    })
    saved.value = true
    setTimeout(() => router.push('/profile'), 1200)
  } catch (err: any) {
    if (err.data?.errors) {
      fieldErrors.value = err.data.errors
    } else {
      apiError.value = err.data?.message ?? 'Gagal menyimpan perubahan.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">

    <!-- Loading skeleton -->
    <div v-if="!profile && !apiError" class="bg-white rounded-2xl shadow-sm p-16 flex justify-center">
      <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Error loading -->
    <div v-else-if="!profile && apiError" class="bg-white rounded-2xl shadow-sm p-16 text-center">
      <p class="text-red-500 text-sm">{{ apiError }}</p>
    </div>

    <div v-else-if="profile" class="bg-white rounded-2xl shadow-sm overflow-hidden">

      <!-- Navy header -->
      <div class="bg-[#00334e] px-8 py-8 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/4 pointer-events-none"></div>
        <div class="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-yellow-400/5 pointer-events-none"></div>

        <div class="relative z-10 flex items-center gap-4">
          <NuxtLink to="/profile" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </NuxtLink>
          <div>
            <h2 class="text-xl font-black text-white">Edit Profil</h2>
            <p class="text-gray-300 text-xs mt-0.5">{{ profile.nama_lengkap }}</p>
          </div>
        </div>
      </div>

      <div class="px-8 py-8">

        <!-- Read-only fields -->
        <p class="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4 flex items-center gap-2">
          <span class="w-4 h-[2px] bg-yellow-400 rounded-full"></span>
          Informasi Tetap
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Jenis Kelamin</p>
            <p class="text-sm font-semibold text-gray-500">{{ profile.jenis_kelamin }}</p>
          </div>
          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Tanggal Lahir</p>
            <p class="text-sm font-semibold text-gray-500">{{ profile.tempat_lahir }}, {{ profile.tanggal_lahir }}</p>
          </div>
        </div>

        <!-- Editable form -->
        <p class="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4 flex items-center gap-2">
          <span class="w-4 h-[2px] bg-yellow-400 rounded-full"></span>
          Informasi yang Dapat Diubah
        </p>

        <form @submit.prevent="saveProfile" class="space-y-4">

          <!-- Nama Lengkap -->
          <div>
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Nama Lengkap</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                v-model="form.nama_lengkap"
                type="text"
                class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all shadow-sm"
              />
            </div>
            <p v-if="fieldErrors.nama_lengkap" class="text-xs text-red-500 mt-1.5">{{ fieldErrors.nama_lengkap[0] }}</p>
          </div>

          <!-- No. Telp -->
          <div>
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">No. Telepon</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                v-model="form.no_telepon"
                type="tel"
                class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all shadow-sm"
              />
            </div>
            <p v-if="fieldErrors.no_telepon" class="text-xs text-red-500 mt-1.5">{{ fieldErrors.no_telepon[0] }}</p>
          </div>

          <!-- Alamat -->
          <div>
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Alamat Rumah</label>
            <div class="relative">
              <div class="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <textarea
                v-model="form.alamat"
                rows="3"
                class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all shadow-sm resize-none"
              ></textarea>
            </div>
            <p v-if="fieldErrors.alamat" class="text-xs text-red-500 mt-1.5">{{ fieldErrors.alamat[0] }}</p>
          </div>

          <!-- API error -->
          <div v-if="apiError" class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs px-3.5 py-2.5 rounded-xl">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ apiError }}
          </div>

          <!-- Success -->
          <div v-if="saved" class="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs px-3.5 py-2.5 rounded-xl">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Profil berhasil disimpan! Mengalihkan...
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-2">
            <button
              type="button"
              @click="handleCancel"
              class="flex-1 py-3.5 rounded-xl font-bold text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all duration-200"
            >
              Batal
            </button>
            <button
              type="submit"
              :disabled="loading || saved"
              class="flex-1 flex items-center justify-center gap-2 bg-[#00334e] hover:bg-[#004a70] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#00334e]/15 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {{ loading ? 'Menyimpan...' : 'Simpan Perubahan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
