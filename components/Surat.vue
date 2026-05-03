<script setup lang="ts">
import type { Letter, ApiResponse, Member } from '~/types'

const config      = useRuntimeConfig()
const auth        = useAuth()
const { request } = useApi()

const searchInput   = ref('')
const letters       = ref<Letter[]>([])
const searched      = ref(false)
const loading       = ref(false)
const errorMsg      = ref<string | null>(null)
const expandedId    = ref<number | null>(null)
const downloadingId = ref<number | null>(null)

onMounted(async () => {
  if (!auth.member.value) {
    await auth.fetchProfile().catch(() => {})
  }
})

const handleSearch = async () => {
  errorMsg.value = null
  const input    = searchInput.value.trim().toLowerCase()

  if (!input) {
    errorMsg.value = 'Masukkan ID Jemaat atau Nama Jemaat terlebih dahulu.'
    return
  }

  const member = auth.member.value
  if (!member) {
    errorMsg.value = 'Gagal memuat data akun. Coba muat ulang halaman.'
    return
  }

  const cocokId   = member.id_jemaat.toLowerCase() === input
  const cocokNama = member.nama_lengkap.toLowerCase().includes(input)

  if (!cocokId && !cocokNama) {
    errorMsg.value = 'Data tidak ditemukan. Pastikan ID atau nama sesuai akun Anda.'
    letters.value  = []
    searched.value = false
    return
  }

  loading.value = true
  try {
    const res     = await request<ApiResponse<Letter[]>>('/me/letters')
    letters.value = res.data
    searched.value = true
  } catch {
    errorMsg.value = 'Gagal memuat daftar surat.'
  } finally {
    loading.value = false
  }
}

const toggleExpand = (id: number) => {
  expandedId.value = expandedId.value === id ? null : id
}

const formatTanggal = (tgl: string | null | undefined) => {
  if (!tgl) return '-'
  const d     = new Date(tgl)
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}

const detailFields = (letter: Letter): { label: string; value: string }[] => {
  const rows: { label: string; value: string }[] = []
  const t = letter.letter_type

  if (t === 'surat_tugas_pelayanan') {
    rows.push({ label: 'Tujuan Tugas',    value: letter.tujuan_tugas ?? '-' })
    rows.push({ label: 'Tanggal Mulai',   value: formatTanggal(letter.tgl_mulai_tugas) })
    rows.push({ label: 'Tanggal Selesai', value: formatTanggal(letter.tgl_akhir_tugas) })
  } else if (t === 'surat_pengantar') {
    rows.push({ label: 'Keperluan', value: letter.keterangan ?? '-' })
  } else if (t === 'surat_keterangan_jemaat_aktif') {
    rows.push({ label: 'Tahun Bergabung', value: String(letter.tahun_bergabung ?? '-') })
  } else if (t === 'surat_nilai_sekolah') {
    rows.push({ label: 'Asal Sekolah', value: letter.asal_sekolah ?? '-' })
    rows.push({ label: 'Kelas',        value: letter.kelas ?? '-' })
    rows.push({ label: 'Semester',     value: letter.semester ?? '-' })
    rows.push({ label: 'Nilai',        value: String(letter.nilai ?? '-') })
  } else if (t === 'surat_pengajuan_penyerahan_anak') {
    rows.push({ label: 'Nama Anak',        value: letter.nama_anak ?? '-' })
    rows.push({ label: 'Tempat/Tgl Lahir', value: `${letter.tempat_lahir_anak ?? '-'}, ${formatTanggal(letter.tanggal_lahir_anak)}` })
    rows.push({ label: 'Nama Ayah',        value: letter.nama_ayah ?? '-' })
    rows.push({ label: 'Nama Ibu',         value: letter.nama_ibu ?? '-' })
  } else if (t === 'surat_pengajuan_pernikahan') {
    rows.push({ label: 'Tanggal Pernikahan', value: formatTanggal(letter.tanggal_pernikahan) })
  }

  if (letter.keterangan && t !== 'surat_pengantar') {
    rows.push({ label: 'Keterangan', value: letter.keterangan })
  }

  return rows
}

