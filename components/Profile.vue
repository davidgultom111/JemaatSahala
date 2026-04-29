<script setup lang="ts">
import type { Member, ApiResponse } from '~/types'

const { request } = useApi()

const { data, pending, error } = await useAsyncData<Member>('member-profile', async () => {
  const res = await request<ApiResponse<Member>>('/me')
  return res.data
})

const formatTanggalLahir = (tempat: string, tanggal: string) => {
  if (!tanggal) return '-'
  const d = new Date(tanggal)
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  return `${tempat}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}
</script>

<template>
  <div class="w-full max-w-sm mx-auto bg-neutral-50 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 font-sans">

    <div v-if="pending" class="flex justify-center py-12">
      <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <div v-else-if="error" class="text-center py-8 text-red-500 text-sm">
      Gagal memuat profil. Coba muat ulang halaman.
    </div>

    <template v-else-if="data">
      <div class="flex flex-col items-center mb-8">
        <div class="w-24 h-24 rounded-full bg-[#00334e] flex items-center justify-center shadow-md">
          <span class="text-3xl font-bold text-white">
            {{ data.nama_lengkap.charAt(0).toUpperCase() }}
          </span>
        </div>
        <h2 class="text-2xl font-bold text-neutral-900 mt-4">{{ data.nama_lengkap }}</h2>
        <p class="text-neutral-500 text-sm font-medium">Anggota GPdI Sahala Palembang</p>
        <span class="mt-2 text-xs font-mono bg-neutral-100 px-3 py-1 rounded-full text-neutral-500">
          ID: {{ data.id_jemaat }}
        </span>
      </div>

      <div class="space-y-4 mb-8">
        <ProfileField label="Jenis Kelamin"      :value="data.jenis_kelamin" />
        <ProfileField label="Tempat, Tgl Lahir"  :value="formatTanggalLahir(data.tempat_lahir, data.tanggal_lahir)" />
        <ProfileField label="No. Telp"           :value="data.no_telepon || '-'" />
        <ProfileField label="Alamat Rumah"       :value="data.alamat || '-'" />
        <ProfileField label="Status Keanggotaan" :value="data.status_aktif" />
      </div>

      <NuxtLink
        to="/editprofile"
        class="block w-full text-center bg-[#00334e] text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition duration-300 shadow-md"
      >
        Edit Profil
      </NuxtLink>
    </template>

  </div>
</template>
