<script setup lang="ts">
import type { Member, ApiResponse } from '~/types'

const { request } = useApi()

const { data, pending, error } = await useAsyncData<Member>('member-profile', async () => {
  const res = await request<ApiResponse<Member>>('/me')
  return res.data
})

const formatTanggalLahir = (tempat: string, tanggal: string) => {
  if (!tanggal) return '-'
  const d     = new Date(tanggal)
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  return `${tempat}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">

    <!-- Loading -->
    <div v-if="pending" class="bg-white rounded-2xl shadow-sm p-16 flex justify-center">
      <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="bg-white rounded-2xl shadow-sm p-16 text-center">
      <svg class="w-10 h-10 text-red-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-red-500 text-sm">Gagal memuat profil. Coba muat ulang halaman.</p>
    </div>

    <!-- Profile card -->
    <div v-else-if="data" class="bg-white rounded-2xl shadow-sm overflow-hidden">

      <!-- Navy header -->
      <div class="bg-[#00334e] px-8 py-10 relative overflow-hidden">
        <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/4 pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-yellow-400/5 pointer-events-none"></div>

        <div class="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <!-- Avatar -->
          <div class="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-xl shadow-yellow-400/30 shrink-0">
            <span class="text-3xl font-black text-gray-900">
              {{ data.nama_lengkap.charAt(0).toUpperCase() }}
            </span>
          </div>

          <div class="text-center sm:text-left">
            <h2 class="text-2xl font-black text-white leading-tight">{{ data.nama_lengkap }}</h2>
            <p class="text-gray-300 text-sm mt-1">Anggota GPdI Sahala Palembang</p>
            <span class="inline-block mt-3 bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold font-mono px-3 py-1 rounded-full">
              ID: {{ data.id_jemaat }}
            </span>
          </div>
        </div>
      </div>

      <!-- Info body -->
      <div class="px-8 py-8">
        <p class="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-5 flex items-center gap-2">
          <span class="w-4 h-[2px] bg-yellow-400 rounded-full"></span>
          Informasi Pribadi
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Jenis Kelamin</p>
            <p class="text-sm font-semibold text-gray-800">{{ data.jenis_kelamin || '-' }}</p>
          </div>

          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Tempat, Tgl Lahir</p>
            <p class="text-sm font-semibold text-gray-800">{{ formatTanggalLahir(data.tempat_lahir, data.tanggal_lahir) }}</p>
          </div>

          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">No. Telepon</p>
            <p class="text-sm font-semibold text-gray-800">{{ data.no_telepon || '-' }}</p>
          </div>

          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Status Keanggotaan</p>
            <span class="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
              {{ data.status_aktif || '-' }}
            </span>
          </div>

          <div class="bg-slate-50 border border-gray-100 rounded-xl px-4 py-3.5 sm:col-span-2">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Alamat Rumah</p>
            <p class="text-sm font-semibold text-gray-800">{{ data.alamat || '-' }}</p>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex gap-3">
          <NuxtLink
            to="/editprofile"
            class="flex-1 flex items-center justify-center gap-2 bg-[#00334e] hover:bg-[#004a70] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#00334e]/15"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Profil
          </NuxtLink>

          <NuxtLink
            to="/surat"
            class="flex-1 flex items-center justify-center gap-2 border border-[#00334e]/20 hover:border-[#00334e]/50 text-[#00334e] hover:bg-[#00334e]/5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Lihat Surat
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>