const downloadPdf = async (letter: Letter) => {
  downloadingId.value = letter.id
  try {
    const token = useCookie<string | null>('api_token')
    const res   = await fetch(`${config.public.apiBase}/me/letters/${letter.id}/download`, {
      headers: { Authorization: `Bearer ${token.value}` },
    })
    if (!res.ok) {
      alert('PDF belum tersedia. Hubungi sekretariat gereja.')
      return
    }
    const blob = await res.blob()
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `surat-${letter.nomor_surat.replace(/\//g, '-')}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch {
    alert('Gagal mengunduh PDF.')
  } finally {
    downloadingId.value = null
  }
}
</script>

<template>
  <section class="w-full py-10 px-4">
    <div class="max-w-3xl mx-auto">

      <!-- Header -->
      <div class="mb-8">
        <div class="inline-flex items-center gap-2 bg-[#00334e]/8 border border-[#00334e]/15 text-[#00334e] text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Layanan Surat
        </div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900">Cari Surat</h2>
        <p class="text-sm text-gray-500 mt-1">Masukkan ID Jemaat atau Nama Jemaat untuk menampilkan surat Anda.</p>
      </div>

      <!-- Search card -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
          ID Jemaat atau Nama Jemaat
        </label>
        <div class="flex gap-3">
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <input
              v-model="searchInput"
              type="text"
              placeholder="Contoh: 15051980 atau Budi Santoso"
              class="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all shadow-sm"
              @keyup.enter="handleSearch"
            />
          </div>
          <button
            @click="handleSearch"
            :disabled="loading"
            class="flex items-center gap-2 px-5 py-3 bg-[#00334e] hover:bg-[#004a70] text-white text-sm font-bold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 shrink-0 shadow-lg shadow-[#00334e]/15"
          >
            <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ loading ? 'Mencari...' : 'Cari' }}
          </button>
        </div>

        <!-- Error msg -->
        <div v-if="errorMsg" class="flex items-center gap-2 mt-3 bg-red-50 border border-red-200 text-red-600 text-xs px-3.5 py-2.5 rounded-xl">
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ errorMsg }}
        </div>
      </div>

      <!-- Loading spinner -->
      <div v-if="loading" class="flex justify-center py-16">
        <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Results -->
      <template v-else-if="searched">

        <!-- Empty state -->
        <div v-if="letters.length === 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 text-center py-16 px-6">
          <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <p class="text-sm font-bold text-gray-700">Belum ada surat yang diterbitkan</p>
          <p class="text-xs text-gray-400 mt-1">Hubungi sekretariat untuk pengajuan surat.</p>
        </div>

        <!-- Letter list -->
        <div v-else class="space-y-3">
          <p class="text-xs text-gray-400 font-semibold mb-4">
            <span class="text-[#00334e] font-black">{{ letters.length }}</span> surat ditemukan
          </p>

          <div
            v-for="letter in letters"
            :key="letter.id"
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <!-- Card header button -->
            <button
              class="w-full text-left group"
              @click="toggleExpand(letter.id)"
            >
              <div class="flex items-stretch">
                <!-- Navy left strip -->
                <div class="w-1.5 bg-[#00334e] shrink-0 rounded-l-2xl"></div>

                <div class="flex-1 px-5 py-4 flex items-start justify-between gap-3 hover:bg-slate-50 transition-colors">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-gray-900">{{ letter.tipe_surat }}</p>
                    <p class="text-xs font-mono text-gray-400 mt-0.5">{{ letter.nomor_surat }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ formatTanggal(letter.tanggal_surat) }}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 mt-0.5">
                    <span
                      v-if="letter.has_pdf"
                      class="text-[10px] bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full"
                    >
                      PDF Tersedia
                    </span>
                    <svg
                      class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': expandedId === letter.id }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            <!-- Expandable detail -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div v-if="expandedId === letter.id" class="border-t border-gray-100 px-6 py-5">

                <dl v-if="detailFields(letter).length > 0" class="space-y-2.5 mb-5">
                  <div
                    v-for="field in detailFields(letter)"
                    :key="field.label"
                    class="flex gap-4"
                  >
                    <dt class="w-40 text-[11px] font-bold uppercase tracking-wide text-gray-400 shrink-0 pt-0.5">{{ field.label }}</dt>
                    <dd class="text-sm text-gray-700 font-medium">{{ field.value }}</dd>
                  </div>
                </dl>

                <button
                  v-if="letter.has_pdf"
                  @click="downloadPdf(letter)"
                  :disabled="downloadingId === letter.id"
                  class="flex items-center gap-2 px-5 py-2.5 bg-[#00334e] hover:bg-[#004a70] text-white text-xs font-bold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 shadow-md shadow-[#00334e]/15"
                >
                  <svg v-if="downloadingId === letter.id" class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  {{ downloadingId === letter.id ? 'Mengunduh...' : 'Unduh PDF' }}
                </button>

                <p v-else class="text-xs text-gray-400 italic">
                  PDF belum tersedia — hubungi sekretariat gereja.
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>
