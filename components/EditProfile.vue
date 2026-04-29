<script setup lang="ts">
import type { Member, ApiResponse } from '~/types'

const { request } = useApi()
const router = useRouter()

const loading  = ref(false)
const saved    = ref(false)
const apiError = ref<string | null>(null)
const fieldErrors = ref<Record<string, string[]>>({})

const profile = ref<Member | null>(null)
const form = ref({ nama_lengkap: '', alamat: '', no_telepon: '' })

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
    setTimeout(() => router.push('/profile'), 1000)
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
  <div class="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 font-sans">
    <h2 class="text-2xl font-bold text-neutral-900 mb-6 text-center">Edit Profil</h2>

    <div v-if="!profile" class="flex justify-center py-8">
      <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <template v-else>
      <!-- Field read-only -->
      <div class="mb-5 space-y-4">
        <div>
          <p class="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Jenis Kelamin</p>
          <p class="text-sm text-neutral-700 py-2">{{ profile.jenis_kelamin }}</p>
        </div>
        <div>
          <p class="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Tanggal Lahir</p>
          <p class="text-sm text-neutral-700 py-2">{{ profile.tempat_lahir }}, {{ profile.tanggal_lahir }}</p>
        </div>
      </div>

      <form @submit.prevent="saveProfile" class="space-y-5">
        <div>
          <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Nama Lengkap</label>
          <input
            v-model="form.nama_lengkap"
            type="text"
            class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition"
          />
          <p v-if="fieldErrors.nama_lengkap" class="text-xs text-red-500 mt-1">{{ fieldErrors.nama_lengkap[0] }}</p>
        </div>

        <div>
          <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">No. Telp</label>
          <input
            v-model="form.no_telepon"
            type="tel"
            class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition"
          />
          <p v-if="fieldErrors.no_telepon" class="text-xs text-red-500 mt-1">{{ fieldErrors.no_telepon[0] }}</p>
        </div>

        <div>
          <label class="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Alamat Rumah</label>
          <textarea
            v-model="form.alamat"
            rows="3"
            class="w-full border-b border-neutral-200 py-2 focus:border-yellow-500 outline-none transition resize-none"
          ></textarea>
          <p v-if="fieldErrors.alamat" class="text-xs text-red-500 mt-1">{{ fieldErrors.alamat[0] }}</p>
        </div>

        <p v-if="apiError" class="text-xs text-red-500 text-center">{{ apiError }}</p>
        <p v-if="saved" class="text-xs text-green-600 text-center font-semibold">Profil berhasil disimpan!</p>

        <div class="pt-4 flex gap-4">
          <button
            type="button"
            @click="handleCancel"
            class="flex-1 py-3 rounded-full font-bold text-neutral-500 hover:bg-neutral-100 transition"
          >
            Batal
          </button>
          <button
            type="submit"
            :disabled="loading || saved"
            class="flex-1 bg-[#00334e] text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition shadow-md disabled:opacity-50"
          >
            {{ loading ? 'Menyimpan...' : 'Simpan' }}
          </button>
        </div>
      </form>
    </template>

  </div>
</template>
